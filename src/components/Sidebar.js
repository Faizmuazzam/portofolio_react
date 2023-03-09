import React from 'react';
import { Icon } from '@iconify/react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarContent'>
                <div className='sideTop'>
                    <div className='viewContent'></div>
                </div>
                <div className='sideBottom'>
                    <div className='navSosmed'>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Icon icon="ri:facebook-fill" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Icon icon="mdi:instagram" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Icon icon="mdi:twitter" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Icon icon="mdi:linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='viewSeparator'>
                        <div className='topSeparator'></div>
                        <div className='bottomSeparator'></div>
                    </div>
                    <div className='navShare'>
                        <div className='bgShare'></div>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href='#'>
                                    <Icon icon="ic:round-plus" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Share</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
