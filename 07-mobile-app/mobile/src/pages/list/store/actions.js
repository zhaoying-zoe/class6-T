import { GET_LISTICONS,GET_SHOP } from './types';
import api from 'api';

export default {
    async [GET_LISTICONS]({commit}){
        var result = await api.getCategoryIcons()
        // console.log(result);
		if(result.data.code == 0){
			commit(GET_LISTICONS,result.data.data)
		}
	},
    async [GET_SHOP]({commit},id){
        var result = await api.getListIcons({
			pid:id,
			limit:20
		})
        // console.log(result,id);
		if(result.data.code == 0){
			// commit(GET_SHOP,result.data.data._id)
			commit(GET_SHOP,result.data.data)
		}
	},
}