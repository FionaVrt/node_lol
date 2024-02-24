import  express  from "express";
import {getChampion, getChampionById, createChampion, updateChampion, deleteChampion} from "../controllers/ChampionController.js";
import { router } from "../router";

const champion = express.Router();

router.get("/", getChampion);
router.get("/:id", getChampionById);
router.post("/", createChampion);
router.put("/:id", updateChampion);
router.delete("/:id", deleteChampion);

export default router;