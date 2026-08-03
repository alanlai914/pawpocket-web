import { PrototypeScreen } from "@/components/PrototypeScreen";

export default function UnlockPage() {
  return <PrototypeScreen title="家长解锁" note="这里将实现 PIN 哈希校验、错误冷却与会话生命周期。" links={[{ href: "/child", label: "回儿童区" }]} />;
}
