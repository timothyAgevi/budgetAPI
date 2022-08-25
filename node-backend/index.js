import mongoose from "mongoose";
import "./connect"

// Records collection
const Records= mongoose.model( {
    'amount':{ name:String},
    'category': { name: String},
    'type': { name: String}

},
{
timestamps:true
}

)

export  {Records } 

