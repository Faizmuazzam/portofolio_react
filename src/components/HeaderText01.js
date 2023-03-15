import React, { Fragment } from 'react';

const HeaderText01 = ({ children }) => {
    return (
        <Fragment>
            <div className='headerType001'>
                <div className='boxContentHeader'>
                    <div className='contentText'>
                        {children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HeaderText01;
