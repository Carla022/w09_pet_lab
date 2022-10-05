import { useEffect, useState } from "react";

const PetContainer = () => {
    const [pets, setPets] = useState ([])

    // fetch data from the RESTCountries API 
    // set the countries state to the result of the API call 

    const fetchPets = async () => {
        const response = await fetch("http://localhost:8080/pets")
        const jsonPets = await response.json()
        setPets(jsonPets)
    }

    useEffect(()=> { //why useEffect? Because we want to load in when the app has loaded in
        fetchPets(); // if you leave [] empty it will call at the beginning

    }, [])






    // pass it down to relevant components 

    return (
        <>
            <p>Hello from pet Container!</p>
            {/* <NewPetForm  pets={pets}/> */}
        </>

        
        
    )

}

export default PetContainer;