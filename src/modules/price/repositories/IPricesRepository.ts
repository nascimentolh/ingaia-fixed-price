import ICreatePriceDTO from "@modules/price/dto/ICreatePriceDTO";
import Price from "@modules/price/infra/typeorm/entities/Price";

export default interface IPricesRepository {
  create(data: ICreatePriceDTO): Promise<Price>;
  listLastPrice(): Promise<Price | undefined>;
}
