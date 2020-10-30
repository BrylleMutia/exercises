import React from 'react';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Navbar = () => {
    return (
        <div className="navbar">
            <AppBar position="sticky">
                <Toolbar style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0.5rem" }}>
                    <Typography variant="title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>EXERCISES</Typography>
                    <Typography>Rene Rose Catubay</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
 
export default Navbar;