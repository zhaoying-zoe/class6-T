import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
// 引入搜索
import { Search } from 'vant';
// 引入图片
import { Image as VanImage } from 'vant';
// 引入宫格
import { Grid, GridItem } from 'vant';
// 引入粘性布局
import { Sticky } from 'vant';
// 引入layout布局
import { Col, Row } from 'vant';
// 引入轮播图
import { Swipe, SwipeItem } from 'vant';
// 引入list分类选择
import { Sidebar, SidebarItem } from 'vant';
// 引入按钮
import { Button } from 'vant';
// 引入商品card
import { Card } from 'vant';

Vue.use(Card);
Vue.use(Button);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Sticky);