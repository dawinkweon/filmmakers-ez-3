import cheerio from "cheerio";
import { Advert } from "../../../model";
import { Environment } from "../_env";
import path from "path";
const axios = require("axios");

const findByPageNumber = async (pageNumber: number) => {
  const pageUrl = getPageUrl(pageNumber);
  console.debug(`Scraping page url: ${pageUrl}`);
  const response = await axios.get(pageUrl);
  const html = response.data;

  const $ = cheerio.load(html);

  const adverts: Advert[] = [];

  const $boardList = $("div#board-list");
  $boardList.each((_, board) => {
    const $mobileNoboldTd = $(board).find('span:contains("배역")');

    $mobileNoboldTd.each((_index, element) => {
      const age = $(element)[0].next;
      const title = $(board).find("tbody td:first-child");

      const gender = $(board).find('span:contains("성별")');
      const genderValue = $(gender)[0].next;

      // @ts-ignore
      const link = $(board).find("td > a")[0].attribs.href;
      const linkUrl = path.join(Environment.FILM_MAKERS_BASE_URL, link);

      const advert: Advert = {
        // @ts-ignore
        title: sanitizeHref($(title).html()),
        // @ts-ignore
        age: age.data,
        // @ts-ignore
        gender: genderValue.data.trim().replace(/\t/g, ""),
        linkUrl: linkUrl,
        parentPageIndex: pageNumber
      };
      adverts.push(advert);
    });
  });
  return adverts;
};

const sanitizeHref = (html: string) => {
  return html.replace("/actorsAudition", path.join(Environment.FILM_MAKERS_BASE_URL, "actorsAudition"));
}

const getPageUrl = (pageNumber: number) : string => {
  const PAGE_NUMBER_TOKEN = "{pageNumber}";

  const pageUrlTemplate = path.join(
    Environment.FILM_MAKERS_BASE_URL,
    `/actorsAudition/page/${PAGE_NUMBER_TOKEN}?extra_vars8=${encodeURI("여자")}`
  );

  return pageUrlTemplate.replace(PAGE_NUMBER_TOKEN, pageNumber.toString());
};

export const advertsClient = { findByPageNumber };
