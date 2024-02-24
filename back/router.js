import { express } from "express";
import champion from /routes/ChampionRoutes.js;


const router = express.Router();

router.use("/champion", champion);


export { router };