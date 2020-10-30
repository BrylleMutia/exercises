import React, { useState } from 'react';

import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

const ExerciseTwo = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const [itemsA, setItemsA] = useState([]);
    const [itemsB, setItemsB] = useState([]);

    const dialogToggle = () => {
        setIsOpen(prev => !prev);
    }

    const setItems = (e) => {
        switch (e.target.name) {
            case "items-a":
                setItemsA(e.target.value.toString().split(","));
                break;
            case "items-b":
                setItemsB(e.target.value.toString().split(","));
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dialogToggle();
    }

    const exchangeItems = () => {
        setItemsA([...itemsB]);
        setItemsB([...itemsA]);
    }

    return (
        <React.Fragment>
            <Link to="/"><Button variant="outlined" color="primary" style={{ margin: "1rem 0 0 1rem" }}>Back</Button></Link>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh" }} >
                <Button variant="contained" color="primary" onClick={dialogToggle}>
                    #1: Add items for Array A & B
                </Button>

                <Dialog open={isOpen} onClose={dialogToggle} aria-labelledby="form-dialog-title">
                    <form onSubmit={handleSubmit}>

                        <DialogTitle id="form-dialog-title" >
                            <Typography>
                                <span><strong>NOTE:</strong> Separate items by comma (,) and no space.</span>
                            </Typography>
                        </DialogTitle>

                        <DialogContent>
                            <TextField
                                name="items-a"
                                margin="dense"
                                id="items-a"
                                label="Array A"
                                type="text"
                                fullWidth
                                variant="outlined"
                                onChange={setItems}
                            />
                            <TextField
                                name="items-b"
                                margin="dense"
                                id="items-b"
                                label="Array B"
                                fullWidth
                                variant="outlined"
                                onChange={setItems}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={dialogToggle} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" onClick={handleSubmit} color="primary">
                                Add
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>


                <div style={{ display: "flex" }} >
                    <ul style={{ margin: "0", marginTop: "1rem", marginBottom: "1rem"  }} >
                        <Typography style={{ fontWeight: "700" }}>Array A<br /></Typography>
                        {!itemsA.length ? "Array A is empty" : itemsA.map(item => <li>{item}</li>)}
                    </ul>
                    <ul style={{ margin: "0", marginTop: "1rem", marginBottom: "1rem" }}><Typography style={{ fontWeight: "700" }}>Array B<br /></Typography>
                        {!itemsA.length ? "Array B is empty" : itemsB.map(item => <li>{item}</li>)}
                    </ul>
                </div>

                {itemsA.length && itemsB.length ? <Button onClick={exchangeItems} variant="contained" color="primary" >Exchange Items for Array A & B</Button> : null}
            </div>
        </React.Fragment>
    );
}
 
export default ExerciseTwo;