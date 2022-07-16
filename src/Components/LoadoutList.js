import React from "react";
import LoadoutItem from "./LoadoutItem";

const LoadoutList = props => {

    return(
        <ul className="goal-list">
            {props.items.map(loadout => (
            <LoadoutItem
            name={loadout.name}
            >
            </LoadoutItem>
            ))}
        </ul>
        );
};

export default LoadoutList;