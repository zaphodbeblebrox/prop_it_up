import React, {useState} from "react";

const NameCard = (props) => {
    const {personelInfo} = props;
    const[age, setAge] = useState(personelInfo.age);
    
    const incrementAge = () => {
        setAge(age + 1);
        console.log(age);
    }
    return (
        <div>
            <h2>{personelInfo.lastName}, {personelInfo.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {personelInfo.hairColor}</p>
            <button onClick={incrementAge}>Birthday Button for {personelInfo.firstName} {personelInfo.lastName}</button>
        </div>
    );

}

export default NameCard;