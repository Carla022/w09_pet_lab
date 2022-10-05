import { useEffect, useState } from "react";
import NewPetForm from "../components/NewPetForm";
import PetsList from "../components/PetsList";

const PetsContainer = () => {
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

    const selectPet = (pet) => {
        
    }






    // pass it down to relevant components 

    return (
        <div id="main-container">
            <h1>PawsPlus🐾</h1>
            <p><em> Adopt a furry friend</em></p>
            <hr />
            <NewPetForm/>
            <hr/>
            <PetsList pets={pets}/>
        </div>

        
        
    )

}

export default PetsContainer;