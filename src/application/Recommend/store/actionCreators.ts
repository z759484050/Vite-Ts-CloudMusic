import * as actionTypes from './constants';
import { getBannerRequest} from '../../../api/request';
import {Dispatch} from 'redux'
import {IBannerList} from './reducer'
import {AxiosResponse} from 'axios'
import { AnyAction } from 'redux';
export const changeBannerList=(data:IBannerList)=>({
    type:actionTypes.CHANGE_BANNER,
    data
})

export const getBannerList = () => {
    return (dispatch: Dispatch) => {
      getBannerRequest<{ banners: IBannerList }>().then((data:any) => {
        console.log(data)
        const action:AnyAction= changeBannerList(data.banners);
        dispatch(action);
      }).catch(() => {
        console.log("轮播图数据传输错误");
      }) 
    }
  };