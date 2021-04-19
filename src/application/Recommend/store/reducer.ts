import * as actionTypes from './constants';
import { produce } from 'immer'
import { AnyAction } from 'redux';

interface IBannerListItem {
    imageUrl: string;
  }

  export interface RecommendState {
    bannerList: IBannerList;
  }

  export type IBannerList = IBannerListItem[];


  const defaultState: RecommendState = {
    bannerList: [],
  };
  export const recommendReducer=produce((state,action:AnyAction)=>{
    switch(action.type){
        case actionTypes.CHANGE_BANNER:
            state.bannerList=action.data
    }
  },defaultState)