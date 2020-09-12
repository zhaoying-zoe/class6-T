import { GET_DETAIL } from './types';
// 唯一更改state的方法
// mutation必须是同步函数
export default {
    [GET_DETAIL](state,detail){
        // console.log(state);
        state.detail = detail;
        // 把图片单独存在数组里
        var images = detail.images.split(',')
        state.images = images;
        // console.log(detail,images);
    },
}