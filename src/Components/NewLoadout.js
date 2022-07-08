import React, { useState } from "react";
import "./NewLoadout.css";

const NewLoadout = (props) => {

    const [inputToggler, setToggler] = useState(false);
    const [inputName, setInputName] = useState();

    var isCreatingLoadout;

    const togglerHandler = (event) => 
    {
        if(inputToggler === false)
        {
            event.preventDefault();
            setToggler(true);
            isCreatingLoadout = inputToggler;
            props.onNewLoadout(isCreatingLoadout);
        }
        if(inputToggler === true)
        {
            event.preventDefault();
            setToggler(false);
            isCreatingLoadout = inputToggler;
            props.onNewLoadout(isCreatingLoadout);
        }
    };

    const nameChangeHandler = (event) => 
    {
        event.preventDefault();
        setInputName(event.target.value);
    };

    const submitHandler = (event) => 
    {
        event.preventDefault();
    };

    if(inputToggler === false)
    {
        return(
            <form className="new-badge" onSubmit={submitHandler}>
                 <div>
                     <button type="submit" onClick={togglerHandler}>New Loadout</button>
                     <button type="submit">View Loadouts</button>
                 </div>
            </form> 
         );
    }

    if(inputToggler === true)
    {
        return(
            <form className="new-badge">
                 <div>
                    <label>Name&nbsp;</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler}></input>
                    
                     <button type="submit">Add</button>
                     <button type="submit" onClick={togglerHandler}>Cancel</button>
                 </div>
            </form> 
         );
    } 
};

export default NewLoadout;