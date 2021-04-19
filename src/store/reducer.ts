import {combineReducers} from 'redux'
import {reducer as recommendReducer} from '../application/Recommend/store/index'

export interface RootState{
    recommend:recommendReducer.RecommendState
}


export default combineReducers({
    recommend: recommendReducer.recommendReducer,
  });