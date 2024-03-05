import fastify from "fastify"; // servidor fastify npm install fastify  @fastify/cors --save-dev

import cors from "@fastify/cors"; //cors
import { routes } from "./routes";

const app = fastify({logger: true}) 


const start = async () => {


    await app.register(cors)
    await app.register(routes)
    

    try{
        await app.listen({port: 3333})

    }catch(err){
        process.exit(1) //node JS process npm i --save-dev @types/node
    }
}

start()