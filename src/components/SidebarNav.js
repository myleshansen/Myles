import React from "react";
import { Sidenav } from 'rsuite';

import '../styles/SidebarNav.css'

function SidebarNav() {
  return <div className="navbar">
    <Sidenav defaultOpenKeys={['3', '4']}>
      <Sidenav.Body>
        <div className="links">Hello</div>
      </Sidenav.Body>
    </Sidenav>
  </div>;
}

export default SidebarNav;