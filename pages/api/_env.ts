export const Environment = {
    USE_MOCK_ADVERT_DATA: process.env.NEXT_PUBLIC_USE_MOCK_ADVERT_DATA === "true",
    FILM_MAKERS_BASE_URL: process.env.FILM_MAKERS_BASE_URL ?? "https://www.filmmakers.co.kr/"
}