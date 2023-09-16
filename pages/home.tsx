"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { advertsApi } from "../_api/adverts";
import AdvertsTable from "../components/AdvertsTable";

export default function Home() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    advertsApi
      .findAll()
      .then((ads) => setAdverts(ads))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Head>
        <title>필름메이커즈 40~50대</title>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
      </Head>

      <main>
        <div className="heading">
          <img src="https://www.filmmakers.co.kr/includes/images/filmmakers-logo.png" />
        </div>
        <AdvertsTable adverts={adverts}/>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap");
        * {
          font-family: "Noto Sans KR", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        
        .heading {
          background-color: grey;
        }
        .heading > img {
          height: 2em;
        }
      `}</style>
    </div>
  );
}
