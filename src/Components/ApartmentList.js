import React from 'react';
import Apartment from './Apartment';
import '../Styles/ApartmentList.css';

export default function ApartmentList({apartments}) {
    if(apartments.length === 0){
        return (
            <div className="empty-search">
                <h3>Unfortunately no apartments match your search parameters!</h3>
            </div>
        );
    }
    return (
        <section className="apartmentList">
            <div className="apartmentList-center">
                {
                    apartments.map(apartment => {
                        return <Apartment key={apartment[0] + apartment[1]} apartment={apartment}/>
                    })
                }
            </div>
        </section>
    )
}
