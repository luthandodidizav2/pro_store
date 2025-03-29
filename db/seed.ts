import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';


async function Main(){
    const prisma = new PrismaClient();
    await prisma.product.deleteMany();
    await prisma.product.createMany({data:sampleData.products})

    console.log("DATA BASE SEEDED SUCCESSFULLY")
}


Main();