# PawPocket 固定中文语音审核稿 v1

状态：`REVIEW_REQUIRED`  
用途：审核通过后交给本地 IndexTTS 批量生成。当前文件不是已批准成品音频。

## 1. 写作与播放规则

- 面向 4—6 岁儿童，短句、口语、一次只表达一个动作。
- 不评价“对/错”，不羞辱、不恐吓、不把存钱描述成唯一正确答案。
- 不自动播放；由儿童点击扬声器，或在一次明确操作完成后播放一次短反馈。
- 同一按钮在不同页面使用同一语义和相近语气。
- 句尾保留自然停顿，不加入夸张语气词和拟声词。
- 金额、天数等动态信息先使用模板；首个纵向切片只生成已确认的具体数值版本。

## 2. 首页与一级入口

| 音频 ID | 建议文件名 | 触发 | 审核文案 | 来源 |
|---|---|---|---|---|
| TTS-HOME-001 | `home-guide.mp3` | 首页扬声器 | 选一个你想看的地方吧。 | 新增建议 |
| TTS-HOME-002 | `home-wallet.mp3` | 钱包入口扬声器/聚焦提示 | 来看看小钱包里有多少钱。 | 基于 COPY-HOME-01 微调 |
| TTS-HOME-003 | `home-wish.mp3` | 愿望入口扬声器/聚焦提示 | 来看看你喜欢的东西。 | COPY-HOME-02 |
| TTS-HOME-004 | `home-review.mp3` | 回顾入口扬声器/聚焦提示 | 我们一起看看这一周。 | COPY-HOME-03 |
| TTS-HOME-005 | `home-parent.mp3` | 家长入口 | 这里要请家长来。 | COPY-HOME-04 |
| TTS-HOME-006 | `home-balance-10.mp3` | 首页余额扬声器 | 你的小钱包里现在有十元。 | COPY-WAL-01 的首切片具体值 |

## 3. 钱包

| 音频 ID | 建议文件名 | 触发 | 审核文案 | 备注 |
|---|---|---|---|---|
| TTS-WAL-001 | `wallet-balance-{amount}.mp3` | 余额扬声器 | 你的小钱包里现在有{amount}元。 | 动态模板；首批先生成 0—100 的常用整数或按家庭配置生成 |
| TTS-WAL-002 | `wallet-next-{days}.mp3` | 下次发钱扬声器 | 还有{days}天，就到下一次发钱的日子。 | 对锁定稿做口语化微调 |
| TTS-WAL-003 | `wallet-spent-this-week.mp3` | 本周消费区 | 这周你用自己的钱买了这些。 | 锁定稿 |
| TTS-WAL-004 | `wallet-empty.mp3` | 余额为零 | 小钱包现在是空的。下次有钱来到这里时，我们再看看。 | 新增建议；保持中性 |

## 4. 愿望

| 音频 ID | 建议文件名 | 触发 | 审核文案 | 来源 |
|---|---|---|---|---|
| TTS-WISH-001 | `wish-save.mp3` | 存起来 | 把它放在最想要的位置，慢慢存钱。 | COPY-WISH-01 |
| TTS-WISH-002 | `wish-tomorrow.mp3` | 明天看 | 今天先等等，明天再看看。 | COPY-WISH-02 |
| TTS-WISH-003 | `wish-remove.mp3` | 不要了 | 现在不想要了，也可以放回去。 | COPY-WISH-03 |
| TTS-WISH-004 | `wish-tell-parent.mp3` | 钱已够 | 钱已经够了，请家长一起来看看。 | COPY-WISH-04 |
| TTS-WISH-005 | `wish-saved-feedback.mp3` | 选择完成 | 好，它已经存起来了。 | 新增建议 |
| TTS-WISH-006 | `wish-tomorrow-feedback.mp3` | 选择完成 | 好，我们明天再看看。 | 新增建议 |
| TTS-WISH-007 | `wish-removed-feedback.mp3` | 选择完成 | 好，它已经放回去了。 | 新增建议 |

## 5. 购买结果

