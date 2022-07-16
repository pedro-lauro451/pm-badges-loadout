import './BadgesList.css';

const BadgesList = (props) => {

    const BADGES = [
        {
            badgeCategory: 'Stat',
            badgeName: 'All or Nothing',
            BP: '4',
            badgeEffect: 'Raises Attack by 1 if Action Command is successful; does 0 damage otherwise'
        },
        {
            badgeCategory: 'Sound',
            badgeName: 'Attack FX A',
            BP: '0',
            badgeEffect: 'Changes sound effects from Hammer and Jump attacks'
        },
        {
            badgeCategory: 'Sound',
            badgeName: 'Attack FX B',
            BP: '0',
            badgeEffect: 'Changes sound effects from Hammer and Jump attacks'
        },
        {
            badgeCategory: 'Sound',
            badgeName: 'Attack FX C',
            BP: '0',
            badgeEffect: 'Changes sound effects from Hammer and Jump attacks'
        },
        {
            badgeCategory: 'Sound',
            badgeName: 'Attack FX D',
            BP: '0',
            badgeEffect: 'Changes sound effects from Hammer and Jump attacks'
        },
        {
            badgeCategory: 'Sound',
            badgeName: 'Attack FX E',
            BP: '0',
            badgeEffect: 'Changes sound effects from Hammer and Jump attacks'
        },
        {
            badgeCategory: 'Overworld',
            badgeName: 'Bump Attack',
            BP: '5',
            badgeEffect: 'Mario can defeat weak enemies by walking into them'
        },
        {
            badgeCategory: 'Overworld',
            badgeName: 'Chill Out',
            BP: '2',
            badgeEffect: 'Prevents First Strikes'
        },
        {
            badgeCategory: 'Danger',
            badgeName: 'Close Call',
            BP: '1',
            badgeEffect: 'Enemies will occasionally miss when Mario is in Danger'
        },
        {
            badgeCategory: 'Move',
            badgeName: 'D-Down Jump',
            BP: '2',
            badgeEffect: 'Ignores enemy Defense and costs 2FP'
        },
        {
            badgeCategory: 'Move',
            badgeName: 'D-Down Pound',
            BP: '2',
            badgeEffect: 'Ignores enemy Defense and costs 2FP'
        },
        {
            badgeCategory: 'Stat',
            badgeName: 'Damage Dodge',
            BP: '3',
            badgeEffect: 'Increases Guard Defense by 1'
        },
        {
            badgeCategory: 'Focus',
            badgeName: 'Deep Focus',
            BP: '1',
            badgeEffect: 'Increases Star Power refilled when using Focus'
        },
        {
            badgeCategory: 'Stat',
            badgeName: 'Defend Plus',
            BP: '6',
            badgeEffect: 'Increases Defense by 1'
        },
        {
            badgeCategory: 'Overworld',
            badgeName: 'Dizzy Attack',
            BP: '2',
            badgeEffect: 'If Mario starts a battle by spinning into the enemy, that enemy will remain Dizzy for 1 turn'
        },
        {
            badgeCategory: 'Status',
            badgeName: 'Zap Tap',
            BP: '4',
            badgeEffect: 'Electrifies Mario; physical attacks will cause most enemies to take 1 damage'
        }
    ];


    const listBadges = BADGES.map( (badge) =>
        props.filteredCategory === badge.badgeCategory || props.filteredBP === badge.BP  ? 
        (<ul className="card">
        <li key={badge.key}>{badge.badgeName}</li>
        <li key={badge.key}>BP Needed: {badge.BP}</li>
        <li key={badge.key}>{badge.badgeEffect}</li>
        <li>
            <button className={(props.addMode === false ? 'add-badge' : 'deactivated')} type="submit">Add</button>
        </li>
        </ul>) 

        : props.filteredCategory === "All" || props.filteredBP === "All" ? 
        (<ul className="card">
        <li key={badge.key}>{badge.badgeName}</li>
        <li key={badge.key}>BP Needed: {badge.BP}</li>
        <li key={badge.key}>{badge.badgeEffect}</li>
        <li>
            <button className={(props.addMode === false ? 'add-badge' : 'deactivated')} type="submit">Add</button>
        </li>
        </ul>) : null
    );

        return(
            <div align="center">
            {listBadges}
            </div>  
        );          
};

export default BadgesList;