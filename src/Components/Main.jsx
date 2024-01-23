import React from 'react';
import WalterWhite from '../assets/WalterWhite/WalterWhite.png';

const Main = ({ breakingbad }) => {
    return (

        <main className='breakingbad'>

            <div>
                <h2>{breakingbad.name.charAt(0).toUpperCase() + breakingbad.name.slice(1)}  </h2>
                <h3> Quote: {breakingbad.quote}</h3>

            </div>

        </main >

    )
}


export default Main;