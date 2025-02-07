import express from "express";
import {Request, Response } from "express";
import 'express-async-errors'
import morgan from 'morgan';
import { create, deleteById, getAll, getOne, updateById, createImage } from "./planets";
import multer from 'multer';


const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, "./uploads");
  },
  filename:(req, file, cb)=>{
    cb(null, file.originalname);
  },
})
const upload = multer({storage});

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());


app.get("/api/planets", getAll);
 
app.get("/api/planets:id", getOne)

app.post("/api/planets", create)

app.put("/api/planets/:id", updateById)

app.delete("/api/planets/:id", deleteById)

app.post("/api/planets/:id/image", upload.single("image"), createImage)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
