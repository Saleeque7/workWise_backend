import { app  , server} from "./app.js";
import config from './config/config.js';
import connectDb from "./config/db.js";

const start = async () => {
    try {
        await connectDb()
    } catch (error) {
        console.error("error in start server", error);
    }
    server.listen(config.PORT, () => {
        console.log(`server running on ${config.PORT}`);
    })
}

start()


