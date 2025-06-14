import {InitApp} from "./src/app/init.ts";
import {serve} from "@hono/node-server";

const app = InitApp();


serve({
    fetch: app.fetch,
    port: 3000,
},()=>{
    console.log("Server is running on http://localhost:3000");
})