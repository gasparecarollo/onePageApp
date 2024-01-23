import React from 'react';
import BreakingBad from '../assets/BreakingBad.png'


const Header = () => {

    return (
        <header>
            <img className='breakingbad-logo' src={BreakingBad} alt='Heisenberg and Jesse from Breaking Bad' />
        </header>
    );

}

export default Header