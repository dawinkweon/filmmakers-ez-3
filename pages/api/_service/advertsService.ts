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
  // Service returns 3 pages of results by default
  let ads1: Advert[] = await advertsClient.findByPageNumber(1);
  let ads2: Advert[] = await advertsClient.findByPageNumber(2);
  let ads3: Advert[] = await advertsClient.findByPageNumber(3);

  const allAds = [ads1, ads2, ads3].flat();
  return allAds.filter(isInterestingAdvert).map(emphasizeAgeHtml);
};

const isInterestingAdvert = (f: Advert) =>
  isFemale(f.gender) && f.age.match(FORTY_TO_FIFTY_NINE_REGEX);

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
    title: advert.title,
    gender: advert.gender,
    linkUrl: advert.linkUrl,
    age: advert.age,
  };
};

export const advertsService = { findAdverts };
