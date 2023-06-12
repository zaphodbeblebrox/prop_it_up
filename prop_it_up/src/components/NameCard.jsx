import React from "react";

const NameCard = (props) => {
    const {personelInfo} = props;
    return (
        <div>
            <h2>{personelInfo.lastName}, {personelInfo.firstName}</h2>
            <p>Age: {personelInfo.age}</p>
            <p>Hair Color: {personelInfo.hairColor}</p>
        </div>
    );

}

export default NameCard;