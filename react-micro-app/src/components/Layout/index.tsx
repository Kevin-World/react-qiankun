import { Outlet, Link, useLocation } from "react-router-dom";

import menus from "../../config/menus";
import "./layout.less";

const Layout: any = (): any => {
  const { pathname } = useLocation();

  return (
    <>
      <div className='qiankun-layout-title'>
        <p>React Micro App</p>
      </div>
      <div className='qiankun-layout-head'>
        {menus.map(m => (
          <div className='qiankun-layout-head-menu-item' key={m.path}>
            <Link to={m.path}>{m.title}</Link>
          </div>
        ))}
      </div>
      <div
        className='qiankun-layout-content'
        style={{ display: pathname.includes('/micro-app') ? 'none' : 'block' }}
      >
        <Outlet />
      </div>
    </>
  )
};

export default Layout