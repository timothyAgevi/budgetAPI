import "./models/connect";
const express = require("express");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors")
dotEnv.config();

 //setting up express app
const app = express();

app.use(bodyParser.json());

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
//initialize routes
app.use("/api", require("./routes/recordRoutes"));
 //listening for requerequirests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
//error handling error
app.use(function (err:any, res: any) {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});