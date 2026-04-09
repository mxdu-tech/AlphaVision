import { activityFeed, traderProfiles } from "@/data/mock";
import TraderCard from "@/components/TraderCard";
import ActivityCard from "@/components/ActivityCard";
import LiveMarketCard from "@/components/LiveMarketCard";
import { getSignalInsight } from "@/lib/signal";
import { fetchLiveMarkets } from "@/lib/polymarket";

export default async function Home() {
  const totalTraders = traderProfiles.length;
  const totalEvents = activityFeed.length;
  const totalMarkets = new Set(activityFeed.map((item) => item.marketQuestion)).size;

  const liveMarkets = await fetchLiveMarkets(6);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">
            AlphaVision
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Surface early signals from smart money on Polymarket
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Track selected traders, interpret their actions, and understand whether a signal is early, mid, or late.
          </p>
        </header>

        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Live Markets</h2>
            <span className="text-sm text-neutral-500">
              {liveMarkets.length} live markets
            </span>
          </div>

          {liveMarkets.length > 0 ? (
            <div className="grid gap-4">
              {liveMarkets.map((market) => (
                <LiveMarketCard key={market.id} market={market} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 text-sm text-neutral-400">
              Live market data is temporarily unavailable in the current network
              environment.
            </div>
          )}
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="text-sm text-neutral-500">Tracked Traders</p>
            <p className="mt-2 text-3xl font-semibold">{totalTraders}</p>
            <p className="mt-2 text-sm text-neutral-400">
              Selected profiles under active observation.
            </p>
          </article>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="text-sm text-neutral-500">Recent Events</p>
            <p className="mt-2 text-3xl font-semibold">{totalEvents}</p>
            <p className="mt-2 text-sm text-neutral-400">
              Mock smart-money actions currently displayed.
            </p>
          </article>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="text-sm text-neutral-500">Markets Covered</p>
            <p className="mt-2 text-3xl font-semibold">{totalMarkets}</p>
            <p className="mt-2 text-sm text-neutral-400">
              Unique market questions represented in the feed.
            </p>
          </article>
        </section>

        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Tracked Traders</h2>
            <span className="text-sm text-neutral-500">
              {traderProfiles.length} profiles
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {traderProfiles.map((trader) => (
            <TraderCard key={trader.id} trader={trader} />
          ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Recent Activity</h2>
            <span className="text-sm text-neutral-500">
              {activityFeed.length} events
            </span>
          </div>

          <div className="space-y-4">
          {activityFeed.map((item) => {
            const insight = getSignalInsight(item, activityFeed);

            return (
              <ActivityCard
                key={item.id}
                item={{
                  ...item,
                  signalStatus: insight.status,
                }}
                reason={insight.reason}
              />
            );
          })}
          </div>
        </section>
      </div>
    </main>
  );
}