import { GET_POSITIONADS,GET_CATEGORYICONS } from './types';
// 唯一更改state的方法
// mutation必须是同步函数
export default {
    [GET_POSITIONADS](state,ads){
        // console.log(state,ads);
        state.positionads = ads;
        // console.log(state,ads);
    },
    [GET_CATEGORYICONS](state,icons){
        // console.log(state,icons);
        state.categoryicons = icons;
        // console.log(state,icons);
    },
}