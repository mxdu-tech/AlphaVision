export type ActivityItem = {
    id: string;
    traderName: string;
    traderAddress: string;
    marketQuestion: string;
    side: "YES" | "NO";
    action: "BUY" | "SELL";
    price: number;
    amount: number;
    timestamp: string;
    summary: string;
  };
  
  export type TraderProfile = {
    id: string;
    traderName: string;
    traderAddress: string;
    styleTag: string;
    winRate: string;
    avgHoldTime: string;
    note: string;
  };
  
  export const traderProfiles: TraderProfile[] = [
    {
      id: "1",
      traderName: "Anjun",
      traderAddress: "0x8f2a...91c4",
      styleTag: "Crypto Event Trader",
      winRate: "83.1%",
      avgHoldTime: "18h",
      note: "Often positions early around crypto volatility events.",
    },
    {
      id: "2",
      traderName: "kingofcoinflips",
      traderAddress: "0x4c7d...2ab1",
      styleTag: "Momentum / Short-Term",
      winRate: "58.2%",
      avgHoldTime: "6h",
      note: "More reactive, often trades around fast market moves.",
    },
    {
      id: "3",
      traderName: "HolyMoses7",
      traderAddress: "0xa91b...77de",
      styleTag: "Macro / Narrative",
      winRate: "78.0%",
      avgHoldTime: "2d",
      note: "Prefers higher-conviction event markets with longer holding periods.",
    },
  ];
  
  export const activityFeed: ActivityItem[] = [
    {
      id: "a1",
      traderName: "Anjun",
      traderAddress: "0x8f2a...91c4",
      marketQuestion: "Will BTC close above $95k this week?",
      side: "YES",
      action: "BUY",
      price: 0.42,
      amount: 1200,
      timestamp: "2026-04-09 13:10",
      summary: "Early positioning before a possible volatility expansion.",
    },
    {
      id: "a2",
      traderName: "kingofcoinflips",
      traderAddress: "0x4c7d...2ab1",
      marketQuestion: "Will ETH outperform BTC this week?",
      side: "NO",
      action: "BUY",
      price: 0.61,
      amount: 860,
      timestamp: "2026-04-09 12:48",
      summary: "Looks like a short-term relative strength bet against ETH.",
    },
    {
      id: "a3",
      traderName: "HolyMoses7",
      traderAddress: "0xa91b...77de",
      marketQuestion: "Will the Fed cut rates by June?",
      side: "YES",
      action: "BUY",
      price: 0.54,
      amount: 1500,
      timestamp: "2026-04-09 11:30",
      summary: "Conviction entry in a slower-moving macro market.",
    },
    {
      id: "a4",
      traderName: "Anjun",
      traderAddress: "0x8f2a...91c4",
      marketQuestion: "Will BTC close above $95k this week?",
      side: "YES",
      action: "SELL",
      price: 0.57,
      amount: 500,
      timestamp: "2026-04-09 11:12",
      summary: "Partial profit-taking after a quick move upward.",
    },
    {
      id: "a5",
      traderName: "kingofcoinflips",
      traderAddress: "0x4c7d...2ab1",
      marketQuestion: "Will SOL hit $220 before month-end?",
      side: "YES",
      action: "BUY",
      price: 0.39,
      amount: 700,
      timestamp: "2026-04-09 10:55",
      summary: "A lower-priced momentum entry with room for repricing.",
    },
    {
      id: "a6",
      traderName: "HolyMoses7",
      traderAddress: "0xa91b...77de",
      marketQuestion: "Will Trump win the election?",
      side: "YES",
      action: "BUY",
      price: 0.63,
      amount: 2100,
      timestamp: "2026-04-09 09:40",
      summary: "Narrative-driven positioning in a highly liquid event market.",
    },
    {
      id: "a7",
      traderName: "Anjun",
      traderAddress: "0x8f2a...91c4",
      marketQuestion: "Will ETH ETF inflows exceed expectations this month?",
      side: "YES",
      action: "BUY",
      price: 0.47,
      amount: 980,
      timestamp: "2026-04-09 09:05",
      summary: "Possible anticipation of a sentiment shift around ETF demand.",
    },
    {
      id: "a8",
      traderName: "kingofcoinflips",
      traderAddress: "0x4c7d...2ab1",
      marketQuestion: "Will BTC close above $95k this week?",
      side: "NO",
      action: "BUY",
      price: 0.44,
      amount: 640,
      timestamp: "2026-04-09 08:32",
      summary: "Contrarian short-term positioning against recent upside momentum.",
    },
  ];