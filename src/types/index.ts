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
    signalStatus: "EARLY" | "MID" | "LATE";
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