import React, {useState} from 'react';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import Heart from 'react-animated-heart';

import '../Styles/Apartment.css';

export default function Apartment({
    
    apartment 
}) {
    
    const a = apartment;
    const [isClick, setClick] = useState(false);
    
    return (
        <article className="apartment">
            <div className="img-container">
                <img src={"Images/" + a[a.length-1] + ".jpg"} alt="Apartment"/>
                <div className="price-top">
                    <h6>${a[1]}</h6>
                    <p>per month</p>
                </div>
                <p className="apartment-link">
                    
                </p>
            </div>
            <p className="apartment-info">
                <span><HomeIcon className="homeIcon"/>{a[6]} - {a[3]}</span>   
            </p>
            <div className="apartment-more-info">
                <div className="more-info">
                    <KingBedOutlinedIcon className="bedIcon"/> {a[0]===0?"Studio":(a[0]===1?a[0]+" Bed": a[0] + " Beds")} <BathtubOutlinedIcon className="bathIcon"/> {a[2]} {a[2]!==1?"Baths":"Bath"} 
                    <br />
                    <LocationOnIcon className="locationIcon"/>{a[4] + " - " +  a[5]}
                </div>
                <span className="heart-icon"><Heart  isClick={isClick} onClick={() => setClick(!isClick)} /></span>
            </div>
        </article>  
    )
}
