import express from "express" ; 
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import { dbConnection } from "./dbConnectio/dbConnection.js"
import fileUpload from "express-fileupload";
import {errorMiddleware} from "./middlewares/error.js"
import user_router from "./routes/user_router.js"
import task_router from "./routes/task_router.js"

 const app = express();


dotenv.config({path: "./config/config.env"});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// app.use(cors())
// app.use(
//     cors({
//       origin: [process.env.FRONTEND_URL],
//       methods: ["GET", "PUT", "DELETE", "POST"],
//       credentials: true,
//     })
//   );
  


const corsOptions = {
    origin: 'http://localhost:5175', // Frontend origin
    credentials: true, // Allow credentials
  };
  
  app.use(cors(corsOptions));


app.use(fileUpload({
tempFileDir : "/tmp/" ,
useTempFiles : true


}))



app.use("/api/v1/user" , user_router);
app.use("/api/v1/task" , task_router);


dbConnection();

app.use(errorMiddleware);

export default app ; 
