// TODO: create a component that displays a single bakery item
import React from "react";
import Button from '@mui/material/Button';

function BakeryItem(props) {
    return(

        <div className="card flex flex-col">
        <img src={props.item.image} alt="bakery item"/>
        <div className="container">
            <h2>{props.item.name} </h2>
            <h3>${props.item.price}</h3>
            <p>{ props.item.description}</p>
                <Button variant="contained" onClick={() => props.update(props.index)}>
                    <b>ADD</b>
                </Button>
        </div>
    </div>
        
    )
}


export default BakeryItem;