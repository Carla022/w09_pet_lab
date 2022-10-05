import { useState } from "react";


const NewPetForm = ({onSubmit}) => {
    const [newPet, setNewPet] = useState( {

        name:"",
        type: null,
        breed:"",
        age: null
        
    });

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const updatedNewPet = {...newPet};//... = spread operator makes a copy of the array
        // use square bracket [] to access keys in an object
        updatedNewPet[propertyName] = event.target.value;
        setNewPet(updatedNewPet);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(newPet);
        setNewPet({
            name: "",
            type: null,
            breed:"",
            age: null

        })
    }

    //to display the "type" data in the type dropdrown 
    // const typeOptions = type.map (()=>{
    //     return <option key={type.id} value={type.id}>{type.type}</option>
    // })

    return (
        <>
            <h3>Put Pet For Adoption</h3>
            <h5>Please Provide Pet Info*:</h5>
            <form onSubmit={handleFormSubmit}>
                {/* to add form name field */}
                <label htmlFor="name">Name:</label>
                <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    placeholder="Pet name"
                    onChange={handleChange}
                    value={newPet.name}
                    required
                />
                       
                

                {/* to add form type field
                 <label htmlFor="type">Type:</label>
                {/* use select to create a dropdown */}
                <select 
                    id="type" 
                    defaultValue="select-type-of-pet" 
                    name="type"
                    onChange={handleChange}
                >    
                <option value="select-type" disabled>Choose a category</option>
                </select> 

                {/* to add form breed field */}
                <label htmlFor="name">Breed:</label>
                <input 
                    id="breed" 
                    type="text" 
                    name="breed" 
                    placeholder="Pet breed"
                    onChange={handleChange}
                    value={newPet.breed} 
                    required
                    
                />

                {/* to add form age field */}
                <label htmlFor="name">Age:</label>
                <input 
                    id="age" 
                    type="text" 
                    name="age" 
                    placeholder="Pet age"
                    onChange={handleChange}
                    value={newPet.age} 
                    required
                    
                />

                <input 
                    type="submit"
                    value="Enter Pet"
                /> 

            </form>
        </>
    )

}

export default NewPetForm;