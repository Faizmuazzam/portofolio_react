import React from 'react';

const OverlayArrow = () => {
    return (
        <div className='bgArrow'>
            <div className='sliderProgress'>
                <div className='vProgress'>
                    <svg className="circ" width="50" height="50">
                        <circle className="circ2" cx="25" cy="25" r="23" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"></circle>
                        <circle className="circ1" cx="25" cy="25" r="23" stroke="#fff" stroke-width="2" fill="none"></circle>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default OverlayArrow;
