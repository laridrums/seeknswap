"use client";

import { FC, useEffect, useRef, useCallback } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

// Your wallet — receives 0.5% of every swap automatically
const PLATFORM_FEE_ACCOUNT = "An2aa1oFLiPTXbsqFrtmYgy2SFFBAL2Fu25GU9SAcvEU";
const RPC = process.env.NEXT_PUBLIC_RPC_ENDPOINT || "https://api.mainnet-beta.solana.com";

export const JupiterSwap: FC = () => {
  const { publicKey, signTransaction, signAllTransactions } = useWallet();
  const scriptLoaded = useRef(false);
  const publicKeyRef = useRef(publicKey);
  const signTransactionRef = useRef(signTransaction);
  const signAllRef = useRef(signAllTransactions);

  // Keep refs in sync so initJupiter always has latest wallet state
  publicKeyRef.current = publicKey;
  signTransactionRef.current = signTransaction;
  signAllRef.current = signAllTransactions;

  const initJupiter = useCallback(() => {
    const Jupiter = (window as any).Jupiter;
    if (!Jupiter?.init) return;

    // Close previous instance before re-initializing
    try { Jupiter.close?.(); } catch (_) {}

    Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: "jupiter-terminal-instance",
      endpoint: RPC,

      // 50 basis points = 0.5% fee sent to your wallet
      platformFeeAndAccounts: {
        feeBps: 50,
        feeAccounts: new Map([
          ["So11111111111111111111111111111111111111112", PLATFORM_FEE_ACCOUNT],
          ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", PLATFORM_FEE_ACCOUNT],
        ]),
      },

      // Pass connected wallet — Jupiter uses this for signing transactions
      passThroughWallet: publicKeyRef.current
        ? {
            publicKey: publicKeyRef.current,
            signTransaction: signTransactionRef.current,
            signAllTransactions: signAllRef.current,
          }
        : null,

      // Default: SOL → USDC
      defaultInputMint: "So11111111111111111111111111111111111111112",
      defaultOutputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",

      strictTokenList: false,
      containerStyles: { borderRadius: "16px" },
    });
  }, []);

  // Load script once on mount
  useEffect(() => {
    if (scriptLoaded.current) return;

    const existing = document.querySelector('script[src="https://terminal.jup.ag/main-v3.js"]');
    if (existing) {
      scriptLoaded.current = true;
      initJupiter();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://terminal.jup.ag/main-v3.js";
    script.async = true;
    script.onload = () => {
      scriptLoaded.current = true;
      initJupiter();
    };
    document.head.appendChild(script);

    return () => {
      try { (window as any).Jupiter?.close?.(); } catch (_) {}
    };
  }, [initJupiter]);

  // Re-init whenever wallet connects or disconnects
  useEffect(() => {
    if (!scriptLoaded.current) return;
    initJupiter();
  }, [publicKey, initJupiter]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        id="jupiter-terminal-instance"
        className="w-full min-h-[440px] rounded-2xl overflow-hidden border border-border bg-card"
      />
      <p className="text-center text-text-dim text-xs mt-3 font-body">
        0.5% platform fee · Best routes via Jupiter · Non-custodial
      </p>
    </div>
  );
};
