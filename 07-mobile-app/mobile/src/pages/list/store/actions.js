import { GET_LISTICONS } from './types';
import api from 'api';

export default {
    async [GET_LISTICONS]({commit}){
        var result = await api.getCategoryIcons()
        // console.log(result);
		if(result.data.code == 0){
			commit(GET_LISTICONS,result.data.data)
		}
	},
}