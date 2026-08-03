import { PrototypeScreen } from "@/components/PrototypeScreen";

export default function WalletPage() {
  return <PrototypeScreen title="钱包" note="显示小钱包余额、下次发放和最近孩子消费。大钱罐准确金额不得出现在儿童端。" links={[{ href: "/child", label: "回首页" }]} />;
}
