import "./Loadout.css";
import LoadoutList from "./LoadoutList";
import NewLoadout from "./NewLoadout";

const newLoadout = [];

const Loadout = (props) => 
{

    const newLoadoutHandler = (toggler) => {
        var isCreatingLoadout = toggler;
        props.onNewLoadout(isCreatingLoadout);
    };

    const addedLoadoutHandler = (loadout) =>
    {
        newLoadout.push(loadout);
        console.log(newLoadout);
    };

    return(
        <div className="card_loadout" align="center">
            <div>
                <p>Loadouts</p>
            </div>
            <div>
                <NewLoadout onNewLoadout={newLoadoutHandler} onSaveLoadoutData={addedLoadoutHandler}/>
                <LoadoutList items={newLoadout}/>
            </div>
        </div>
    );
};

export default Loadout;