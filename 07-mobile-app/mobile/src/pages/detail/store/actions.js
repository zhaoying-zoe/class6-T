import { GET_DETAIL } from './types';
import api from 'api';

export default {
    async [GET_DETAIL]({commit},id){
        var result = await api.getDetail({
			id:id
		})
        // console.log(result);
		if(result.data.code == 0){
			// console.log(result.data.data.images.split(','));
			commit(GET_DETAIL,result.data.data)
		}
	},
}