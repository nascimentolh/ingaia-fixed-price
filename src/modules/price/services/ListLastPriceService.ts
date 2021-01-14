import { inject, injectable } from "tsyringe";
import IPricesRepository from "@modules/price/repositories/IPricesRepository";
import Price from "@modules/price/infra/typeorm/entities/Price";

@injectable()
class ListLastPriceService {
  constructor(
    @inject('PricesRepository')
    private priceRepository: IPricesRepository,
  ) {}

  public async execute(): Promise<Price | undefined> {
    return this.priceRepository.listLastPrice();
  }
}

export default ListLastPriceService;
