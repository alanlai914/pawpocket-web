import { PrototypeScreen } from "@/components/PrototypeScreen";

export default function ReviewPage() {
  return <PrototypeScreen title="周末回顾" note="四步：这周收到、这周花了、现在还剩、下周想怎么做。" links={[{ href: "/child", label: "完成" }]} />;
}
