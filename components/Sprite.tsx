import type { CSSProperties, HTMLAttributes } from "react";

const SHEET = { width: 1000, height: 700 } as const;

const SPRITES = {
  cat: { x: 0, y: 0, width: 240, height: 240 },
  wallet1: { x: 250, y: 0, width: 300, height: 200 },
  wallet2: { x: 250, y: 210, width: 300, height: 200 },
  coin1: { x: 560, y: 0, width: 150, height: 150 },
  coin2: { x: 710, y: 0, width: 150, height: 150 },
  wish: { x: 0, y: 260, width: 220, height: 293 },
  review: { x: 230, y: 420, width: 220, height: 253 },
  sceneLeft: { x: 860, y: 0, width: 120, height: 320 },
  sceneRight: { x: 860, y: 330, width: 64, height: 320 },
} as const;

export type SpriteName = keyof typeof SPRITES;

type SpriteProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  name: SpriteName;
  label?: string;
};

export function Sprite({ name, label, className = "", style, ...props }: SpriteProps) {
  const sprite = SPRITES[name];
  const xPosition = sprite.x === 0 ? 0 : (sprite.x / (SHEET.width - sprite.width)) * 100;
  const yPosition = sprite.y === 0 ? 0 : (sprite.y / (SHEET.height - sprite.height)) * 100;

  const spriteStyle: CSSProperties = {
    display: "block",
    aspectRatio: `${sprite.width} / ${sprite.height}`,
    backgroundImage: "url(/assets/pawpocket/sprites/child-home-atlas_v1.webp)",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${(SHEET.width / sprite.width) * 100}% ${(SHEET.height / sprite.height) * 100}%`,
    backgroundPosition: `${xPosition}% ${yPosition}%`,
    ...style,
  };

  return (
    <span
      className={`sprite sprite--${name} ${className}`.trim()}
      style={spriteStyle}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...props}
    />
  );
}
