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


    // POST request

    const PostPet = async (newPet) => {
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(newPet)
        });
        const savedPet = await response.json();
        setPets([...pets, savedPet]); 
        
    }

    //to delete pet
    const meetPet = (id) => {
        //meetpet deletes pet from database
        fetch("http://localhost:8080/pets/" + id, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
        //delete locally
        setPets(pets.filter(pet => pet.id !== id))
    }


    // pass it down to relevant components 
    //em inside p tag is for emphasis
    return (
        <div id="main-container">
            <h1>PawsPlus🐾</h1>
            <p><em> Adopt a furry friend</em></p>
            <hr />
            <NewPetForm onSubmit={PostPet}/>
            <hr/>
            <PetsList pets={pets} meetPet={meetPet}/>
        </div>

        
        
    )

}

export default PetsContainer;