const PetItem = ({pet}) => {

    return (
        <>
        <h4>{pet.name}</h4>
        <p>Age: {pet.age.name}</p>
        <p>Breed: {pet.type}</p>
        <button>Meet</button>
        <hr />

        </>
    )

}

export default PetItem;