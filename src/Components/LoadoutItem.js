import './LoadoutItem.css';

const LoadoutItem = (props) =>
{
    return(
        <div className="card_loadout_item">
            {props.name}
        </div>
    );
};

export default LoadoutItem;