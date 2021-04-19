import * as actionTypes from './constants';
import { getBannerRequest,getRecommendListRequest} from '../../../api/request';
import {Dispatch} from 'redux'
import {IBannerList,IRecommendList} from './reducer'
import { AnyAction } from 'redux';
export const changeBannerList=(data:IBannerList)=>({
    type:actionTypes.CHANGE_BANNER,
    data
})
export const changeRecommendList = (data: IRecommendList) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data
});

export const changeEnterLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});


export const getBannerList = () => {
    return (dispatch: Dispatch) => {
      getBannerRequest<{ banners: IBannerList }>().then((data:any) => {
        const action:AnyAction= changeBannerList(data.banners);
        dispatch(action);
      }).catch(() => {
        console.log("轮播图数据传输错误");
      }) 
    }
  };


  export const getRecommendList = () => {
    return (dispatch: Dispatch) => {
      getRecommendListRequest<{ result: IRecommendList }>().then((data:any) => {
        console.log(data.result)
        dispatch(changeRecommendList(data.result));
        dispatch(changeEnterLoading(false));
      }).catch(() => {
        console.log("推荐歌单数据传输错误");
      });
    }
  };



