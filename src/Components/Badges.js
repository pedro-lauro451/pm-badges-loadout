import React, { useState } from "react";
import BadgesList from "./BadgesList";
import BadgesFilter from "./BadgesFilter";
import Loadout from "./Loadout";

const Badges = (props) => 
{
    const [inputCategory, setCategory] = useState('None');
    const [inputBP, setBP] = useState('None');

    const selectedCategoryHandler = category =>
    {
        setCategory(category);
    };

    const selectedBPHandler = bp =>
    {
        setBP(bp);
    };

    return(
        <div>
            <BadgesFilter currentCategory={inputCategory}
                          onSelectedCategory={selectedCategoryHandler}
                          currentBP={inputBP}
                          onSelectedBP={selectedBPHandler}
            />
            <BadgesList filteredCategory={inputCategory} filteredBP={inputBP}/>
            <Loadout/>
        </div>
    );
};

export default Badges;