import cheerio from "cheerio";
import { Advert } from "../../../model";
import { Environment } from "../_env";
import path from "path";
const axios = require("axios");

const findActorAuditionsByPageNumber = async (pageNumber: number) => {
  const pageUrl = getActorWantedPageUrl(pageNumber);
  const category = "배우";
  return await findAds(category, pageUrl, pageNumber);
};

const findPerformerWantedByPageNumber = async (pageNumber: number) => {
  const pageUrl = getFindPerformerWantedPageUrl(pageNumber);
  const category = "모델/출연자";
  return await findAds(category, pageUrl, pageNumber);
};

const findAds = async (
  category: string,
  pageUrl: string,
  pageNumber: number
) => {
  console.debug(`Scraping page url: ${pageUrl}`);
  const response = await axios.get(pageUrl);
  const html = response.data;

  const $ = cheerio.load(html);

  const adverts: Advert[] = [];

  const $boardList = $("div#board-list");
  $boardList.each((_, board) => {
    const $mobileNoboldTd = $(board).find('span:contains("배역")');

    $mobileNoboldTd.each((_index, element) => {
      if (Environment.IS_DEVELOPMENT && shouldSkipAds(adverts)) {
        return;
      }

      const age = $(element)[0].next;
      const title = $(board).find("tbody td:first-child");

      const gender = $(board).find('span:contains("성별")');
      const genderValue = $(gender)[0].next;

      // @ts-ignore
      const link = $(board).find("td > a")[0].attribs.href;

      const linkUrl = new URL(link, Environment.FILM_MAKERS_BASE_URL).href;
      $(board).find("td > a")[0].attribs.href = linkUrl;
      $(board).find("td > a")[0].attribs.target = "_blank";

      const advert: Advert = {
        // @ts-ignore
        title: $(title).html(),
        // @ts-ignore
        age: age.data,
        // @ts-ignore
        gender: genderValue.data.trim().replace(/\t/g, ""),
        linkUrl: linkUrl,
        parentPageIndex: `${category} 모집 페이지 #` + pageNumber,
      };
      adverts.push(advert);
    });
  });
  return adverts;
};

const getActorWantedPageUrl = (pageNumber: number): string => {
  return new URL(
    `/actorsAudition/page/${pageNumber.toString()}?extra_vars8=${encodeURI(
      "여자"
    )}`,
    Environment.FILM_MAKERS_BASE_URL
  ).href;
};

const getFindPerformerWantedPageUrl = (pageNumber: number): string => {
  return new URL(
    `/performerWanted/page/${pageNumber.toString()}?extra_vars8=${encodeURI(
      "여자"
    )}`,
    Environment.FILM_MAKERS_BASE_URL
  ).href;
};

export const advertsClient = {
  findActorAuditionsByPageNumber,
  findPerformerWantedByPageNumber,
};
function shouldSkipAds(adverts: Advert[]) {
  const hasEnoughAds = adverts.length > 1;
  if (hasEnoughAds) {
    console.log("Only returning 1 result due to development mode");
    // Only return 1 when in development
    return true;
  }
}
