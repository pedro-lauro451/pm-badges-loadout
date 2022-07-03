import React, { useState } from 'react';
import './BadgesFilter.css'

const BadgesFilter = (props) =>
{
    const dropDownHandler = (event) =>
    {
        props.onSelectedCategory(event.target.value);
    };

    const BPdropDownHandler = (event) =>
    {
        props.onSelectedBP(event.target.value);
    };

    return(
        <div align="center">
            <div className='filter_card'>
                <p>Filter by Badge type:</p>
                <select value={props.currentCategory} onChange={dropDownHandler}>
                        <option value='None'>None</option>
                        <option value='All'>All</option>
                        <option value='Sound'>Sound</option>
                        <option value='Stat'>Stat</option>
                        <option value='Overworld'>Overworld</option>
                        <option value='Danger'>Danger</option>
                        <option value='Move'>Move</option>
                        <option value='Focus'>Focus</option>
                        <option value='Status'>Status</option>
                </select>
            </div>

            <div className='filter_card_bp'>
                <p>&nbsp;&nbsp;&nbsp;Filter by BP:</p>
                <select value={props.currentBP} onChange={BPdropDownHandler}>
                        <option value='None'>None</option>
                        <option value='All'>All</option>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                </select>
            </div>
        </div>
    );
};

export default BadgesFilter;