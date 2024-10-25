import { error } from "console"
import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express";

const prisma = new PrismaClient()

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try{
        const product = await prisma.products.findMany()
        res.status(200).json(product)
        console.log(product)
    }
    catch(error){
        console.log(error)
    }
}