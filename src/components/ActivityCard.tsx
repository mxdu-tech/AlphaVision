import type { ActivityItem } from "@/types";

type Props = {
  item: ActivityItem;
};

function getSignalStatusClasses(status: ActivityItem["signalStatus"]) {
  switch (status) {
    case "EARLY":
      return "border-emerald-700/50 bg-emerald-500/10 text-emerald-300";
    case "MID":
      return "border-amber-700/50 bg-amber-500/10 text-amber-300";
    case "LATE":
      return "border-rose-700/50 bg-rose-500/10 text-rose-300";
    default:
      return "border-neutral-700 bg-neutral-800 text-neutral-300";
  }
}

export default function ActivityCard({ item }: Props) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">{item.traderName}</span>
            <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
              {item.action}
            </span>
            <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
              {item.side}
            </span>
            <span
              className={`rounded-full border px-2 py-0.5 text-xs font-medium ${getSignalStatusClasses(
                item.signalStatus
              )}`}
            >
              {item.signalStatus}
            </span>
          </div>

          <h3 className="mt-2 text-lg font-medium">{item.marketQuestion}</h3>
        </div>

        <div className="text-sm text-neutral-500">{item.timestamp}</div>
      </div>

      <div className="mb-3 flex flex-wrap gap-3 text-sm text-neutral-300">
        <span className="rounded-lg bg-neutral-800 px-3 py-1.5">
          Price: ${item.price.toFixed(2)}
        </span>
        <span className="rounded-lg bg-neutral-800 px-3 py-1.5">
          Amount: ${item.amount}
        </span>
      </div>

      <p className="text-sm leading-6 text-neutral-400">{item.summary}</p>
    </article>
  );
}