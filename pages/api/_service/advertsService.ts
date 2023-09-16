import { Advert } from "../../../model";
import { advertsClient } from "../_client/advertsClient";
import { Environment } from "../_env";
import { FIXTURES } from "../_fixtures";

// Regex match for numbers between 40 and 59
const FORTY_TO_FIFTY_NINE_REGEX = /[4-5][0-9]/g;

const findAdverts = async () => {
  if (!Environment.USE_MOCK_ADVERT_DATA) {
    return findAdvertsInternal();
  } else {
    return FIXTURES.FAKE_ADVERTS.filter(isInterestingAdvert).map(
      emphasizeAgeHtml
    );
  }
};

const findAdvertsInternal = async () => {
  // performers wanted
  let pAds1: Advert[] = await advertsClient.findPerformerWantedByPageNumber(1);
  let pAds2: Advert[] = await advertsClient.findPerformerWantedByPageNumber(2);
  let pAds3: Advert[] = await advertsClient.findPerformerWantedByPageNumber(3);

  // actor auditions
  let ads1: Advert[] = await advertsClient.findActorAuditionsByPageNumber(1);
  let ads2: Advert[] = await advertsClient.findActorAuditionsByPageNumber(2);
  let ads3: Advert[] = await advertsClient.findActorAuditionsByPageNumber(3);

  const allAds = [pAds1, pAds2, pAds3, ads1, ads2, ads3].flat();
  return allAds.filter(isInterestingAdvert).map(emphasizeAgeHtml);
};

const keywords = ["시니어", "중년"];

const isInterestingAdvert = (advert: Advert) => {
  let isKeywordMatch = false;
  keywords.forEach((keyword) => {
    if (advert.age.includes(keyword)) {
      console.info(`age matches keyword for age: ${advert.age}, keyword: ${keyword}`);
      isKeywordMatch = true;
    }

    if (advert.title.includes(keyword)) {
      console.info(`title matches keyword for short title: ${advert.title.slice(0, 200)}, keyword: ${keyword}`);
      isKeywordMatch = true;
    }
  })

  const isAgeBetween40To59 = advert.age.match(FORTY_TO_FIFTY_NINE_REGEX);
  if (isAgeBetween40To59) {
    console.info(`age was between 40 to 59 for age: ${advert.age}, regex result: ${isAgeBetween40To59}`);
  }

  return (
    isFemale(advert.gender) &&
    (isAgeBetween40To59 || isKeywordMatch)
  );
};

const isFemale = (genderText: string) => genderText.includes("여자");

const surroundRelevant = (age: string): string => {
  return age.replace(
    FORTY_TO_FIFTY_NINE_REGEX,
    (match) => "<strong>" + match + "</strong>"
  );
};

const emphasizeAgeHtml = (advert: Advert): Advert => {
  let updatedAdvert: Advert = clone(advert);

  updatedAdvert.age = surroundRelevant(updatedAdvert.age);
  return updatedAdvert;
};

const clone = (advert: Advert): Advert => {
  return {
    parentPageIndex: advert.parentPageIndex,
    title: advert.title,
    gender: advert.gender,
    linkUrl: advert.linkUrl,
    age: advert.age,
  };
};

export const advertsService = { findAdverts };
