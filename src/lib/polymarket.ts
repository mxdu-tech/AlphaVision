import type { LiveMarket } from "@/types";

const GAMMA_BASE_URL = "https://gamma-api.polymarket.com";

type RawMarket = {
  id: string | number;
  question?: string;
  slug?: string;
  outcomes?: string | string[];
  outcomePrices?: string | string[];
  volume?: number | string;
  liquidity?: number | string;
  endDate?: string;
  active?: boolean;
  closed?: boolean;
};

function safeParseArray(value: string | string[] | undefined): string[] {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.map(String);
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

function normalizeMarket(raw: RawMarket): LiveMarket {
  return {
    id: String(raw.id),
    question: raw.question ?? "Untitled market",
    slug: raw.slug,
    outcomes: safeParseArray(raw.outcomes),
    outcomePrices: safeParseArray(raw.outcomePrices),
    volume:
      typeof raw.volume === "string" ? Number(raw.volume) : raw.volume ?? 0,
    liquidity:
      typeof raw.liquidity === "string"
        ? Number(raw.liquidity)
        : raw.liquidity ?? 0,
    endDate: raw.endDate,
    active: raw.active,
    closed: raw.closed,
  };
}

export async function fetchLiveMarkets(limit = 6): Promise<LiveMarket[]> {
  const params = new URLSearchParams({
    active: "true",
    closed: "false",
    limit: String(limit),
    order: "volume_24hr",
    ascending: "false",
  });

  try {
    const response = await fetch(
      `${GAMMA_BASE_URL}/markets?${params.toString()}`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      console.error("Polymarket fetch failed with status:", response.status);
      return [];
    }

    const data: RawMarket[] = await response.json();
    return data.map(normalizeMarket);
  } catch (error) {
    console.error("Polymarket fetch failed:", error);
    return [];
  }
}