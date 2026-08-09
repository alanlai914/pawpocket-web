import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./sprite-overrides.css";

export const metadata: Metadata = {
  title: "爪爪袋 PawPocket",
  description: "一个家庭、一个孩子共同使用的小钱包与愿望储蓄应用。",
  applicationName: "爪爪袋 PawPocket",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7e8cb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
