import React, { useState, useEffect } from 'react';
import LogoImg from 'src/assets/logo.png'
import './style.scss';

const AnimatedLogo = ({ }) => {

    const [isFN, setIsFn] = useState(false);

    setTimeout(() => setIsFn(true), 1000);

    return (
        <div >
            <div className='animated-logo'>
                <div className='logo-image'>
                    <img src={LogoImg} />
                </div>
                <ul className={`app-name ${isFN ? '' : 'hidden'}`}>
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
                    <li className="spaced">o</li>
                    <li className="ghost">f</li>
                    <li className="spaced">V</li>
                    <li className="ghost">a</li>
                    <li className="ghost">n</li>
                    <li className="ghost">i</li>
                    <li className="ghost">t</li>
                    <li className="ghost">a</li>
                    <li className="ghost">s</li>
                </ul>


                <div>
                    A place to see translations of VnC contents
                </div>
            </div>
        </div>
    );
};

export default AnimatedLogo;
