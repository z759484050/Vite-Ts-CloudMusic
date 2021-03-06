import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { Top, Tab, TabItem } from "./style";
import { NavLink } from 'react-router-dom';

function Home (props:RouteConfigComponentProps) {
    const { route } = props;
    return (
      <div>
        <Top>
          <span className="iconfont menu">&#xe65c;</span>
          <span className="title">网抑云</span>
          <span className="iconfont search" onClick={() => props.history.push('/search')}>&#xe62b;</span>
        </Top>
        <Tab>
          <NavLink to="/recommend" activeClassName="active"><TabItem><span > 推荐 </span></TabItem></NavLink>
          <NavLink to="/singers" activeClassName="active"><TabItem><span > 歌手 </span></TabItem></NavLink>
          <NavLink to="/rank" activeClassName="active"><TabItem><span > 排行榜 </span></TabItem></NavLink>
        </Tab>
        {renderRoutes(route?.routes)}

      </div>
    )
  }
  
  export default React.memo (Home);
