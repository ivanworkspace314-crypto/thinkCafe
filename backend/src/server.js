import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'; 
import { fileURLToPath } from 'url';
import rateLimiter from './middleware/rateLimiter.js';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';


dotenv.config();

const PORT=process.env.PORT||5001;
const app=express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//middlewares
app.use(express.json()); 
if (process.env.NODE_ENV!=="production"){
  app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));
}
app.use((req,res,next)=>{
  console.log("we just get a new request with a type of ",req.method)
  console.log("request url is ", req.url)
  next()
})
app.use(rateLimiter);
app.use('/api/notes',notesRoutes); 
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'../../frontend/dist')))
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,'../../frontend/dist','index.html'))
})
}
connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}) 

// Start server

