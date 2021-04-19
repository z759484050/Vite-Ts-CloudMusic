import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../application/Home'
import Recommend from '../application/Recommend'
const route=[
    {
      path: "/",
      component: Home,
      routes: [
        {
          path: "/",
          exact: true,
          render: () => (
            <Redirect to={"/recommend"}/>
          )
        },
        {
          path:'/recommend',
          component: Recommend,
        }
        // {
        //   path: "/recommend",
        //   component: Recommend,
        //   routes:[
        //   {
        //     path:'/recommend/:id',
        //     component:PlayList
        //   },
        //   ]
        // },
        // {
        //   path: "/singers",
        //   component: Singers,
        //   routes:[
        //     {
        //       path:'/singers/:id',
        //       component:Singer
        //     }
        //   ]
        // },
        // {
        //   path: "/rank",
        //   component: Rank,
        //   routes:[
        //     {
        //       path:'/rank/:id',
        //       component:PlayList
        //     }
        //   ]
        // },
        // {
        //   path:'/search',
        //   component:Search,
        //   routes:[
        //     {
        //       path:'/recommend/:id',
        //       component:PlayList
        //     },
        //     {
        //       path:'/singers/:id',
        //       component:Singer
        //     }
  
        //   ]
        // }
      ]
    }
  
  ]
  export default route