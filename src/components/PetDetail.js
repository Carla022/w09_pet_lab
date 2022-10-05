const PetDetail = ({pet, meetPet}) => {
    const handleClick = () => {
        meetPet(pet.id);
    }

    return (
        <div id="pet-detail">
    
            <button onClick={handleClick}>Adopt!</button>

        </div>
    )

}

export default PetDetail;