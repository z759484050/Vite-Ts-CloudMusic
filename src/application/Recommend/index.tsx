import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from './store/actionCreators';
import { Content } from './style';
import Slider from '../../componments/slider'
import { forceCheck } from 'react-lazyload';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { Scroll } from '../../baseUI/scroll/index';
import {RootState} from '../../store/reducer'

const Recommend =(props:RouteConfigComponentProps)=>{
    const { bannerList} = useSelector((state: RootState) => ({
        bannerList: state.recommend.bannerList,
      }));

      const dispatch = useDispatch();

const getBannerDataDispatch = () => {
    dispatch(actionTypes.getBannerList());
  };

  useEffect(() => {
    if(!bannerList.length){
      getBannerDataDispatch();
    }
    // eslint-disable-next-line
  }, []);


  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerList}></Slider>
        </div>
      </Scroll>
    </Content>
  ) 

    
}


export default React.memo(Recommend);
