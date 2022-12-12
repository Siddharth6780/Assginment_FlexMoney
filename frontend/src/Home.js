import './App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    let navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Timeslot, setTimeslot] = useState("6-7 AM");
    const [StartDate, setStartDate] = useState("");

    const addData = async (name, email, age, timeSlot, startDate) => {
        console.log(name, email, age, Timeslot, startDate);
        const response = await fetch('https://flexmonrybackend.onrender.com/api/addData', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, age, timeSlot, startDate }),
        });
        const data = await response.json();
        if (data.success === "false") {
            alert(data.error);
        }
        else {
            navigate("/payment")
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        addData(Name, Email, Age, Timeslot, StartDate);
    };

    return (
        <div className="App">
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Register Today</h3>
                                <p>Fill in the data below.</p>
                                <form className="requires-validation" noValidate="">
                                    <div className="col-md-12">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={Name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Full Name"
                                            required=""
                                        />
                                    </div>


                                    <div className="col-md-12">
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            placeholder="E-mail Address"
                                            required
                                            value={Email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="age"
                                            placeholder="Age"
                                            required
                                            value={Age}
                                            onChange={(e) => setAge(e.target.value)}
                                        />
                                    </div>



                                    <div className="col-md-12">
                                        <select className="form-select mt-3" required value={Timeslot} name="TimeSlot" onChange={(e) => setTimeslot(e.target.value)}>
                                            <option selected disabled>Time Slot</option>
                                            <option value="6-7 AM">6-7 AM</option>
                                            <option value="7-8 AM">7-8 AM</option>
                                            <option value="8-9 AM">8-9 AM</option>
                                            <option value="5-6 PM">5-6 PM</option>
                                        </select>
                                    </div>


                                    <div className="col-md-12 dateSelect">
                                        <label>Starting Date:</label>
                                        <input
                                            className="form-control"
                                            name="date"
                                            value={StartDate}
                                            type="date"
                                            placeholder="Select Date"
                                            required
                                            onChange={(e) => setStartDate(e.target.value)}></input>
                                    </div>



                                    <div class="col-md-12 dateSelect">
                                        <p>Fees 500Rs.</p>
                                    </div>

                                    <div className="form-check">

                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="invalidCheck"
                                            required
                                        />

                                        <label className="form-check-label">
                                            I confirm that all data are correct
                                        </label>

                                        <div className="invalid-feedback">
                                            Please confirm that the entered data are all correct!
                                        </div>

                                    </div>
                                    <div className="form-button mt-3">
                                        <button id="submit" type="submit" className="btn btn-primary" onClick={handleClick}>
                                            Proceed
                                        </button>
                                    </div>
                                </form>



                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;