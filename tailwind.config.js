/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#080B14",
        surface: "#0D1220",
        card: "#111827",
        border: "#1E2D45",
        accent: "#00F5A0",
        "accent-dim": "#00C47E",
        highlight: "#3DBEFF",
        muted: "#4A5568",
        text: "#E2E8F0",
        "text-dim": "#718096",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0,245,160,0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(0,245,160,0.5)" },
        },
      },
    },
  },
  plugins: [],
};
