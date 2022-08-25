import { model, Schema } from "mongoose";
import { Records } from "../types";

const RecordsSchema = new Schema<Records>({
    
 type: {type: String} ,
 category: {type: String},
 amount: {type: Number}

}, {
    timestamps: true,
})


const Record = model<Records>("Record", RecordsSchema)

export {Record}