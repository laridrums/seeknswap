"use client";

import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Wallet, ChevronDown, LogOut } from "lucide-react";

export const ConnectButton: FC = () => {
  const { publicKey, disconnect, connecting } = useWallet();
  const { setVisible } = useWalletModal();

  const shortAddress = publicKey
    ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`
    : null;

  if (connecting) {
    return (
      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-text-dim font-body text-sm">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        Connecting...
      </button>
    );
  }

  if (publicKey) {
    return (
      <div className="flex items-center gap-2">
        {/* Connected badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-mono text-sm text-text">{shortAddress}</span>
        </div>
        {/* Disconnect */}
        <button
          onClick={disconnect}
          className="p-2 rounded-xl bg-card border border-border text-text-dim hover:text-red-400 hover:border-red-400/30 transition-all"
          title="Disconnect"
        >
          <LogOut size={16} />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setVisible(true)}
      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-body font-medium text-sm text-bg bg-accent hover:bg-accent-dim transition-all glow-accent"
    >
      <Wallet size={16} />
      Connect Wallet
    </button>
  );
};
