import React from 'react';
import loadingGif from '../Images/loading-arrow.gif';

export default function Loading() {
    return (
        <div className="loading">
            <h4>Apartment data loading...</h4>
            <img src={loadingGif} alt=""/>
        </div>
    )
}
