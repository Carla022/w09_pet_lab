import PetItem from "./PetItem"


const PetsList = ({pets, meetPet}) => {

    const petComponents = pets.map ((pet) => {
        return <PetItem key={pet.id} pet={pet} meetPet={meetPet}/>
    });

    return (
        <>
        <h3>Pets for Adoption</h3>
        {petComponents}
        </>
    );

}

export default PetsList;