import { inject, injectable } from "tsyringe";
import IPricesRepository from "@modules/price/repositories/IPricesRepository";
import Price from "@modules/price/infra/typeorm/entities/Price";
import AppError from "@shared/errors/AppError";

interface IRequest {
  price: number;
}

@injectable()
class CreatePriceService  {

  constructor(
    @inject('PricesRepository')
    private priceRepository: IPricesRepository,
  ) {}

  public async execute({price}: IRequest): Promise<Price> {
    if (price <= 0) {
      throw new AppError('Invalid price value');
    }
    return this.priceRepository.create({price});
  }
}

export default CreatePriceService;
