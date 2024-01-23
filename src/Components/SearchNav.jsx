import React, { useState } from 'react';
import treadLightly from '../assets/treadLightly.png'

const SearchNav = ({ setAuthor }) => {
    const [quote, setQuote] = useState("")

    const handleChange = (event) => {
        setQuote((prev) => event.target.value)
    }

    const fetchQuote = (event) => {
        event.preventDefault()
        fetch(`https://api.breakingbadquotes.xyz/v1/quotes/random`)
            .then(res => res.json())
            .then(res => {
                setAuthor(res)
            })
    }
    return (

        <nav>
            <form onSubmit={fetchQuote}>
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

export default SearchNav