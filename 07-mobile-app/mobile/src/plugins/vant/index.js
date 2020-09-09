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


Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Sticky);