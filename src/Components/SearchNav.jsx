import React, { useState } from 'react';
import treadLightly from '../assets/treadLightly.png'

const SearchNav = ({ setBreakingBad }) => {
    const [quote, setQuote] = useState("")

    const handleChange = (event) => {
        setQuote((prev) => event.target.value)
    }

    const fetchQuote = (event) => {
        event.preventDefault()
        fetch(`https://api.breakingbadquotes.xyz/v1/quotes/${quote}`)
            .then(res => res.json())
            .then(res => {
                setQuote("")
                setBreakingBad(res)
            })
    }
    return (

        <nav>
            <form onSubmit={fetchQuote}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={quote}
                    placeholder="Search by Character Name"
                />

                <button type="submit">
                    <img src={treadLightly}
                        alt="Heisenberg tread lightly picture"
                        className="Heisenberg-button"
                    />
                </button>
            </form>
        </nav>
    );

};

export default SearchNav;