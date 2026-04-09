export type SignalStatus = "EARLY" | "MID" | "LATE";

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
  signalStatus?: SignalStatus;
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

export type LiveMarket = {
    id: string;
    question: string;
    slug?: string;
    outcomes: string[];
    outcomePrices: string[];
    volume?: number;
    liquidity?: number;
    endDate?: string;
    active?: boolean;
    closed?: boolean;
};