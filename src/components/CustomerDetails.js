import React from 'react';
import { useLocation, Link } from "react-router-dom";

const CustomerDetails = () =>{
    const { state } = useLocation();
    console.log(state);
    return (
        <div>
            <h2>Customer Details</h2>
            <div key={state.data.id}>
                <b>Name:</b> {state.data.firstname} {state.data.lastname}<br/>
                <b>Phone:</b> {state.data.phone}<br/>
                <b>Email id:</b> {state.data.email}<br/>
                {state.data.bids.map((bid) => (
                    <div key={bid.id}>
                        <p>
                            <b>Id:</b> {bid.id} <br/>
                            <b>Amount:</b> {bid.amount}<br/>
                            <b>Car:</b> {bid.carTitle}<br/>
                        </p>
                    </div>
                 ))}
        </div>
        <Link to="/">
        <button>Back</button>
        </Link>
        </div>
        );
}

export default CustomerDetails;