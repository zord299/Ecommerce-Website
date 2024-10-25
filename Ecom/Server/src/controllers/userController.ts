import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async(req: Request, res: Response): Promise<void> => {
    try{
        const users = await prisma.user.findMany();  
        res.json(users)
        console.log(users)
          
    }
    catch (error){
        res.status(500).json({message: 'Error retriving users'})
    }
}

export const createUsers = async (req: Request, res: Response): Promise<void> => {
    try{
        console.log(req.body)
        const {username, password, email, country, phone} = req.body
        
        const user = await prisma.user.create({
            data: {
                username, password, email, country, phone
            }
        })
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({message: 'Error creating user'})
        console.log(error)
    }
}