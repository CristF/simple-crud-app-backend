const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});

const PORT = process.env.PORT || 3000;

// Enhanced error handling for MongoDB connection
mongoose.connect("mongodb+srv://critAdmin:peX79iOvaSDsuoLP@backenddb.t8xnm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Connection Failed! Error:", error.message);
        process.exit(1);
    });

// // Add unhandled promise rejection handler
// process.on('unhandledRejection', (error) => {
//     console.log('Unhandled Rejection:', error.message);
//     process.exit(1);
// });
