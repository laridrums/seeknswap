"use client";

import { FC, useEffect, useRef } from "react";

const PLATFORM_FEE_ACCOUNT = "An2aa1oFLiPTXbsqFrtmYgy2SFFBAL2Fu25GU9SAcvEU";
const RPC = process.env.NEXT_PUBLIC_RPC_ENDPOINT || "https://api.mainnet-beta.solana.com";

export const JupiterSwap: FC = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const doInit = () => {
      const Jupiter = (window as any).Jupiter;
      if (!Jupiter?.init) return;
      initialized.current = true;

      Jupiter.init({
        displayMode: "integrated",
        integratedTargetId: "jupiter-terminal-instance",
        endpoint: RPC,
        // No wallet passthrough — Jupiter handles its own wallet connection
        // This is the most reliable approach
        platformFeeAndAccounts: {
          feeBps: 50,
          feeAccounts: new Map([
            ["So11111111111111111111111111111111111111112", PLATFORM_FEE_ACCOUNT],
            ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", PLATFORM_FEE_ACCOUNT],
          ]),
        },
        defaultInputMint: "So11111111111111111111111111111111111111112",
        defaultOutputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        strictTokenList: false,
        containerStyles: { borderRadius: "16px" },
      });
    };

    // Try v3 first, fallback to v2 if needed
    const script = document.createElement("script");
    script.src = "https://terminal.jup.ag/main-v3.js";
    script.async = true;
    script.onload = () => {
      // Small delay to ensure Jupiter is fully ready
      setTimeout(doInit, 300);
    };
    script.onerror = () => {
      // Fallback to v2
      const s2 = document.createElement("script");
      s2.src = "https://terminal.jup.ag/main-v2.js";
      s2.async = true;
      s2.onload = () => setTimeout(doInit, 300);
      document.head.appendChild(s2);
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        id="jupiter-terminal-instance"
        className="w-full min-h-[440px] rounded-2xl overflow-hidden border border-border bg-card flex items-center justify-center"
      >
        <p className="text-text-dim text-sm animate-pulse">Loading swap...</p>
      </div>
      <p className="text-center text-text-dim text-xs mt-3 font-body">
        0.5% platform fee · Best routes via Jupiter · Non-custodial
      </p>
    </div>
  );
};
