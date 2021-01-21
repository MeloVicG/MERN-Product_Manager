const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 7000;

//attaching cors onto express app
//app.use is middleware attaching to every incoming request
app.use(cors());
//helps send and receive json data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./server/config/Products-Config" )
require("./server/routes/Products-Route")(app);

app.listen(PORT, () => console.log(`app running on port : ${PORT}`))