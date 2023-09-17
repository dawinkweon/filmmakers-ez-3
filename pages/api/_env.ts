export const Environment = {
    IS_DEVELOPMENT: process.env.NODE_ENV === "development",

    USE_MOCK_ADVERT_DATA: process.env.NEXT_PUBLIC_USE_MOCK_ADVERT_DATA === "true",
    FILM_MAKERS_BASE_URL: process.env.FILM_MAKERS_BASE_URL ?? "https://www.filmmakers.co.kr/",
}

console.log("IS_DEVELOPMENT", Environment.IS_DEVELOPMENT);