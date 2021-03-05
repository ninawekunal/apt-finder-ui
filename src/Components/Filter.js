import React from 'react';
import {useContext} from 'react';
import {ApartmentContext} from '../context.js';
import {Button} from '@material-ui/core';

import '../Styles/Filter.css';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

 const Filter = ({apartments}) => {
    const context = useContext(ApartmentContext);
    const{
        handleChange, 
        minPrice,
        maxPrice,
        price,
        count
    } = context;  //To access the variables
    
    let noBeds = getUnique(apartments, 0);
    noBeds.sort();
    noBeds = ["All", ...noBeds];
    noBeds = noBeds.map((item, index) => {
        return <option key={index} value={item}>
            {item}
        </option>
    });

    let noBaths = getUnique(apartments, 2);
    noBaths.sort();
    noBaths = ["All", ...noBaths];
    noBaths = noBaths.map((item, index) => {
        return <option key={index} value={item}>
            {item}
        </option>
    });



    return (
        <section className="filter-container">  
            <center><h4>Search from {count} Apartments</h4></center>
            <form className="filter-form">
                
                {/* Bedrooms */}
                <div className="form-group">
                    <label htmlFor="beds">Beds</label>
                    <select name="beds"  id="beds" className="form-control" onChange={handleChange}>
                        {noBeds}
                    </select>
                </div>
                {/* End Bedrooms */}

                {/* Baths */}
                <div className="form-group">
                    <label htmlFor="baths">Baths</label>
                    <select name="baths" id="baths" className="form-control" onChange={handleChange}>
                        {noBaths}
                    </select>
                </div>
                {/* End Baths */}

                {/* Price */}
                <div className="form-group">
                    <label htmlFor="price">Room Price $0-${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                {/* End Price */}

                <a href="/" className="a-reset"><Button variant="outlined" className="form-control btn-reset">Reset Filters</Button></a>
            </form>
        </section>
    )
}
export default Filter;