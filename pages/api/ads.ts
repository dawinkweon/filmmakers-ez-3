import cheerio from "cheerio";
import { isRelevant, surroundRelevant } from "./_fixtures";
import { Advert } from "../../model";
const axios = require("axios");
// URL of the webpage you want to scrape
const url =
  "https://www.filmmakers.co.kr/actorsAudition/page/{pageNumber}?extra_vars8=%EC%97%AC%EC%9E%90"; // Replace with your target URL



// Function to scrape the webpage
const scrapeWebpage = async (pageNumber: number) => {
  const adverts: Advert[] = [];
  try {
    // Fetch the HTML content of the webpage
    const pageUrl = url.replace("{pageNumber}", pageNumber.toString());
    const response = await axios.get(pageUrl);
    const html = response.data;

    // Load the HTML into Cheerio
    const $ = cheerio.load(html);

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
        const linkUrl = "https://www.filmmakers.co.kr" + link;

        const advert: Advert = {
          // @ts-ignore
          title: $(title).html(),
          // @ts-ignore
          age: surroundRelevant(age.data),
          // @ts-ignore
          gender: genderValue.data.trim().replace(/\t/g, ""),
          linkUrl: linkUrl,
        };
        adverts.push(advert);
      });
    });
  } catch (err) {
    console.error(err);
  }
  return adverts;
};

let ads1: Advert[] = await scrapeWebpage(1);

  let ads2: Advert[] = await scrapeWebpage(2);

  let ads3: Advert[] = await scrapeWebpage(3);

  const allAds = [ads1, ads2, ads3].flat();
  const relevant = allAds.filter(isRelevant);

export default async function handler(req, res) {
  

  res.status(200).json(relevant);
}
