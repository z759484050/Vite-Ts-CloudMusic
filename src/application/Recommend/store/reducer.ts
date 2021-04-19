import * as actionTypes from './constants';
import { produce } from 'immer'
import { AnyAction } from 'redux';

interface IBannerListItem {
    imageUrl: string;
  }

  interface IRecommendListItem {
    id: string;
    picUrl: string;
    name: string;
    playCount: number;
  }
  export interface RecommendState {
    bannerList: IBannerList;
    recommendList: IRecommendList;
    enterLoading: boolean;
  }

  export type IBannerList = IBannerListItem[];
  export type IRecommendList = IRecommendListItem[];


  const defaultState: RecommendState = {
    bannerList: [],
    recommendList: [],
    enterLoading: true
  };
  export const recommendReducer=produce((state,action:AnyAction)=>{
    switch(action.type){
        case actionTypes.CHANGE_BANNER:
            state.bannerList=action.data;
            break;
        case actionTypes.CHANGE_ENTER_LOADING:
          state.enterLoading=action.data;
          break;
        case actionTypes.CHANGE_RECOMMEND_LIST:
          state.recommendList=action.data
          break;
    }
  },defaultState)