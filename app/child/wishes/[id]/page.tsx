import { PrototypeScreen } from "@/components/PrototypeScreen";

export default async function WishDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <PrototypeScreen
      title={`愿望 ${id}`}
      note="儿童主要选择固定为：存起来、明天看、不要了。余额足够时只显示告诉家长。"
      links={[{ href: "/child/wishes", label: "回愿望" }]}
    />
  );
}
