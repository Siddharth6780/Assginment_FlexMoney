const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const cors = require('cors');
const Data = require('./models/data');
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://admin-siddharth:qwerty_siddharth@cluster0.avmv2.mongodb.net/FlexMoneyAssignment?retryWrites=true&w=majority')


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/addData', async (req, res) => {
    try {
        let { name, email, age, timeSlot, startDate } = req.body;
        if (!(age >= 18 && age <= 65)) {
            res.json({ success: "false", error: "Age must be within 18-65" });
        }
        else {
            const data = new Data({
                name, email, age, timeSlot, startDate
            });
            const saveData = await data.save()
            res.json({ success: "true", saveData });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})