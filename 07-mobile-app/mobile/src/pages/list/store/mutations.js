import { GET_LISTICONS } from './types';
// 唯一更改state的方法
// mutation必须是同步函数
export default {
    [GET_LISTICONS](state,icons){
        console.log(state);
        state.listicons = icons;
        // console.log(state,icons);
    },
}