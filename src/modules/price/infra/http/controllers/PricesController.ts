import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePriceService from "@modules/price/services/CreatePriceService";
import ListLastPriceService from "@modules/price/services/ListLastPriceService";

export default class PricesController {

  /**
   * @swagger
   *
   * /prices:
   *   get:
   *     tags:
   *     - Price
   *     description: Get last price
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *            $ref: '#/definitions/Price'
   *       400:
   *         description: Error
   *         content:
   *          application/json:
   *           schema:
   *            $ref: '#/definitions/Simple'
   *       500:
   *         description: Internal Error
   *         content:
   *          application/json:
   *           schema:
   *            $ref: '#/definitions/Simple'
   */
  public async index(request: Request, response: Response): Promise<Response> {
    const listLastPrice = container.resolve(ListLastPriceService);

    const lastPrice = await listLastPrice.execute();

    return response.json(lastPrice);
  }

  /**
   * @swagger
   *
   * /prices:
   *   post:
   *     tags:
   *     - Price
   *     description: Creates a new price
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: price
   *         description: price to add
   *         schema:
   *           type: object
   *           required:
   *             - price
   *           properties:
   *             price:
   *               type: number
   *               example: 13
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *            $ref: '#/definitions/Price'
   *       400:
   *         description: Error
   *         content:
   *          application/json:
   *           schema:
   *            $ref: '#/definitions/Simple'
   *       500:
   *         description: Internal Error
   *         content:
   *          application/json:
   *           schema:
   *            $ref: '#/definitions/Simple'
   */
  public async create(request: Request, response: Response): Promise<Response> {

    const { price } = request.body;

    const createPrice = container.resolve(CreatePriceService);

    const resPrice = await createPrice.execute({price});

    return response.json(resPrice);
  }
}
