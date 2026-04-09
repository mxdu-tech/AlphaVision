import type { LiveMarket } from "@/types";

type Props = {
  market: LiveMarket;
};

function formatCurrency(value?: number) {
  if (value === undefined || Number.isNaN(value)) return "-";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

export default function LiveMarketCard({ market }: Props) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="max-w-3xl text-lg font-medium leading-7">
          {market.question}
        </h3>
        <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400">
          {market.active ? "LIVE" : "INACTIVE"}
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {market.outcomes.map((outcome, index) => (
          <span
            key={`${market.id}-${outcome}-${index}`}
            className="rounded-lg bg-neutral-800 px-3 py-1.5 text-sm text-neutral-300"
          >
            {outcome}: {market.outcomePrices[index] ?? "-"}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
        <span className="rounded-lg bg-neutral-800/70 px-3 py-1.5">
          Volume: ${formatCurrency(market.volume)}
        </span>
        <span className="rounded-lg bg-neutral-800/70 px-3 py-1.5">
          Liquidity: ${formatCurrency(market.liquidity)}
        </span>
      </div>
    </article>
  );
}