import React from 'react';
import WalterWhite from '../assets/WalterWhite.png'

const Main = ({ setBreakingBad }) => {
    return (
        <main className='breakingbad'>
            {
                setBreakingBad ? (
                    <div className='authorAndQuote-card'>
                        <h2> Author: {setBreakingBad[0]?.author} </h2>
                        <h3> Quote: {setBreakingBad[0]?.quote}</h3>

                    </div>)
                    :
                    <div className="img-container">
                        <img className="walterwhite-png" src={WalterWhite} />
                    </div>

            }
        </main >
    );
}



export default Main