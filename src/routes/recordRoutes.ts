import * as express from "express";
import { Record } from "../models";

const router = express.Router();

router.post("/records",async ( req: any, res: any ) => {
    try {
        let recordDetails = new Record({
            type: req.body.type,
            category: req.body.category,
            amount: req.body.amoun

        });

         const data = await recordDetails.save();
         console.log(`Records Stored Successfully: ${data}`)
         res.send({status: 200, data})
        
    } catch (error) {
        console.log("Error", error)
    }
})

module.exports = router;