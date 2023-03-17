import React, { Fragment } from 'react';

import { Icon } from '@iconify/react';

import $ from 'jquery';

const FooterInside = () => {
    return (
        <Fragment>
            <footer className='footer'>
                <div className='boxNavigation'>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>
                                ABOUT
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>
                                SERVICES
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>
                                TEAM
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>
                                SKILLS
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>
                                CLIENTS
                            </a>
                        </li>
                    </ul>

                    <div className='btnPageTop'>
                        <a href="" className='btn p-0'>
                            <Icon icon="material-symbols:arrow-back-ios-new-rounded" rotate={1} />
                        </a>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default FooterInside;
