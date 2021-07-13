import { useEffect, useState } from "react"

const LocationInfo = ({name, type, dimension, residents}) => {

    const [residente, SetResidente] = useState('');
    
    useEffect(() => {
        SetResidente(residents)
    },[residents])

    return (
        <div>
        {residente && <p>Name: {name} {type} Dimension: {dimension}  Residents: {residents.length} </p> }
        
    </div>
    )
}

export default LocationInfo