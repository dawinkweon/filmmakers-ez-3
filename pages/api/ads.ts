import { Advert } from "../../model";
import { advertsService } from "./_service/advertsService";

let adverts: Advert[] = await advertsService.findAdverts();

export default async function handler(req, res) {
  res.status(200).json(adverts);
}
