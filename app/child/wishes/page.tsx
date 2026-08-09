import { PrototypeScreen } from "@/components/PrototypeScreen";

export default function WishesPage() {
  return <PrototypeScreen title="愿望" note="支持多个愿望，同时只有一个主要储蓄愿望。" links={[{ href: "/child/wishes/demo", label: "打开示例愿望" }, { href: "/child", label: "回首页" }]} />;
}
