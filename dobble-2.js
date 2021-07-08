/*
Pour 4:
  [  0  1  2  3  ],
  [  0  4  5  6  ],
  [  0  7  8  9  ],
  [  0  a  b  c  ],
  [  1  4  7  a  ],
  [  1  5  8  b  ],
  [  1  6  9  c  ],
  [  2  4  8  c  ],
  [  2  5  9  a  ],
  [  2  6  7  b  ],
  [  3  4  9  b  ],
  [  3  5  7  c  ],
  [  3  6  8  a  ],

Pour 6
  [  0  1  2  3  4  5  ],
  [  0  6  7  8  9  a  ],
  [  0  b  c  d  e  f  ],
  [  0  g  h  i  j  k  ],
  [  0  l  m  n  o  p  ],
  [  0  q  r  s  t  u  ],
  [  1  6  b  g  l  q  ],
  [  1  7  c  h  m  r  ],
  [  1  8  d  i  n  s  ],
  [  1  9  e  j  o  t  ],
  [  1  a  f  k  p  u  ],
  [  2  6  c  i  o  u  ],
  [  2  7  d  j  p  q  ],
  [  2  8  e  k  l  r  ],
  [  2  9  f  g  m  s  ],
  [  2  a  b  h  n  t  ],
  [  3  a  e  i  m  q  ],
  [  3  6  f  j  n  r  ],
  [  3  7  b  k  o  s  ],
  [  3  8  c  g  p  t  ],
  [  3  9  d  h  l  u  ],

On remarque une harmonie dans les nombres
*/

const assert = require('assert')
// const allGlyphs = '0123456789abcdefghijklmnopqrstuvwxyzQWERTYUIOPLKJHGFDSAZXCVBNMαβγδεζηθικλμνξοπρστυφχψω!@#$%^&*()_+[]{}:;|"?>.<,`~'.split('')

