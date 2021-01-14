import { Router } from 'express';
import PricesController from "@modules/price/infra/http/controllers/PricesController";

const pricesRouter = Router();
const pricesController = new PricesController();

pricesRouter.get('/', pricesController.index);
pricesRouter.post('/', pricesController.create);

export default pricesRouter;
