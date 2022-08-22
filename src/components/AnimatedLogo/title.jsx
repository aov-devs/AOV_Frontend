import React, { useState, useEffect } from 'react';
import LogoImg from 'src/assets/logo.png'
import './style.scss';

const Logo = ({ }) => {

    const [isFN, setIsFn] = useState(true);

    setTimeout(()=> setIsFn(false), 2000);

    return (
        <div >
            <ul className={`aov-logo ${isFN ? '' : 'hidden'}`}>

                <div className={`logo-image ${isFN ? 'ghost' : ''}`}>
                    <img src={LogoImg} height='50px' />
                </div>
                <li className="ghost">T</li>
                <li className="ghost">h</li>
                <li className="ghost">e</li>
                <li className="spaced">A</li>
                <li className="ghost">r</li>
                <li className="ghost">c</li>
                <li className="ghost">h</li>
                <li className="ghost">i</li>
                <li className="ghost">v</li>
                <li className="ghost">e</li>

                <li className="spaced capital">o</li>
                <li className="ghost">f</li>

                <li className="spaced">V</li>
                <li className="ghost">a</li>
                <li className="ghost">n</li>
                <li className="ghost">i</li>
                <li className="ghost">t</li>
                <li className="ghost">a</li>
                <li className="ghost">s</li>

            </ul>
        </div>
    );
};

export default Logo;