const allGlyphs = [
  '爱北话买钱热分听叫商能杯米飞菜本语坐期吃不后没朋做医很看你岁怎出脑狗见对东上少中的面多五椅雨开好她店钟字亮前苹女衣太个现小昨起八喝六果桌哪觉回西猫妈喂大读校天子写们汉喜视些十在系那姐影老有候电月年九服二明下七国气打院点先说什京块习欢关友么想同来高冷兴机人租书水星家三是请今认我睡时吗午茶爸生一漂去他儿车里了样名号住谢呢都几会这谁识学四再工客师饭和作',
  '笑真羊贵为您泳体牛零可进步远弟卖间每找孩鸡左绍事件然道离汽问考息第助错正过馆跑动踢早已给旁所忙日病跳瓜慢纸但着班报笔奶试思舞往务火课夫歌还红百穿晴吧色始累哥告玩宜它床也诉等球懂让要意路边蛋别乐经情洗以送公到妻男篮右场次宾得啡完药运近司站眼房白唱便鱼长身颜非游员表新因望手休比雪两旅希铅黑足教备最阴共条常千虽室睛咖题肉门走从快就票丈准晚外帮妹知姓介',
  '饱城哭物根口瓶元环片主风束练跟响史居惯育历特料变相鞋心向自胖极春复空爬夏重南糕被静香急帽啤阳骑图注锻除境害李马干清假蓝平信单易盘需只越简舒世黄总顾加朵阿当伞张山半季乎搬园嘴腿护换赛净接万选力鼻渴用突音发级或该辆难久而法参灯择瘦银楼于鸟迎闻饿业牙理婚像蕉查己文词较鲜聪安段扫怕邻铁筷炼又冬满奇目碗须附化头典把努愿爷办船故担轻梯短甜疼秋数树板迟定楚旧句界答行姨熊借照容遇如周刮裤斤绿且种脚画讲地者坏决河裙求草提终趣末成放层冒才酒耳市矮皮必记更方拿留烧算角衫带直据包差般刚邮冰啊叔戏健康感声节衬街箱绩花礼卡议应双超忘刷位其澡实怪脸结网调刻饮聊检解',
  '划专亚倒普永咳鸭象忆按反疑紧深袋麻众傅膊幽济拒幸确赚否示厕养戴联续巾帅扰绝猜硕申论技此圾导闹肥章辛植验够购染骄童漫支怜部美则处海厉连恼术士悔细察排即误性勺材聚弹之油克禁售指案袜止羞堵乓微乒富纪航态利慕功消尽艺温规勇围输概扮符嗽户命减占获寄拜虑内暑膏谈允降虎距匙谅寒资激死呼肚估彩励台译效盒竞趟速牌棵失散泉林律原辣默粗醒讨江各缺具祝熟遍付梦言亲松抬偶柿值迷整剩址咸首负母伙使改顺码优及敲封洲翻证陪厨叶断计汁详丽郊研尊况傲弄笨传云精洋广凉戚巧究格躺烤篇管怀敢许扔困密钥盐惜举批入增惊苦悉保底愉弃沙葡款泼合逛全随肯鼓座列歉厅压掉尝基饼脱局低龄诚萄羽汗暖质脾挂式肤拾础活推标争至耐供汤剧存印页挺奖任刀份镜险餐停谊俩将貌棒适引危货收费扬签际恐评父穷针卫倍建稍抽却交懒邀羡序赢受味浪破免光毛严并塑擦播呀杂著糖败授脏展登仔福拉琴暂互另度吸何甚流释秒饺科持胳判乘阅无例矿桥修既孙钢烟价污填坚队职责厌预区籍秀志仅社毕景取转积线酸尤奋约赶族与通丰乱演由咱金伤竟尔聘丢折烦桶警落森程省垃继贺仍量抱民键窗招切厚橡博骗观',
  '龙返玉吨控删秩呆闭谨委幅庭浇撕革尘震描豆吻蝴纲兄未匆诊托待守匀范碍惭慎挤夜威趋宠谓采食坦盖斗嚏均鼠洒似代荣念歪糟器齿捡英岛营置喊财项充咨窄创弱洞蔬彼逃阶胡嫁筑催柜组挥哈迅顿临夹孕殊躲愁核粘夸嘉婆录显询阻域宣屋欣淘尾惠补届朗赔墙迫召抄皂烈矩靠税跃棋恨装恳武灵滩享娱眠犹枪蛇绕布刺农粮射称施抖频歇肌毒疯延偷沉赏测防熬繁扩配宽姿堆余宿吹巨固氛亏宁壁致悠尚雄糊佛宴帘碰依硬润妨群综扇椒势兔耽梨宝恋紫挑币晒织匹避古遵某毯吓恢设甲形傍盾薄恭型挡眉藏劳锁册伸狮甩疲谦彻欧虚酱妙唯艳血曾烂青池投振顶掌土骨泛桃胁府劣透忽军华毫良略木卧骤逐驾诗霉蜂屈睁纯圈炮兑拥治培盆达纷伟贝拦娘踩缩佩猴贸叙渐握兵抢套裹退悲燥豪髦限咬寓荐幕虫拼蝶嗓胸姑版钓暗承裁维闪朝逻汇编颗拍吐脖飘属肠脆艰勤偿追档炒涂痒轮勿吵夕益团订秘辞搜义石魅王率执慌乡冠摔醉璃替柔领冲制泪括俊操俱搞启滚库屉绪骂贴炭糙凌弯县敬漠挣载麦寻尺灾丝桔疗析神览映逗梳岸舍雷孝贡蹲悄媒寞讽漏献丑舅战鞭遗赞升柴翅胆衡淡塘拐销救姥敏素胃伴扶辑狂旬鬼摩劝炸滴绳构索厂架德倡含插臭递唉摘派仿腰旦灰煮豫沟模湿壶慰摇馒叉强辈燃醋奈晕废傻虹嫩统陌卷乖砍巴浅违庆寿杀厘状幻捐碎瞎厢席闲浏阵娶凭措剪昆乙善陆妇践苗珍雾拳喷拆集途摄击初促潮猾令迹姻痛政嗯乏饰披圆煤狡智恶征述腐哎戒斜训屿归怨肩押欠摆村绸猪权背辩纳劲肃驶憾矛幼涨膀移辅股产隔缓软锅抓厦滑胶裔撞贷立独亿链齐瞧摸源寂胜忍触盼品玻浓烫俗敌蜜铃竹造罚访企类损闯账私趁愧慧冻兼络稳官哲',
  '谋撒颠牵庸眯祥嫉扒疫衰框肴盟魔灌予钝抵杰唤揭搭灶膛郎挎纤赠央颈腾毁汰摧垫奏筹蒸皱暴亡驰垄扎踊撑墓柱勾氓恰谎攻铺堂兜舱岩梁呈黎贪蹋拢挽侄刊贩溅叭烛赴拖痪惩铸冤眶尴膨剂债丘稚械筒腥橙讶敞督诞捷昂昌蔽酬屑惧谤筋讳昔惑啥荤夺俐劈耸恒欲蹈诸滔遮滥岳竭辉牧署泊唐胎辙萌凹丙坝簸抑焰野氏症巩嗅泡惰呕朴溜尬贼拟嗦诽叠悟川薪侵舶滤患疏混凝丁斯锲额迈旨茎疆窜潇枚翼拣惹伦拙愤芒抛譬炎咙盲嵌奢稀卑循棉畜秃掏慨渣贯暧捆诺旋淀屏墨骚圣泻庇陈露蚂朽婪乳坡勉挨赤啰惦纠喇锐哗蚀帆胞烘焦乞忧捍伶祸异顽讥役掷融怠壤渡蓄盛逢晋履剖扯晤舌卓挠溶轰塌诧湖拔宏扭疾浑蕾勘仗馋贤宅覆苍砸伏辫窝颤罪炉愈沾蒂钉哄颖钻晃喘衷僵横液瞄虐仪吉崖袍笼壳拽舰辱盗宇躬曲菌亦跨遣墟宪畔濒喉镶萎腹爽撇咋痹俭阱稿唾陵哨膜拓哇梢艘苏纺衍丛凶粹舟倦杖斑岔澄捞旷喻鞠瞩撤澈饥罕瘾嫌粒稻胀隘臂辟瀑罐霞吟坑粥毅串帝侠端幢侣惮箭涉珠芽洪酗溪伐墅搁若栽纽迄添坛诬仰诫绒赖瞪躁庄泌饲妆狱廊奠峰恕诈侦缝奥捏昼遥肺奴郑纹啦庞卸佣浊脉讯谣谜兽赋赌揉攀瘩旺霍唇拧凡漆遭岗陶驻谐稼侈恩昧蔓悬熄饪陋徘轨耻疙兢侨砖御湾叛枝赁韧颇睬惨宰辐攒蠢隆削董寸捉赂皆怒畴丸径蹬陷剥凑田熨吼犯曝嗨抚鄙逝奔嘿崭耍盯搅呻贫抗沿辽翔栏耕旗君辨尸沐隶洁蜡牲扣倘仙雕艇掘灭惫缉探鸦嘛秤牺弥鸣桑猛佳儒缠藐罢吞柬鸽乌肖沸瞻筐辖婴忌磕荒伍阔犬贿椭掩滋癌辰殿孔岂罩爆钩肪忠伺垂崩诱锈斩酿氧愣歧肿逼涩隧袭瞒剔睦隙枕碌凸捣怖哑甘雹睹瓦锦堡殴沃蔚酝跌吊茫裕饶协宗弊波堪缴竖坟党叹谱沫洽琢脂蓬缚茂鉴纬挚猎浮残擅郁镇谍紊雀劫拄愚峭泄臣割莫谷寝蔼耀炫淆巡纵跪弦券栋耗溉淹殖捎媳宫隐崇榜阂嫂绎狼觅绣悦钦牢恍株峻驱腔搀杠蕴啬杜仇捕嘲裂慈帖堕煎渺狭妥塞钞祖咀衔沮丧抒蹦绑雇淋诵枯滞桨葬喧廓讼援塔瞬沼拘腻汹廉捧妒闷晶奉掐挪谴窍揍舔蛮碳沛彰窃抹侮嘱悼熏泣帜啸埋斟憋储翘霸灿旱肆惋哼趴迸唆搂拌蒙苟涮誓涌馅涕缀姆枉挖渔烁棍磁妄哆虏锤搓溃津倔仁晾磅磋涛凄嚼泽吩疤尖颂偏逆掰泰障眨斥狈遏魄筛叼盈娃巢炊州谬袱截逊叨坠踪庙啃荡丐徙寺巷倾唠瘤拨伪兆叮绅瓣椎魂监逮缔贬孤浴衅驳馈徒雅誉畅审副踏俯勃肢策嚷辜甭煌屡瘸穴摊皇铭颁阐撼裳泥敷篷粉噪峡挫禽聋潜擎痕棕绘晰瓷渠扁扛井宙缘侃咽刹搏伯歹扑蚁雌番侥惕俘碑携舆吝晨霜宵侧港咐晓辕迁锋亭哺稠哀鲁暄烹吁钙铜膝仓蔑酷沧袖昏壮僻磨畏慷陡哦呵掀欺渗剑酌堤刑徊娇榨瘫嘈帐浸掠狠怯涵杆滨殃屁',
]
.map(string => string.split(''))
.flat()

