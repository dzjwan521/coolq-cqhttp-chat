const data = {
  冰心:
    "宏：\n /cast [nobuff:繁音急节&tbuff:急曲=3&buff:枕上=5] 繁音急节\n /fcast [tnobuff:急曲|tbuff:急曲<3|tbufftime:急曲<4|mana<0.5] 剑破虚空\n /cast 玳弦急曲\n/cast 剑气长江 \n 奇穴：\n  青梅嗅,千里冰封,新妆,青梅,枕上,长依,望舒,元君,霜风,朝露,琼宵,霜降",
  云裳:
    "宏：\n/fcast [life<0.4] 繁音急节\n/fcast [nobuff:翔舞] 翔鸾舞柳\n/fcast 风袖低昂\n/fcast 王母挥袂\n/fcast [tbufftime:上元点鬟<2|tnobuff:上元点鬟] 上元点鬟\n/cast 回雪飘摇\n奇穴：\n  朝露,盛夏,辞致,瑰姿,乞巧,散余霞,晚晴,碎冰,霜风,秋深,垂眉,险韵",
  花间:
    "「花间宏」\n宏一（起手）：\n/cast 乱洒青荷\n/cast [tnobuff:兰摧玉折&last_skill=乱洒青荷] 阳明指\n/cast [tnobuff:商阳指&last_skill=阳明指] 商阳指\n/cast [tbuff:兰摧玉折&tbuff:钟林毓秀] 玉石俱焚\n宏二：\n/cast [tnobuff:兰摧玉折] 兰摧玉折\n/cast [last_skill=兰摧玉折] 钟林毓秀\n/cast [tnobuff:商阳指] 商阳指\n/cast [last_skill=商阳指] 水月无间\n/cast 快雪时晴\n宏三：\n/cast [tbufftime:兰摧玉折<4] 芙蓉并蒂\n/cast [skill_notin_cd:芙蓉并蒂] 快雪时晴\n/cast [tbufftime:兰摧玉折<12&tbufftime:兰摧玉折>8] 玉石俱焚\n/cast 快雪时晴\n[宏一起手 - 乱撒 - 阳明 - 商阳 - 宏二]\n[宏二补3DOT之后 - 读快雪就按宏三]\n[宏三自动释放芙蓉并蒂和玉石俱焚 - 芙蓉并蒂之后继续按宏三 - 直到玉石俱焚爆掉DOT之后按宏2补DOT]\n[以此循环]\n推荐加速：1192\n奇穴方案\n[弹指] [雪中行] [倚天] [焚玉] [青歌] [青冠] [清流] [雪弃] [兰舟] [梦歌] [踏歌] [涓流]\n",
  离经: "弟弟，大声回答我，别划水好么。。。",
  毒经:
    "「毒经宏」\n/cast 蛊虫献祭\n/cast [nobuff:虫兽] 灵蛇引\n/fcast 攻击\n/cast [tnobuff:蛇影|tbufftime:蛇影<1.31] 蛇影\n/fcast 幻击\n/cast [tnobuff:百足] 百足\n/cast 蝎心\n推荐加速：828 或者 1729\n奇穴方案\n[尻尾] [无常] [黯影] [虫兽] [桃僵] [不鸣] [蛇蜒] [祭礼] [蛇悉] [蛊虫狂暴] [封丘] [灵犀]\n",
  补天: "弟弟，大声回答我，别划水好么。。。",
  莫问: "弟弟，大声回答我，别划水好么。。。",
  相知: "弟弟，大声回答我，别划水好么。。。",
  傲血:
    "「傲血宏」\n/cast 撼如雷\n/cast [buff:激雷&nobuff:驰骋] 任驰骋\n/cast 突\n/cast [tbufftime:流血<1.5|rage<4] 龙吟\n/cast [rage<3] 灭\n/cast [rage>4] 龙牙\n/cast 穿云\n[手动渊和上马]\n推荐加速：828\n奇穴方案\n[扬戈] [神勇] [骁勇] [击水] [劲风] [牧云] [风虎] [战心] [渊] [夜征] [龙血] [虎贲]\n",
  铁牢:
    "铁牢宏」\n/cast [bufftime:铁马血河<1] 后撤\n/cast 啸如虎\n/cast 疾如风\n/cast 沧月\n/cast 龙牙\n/cast 龙吟\n/cast 灭\n/cast 穿云\n/cast [buff:力拔] 撼如雷\n推荐加速：828\n奇穴方案\n[定军] [龙痕] [大漠] [望西京] [劲风] [掠如火] [金甲] [战心] [长征] [昂如岳] [戟胜] [号令三军]\n",
  易筋:
    "「易筋宏」\n手动擒龙爆发：\n/cast [qidian>2] 罗汉金身\n/cast [qidian>2] 拿云式\n/cast [qidian>2] 韦陀献杵\n/cast [tbufftime:普渡<3] 普渡四方\n/cast 横扫六合\n/cast 守缺式\n/cast 普渡四方\n推荐加速：828 或者 1729\n奇穴方案\n[涅果] [幻身] [身意] [缩地] [降魔渡厄] [金刚怒目] [净果] [三生] [众嗔] [华香] [佛果] [二业依缘]\n",
  洗髓: "弟弟，大声回答我，别划水好么。。。",
  焚影:
    "「焚影宏」\n宏一：\n/cast [sun<20] 驱夜断愁\n/cast [moon<60] 幽月轮\n/cast [sun<100] 赤日轮\n宏二：\n/cast [sun>99] 诛邪镇魔\n/cast 净世破魔击\n/cast [sun=0] 烈日斩\n/cast [sun<60] 赤日轮\n/cast [sun=60] 伏明众生\n/cast [moon<40] 幽月轮\n/cast [sun=60] 银月斩\n宏三：\n/cast [sun>99] 诛邪镇魔\n/cast 净世破魔击\n/cast [sun=0] 烈日斩\n/cast [sun<60] 赤日轮\n/cast [moon<40] 幽月轮\n/cast [sun=80] 驱夜断愁\n/cast [sun=60] 银月斩\n[宏一 - 满日后 - 宏二 - 释放后 - 宏三]\n[一直宏三]\n推荐加速：1269\n奇穴方案\n[腾焰飞芒] [无往不复] [诛邪镇魔] [无明业火] [明光恒照] [辉耀红尘] [超凡入圣] [用晦而明] [天地诛戮] [万念俱寂] [伏明众生] [驱夷逐法]\n",
  明尊:
    "「明尊宏」\n手动戒火斩：\n/cast 心火叹\n/cast 净世破魔击\n/cast [moon>=sun] 银月斩\n/cast [sun>moon] 烈日斩\n/cast [sun>=moon&sun<100] 赤日轮\n/cast [moon>sun&moon<100] 幽月轮\n推荐加速：773 或者 2428\n奇穴方案\n[圣光明] [慈悲心] [寂灭] [月尽天明] [超凡入圣] [极乐引] [纵欲善缘] [妙镜惊寂] [渡厄力] [日月同辉] [无量妙境] [心火叹]\n",
  分山:
    "分山宏」\n盾：\n/cast [nobuff:血怒|bufftime:骇日>53.9] 血怒\n/cast [rage>35|buff:十律守心·猊焰] 盾飞\n/cast 盾击\n/cast [skill_energy:盾击=0] 盾压\n/cast 盾猛\n/cast 盾刀\n刀：\n/cast [nobuff:血怒|buff:血怒<2] 血怒\n/cast [buff:十律守心·猊焰] 绝刀\n/cast 斩刀\n/cast [tbufftime:流血>17] 绝刀\n/cast 劫刀\n/cast [rage<11] 盾回\n推荐加速：19 或 828\n奇穴方案\n[刀魂] [炼狱] [飞瀑] [劫生] [锋鸣] [割裂] [活脉] [恋战] [从容] [愤恨] [蔑视] [骇日]\n",
  铁骨: "弟弟，大声回答我，别划水好么。。。",
  紫霞:
    "「紫霞宏」\n/cast [nobuff:破苍穹] 破苍穹\n/cast 六合独尊\n/cast [nobuff:气剑|bufftime:气剑<1.7] 万世不竭\n/cast [qidian>8] 两仪化形\n/cast 四象轮回\n/cast 九转归一\n/cast 三才化生\n推荐加速：一段\n奇穴方案\n[白虹] [心固] [无形] [归元] [同尘] [跬步] [万物] [抱阳] [浮生] [期声] [自化] [固本]\n",
  太虚:
    "「太虚宏」\n/cast 人剑合一\n/cast [nobuff:碎星辰] 碎星辰\n/cast [qidian>9] 无我无剑\n/cast 生太极\n/cast [buff:碎星辰&qidian<7] 吞日月\n/cast 八荒归元\n/cast [qidian>6] 无我无剑\n推荐加速：一段 或者 二段\n奇穴方案\n[心固] [深埋] [化三清] [云中剑] [风逝] [叠刃] [长生] [负阴] [和光] [期声] [无欲] [玄门]\n",
  天罗:
    "「天罗宏」\n手动下蛋：\n/cast 千机变\n/cast 连弩形态\n/cast 攻击\n/cast [buff:暗藏杀机C] 图穷匕见\n/cast [tnobuff:化血|tbufftime:化血<9] 天女散花\n/cast 天绝地灭\n/cast 暴雨梨花针\n/cast 蚀肌弹\n推荐加速：1段\n奇穴方案\n[天魔蚀肌] [劫数难逃] [弩击急骤] [千机之威] [千机巨搫] [聚精凝神] [化血迷心] [蚀肌化血] [秋风散影] [回肠荡气] [曙色催寒] [雷甲三铉]\n",
  惊羽:
    "「惊羽宏」\n/cast [tnobuff:穿心] 穿心弩\n/cast 暴雨梨花针\n/cast 百里追魂\n/fcast [buff:追命无声] 心无旁骛\n/cast [buff:追命无声] 追命箭\n/cast 夺魄箭\n/cast [energy<40] 逐星箭\n推荐加速：1段\n奇穴方案\n[迅电流光] [千里无痕] [狂风暴雨] [摧心] [掠影穹苍] [浴血沁骨] [声若惊雷] [梨花带雨] [秋风散影] [回肠荡气] [妙手连环] [百里追魂]\n",
  藏剑:
    "「藏剑宏」\n轻剑：\n/cast [rage>79] 啸日\n/cast 平湖断月\n/cast 黄龙吐翠\n/cast 听雷\n重剑：\n/cast [buff:夜雨|buff:鹿卢] 云飞玉皇\n/cast [bufftime:雾锁>3] 松舍问霞\n/cast 夕照雷峰\n推荐加速：221\n奇穴方案\n[淘尽] [绝顶] [夜雨] [景行] [造化] [怜光] [层云] [厌高] [雾锁] [碧归] [如风] [松舍问霞]\n",
  笑尘: "弟弟，大声回答我，别划水好么。。。",
  北傲: "弟弟，大声回答我，别划水好么。。。",
  蓬莱:
    "「蓬莱宏」\n天：\n/cast 物化天行\n/cast 溟海御波\n/cast [nearby_enemy>0] 海运南冥\n/cast [bufftime:浮游天地<27] 浮游天地·落地\n/fcast 翼绝云天\n/fcast 振翅图南\n地：\n/cast [bufftime:太息<3] 逐波灵游\n/cast 木落雁归\n/cast [nobuff:梦悠] 跃潮斩波\n/cast 海运南冥\n/cast 击水三千\n/fcast 翼绝云天\n/fcast 振翅图南\n/cast [buff:梦悠] 浮游天地\n推荐加速：19\n奇穴方案\n[海隅] [扶桑] [羽彰] [清源] [太息] [谒宫] [罔象] [怅归] [溯徊] [驰行] [梦悠] [濯流]\n",
  凌雪:
    "「凌雪宏」\n宏一：\n/cast [buff:百节=2] 崔嵬鬼步\n/cast 青山共我\n/cast [nobuff:徵逐] 血覆黄泉\n/cast 幽冥窥月\n/cast [nobuff:忘断] 日月吴钩\n/cast [buff:百节>2] 乱天狼\n/cast 寂洪荒\n宏二：\n/cast [buff:百节>2] 隐风雷\n/cast [nobuff:单链] 血覆黄泉\n/fcast [buff:单链] 金戈回澜\n宏三：\n/cast [buff:百节>2] 隐风雷\n/cast 星垂平野\n[贴近BOSS宏一起手，释放完乱天狼按宏二]\n[突进宏，金戈突进到BOSS后，按宏三]\n[星垂宏，突进后按宏三 打两个星垂之后按宏一]\n推荐加速：1段\n奇穴方案\n[星旗] [秋霁] [折意] [风骨] [北阙] [渊岳] [玄肃] [王师] [百节] [忘断] [徵逐] [青山共我]\n",
};

var checkMacro = function (key) {
  return data[key] || "输入门派的前2个字就好，例如：傲血";
};

module.exports = checkMacro;
