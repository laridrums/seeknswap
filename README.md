# 🔄 SeeknSwap

> The fastest Solana token swap — built for Seeker, powered by Jupiter.

## ✨ Features

- **Wallet support**: Seeker Seed Vault (native) + Phantom
- **Best prices**: Jupiter aggregates 30+ Solana DEXs
- **Your revenue**: 0.5% platform fee sent to your wallet automatically
- **Mobile-first**: Designed for the Seeker phone experience
- **Transparent**: Fees clearly displayed, no hidden costs

---

## 🚀 Deploy in 10 minutes (zero server, free hosting)

### Step 1 — Install prerequisites (once)

- Install [Node.js](https://nodejs.org) (v18 or higher)
- Install [Git](https://git-scm.com)
- Create a free account on [GitHub](https://github.com)
- Create a free account on [Vercel](https://vercel.com) (connect with GitHub)

---

### Step 2 — Setup the project

Open a terminal and run:

```bash
npm install --legacy-peer-deps
npm run dev
```

> ⚠️ The `--legacy-peer-deps` flag is important on Windows to avoid peer dependency conflicts.

---

### Step 3 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — SeeknSwap"

# Create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/seeknswap.git
git branch -M main
git push -u origin main
```

---

### Step 4 — Deploy on Vercel (1 click)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import"** next to your `seeknswap` GitHub repo
3. Click **"Deploy"** — Vercel does everything automatically
4. In ~2 minutes, your app is live at `seeknswap.vercel.app` 🎉

> **Optional**: Add a custom domain in Vercel settings (e.g. `seeknswap.io`)

---

### Step 5 — (Optional) Better RPC for faster swaps

The default public RPC is rate-limited. For better performance:

1. Create a free account on [Helius](https://helius.dev)
2. Get your RPC URL (looks like `https://rpc.helius.xyz/?api-key=YOUR_KEY`)
3. In Vercel → Project Settings → Environment Variables:
   - Key: `NEXT_PUBLIC_RPC_ENDPOINT`
   - Value: your Helius URL
4. Redeploy

---

## 💰 How you earn money

Every swap through SeeknSwap sends **0.5%** of the transaction to your wallet:

```
An2aa1oFLiPTXbsqFrtmYgy2SFFBAL2Fu25GU9SAcvEU
```

This is handled automatically by Jupiter's `platformFeeAndAccounts` parameter. You don't need to do anything — fees accumulate directly in your wallet.

To change the fee percentage, edit `components/JupiterSwap.tsx`:
```typescript
feeBps: 50, // 50 = 0.5% | 100 = 1% | 25 = 0.25%
```

---

## 🛠 Tech stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Wallet | @solana/wallet-adapter |
| Swap | Jupiter Terminal v3 |
| Hosting | Vercel (free tier) |

---

## 📁 Project structure

```
seeknswap/
├── app/
│   ├── layout.tsx      # Root layout + wallet provider
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles + fonts
├── components/
│   ├── WalletProvider.tsx   # Solana wallet context
│   ├── ConnectButton.tsx    # Connect/disconnect button
│   ├── JupiterSwap.tsx      # Swap widget (your fees here)
│   └── StatsBanner.tsx      # Stats display
├── .env.local          # Environment variables
└── package.json
```

---

## 🎨 Customization

- **App name/colors**: Edit `tailwind.config.js` and `globals.css`
- **Fee amount**: Change `feeBps` in `JupiterSwap.tsx`
- **Default trading pair**: Change `defaultInputMint` / `defaultOutputMint` in `JupiterSwap.tsx`
- **Fee wallet**: Change `PLATFORM_FEE_ACCOUNT` in `JupiterSwap.tsx`

---

Made with ❤️ for the Seeker ecosystem
