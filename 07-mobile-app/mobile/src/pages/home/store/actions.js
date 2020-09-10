import { GET_POSITIONADS,GET_CATEGORYICONS } from './types';
import api from 'api';

export default {
    async [GET_POSITIONADS]({commit}){
        var result = await api.getPositionAds()
        // console.log(result);
		if(result.data.code == 0){
			commit(GET_POSITIONADS,result.data.data)
		}
	},
    async [GET_CATEGORYICONS]({commit}){
        var result = await api.getCategoryIcons()
        // console.log(result);
		if(result.data.code == 0){
			commit(GET_CATEGORYICONS,result.data.data)
		}
	},
}