import express from "express";
import {Request, Response } from "express";
import 'express-async-errors'
import morgan from 'morgan';
import { getAll, getOneById, create, updateById, deleteById } from "./controller/planets";
import { unzipSync } from "zlib";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get('/api/planets', getAll);
app.get('/api/planets', getOneById);
app.post('/api/planets', create);
app.put('/api/planets', updateById);
app.delete('/api/planets', deleteById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})