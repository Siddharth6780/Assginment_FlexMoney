import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Home from './Home';
import Payment from './Payment';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path="payment" element={<Payment/>}/>
            </Routes>
        </Router>
    )
}

export default App