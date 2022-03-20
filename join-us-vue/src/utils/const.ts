export const regions = ["朝晖", "屏峰", "莫干山"];
export const choices = [
  ["办公室", "活动部",
    "Touch产品部", "编辑工作室",
    "视觉影像部", "开发部",
    "易班文化工作站", "小弘工作室",],
  ["办公室", "活动部",
    "Touch产品部", "小弘工作室",
    "编辑工作室", "视觉影像部",
    "开发部", "易班文化工作站"],
  ["秘书处", "小弘工作室", "编辑工作室", "视觉影像部", "开发部",],
]

export const products = [
  {
    wh: ["1/2", "1/2"], img: [["/photo/product/10.png", "浙江工业大学精弘网络"],
    ["/photo/product/11.png", "精小弘在线"]],
    title: "/微信公众号/",
    introduce: "浙江工业大学精弘网络微信公众号,提供结合精弘网络产品的实用功能,推出微精弘板块等系列服务,是工大学子学习生活的好帮手。", n: 0
  },
  { wh: ["2/3", "1/3"], img: [["/photo/product/1.png", "微精弘小程序"]], title: "/微精弘/", introduce: "微精弘是专属于zjuter的微信小程序,集课表、成绩查询、考试安排、空教室查询、一卡通、借阅等功能于一身，是工大学子必不可少的一体化校园移动门户。", n: 1 },
  { wh: ["1/2", "2/4"], img: [["/photo/product/13.png", ""]], title: "/视觉影像/", introduce: "校园学习生活、学校各类大型活动的记录团队，专注于摄影、视频前期拍摄和后期剪辑,致力于用最优秀的制作呈现最美的工大人、工大景。视觉影像像期待用最用心的摄制给你带来最高级的视听盛宴!\n欢迎关注 b站:浙江工业大学精弘网络\n微信视频号:精小弘在线。", n: 2 },
  { wh: ["2/3", "3/4"], img: [["/photo/product/4.png", "邮箱网址：mail.zjut.edu.cn"]], title: "/学生邮箱/", introduce: "学校为每一位学生提供邮箱,由精弘网络提供运营服务,是你参与学校工作、学习、生活等各类活动的官方邮箱,伴随你的大学四年乃至一生,毕业后仍可享受校方的服务。", n: 3 },
];
export const productsMobile = [
  { img: "/photo/product/1.png", title: "微信小程序", n: 0 },
  { img: "/photo/product/2.png", title: "微信服务号", n: 1 },
  { img: "/photo/product/3.jpg", title: "视觉影像", n: 2 },
  { img: "/photo/product/4.png", title: "学生邮箱", n: 3 },
];
export const product_details = [
  { title: "微精弘", img: "/photo/product/1.png", content: "微精弘是专属于zjuter的微信小程序，集课表、成绩查询、考试安排、空教室查询、一卡通、借阅等功能于一身，是工大学子必不可少的一体化校园移动门户。" },
  { title: "微信服务号", img: "/photo/product/2.png", content: "浙江工业大学精弘网络微信公众号，提供结合精弘网络产品的实用功能，推出微精弘板块等系列服务，是工大学子学习生活的好帮手。" },
  { title: "视觉影像", img: "/photo/product/3.jpg", content: "校园学习生活、学校各类大型活动的记录团队，专注于摄影、视频前期拍摄和后期剪辑，致力于用最优秀的制作呈现最美的工大人、工大景。视觉影像像期待用最用心的摄制给你带来最高级的视听盛宴!" },  //欢迎关注 b站:浙江工业大学精弘网络微信视频号:精小弘在线。
  { title: "学术邮箱", img: "/photo/product/4.png", content: "学校为每一位学生提供邮箱，由精弘网络提供运营服务，是你参与学校工作、学习、生活等各类活动的官方邮箱，伴随你的大学四年乃至一生，毕业后仍可享受校方的服务。" },
];

