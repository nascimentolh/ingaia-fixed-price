import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import routes from './routes';
import '../typeorm';
import * as SwaggerUI from "swagger-ui-express";
import cors from 'cors'
// @ts-ignore
import * as SwaggerDoc from "../../../../swagger/documentation.json";
import '@shared/container';
import * as dotenv from 'dotenv';
import AppError from "@shared/errors/AppError";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal Server Error' + err });
});

// SWAGGER
app.use("/docs", SwaggerUI.serve, SwaggerUI.setup(SwaggerDoc))

app.listen(process.env.PORT || 3333, () => {
  console.log('Server Started');
});
