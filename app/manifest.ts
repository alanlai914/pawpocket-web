import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "爪爪袋 PawPocket",
    short_name: "爪爪袋",
    description: "家庭小钱包与愿望储蓄 PWA",
    start_url: "/child",
    display: "standalone",
    background_color: "#f7e8cb",
    theme_color: "#f7e8cb",
    orientation: "any",
  };
}
