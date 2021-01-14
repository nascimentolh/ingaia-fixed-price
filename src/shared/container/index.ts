import { container } from 'tsyringe';

import IPricesRepository from "@modules/price/repositories/IPricesRepository";
import PricesRepository from "@modules/price/infra/typeorm/repositories/PricesRepository";

container.registerSingleton<IPricesRepository>(
  'PricesRepository',
  PricesRepository,
);
