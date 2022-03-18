import React from "react";
import { Outlet, Link } from "react-router-dom";

import menus from "../../config/menus";
import "./layout.less";

const Layout: any = (): any => {
  return (
    <>
      <div className='qiankun-layout-wrap'>
        {menus.map(m => (
          <div className='qiankun-layout-wrap-menu-item'>
            <Link to={m.path}>{m.title}</Link>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  )
};

export default Layout