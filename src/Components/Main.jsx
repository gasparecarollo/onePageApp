import React from 'react';
import WalterWhite from '../assets/WalterWhite.png'

const Main = ({ setAuthor }) => {
    return (
        <main className='breakingbad'>
            {
                breakingbad ? (
                    <div className='authorAndQuote-card'>
                        <h2> Author: {breakingbad[0]?.author} </h2>
                        <h3> Quote: {breakingbad[0]?.quote}</h3>

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