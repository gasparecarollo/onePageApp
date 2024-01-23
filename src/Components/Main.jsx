import React from 'react';
import WalterWhite from '../assets/WalterWhite.png'

const Main = ({ breakingBad }) => {
    return (
        <main className='breakingbad'>
            {
                breakingBad ? (
                    <div className='authorAndQuote-card'>
                        <h2> Author: {breakingBad[0]?.author} </h2>
                        <h3> Quote: {breakingBad[0]?.quote}</h3>

                    </div>
                ) : (
                    <div className="img-container">
                        <img className="walterwhite-png" src={WalterWhite} alt="Walter White logo" />
                    </div>

                )}
        </main >
    );
};



export default Main