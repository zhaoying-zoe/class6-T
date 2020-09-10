import { GET_FLOOR } from './types';
import api from 'api';

export default {
    async [GET_FLOOR]({commit}){
        var result = await api.getFloors()
        // console.log(result);
		if(result.data.code == 0){
			commit(GET_FLOOR,result.data.data)
		}
	},
}