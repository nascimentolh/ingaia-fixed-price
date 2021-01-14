import "reflect-metadata";
import CreatePriceService from "@modules/price/services/CreatePriceService";
import ListLastPriceService from "@modules/price/services/ListLastPriceService";
import FakePriceRepository from "@modules/price/repositories/fake/FakePriceRepository";

let fakePriceRepository: FakePriceRepository;
let createPriceService: CreatePriceService;
let listLastPriceService: ListLastPriceService;

describe("On listing price", () => {
  beforeEach(() => {
    fakePriceRepository = new FakePriceRepository();
    createPriceService = new CreatePriceService(fakePriceRepository);
    listLastPriceService = new ListLastPriceService(fakePriceRepository);
  });

  it ("should be able to list a last price", async () => {
    await createPriceService.execute({price: 10});
    await createPriceService.execute({price: 15});
    await createPriceService.execute({price: 20});

    const price = await listLastPriceService.execute();

    expect(price!.price).toBe(20);
  });
})
