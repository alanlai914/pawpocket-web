# PawPocket Web

爪爪袋 PawPocket 是一个面向单个家庭、4—6 岁低识字儿童与两位家长的家庭小钱包和愿望储蓄 PWA。

## 当前施工范围

本分支只实现锁定基线中的第一道视觉门禁：`/child` 儿童首页。

- Next.js App Router + TypeScript
- iPad landscape first，同时提供窄屏降级布局
- 角色、钱包、金币与导航插画来自 `02_APPROVED_MASTERS`
- 金额、入口标签、家长按钮与交互状态保持代码原生
- 触控目标不小于 64 CSS px
- 不使用运行时 LLM、图像生成或开放式儿童对话

## 运行

```bash
npm install
npm run dev
```

推荐 Node.js 22 LTS。

## 当前限制

- IndexTTS 固定音频尚未交付；语音按钮目前只展开同等固定文案，不自动播放声音。
- 木桌和纸张背景仍是第一轮浏览器实现，等待真实场景层资产替换。
- 大钱罐透明资产仍处于生产清边阶段。
