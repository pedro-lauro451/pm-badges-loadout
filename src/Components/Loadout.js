import React, { useState } from "react";
import "./Loadout.css";
import NewLoadout from "./NewLoadout";

const Loadout = (props) => 
{

    const newLoadoutHandler = (toggler) => {
        var isCreatingLoadout = toggler;
        props.onNewLoadout(isCreatingLoadout);
    };

    return(
        <div className="card_loadout" align="center">
            <div>
                <p>Loadouts</p>
            </div>
            <div>
                <NewLoadout onNewLoadout={newLoadoutHandler} />
            </div>
        </div>
    );
};

export default Loadout;