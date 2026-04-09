import type { ActivityItem, SignalStatus } from "@/types";

export function getSignalInsight(
  item: ActivityItem,
  allItems: ActivityItem[]
): {
  status: SignalStatus;
  reason: string;
} {
  const { price, action, traderAddress, marketQuestion } = item;

  // 找同一个 trader + 同一个 market 的历史 BUY
  const relatedBuys = allItems.filter(
    (i) =>
      i.traderAddress === traderAddress &&
      i.marketQuestion === marketQuestion &&
      i.action === "BUY"
  );

  // SELL 高位 → LATE
  if (action === "SELL" && price > 0.6) {
    return {
      status: "LATE",
      reason: "High-price sell, likely profit-taking",
    };
  }

  // 多次 BUY → reinforced EARLY
  if (relatedBuys.length >= 2 && price < 0.5) {
    return {
      status: "EARLY",
      reason: "Repeated buys, strong early conviction",
    };
  }

  if (price < 0.45) {
    return {
      status: "EARLY",
      reason: "Low entry price, early positioning",
    };
  }

  if (price <= 0.7) {
    return {
      status: "MID",
      reason: "Mid-range pricing, market forming consensus",
    };
  }

  return {
    status: "LATE",
    reason: "High price, limited upside remaining",
  };
}