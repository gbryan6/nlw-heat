import { Request, Response } from "express";
import { GetLast3MEssagesService } from "../services/GetLast3messagesService";


class Get3LastMessagesController {
  async handle(request: Request, response: Response) {
   
    const service = new GetLast3MEssagesService();

    const result = await service.execute();

    return response.json(result)
}
}

export { Get3LastMessagesController };
