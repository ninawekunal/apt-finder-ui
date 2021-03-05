import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <div className="error">
            <center><h2>404 Error Page not found.</h2></center>
            <center>
                <Link to="/" className="errorButton">
                    <Button variant="outlined">Home</Button>
                </Link>
            </center>
        </div>
    )
}
