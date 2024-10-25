import userRoutes from './routes/userRoutes'
import bodyParser from "body-parser";
import productRoute from './routes/productRoute'
import cors from "cors";

const express = require('express')
const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

app.use("/users", userRoutes);
app.use("/products", productRoute);


app.listen(4000, () => {
    console.log('listening at 4000')
})