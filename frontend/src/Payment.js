import React from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';

const Payment = () => {
    const navigate = useNavigate();

    const paymentHandelClick = (e) => {
        e.preventDefault();
        alert("Payment Success");
        navigate("/");
    }

    return (
        <div className="App">
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Payment Details</h3>
                                <p>Fill in the data below.</p>
                                <form className="requires-validation" noValidate="">
                                    <div className="col-md-12">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Full Name"
                                            required=""
                                        />
                                    </div>


                                    <div className="col-md-12">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="text"
                                            placeholder="Credit/Debit Card Number"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="age"
                                            placeholder="CVV"
                                            required
                                        />
                                    </div>


                                    <div class="col-md-12 dateSelect">
                                        <p>Fees 500Rs.</p>
                                    </div>

                                    <div className="form-button mt-3">
                                        <button id="submit" type="submit" className="btn btn-primary" onClick={paymentHandelClick}>
                                            Pay Fees
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment