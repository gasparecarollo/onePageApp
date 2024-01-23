import React from 'react';
import WalterWhite from '../assets/WalterWhite.png'

const Main = ({ breakingbad }) => {
    return (
        <main className='breakingbad'>
            {
                breakingbad ?
                    <div>
                        <h2> Author: {breakingbad.name.charAt(0).toUpperCase() + breakingbad.name.slice(1)} </h2>
                        <h3> Quote: {breakingbad.quote}</h3>

                    </div>
                    :
                    <div className="img-container">
                        <img className="walterwhite-png" src={WalterWhite} />
                    </div>

            }
        </main >
    );
}



export default Main;