function dobble(n) {
  const combinaisons = []
  const initialCombinaisons = []

  createInitialCombinaisons()

  initialCombinaisons.shift()

  vertical(1)

  // topLeftBottomRightDiagonal(0, 2)
  // topRightBottomLeftDiagonal(0, 3)

  for (let k = 0; k <= n / 2 - 2; k++) {
    // console.log('k, k + 2', k, 2 * (k + 1))
    // console.log('k, k + 2', k, 2 * (k + 1) + 1)
    topLeftBottomRightDiagonal(k, 2 * (k + 1))
    topRightBottomLeftDiagonal(k, 2 * (k + 1) + 1)
  }

  function createInitialCombinaisons() {
    let combinaison = [allGlyphs[0]]

    for (let i = 1; i <= n * (n - 1); i++) {
      combinaison.push(allGlyphs[i])

      if (combinaison.length === n) {
        combinaisons.push(combinaison.slice())

        const initialCombinaison = combinaison.slice()

        initialCombinaison.shift()

        initialCombinaisons.push(initialCombinaison)

        combinaison = [allGlyphs[0]]
      }
    }
  }

  function vertical(x) {
    for (let j = 0; j < n - 1; j++) {
      const combinaison = [allGlyphs[x]]

      for (let i = 0; i < n - 1; i++) {
        combinaison.push(initialCombinaisons[i][j])
      }

      combinaisons.push(combinaison)
    }
  }

  function topLeftBottomRightDiagonal(o, x) {
    for (let j = 0; j < n - 1; j++) {
      const combinaison = [allGlyphs[x]]

      for (let i = 0; i < n  - 1; i++) {
        const x = i * (o + 1) + j < n - 1 ? i * (o + 1) + j : (i * (o + 1) + j) % (n - 1)

        // if (!initialCombinaisons[i][x]) console.log('x', x)
        combinaison.push(initialCombinaisons[i][x])
      }

      combinaisons.push(combinaison)
    }
  }

  function topRightBottomLeftDiagonal(o, x) {
    for (let j = 0; j < n - 1; j++) {
      const combinaison = [allGlyphs[x]]

      for (let i = 0; i < n - 1; i++) {
        let x = (n - i * (o + 1) + j - 1 < n - 1 ? n - i * (o + 1) + j - 1 : (n - i * (o + 1) + j - 1)) % (n - 1)

        // if (typeof initialCombinaisons[i][x] === 'undefined') console.log('x', x)
        if (x < 0) x += n - 1


        combinaison.push(initialCombinaisons[i][x])
      }

      combinaisons.push(combinaison)
    }
  }

  return combinaisons
}

