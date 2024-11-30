"use client";

import Image from "next/image";
import Carousel, { MediaProps } from "../common/carousel";
import { headline, title } from "../primitives";
import { useGetNews } from "@/hooks";
import { htmlFrom } from "@/utilities/text";

const News = () => {
  const { data: newsData } = useGetNews({ query: { offset: 0, limit: 100 } });

  const newsList = newsData?.Data || [];

  const renderNews = ({ index, url, title, description }: MediaProps) => {
    return (
      <div
        className={`flex-1 ${index === 0 ? "md:flex-[2]" : ""} flex flex-col gap-6`}
      >
        <Image
          src={url}
          alt={title || ""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <p
          className={
            index === 0
              ? headline({
                  class:
                    "line-clamp-3 text-[10px] font-light text-center md:text-left",
                  size: "secondary",
                })
              : headline({
                  class: "line-clamp-5 text-center md:text-left",
                  size: "main",
                })
          }
        >
          {htmlFrom(description)}
        </p>
      </div>
    );
  };

  const renderNewsList = () => {
    return (
      <div className="flex flex-col md:flex-row gap-11">
        {newsList?.map((news, index) =>
          renderNews({
            index,
            url: news.BannerImageUrl,
            title: news.Title,
            description: news.Description,
          })
        )}
      </div>
    );
  };

  return (
    <section
      id="news"
      className="main-section h-full flex flex-col items-center md:justify-center gap-16 mt-[70px] mb-32 md:mb-[300px]"
    >
      <div className="flex flex-col items-center justify-center gap-14">
        <h1 className={title({ class: "right-dot", size: "main" })}>NEWS</h1>
        {renderNewsList()}
      </div>
    </section>
  );
};

export default News;
