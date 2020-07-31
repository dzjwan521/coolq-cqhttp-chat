const data = {
  冰心:
    "宏：\n /cast [nobuff:繁音急节&tbuff:急曲=3&buff:枕上=5] 繁音急节\n /fcast [tnobuff:急曲|tbuff:急曲<3|tbufftime:急曲<4|mana<0.5] 剑破虚空\n /cast 玳弦急曲\n/cast 剑气长江 \n 奇穴：\n  青梅嗅,千里冰封,新妆,青梅,枕上,长依,望舒,元君,霜风,朝露,琼宵,霜降",
  云裳:
    "宏：\n/fcast [life<0.4] 繁音急节\n/fcast [nobuff:翔舞] 翔鸾舞柳\n/fcast 风袖低昂\n/fcast 王母挥袂\n/fcast [tbufftime:上元点鬟<2|tnobuff:上元点鬟] 上元点鬟\n/cast 回雪飘摇\n奇穴：\n  朝露,盛夏,辞致,瑰姿,乞巧,散余霞,晚晴,碎冰,霜风,秋深,垂眉,险韵",
  花间:
    "宏：\n/fcast [skill_notin_cd:玉石俱焚] 芙蓉并蒂\n/fcast 玉石俱焚\n/cast [tbuff:商阳指] 快雪时晴\n/cast 兰摧玉折\n/cast [last_skill=兰摧玉折] 钟林毓秀\n/cast 商阳指\n奇穴：\n弹指,雪中行,倚天,焚玉,青歌,青冠,清流,雪弃,流离,梦歌,踏歌,涓流",
  离经: "别划水了。。。",
  毒经:
    "宏：\n/cast 蛊虫献祭\n/cast [nobuff:虫兽] 灵蛇引\n/cast [tnobuff:夺命蛊] 灵蛊\n/cast 蛊虫狂暴\n/fcast 幻击\n/fcast 攻击\n/cast 蛇影\n/cast [tnobuff:百足] 百足\n/cast 蝎心\n奇穴:\n尻尾,无常,黯影,虫兽,桃僵,不鸣,蛇蜒,祭礼,蛇悉,蛊虫狂暴,封丘,啖灵",
  补天: "待添加",
  莫问: "待添加",
  相知: "待添加",
  傲血: "待添加",
  铁牢: "待添加",
  易筋: "待添加",
  洗髓: "待添加",
  焚影: "待添加",
  明尊: "待添加",
  分山: "待添加",
  铁骨: "待添加",
  紫霞: "待添加",
  太虚: "待添加",
  天罗: "待添加",
  惊羽: "待添加",
  问水: "待添加",
  笑尘: "待添加",
  北傲: "待添加",
  凌海: "待添加",
  隐龙: "待添加"
};

var checkMacro = function (key) {
  return data[key];
};

module.exports = checkMacro;
