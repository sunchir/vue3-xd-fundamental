interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

interface GroupTitleItems {
  appNum?: number;
  id: number;
  isInit?: number;
  name: String;
  parentId?: number;
}

interface AppList {
  appId: string;
  appSecret: string;
  appUrl?: string;
  categoryId?: number;
  description: string;
  h5Url?: string;
  icon?: string;
  id: number;
  isInit?: number;
  maintenanceUrl?: string;
  name: string;
  orgName?: string;
  orgSn?: string;
  sort?: number;
  thirdApp?: number;
  type?: string;
}

export const groupTitleItems: GroupTitleItems[] = [
  {
    appNum: 1,
    id: 12,
    isInit: 0,
    name: '评价中心',
    parentId: undefined,
  },
  {
    appNum: 4,
    id: 4,
    isInit: 0,
    name: '数据看板',
    parentId: undefined,
  },
  {
    appNum: 3,
    id: 10,
    isInit: 0,
    name: '学生管理',
    parentId: undefined,
  },
  {
    appNum: 8,
    id: 1,
    isInit: 0,
    name: '基础系统',
    parentId: undefined,
  },
  {
    appNum: 6,
    id: 3,
    isInit: 0,
    name: '奖助勤贷',
    parentId: undefined,
  },
  {
    appNum: 3,
    id: 10,
    isInit: 0,
    name: '学生管理',
    parentId: undefined,
  },
  {
    appNum: 8,
    id: 1,
    isInit: 0,
    name: '基础系统',
    parentId: undefined,
  },
  {
    appNum: 6,
    id: 3,
    isInit: 0,
    name: '奖助勤贷',
    parentId: undefined,
  },
];

export const appList: AppList[] = [
  {
    appId: '345fgdg3232',
    appSecret: 'b547jj56uufhh56y43',
    appUrl: 'https://jzsz.uestc.edu.cn/instructor/',
    categoryId: 4,
    description: '辅导员数据看板',
    h5Url: undefined,
    icon: 'group1/M00/02/57/wKgLB2BtXLyAXQc1AAAWBkldMYk479.png',
    id: 65,
    isInit: 0,
    maintenanceUrl: 'https://jzsz.uestc.edu.cn/instructor/#/board',
    name: '辅导员数据看板',
    orgName: '电子科技大学',
    orgSn: 'h001',
    sort: 44,
    thirdApp: 1,
    type: undefined,
  },
  {
    appId: '345fgsg3232',
    appSecret: 'b547jj5suufhh56y43',
    appUrl: 'https://jzsz.uestc.edu.cn/vacation/',
    categoryId: 4,
    description: '请销假数据看板',
    h5Url: undefined,
    icon: 'group1/M00/02/57/wKgLB2BtXMqAfgR2AAAR9NHsiDI576.png',
    id: 66,
    isInit: 0,
    maintenanceUrl: 'https://jzsz.uestc.edu.cn/vacation/#/board',
    name: '请销假数据看板',
    orgName: '电子科技大学',
    orgSn: 'h001',
    sort: 44,
    thirdApp: 1,
    type: undefined,
  },
  {
    appId: '3453dsfs',
    appSecret: 'asdf436dg5y76u88j',
    appUrl: 'https://jzsz.uestc.edu.cn/platform/',
    categoryId: 4,
    description: '智慧学工数据看板',
    h5Url: undefined,
    icon: 'group1/M00/02/5C/wKgLB2CaJDGAEcKnAAATo-jvCXY121.png',
    id: 69,
    isInit: 0,
    maintenanceUrl: 'https://jzsz.uestc.edu.cn/platform/',
    name: '平台数据看板',
    orgName: '电子科技大学',
    orgSn: 'h001',
    sort: 44,
    thirdApp: 1,
    type: undefined,
  },
  {
    appId: '345rddsfs',
    appSecret: 's34552dgd4g',
    appUrl: 'https://jzsz.uestc.edu.cn/studatav/',
    categoryId: 4,
    description: '学生数据看板',
    h5Url: undefined,
    icon: 'group1/M00/02/5F/wKgLB2C_PiqANUW9AAASGMAH58s300.png',
    id: 71,
    isInit: 0,
    maintenanceUrl: 'https://jzsz.uestc.edu.cn/studatav/',
    name: '学生数据看板',
    orgName: '电子科技大学',
    orgSn: 'h001',
    sort: 44,
    thirdApp: 1,
    type: undefined,
  },
];

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
  },
  {
    title: '仪表盘',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
  },
  {
    title: '组件',
    icon: 'ion:layers-outline',
    color: '#e18525',
  },
  {
    title: '系统管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
  },
  {
    title: '权限管理',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
  },
  {
    title: '图表',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
  },
];

export const tabList = [
  {
    key: 'notice',
    tabText: '任务',
    slots: { tab: 'noticeRender' },
  },
  {
    key: 'task',
    tabText: '任务',
    slots: { tab: 'taskRender' },
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '刚刚',
    desc: `在 <a>开源组</a> 创建了项目 <a>Vue</a>`,
  },
  {
    avatar: 'dynamic-avatar-2|svg',
    name: '艾文',
    date: '1个小时前',
    desc: `关注了 <a>威廉</a> `,
  },
  {
    avatar: 'dynamic-avatar-3|svg',
    name: '克里斯',
    date: '1天前',
    desc: `发布了 <a>个人动态</a> `,
  },
  {
    avatar: 'dynamic-avatar-4|svg',
    name: 'Vben',
    date: '2天前',
    desc: `发表文章 <a>如何编写一个Vite插件</a> `,
  },
  {
    avatar: 'dynamic-avatar-5|svg',
    name: '皮特',
    date: '3天前',
    desc: `回复了 <a>杰克</a> 的问题 <a>如何进行项目优化？</a>`,
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '杰克',
    date: '1周前',
    desc: `关闭了问题 <a>如何运行项目</a> `,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '1周前',
    desc: `发布了 <a>个人动态</a> `,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '2021-04-01 20:00',
    desc: `推送了代码到 <a>Github</a>`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: 'Github',
    icon: 'carbon:logo-github',
    color: '',
    desc: '不要等待机会，而要创造机会。',
    group: '开源组',
    date: '2021-04-01',
  },
  {
    title: 'Vue',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: '现在的你决定将来的你。',
    group: '算法组',
    date: '2021-04-01',
  },
  {
    title: 'Html5',
    icon: 'ion:logo-html5',
    color: '#e18525',
    desc: '没有什么才能比努力更重要。',
    group: '上班摸鱼',
    date: '2021-04-01',
  },
  {
    title: 'Angular',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: '热情和欲望可以突破一切难关。',
    group: 'UI',
    date: '2021-04-01',
  },
  {
    title: 'React',
    icon: 'bx:bxl-react',
    color: '#00d8ff',
    desc: '健康的身体是实目标的基石。',
    group: '技术牛',
    date: '2021-04-01',
  },
  {
    title: 'Js',
    icon: 'ion:logo-javascript',
    color: '#4daf1bc9',
    desc: '路是走出来的，而不是空想出来的。',
    group: '架构组',
    date: '2021-04-01',
  },
];
