

const NewPetForm = () => {

    return (
        <>
            <h2>Put Pet For Adoption</h2>
            <h5>Please Provide Pet Info*:</h5>
            <form>
                {/* to add form name field */}
                <label htmlFor="name">Name:</label>
                <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    placeholder="pet name">   
                </input>

                {/* to add form type field */}
                 <label htmlFor="type">Type:</label>
                {/* use select to create a dropdown */}
                <select 
                    id="type" 
                    defaultValue="select-type-of-pet" 
                    name="type"
                >    
                </select>

                {/* to add form breed field */}
                <label htmlFor="name">Breed:</label>
                <input 
                    id="breed" 
                    type="text" 
                    name="breed" 
                    placeholder="pet breed">   
                </input>

                {/* to add form age field */}
                <label htmlFor="age">Age:</label>
                {/* use select to create a dropdown */}
                <select 
                id="age"
                defaultValue="select-year-of-pet"
                >
                </select>
            </form>
        </>
    )

}

export default NewPetForm;