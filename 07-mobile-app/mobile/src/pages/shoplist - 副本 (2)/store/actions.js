import { GET_SHOPLIST } from './types';
import api from 'api';

export default {
    async [GET_SHOPLIST]({commit},id){
        var result = await api.getShopList({
			category:id,
			limit:4,
			start:4
		})
        // console.log(result);
        // console.log(id);
		if(result.data.code == 0){
			commit(GET_SHOPLIST,result.data.data)
		}
	},
}