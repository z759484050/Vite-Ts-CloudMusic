import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from './store/actionCreators';
import { Content } from './style';
import Slider from '../../componments/slider'
import { forceCheck } from 'react-lazyload';
import RecommendList from '../../componments/list/index';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { Scroll } from '../../baseUI/scroll/index';
import {RootState} from '../../store/reducer'

const Recommend =(props:RouteConfigComponentProps)=>{
    const { bannerList,recommendList,enterLoading} = useSelector((state: RootState) => ({
        bannerList: state.recommend.bannerList,
        recommendList: state.recommend.recommendList,
        enterLoading: state.recommend.enterLoading
      }));

      const dispatch = useDispatch();

const getBannerDataDispatch = () => {
    dispatch(actionTypes.getBannerList());
  };

  const getRecommendListDataDispatch = () => {
    dispatch(actionTypes.getRecommendList());
  }

  useEffect(() => {
    if(!bannerList.length){
      getBannerDataDispatch();
    };
    if(!recommendList.length){
      getRecommendListDataDispatch();
    }
    // eslint-disable-next-line
  }, []);


  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
    </Content>
  ) 

    
}


export default React.memo(Recommend);
