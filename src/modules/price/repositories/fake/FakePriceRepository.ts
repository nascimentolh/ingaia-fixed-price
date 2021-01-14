import { v4 } from 'uuid';
import IPricesRepository from "@modules/price/repositories/IPricesRepository";
import Price from "@modules/price/infra/typeorm/entities/Price";
import ICreatePriceDTO from "@modules/price/dto/ICreatePriceDTO";

class FakePriceRepository implements IPricesRepository {
    private prices: Price[] = [];

    public async create(data: ICreatePriceDTO): Promise<Price>
    {
        const price = new Price();

        Object.assign(price, {id: v4()}, data);

        this.prices.push(price);

        return price;
    }

    public async listLastPrice(): Promise<Price> {
        const total = this.prices.length;
        return this.prices[total - 1];
    }
}


export default FakePriceRepository;
