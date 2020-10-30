import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

// GET RANDOM ID FOR TICKET
const getRandomId = () => {
    return Math.floor(Math.random() * (1000000 - 500000)) + 500000;
}

const ExerciseThree = () => {

    // DIALOG BOX STATES
    const [isOneOpen, setIsOneOpen] = useState(false);
    const [isTwoOpen, setIsTwoOpen] = useState(false);
    const [isThreeOpen, setIsThreeOpen] = useState(false);
    const [isFourOpen, setIsFourOpen] = useState(false);

    // CURRENT PASSENGER DETAILS
    const [name, setName] = useState("");
    const [ticket, setTicket] = useState(getRandomId());

    // ALL PASSENGERS DETAIL
    const [passengers, setPassengers] = useState([]);

    // PASSENGER FOUND
    const [foundPassenger, setFoundPassenger] = useState([]);

    const onFormChange = (e) => {
        switch(e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            default:
                break;
        }
    }

    const dialogToggle = (id) => {
        switch(id) {
            case "one":
                setIsOneOpen(prev => !prev);
                break;
            case "two":
                setIsTwoOpen(prev => !prev);
                break;
            case "three":
                setIsThreeOpen(prev => !prev);
                setFoundPassenger([]);
                break;
            case "four":
                setIsFourOpen(prev => !prev);
                break;
            default:
                break;
        }
    }

    

    // FOR ADD RESERVATION
    const handleSubmit = (e) => {
        e.preventDefault();
        setPassengers(prev => [...prev, { name, ticket }]);
        dialogToggle("one");
        setName("");
        setTicket(getRandomId());
    }

    // FOR CANCEL RESERVATION
    const handleSubmitTwo = (e) => {
        e.preventDefault();
        setPassengers(prev => prev.filter(passenger => passenger.ticket.toString() !== name));
        dialogToggle("two");
        setName("");
    }

    // FOR CHECK TICKET 
    const handleSubmitThree = (e) => {
        e.preventDefault();
        const match = passengers.filter(passenger => passenger.ticket.toString() === name);
        setFoundPassenger(match);
    }

    return (
        <main>
            <Link to="/"><Button variant="outlined" color="primary" style={{ margin: "1rem 0 0 1rem" }}>Back</Button></Link>
            <div  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh" }}>
                <Button style={{ marginBottom: "1rem" }} onClick={() => dialogToggle("one")} variant="contained" color="primary">Reserve a Ticket</Button>
                <Button style={{ marginBottom: "1rem" }} onClick={() => dialogToggle("two")} variant="contained" color="primary">Cancel a Reservation</Button>
                <Button style={{ marginBottom: "1rem" }} onClick={() => dialogToggle("three")} variant="contained" color="primary">Check Ticket</Button>
                <Button style={{ marginBottom: "1rem" }} onClick={() => dialogToggle("four")} variant="contained" color="primary">Show Passengers</Button>

                {/* DIALOG FOR ADD RESERVATION */}
                <Dialog open={isOneOpen} onClose={() => dialogToggle("one")} aria-labelledby="form-dialog-title">
                <form onSubmit={handleSubmit}>

                    <DialogTitle id="form-dialog-title" >
                        <Typography>
                            Add reservation for next flight
                        </Typography>
                    </DialogTitle>

                    <DialogContent>
                        <TextField
                            name="name"
                            margin="dense"
                            id="name"
                            label="Passenger's Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={name}
                            onChange={onFormChange}
                        />
                        <div style={{ textAlign: "center", marginTop: "1rem" }}>
                            <h3>TICKET NO.</h3>
                            <p>{ticket}</p>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => dialogToggle("one")} color="primary">
                            Cancel
                        </Button>
                        {name && <Button type="submit" onClick={handleSubmit} color="primary">
                            Add
                        </Button>}
                    </DialogActions>
                </form>
            </Dialog>

            {/* DIALOG FOR CANCEL RESERVATION */}
            <Dialog open={isTwoOpen} onClose={() => dialogToggle("two")} aria-labelledby="form-dialog-title">
                <form onSubmit={handleSubmitTwo}>

                    <DialogTitle id="form-dialog-title" >
                        <Typography>
                            Cancel reservation
                        </Typography>
                    </DialogTitle>

                    <DialogContent>
                        <TextField
                            name="name"
                            margin="dense"
                            id="name"
                            label="Ticket No."
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={name}
                            onChange={onFormChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => dialogToggle("two")} color="primary">
                            Back
                        </Button>
                        {name && <Button type="submit" onClick={handleSubmitTwo} color="primary">
                            Cancel Reservation
                        </Button>}
                    </DialogActions>
                </form>
            </Dialog>

            {/* DIALOG FOR CHECK TICKET */}
            <Dialog open={isThreeOpen} onClose={() => dialogToggle("three")} aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title" >
                        <Typography>
                            Check ticket
                        </Typography>
                    </DialogTitle>

                    <DialogContent>
                        <TextField
                            name="name"
                            margin="dense"
                            id="name"
                            label="Ticket No."
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={name}
                            onChange={onFormChange}
                        />
                        {foundPassenger.length ? <div style={{ textAlign: "center", marginTop: "1rem" }}>
                            <h4>PASSENGER'S NAME</h4>
                            <p>{foundPassenger.length ? foundPassenger[0].name : null}</p>
                        </div> : null}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => dialogToggle("three")} color="primary">
                            Back
                        </Button>
                        {name && <Button type="submit" onClick={handleSubmitThree} color="primary">
                            Check ticket
                        </Button>}
                    </DialogActions>
            </Dialog>

            {/* DIALOG FOR SHOW PASSENGERS */}
            <Dialog open={isFourOpen} onClose={() => dialogToggle("four")} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" >
                        <Typography>
                            Reserved passengers
                        </Typography>
                    </DialogTitle>

                    <DialogContent>
                        <ul style={{ marginLeft: "0" }}>
                        {passengers.map(passenger => (
                            <li><span style={{ fontWeight: "700", fontSize: "1.2rem" }}>{passenger.name}</span> (No. {passenger.ticket})</li>    
                        ))}
                        </ul>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => dialogToggle("four")} color="primary">
                            Back
                        </Button>
                    </DialogActions>
            </Dialog>
            </div>
        </main>
    );
}
 
export default ExerciseThree;