function check(combinaisons) {
  for (let i = 0; i < combinaisons.length; i++) {
    if (combinaisons[i].some(glyph => typeof glyph === 'undefined')) return 1

    for (let j = i + 1; j < combinaisons.length; j++) {
      if (countLinks(combinaisons[i], combinaisons[j]) !== 1) {
        return 2
      }
    }
  }

  return 0
}

function countLinks(a, b) {
  let count = 0

  a.forEach(glyph => {
    b.forEach(otherGlyph => {
      if (glyph === otherGlyph) count++
    })
  })

  return count
}

function countGlyphs(combinaisons) {
  const glyphs = new Set()

  combinaisons.forEach(combinaison => {
    combinaison.forEach(glyph => {
      glyphs.add(glyph)
    })
  })

  return glyphs.size
}

if (require.main === module) {
  console.log('allGlyphs.length', allGlyphs.length)

  const n = parseInt(process.argv[2])

  if (n) {
    console.log(`dobble(${n})`)

    const result = dobble(n)

    result.forEach(x => console.log(x.join(' ')))

    console.log(n, 'set size:', result.length, 'glyphs used:', countGlyphs(result))

    assert(check(result) === 0)


  }
  else {
    let i = 4;
    let checked

    while (true) {
      const result = dobble(i)

      checked = check(result)

      try {
        assert(checked === 0)

        // console.log('result', result)
        console.log(i, 'set size:', result.length, 'glyphs used:', countGlyphs(result))
      }
      catch (error) {
        console.log(i, 'is faulty', checked)

        if (checked === 1) break
      }

      i += 2
    }
  }


}

module.exports = dobble
