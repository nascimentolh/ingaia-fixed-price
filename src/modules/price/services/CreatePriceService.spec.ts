import "reflect-metadata";
import CreatePriceService from "@modules/price/services/CreatePriceService";
import AppError from "@shared/errors/AppError";
import FakePriceRepository from "@modules/price/repositories/fake/FakePriceRepository";

let fakePriceRepository: FakePriceRepository;
let createPriceService: CreatePriceService;

describe("On creating price", () => {
  beforeEach(() => {
    fakePriceRepository = new FakePriceRepository();
    createPriceService = new CreatePriceService(fakePriceRepository);
  });

  it ("should be able to create a new price", async () => {
    const price = await createPriceService.execute({price: 10});

    expect(price).toHaveProperty('id');
  });

  it("Should no be able to create new price with value less than or equal 0", async  () => {
    await expect(createPriceService.execute({price: -1})).rejects.toBeInstanceOf(AppError);
  });
})
