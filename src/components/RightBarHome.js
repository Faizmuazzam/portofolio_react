import React from 'react';
import { Icon } from '@iconify/react';

const RightBarHome = ({ children, classCustom, classFullH }) => {
    return (
        <section className='rightBarHome'>
            <div className={`inner ${classFullH}`}>
                <div className='topDecorTheme'>
                    <div className='separator'></div>
                </div>
                <div className='midDecorTheme'>
                    <div className='innerMid'>
                        <div className='boxRoundScroll'>
                            <div className="roundAnim"></div>
                        </div>
                        <div className='arrowBottom'>
                            <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
                        </div>
                    </div>
                </div>
                <div className={`bottomDecorTheme ${classCustom}`}>
                    {children}
                </div>
            </div>
        </section>
    );
}

export default RightBarHome;