| 音频 ID | 建议文件名 | 触发 | 审核文案 | 来源 |
|---|---|---|---|---|
| TTS-BUY-001 | `buy-child-money.mp3` | 我买到了 | 你用自己的钱买到了。 | COPY-BUY-01 |
| TTS-BUY-002 | `buy-family-money.mp3` | 家里买了 | 这是家里买的，你的钱还在小钱包里。 | 基于 COPY-BUY-02 明确“小钱包” |
| TTS-BUY-003 | `buy-waiting.mp3` | 还在等 | 今天先不买，它还在愿望里。 | COPY-BUY-03 |

## 6. 红包与大钱罐

| 音频 ID | 建议文件名 | 触发 | 审核文案 | 来源 |
|---|---|---|---|---|
| TTS-GIFT-001 | `gift-received.mp3` | 收到红包 | 这是大家送给你的祝福。 | COPY-GIFT-01 |
| TTS-GIFT-002 | `gift-to-wallet.mp3` | 放进钱包 | 有一些来到小钱包里。 | COPY-GIFT-02 |
| TTS-GIFT-003 | `gift-to-custody.mp3` | 存起来了 | 有一些先放进大钱罐。 | COPY-GIFT-03 |
| TTS-GIFT-004 | `gift-custody-to-wallet.mp3` | 来到钱包 | 有一些钱从大钱罐来到小钱包了。 | COPY-GIFT-04 |

## 7. 周末回顾

| 音频 ID | 建议文件名 | 触发 | 审核文案 | 来源 |
|---|---|---|---|---|
| TTS-REV-001 | `review-received.mp3` | 第一步 | 这周，小钱包收到了这些。 | COPY-REV-01 |
| TTS-REV-002 | `review-child-spent.mp3` | 第二步 | 这些是你用自己的钱买的。 | COPY-REV-02 |
| TTS-REV-003 | `review-family-bought.mp3` | 第二步补充 | 这些是家里买的，没有扣小钱包。 | COPY-REV-03 |
| TTS-REV-004 | `review-balance-{amount}.mp3` | 第三步 | 现在小钱包里还剩{amount}元。 | COPY-REV-04 |
| TTS-REV-005 | `review-next-week.mp3` | 第四步 | 下周，你想继续存、明天再看，还是不要了？ | 基于 COPY-REV-05 调整停顿 |
| TTS-REV-006 | `review-finished.mp3` | 回顾完成 | 这周的回顾完成了。下周我们再一起看看。 | 新增建议 |

## 8. 离线、同步与需要家长处理

| 音频 ID | 建议文件名 | 触发 | 审核文案 | 来源 |
|---|---|---|---|---|
| TTS-SYNC-001 | `sync-offline.mp3` | 无网络 | 现在没有网络，先保存在这里。 | COPY-SYNC-01 |
| TTS-SYNC-002 | `sync-pending.mp3` | 待同步 | 还没有传好，联网后会再试。 | COPY-SYNC-02 |
| TTS-SYNC-003 | `sync-photo-local.mp3` | 图片上传失败 | 照片还在这台设备上，请家长稍后再试。 | COPY-SYNC-03 |
| TTS-SYNC-004 | `sync-conflict.mp3` | 记录冲突 | 两台设备的记录不一样，请家长来确认。 | COPY-SYNC-04 |
| TTS-SYNC-005 | `handoff-parent.mp3` | 进入家长门 | 请把设备交给家长。 | 新增建议 |

## 9. 首批建议生成范围

在文案审核和声音确认后，第一批只生成当前纵向切片实际使用的 6 条：

1. `home-guide.mp3`
2. `home-wallet.mp3`
3. `home-wish.mp3`
4. `home-review.mp3`
5. `home-parent.mp3`
6. `home-balance-10.mp3`

其余音频随对应页面进入实现阶段再生成，避免一次生产大量尚未验收的文件。

## 10. 仍需确认

- 猫角色的声音身份与参考音色；
- 是否采用普通话女声、普通话中性声，或猫角色童声；
- IndexTTS 克隆音色的合法来源与可持续使用授权；
- 输出格式最终采用 WAV 母版 + AAC/MP3/WebM 运行时版本中的哪一组；
- 动态金额采用按家庭配置预生成，还是建立常用数字片段拼接方案。
