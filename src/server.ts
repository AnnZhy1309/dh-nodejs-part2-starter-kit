import express from "express";
import {Request, Response } from "express";
import 'express-async-errors'
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

type Planet = {
    id: number,
    name: string,
};

type Planets = Planet[];

let planets = [
    {id: 1, name: "Earth"},
    {id:2, name: "Mars"}
];

app.get('/api/planets', (req: Request, res: Response) => {
  res.status(200).json(planets)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})