"use client";

import Link from "next/link";
import { useState } from "react";
import { HandIcon, LockIcon, SpeakerIcon } from "@/components/Icon";
import { Sprite } from "@/components/Sprite";

type NavCardProps = {
  href: string;
  label: string;
  tone: "wallet" | "wish" | "review";
  voice: string;
};

const navItems: NavCardProps[] = [
  { href: "/child/wallet", label: "钱包", tone: "wallet", voice: "来看看现在有多少钱。" },
  { href: "/child/wishes", label: "愿望", tone: "wish", voice: "来看看你喜欢的东西。" },
  { href: "/child/review", label: "回顾", tone: "review", voice: "我们一起看看这一周。" },
];

function NavArtwork({ tone }: Pick<NavCardProps, "tone">) {
  if (tone === "wallet") {
    return (
      <div className="wallet-art" aria-hidden="true">
        <Sprite name="coin1" className="wallet-coin" />
        <Sprite name="wallet2" className="wallet-object" />
      </div>
    );
  }

  return <Sprite name={tone} className="nav-master-art" />;
}

function NavCard({ href, label, tone, voice }: NavCardProps) {
  return (
    <Link className={`nav-card nav-card--${tone}`} href={href} aria-label={`${label}。${voice}`}>
      <div className="nav-card__art"><NavArtwork tone={tone} /></div>
      <span className="nav-card__label">{label}</span>
      <span className="nav-card__tap" aria-hidden="true"><HandIcon /></span>
    </Link>
  );
}

export function ChildHome() {
  const [showVoice, setShowVoice] = useState(false);

  return (
    <main className="child-home">
      <Sprite name="sceneLeft" className="scene-edge scene-edge--left" />
      <Sprite name="sceneRight" className="scene-edge scene-edge--right" />

      <header className="child-home__utility">
        <Link className="parent-button" href="/parent/unlock" aria-label="进入家长区">
          <LockIcon />
          <span>家长</span>
        </Link>
      </header>

      <section className="hero" aria-labelledby="balance-title">
        <div className="balance-card">
          <div className="balance-wallet" aria-hidden="true">
            <Sprite name="coin2" className="balance-wallet__coin" />
            <Sprite name="wallet1" className="balance-wallet__body" />
          </div>
          <div className="balance-label" id="balance-title">
            <strong>10</strong><span>元</span>
          </div>
          <div className="coin-progress" aria-label="本周钱包进度：五枚金币">
            {[0, 1, 2, 3, 4, 5, 6].map((coin) => (
              <span key={coin} className={coin < 5 ? "coin-dot coin-dot--filled" : "coin-dot"} />
            ))}
            <span className="coin-star">★</span>
          </div>
        </div>

        <div className="cat-stage">
          <Sprite name="cat" className="cat-character" label="三花猫开心地挥手" />
          <button
            className="voice-button"
            type="button"
            aria-expanded={showVoice}
            aria-controls="home-voice-copy"
            onClick={() => setShowVoice((value) => !value)}
          >
            <SpeakerIcon />
            <span className="sr-only">听首页提示</span>
          </button>
          <p className={`voice-copy${showVoice ? " voice-copy--open" : ""}`} id="home-voice-copy" aria-live="polite">
            选一个你想看的地方吧。
          </p>
        </div>
      </section>

      <nav className="primary-nav" aria-label="儿童首页">
        {navItems.map((item) => <NavCard key={item.tone} {...item} />)}
      </nav>
    </main>
  );
}
