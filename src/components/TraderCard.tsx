type Props = {
    trader: {
      id: string;
      traderName: string;
      traderAddress: string;
      styleTag: string;
      winRate: string;
      avgHoldTime: string;
      note: string;
    };
  };
  
  export default function TraderCard({ trader }: Props) {
    return (
      <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-sm">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{trader.traderName}</h3>
            <p className="mt-1 text-sm text-neutral-500">
              {trader.traderAddress}
            </p>
          </div>
          <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
            {trader.styleTag}
          </span>
        </div>
  
        <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-neutral-800/70 p-3">
            <p className="text-neutral-500">Win rate</p>
            <p className="mt-1 text-base font-medium">{trader.winRate}</p>
          </div>
          <div className="rounded-xl bg-neutral-800/70 p-3">
            <p className="text-neutral-500">Avg hold</p>
            <p className="mt-1 text-base font-medium">
              {trader.avgHoldTime}
            </p>
          </div>
        </div>
  
        <p className="text-sm leading-6 text-neutral-400">{trader.note}</p>
      </article>
    );
  }