import mongoose from "mongoose";

export const dbConnection = () => {

    mongoose.connect(process.env.MONGO_URI,
        {
            dbName: "TASK_MANAGER",
        }

    ).then(() => {
        console.log("CONNECTION SUCCESSFULL TO TASK MANAGER DATA BASE ")
    }).catch((err) => {
        console.log(`SOME ERROR OCCURED WHILE CONNECTION TO THE TASK MANAGER DATABASE : ${err}`)
    })

}