export const departments = [
  { img: "/photo/svg/常务.svg", name: "常务板块", href: "/department/changwu" },
  { img: "/photo/svg/技术.svg", name: "技术板块", href: "/department/jishu" },
  { img: "/photo/svg/运营.svg", name: "运营板块", href: "/department/yunying" },
  { img: "/photo/svg/设计.svg", name: "设计板块", href: "/department/sheji" },
  { img: "/photo/svg/新媒体.svg", name: "新媒体板块", href: "/department/xinmeiti" },
  { img: "/photo/svg/易班.svg", name: "易班文化工作站", href: "/department/yiban" },
];

export const mokuai = [
  {
    img: [1, 2, 3, 4, 5, 6, 7],
    content: [
      { title: "部门介绍", content: "        Hello，这里是秘书处，位于莫干山校区（对！就是那个设施完备、远离世俗（地理位置略偏僻so显得有些荒无人烟）的新校区。莫干山下好读书⸺这里是莫干山打工二人组，我们掌管着小金库、管理安排精弘的资金和物资，管理学生邮箱，我们也负责策划实施莫干山校区相关活动、安排事宜，同时协助朝晖、屏峰两校区办公室开展相关工作。来精弘，有底气！！秘书处欢迎你的到来！！" },
      { title: "部门介绍", content: "        办公室⸺精弘的小管家！精弘的小金库！精弘名副其实的“小老板”！\n        作为作为常务板块的重要部门，办公室的日常任务包括但不限于：收集各部门工作任务；负责精弘日常事务；撰写各项委托书；掌管精弘物资及账单报销事项.....\n        在精弘的各项大型活动中，毅行、网文、网安......你都可以见到办公室忙碌的身影。\n        在认真工作之余，团建，我们也是认真的！桌游、轰趴、聚餐，办公室带你玩，带给你最酣畅淋漓的笑声。办公室有最最亲切可爱的部长们，Mary姐姐和他两个的“姐妹”、“管家”、“司机”，组合成了超有爱的大家庭。\n        一句话，办公室⸺精弘最闪耀的星！" },
      { title: "部长有话说", content: "        欢迎各位小朋友加入精弘最闪耀的星⸺办公室！\n        我们认真地工作：年会、毅行、网文、网安......各项大型活动中办公室都起着至关重要的作用；日常精弘事务的负责，联结沟通各部门，精弘小金库的掌管，办公室也没在怕的！\n        我们认真地玩：桌游、轰趴、聚餐。这里有Mary公主和他两个的“姐妹”、“管家”、“司机”最最有趣的五个灵魂，相互碰撞必会迸发精彩的⽕花！只要你敢想，我们陪你一起嗨！\n        在办公室这个大家庭我们学在一起，玩在一起。工作上也会悉心指导大家，生活上带你吃带你玩，遇到的任何疑难，每个办公室的家人都会为你答疑解惑（笔芯）\n        如果既想要锻炼工作能力，又或是想在部门里结交新朋友，办公室会是你的不二之选。我们是一个充满爱的大家庭，改变自己，从加入办公室开始！我们在办公室等待可爱的你们的到来！" },
      { title: "部门介绍", content: "        hello，看我！这里是精弘网络常务板块活动部！办公室和秘书处管理着小金库，⽽小金库里面的资金和我们息息相关。\n        活动部的主要工作之一便是拉取外联，你可以和很多曾经很遥远的商家沟通交流拉取赞助，可以锻炼自己的沟通协调能力。另一个主要工作就是策划各种各样的活动游戏啦，有没有在综艺中觉得很有趣的游戏呢，在这里你便有机会把它们细细策划并实施。\n        " },
    ],
  },
  {
    img: [8],
    content: [
      { title: "部门介绍", content: "        精弘网络的相关产品开发部门，负责承担技术开发的职责。平时负责产品需求的实现和性能迭代优化。主要参与设计了微精弘，精弘毅行报名系统，精小弘beta等产品。" },
      { title: "部门介绍", content: "        精弘网络运维部，负责服务器日常的运行维护，以及精弘网络新服务的搭建。平时主要参与服务器压力监测，系统相关组件更新维护，安全漏洞排查，服务运行状态监测。" },
      { title: "迎新词", content: "        熟悉Linux操作之人，善于将UI设计者的天马行空设计落地的前端开发者，愿使网站后端程序不动如山，其疾如风的后端程序猿，都能在精弘这两大部门找到自己的归宿，大展身手。我们热切希望能够和所有在技术之道上攀登的“修行者”在此相遇！" },
    ],
  },
  {
    img: [9, 10],
    content: [
      { title: "部门介绍", content: "        你好呀，这里是Touch产品，那么产品部是做什么的呢？在这里，我们将扮演产品经理的⻆色，探讨工大师生们的需求，和精弘的各位小伙伴一起合作，更新迭代实用的原有产品以及开发出好看又好用的新产品。我们绝对不咕咕，助力工大师生的便捷美好生活。" },
      { title: "小朋友们看这里！", content: "        无论你对产品是有充分的了解还是小白一枚，来这里的学习一定会让你收获满满，做出的成果一定会让你成就满满。快来快来吧，期待与你的见面！" },
    ],
  },
  {
    img: [11, 12, 13],
    content: [
      { title: "部门介绍", content: "        小弘工作室是属于精弘网络的一个创意创新服务部门，针对学校活动的宣传方案进行设计。在工作中，部门成员之间会一起协作，为活动的宣传拿出一套完整有创意的设计。其中设计的主要内容包括：海报设计、喷绘设计、UI界面设计、精弘网络周边文创类产品设计以及各类视觉方案设计。" },
      { title: "招新宣言", content: "        如果你对设计怀着一份好奇向往的憧憬，那么小弘工作室便是一个可以让你很好地接触了解设计的地方。在这，你不仅能遇见兴趣爱好相似的小伙伴，还能学会并掌握一些设计技能与设计知识。只要你怀有一颗喜爱设计的心，我们都欢迎你的加入~" },
    ],
  },
  {
    img: [14],
    content: [
      { title: "部门介绍", content: "        视觉影像视觉影像是校园学习生活、以及学校各类大型活动的记录团队，我们专注于摄影与视频前期拍摄和后期剪辑，致力于用最优秀的制作呈现最美的工大人、工大景。视觉影像期待用最用心的摄制给你带来最高级的视听盛宴！欢迎关注b站：485566103、微信视频号：精小弘在线。隶属于新媒体的视觉影音也有脱单魔法，想要脱单并喜欢摄影的小朋友们，走过路过不要过哦" },
      { title: "部门介绍", content: "        负责公众号“精小弘在线”与“浙江工业大学精弘网络“的主要运营和知乎账号”浙江工业大学“、贴吧”浙江工业大学吧“、微博”浙江工业大学精弘网络“的幕后管理。主要工作是微信公众号推文的撰写和排版，致力于用图片和文字以及亿点点的细节来讲述工大故事，分享校园生活。\n        如果你略懂排版、PS，那就太好了！我们工作室就需要你这样的人才！加入我们，你会拥有N个平台去展示提升你自己。如果你完全不会以上这些，那也没关系，我们会给你提供专业的教学，包教包会！加入我们，可以一起吃香喝辣、快乐生活！\n        所以，来吧来吧！加入我们新媒体编辑工作室！" },
    ],
  },
  {
    img: [15, 16, 17], content: [
      { title: "介绍部门", content: "        易班文化工作站是精弘会长主管的团队；为了响应教育部日益增长的网络思政教育要求与易班建设任务，易班网络部门主要负责易班软件信息的运营维护以及易班的更新等工作；易班将负责主办网络安全宣传月、网络文化节等主题活动；易班与多部门合作，作为精弘网络里的部门润滑剂。" },
      { title: "招新宣言", content: "        想参与学校易班推送更新吗？想主办网安月、网文节活动吗？想了解并协助精弘各类活动幕后吗？只要你有一颗勇于创新，愿意做事，不怕困难的心，就可以来易班文化工作站与我们一起！易班文化工作站期待你的加入！\n        易班牛牛，冲冲冲！" }]
  },
];