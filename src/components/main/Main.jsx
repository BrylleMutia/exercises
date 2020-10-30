import React from 'react';

import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

const Main = () => {
    return (
        <main>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh" }} >
                <Link to="/two"><Button style={{ marginBottom: "1.5rem" }} variant="contained" color="primary" onClick >Exercise 2</Button></Link>
                <Link to="/three"><Button variant="contained" color="secondary" >Exercise 3</Button></Link>
            </div>
        </main>
    );
}
 
export default Main;