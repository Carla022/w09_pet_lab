const PetItem = ({pet, meetPet}) => {

    const handleMeetPet = () => {
        meetPet(pet.id)
    }

    return (
        <>
        <h4>{pet.name}</h4>
        <p>Age: {pet.age}</p>
        <p>Type: {pet.type}</p>
        <p>Breed: {pet.breed}</p>
        <button onClick={handleMeetPet}>Adopt Pet!🐶</button>
        <hr />

        </>
    )

}

export default PetItem;