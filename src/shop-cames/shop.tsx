import React, {useEffect, useState} from "react";


const ShopGames  = () =>{
    const [searchTerm, setSearchTerm] = useState("");
    // const [searchResults, setSearchResults] = useState([]);
    const games = 
        [
        "Sir",
        "Alexa",
        "Betmen",
        "Fasad",
        "Twit",
        "Lin",
        "Sink"
    ]
    // useEffect(() => {
    //     const results:any = people.filter(person =>
    //         person.toLowerCase().includes(searchTerm)
    //     );
    //     setSearchResults(results);
    // }, [searchTerm]);

   const handleChange =(e:any)=> {
       setSearchTerm(e.target.value)

   }
    const results = !searchTerm
        ? games
        : games.filter(games => games.includes(searchTerm)
        );

    return <div>
    <form>
        <input onChange={handleChange} type="text" placeholder="Search" value={searchTerm} />
    </form>
        <ul>
            {results.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
}

export default ShopGames