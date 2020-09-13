import { GET_SHOPLIST } from './types';
// 唯一更改state的方法
// mutation必须是同步函数
export default {
    [GET_SHOPLIST](state,shops){
        // console.log(state,shops);
        state.shoplist = shops;
        // console.log(state,shops);
    },
}