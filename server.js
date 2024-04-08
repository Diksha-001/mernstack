require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./Router/auth-router");
const contactRoute = require("./Router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, DELETE, PATCH, HEAD",
    credentials:true,

};

app.use(cors(corsOptions));
// connectDb();
// const validateMiddleware = require("./middlewares/validate-middleware")



app.use(express.json()); //so we can use json
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to world best mern series");
// });
// app.get("/register", (req, res) => {
//     res.status(200).send("Welcome to Registration page");
// });
app.use(errorMiddleware);
const PORT = 5000;
connectDb().then(()=> {
    app.listen(PORT, () =>{
        console.log(`Server is running at port ${PORT}`);
    });

});
