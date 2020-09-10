import { GET_FLOOR } from './types';
// 唯一更改state的方法
// mutation必须是同步函数
export default {
    [GET_FLOOR](state,floors){
        // console.log(state,floors);
        state.floorAds = floors;
        // console.log(state,floors);
    },
}