"use client";

import { useRef, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { generateCardData } from "../../utils/generateCardData";
import NftCard from "../NftCard/NftCard";
import styles from "./Slider.module.scss";

interface NftItem {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
}

interface SliderProps {
  nfts: NftItem[];
}

export default function Slider({ nfts }: SliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const cards = useMemo(() => {
    if (!nfts?.length) return [];
    return generateCardData(nfts.slice(0, 20));
  }, [nfts]);

  if (!cards.length) {
    return <div className={styles.loading}>No NFTs available</div>;
  }

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView="auto"
        loop
        loopAdditionalSlides={3}
        watchSlidesProgress
        grabCursor
        centeredSlides
        className={styles.swiper}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className={styles.slide}>
            <NftCard data={card} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.arrowsWrapper}>
        <div className={styles.arrows}>
          <button
            className={styles.arrow}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
          >
            <Image src="/arrow.svg" alt="Previous" width={14} height={9} />
          </button>
          <span className={styles.divider} />
          <button
            className={styles.arrow}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
          >
            <Image src="/arrow.svg" alt="Next" width={14} height={9} className={styles.arrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
