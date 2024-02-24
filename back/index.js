import { express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "./router";

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}   