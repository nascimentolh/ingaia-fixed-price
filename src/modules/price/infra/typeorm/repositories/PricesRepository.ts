import {getRepository, Repository} from "typeorm";
import Price from "@modules/price/infra/typeorm/entities/Price";
import ICreatePriceDTO from "@modules/price/dto/ICreatePriceDTO";
import IPricesRepository from "@modules/price/repositories/IPricesRepository";


class PriceRepository implements IPricesRepository {
  private ormRepository: Repository<Price>;

  constructor() {
    this.ormRepository = getRepository(Price);
  }

  public async create(data: ICreatePriceDTO): Promise<Price> {
    const price = this.ormRepository.create(data);

    await this.ormRepository.save(price);

    return price;
  }

  public async listLastPrice(): Promise<Price | undefined> {
    const lastPrice = await this.ormRepository.find({order: {"created_at": "DESC"}, take: 1});
    return lastPrice[0];
  }
}

export default PriceRepository;
