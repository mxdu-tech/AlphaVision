import { activityFeed, traderProfiles } from "@/data/mock";
import TraderCard from "@/components/TraderCard";
import ActivityCard from "@/components/ActivityCard";

export default function Home() {
  const totalTraders = traderProfiles.length;
  const totalEvents = activityFeed.length;
  const totalMarkets = new Set(activityFeed.map((item) => item.marketQuestion)).size;
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">
            AlphaVision
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Polymarket Smart Money Feed
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Track selected traders, inspect recent activity, and turn raw
            market actions into readable signals.
          </p>
        </header>

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
          {activityFeed.map((item) => (
            <ActivityCard key={item.id} item={item} />
          ))}
          </div>
        </section>
      </div>
    </main>
  );
}