import { Router } from 'express';

import pricesRouter from "@modules/price/infra/http/routes/prices.routes";

const routes = Router();

/**
 * @swagger
 *
 * definitions:
 *   Price:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         price:
 *           type: number
 *         created_at:
 *           type: string
 *         updated_at:
 *           type: string
 *   Simple:
 *     type: object
 *     properties:
 *       status:
 *         type: string
 *       message:
 *         type: string
 */
routes.use('/prices', pricesRouter);

export default routes;
