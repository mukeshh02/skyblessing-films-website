import React, { useState } from 'react';
import './EntrySplash.css';

const EntrySplash = ({ onEnter }) => {
    const [showLoader, setShowLoader] = useState(false);

    const handleEnter = () => {
        setShowLoader(true);
        setTimeout(() => {
            onEnter();
        }, 8000); // match GIF duration
    };

    return (
        <section 
            className="entry-splash"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/Img/namanverma-cover.jpg'})`
            }}
        >
            {showLoader ? (
                <div className="route-loader">
                    <img
                        src={process.env.PUBLIC_URL + '/Img/LOADING-TSB-black.gif'}
                        alt="Loading"
                    />
                </div>
            ) : (
                <div className="entry-center">
                    <div className="brand-mark">
                        <img 
                            src={process.env.PUBLIC_URL + '/Img/LOGO-Main-TSB-WHite.png'} 
                            alt="Skyblessing Films" 
                            className="brand-logo"
                            style={{ display: 'block', margin: '0 auto' }}
                        />
                    </div>
                    <button className="enter-btn" onClick={handleEnter} aria-label="Enter site">
                        ENTER
                    </button>
                </div>
            )}
        </section>
    );
};

export default EntrySplash;


