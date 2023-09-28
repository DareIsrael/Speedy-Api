// require("dotenv").config()
// const express = require ("express");
// const mongoose = require ('mongoose');
// const cargoRoutes = require ("./routes/cargoRoutes")
// const consignorRoutes = require ("./routes/consignorRoutes")
// const airConsignorRoutes = require("./routes/airConsignorRoutes")
// const courierConsignorRoutes = require ("./routes/courierConsignorRoutes")
// const oceanConsignorRoutes = require ("./routes/oceanConsignorRoutes")
// const postRoutes = require ("./routes/postRoutes")
// const customerRoutes = require("./routes/userRoutes")

// const userRoutes = require('./routes/userRoutes')



// const app = express();

// //  app.use(express.json())
// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));

//  app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next()
//  })

//  app.use("/api/cargo",cargoRoutes)
//  app.use("/api/truck", consignorRoutes)
//  app.use("/api/air", airConsignorRoutes)
//  app.use("/api/ocean", oceanConsignorRoutes)
//  app.use("/api/courier", courierConsignorRoutes)
//  app.use("/api/post", postRoutes)
//  app.use('/api/customer', customerRoutes)
//  app.use('/api/user', userRoutes)
 


//  mongoose.connect(process.env.MONGO_URL)
//  .then(() => {
//     app.listen(process.env.PORT, () => {
//         console.log("listen on port", process.env.PORT)
//      })
//  })
//  .catch((error) => {
//     console.log((error))
//  })




require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const cargoRoutes = require("./routes/cargoRoutes");
const consignorRoutes = require("./routes/consignorRoutes");
const airConsignorRoutes = require("./routes/airConsignorRoutes");
const courierConsignorRoutes = require("./routes/courierConsignorRoutes");
const oceanConsignorRoutes = require("./routes/oceanConsignorRoutes");
const postRoutes = require("./routes/postRoutes");
const customerRoutes = require("./routes/userRoutes");
const userRoutes = require("./routes/userRoutes");


const app = express();

// Enable CORS middleware
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/cargo", cargoRoutes);
app.use("/api/truck", consignorRoutes);
app.use("/api/air", airConsignorRoutes);
app.use("/api/ocean", oceanConsignorRoutes);
app.use("/api/courier", courierConsignorRoutes);
app.use("/api/post", postRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/user", userRoutes);


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listen on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
