import { PrismaClient } from '@prisma/client';
import jvt from 'jsonwebtoken' 
import champD from '../champion.json' assert { type: "json" }

const prisma = new PrismaClient()

const getChampion = async (req, res) => {
    prisma.champion.findMany()
        .then((champions) => {
            res.json(champions)
        })
        .catch((error) => {
            res.json({ error: error.message })
        })
}

const createChampion =  (req, res) => {
    const token  = req.body
    prisma.champion.create({
        data: {
            name: champD.name,
            type: champD.type,
        }
    })
        .then((champion) => {
            res.json(champion)
        })
        .catch((error) => {
            res.json({ error: error.message })
        })
}