"use client";

import Image from "next/image";
import { NftCardData } from "../../utils/generateCardData";
import styles from "./NftCard.module.scss";

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

interface NftCardProps {
  data: NftCardData;
}

export default function NftCard({ data }: NftCardProps) {
  const { name, image, bid, timer } = data;
  const timerStr = `${pad(timer.hours)}h ${pad(timer.minutes)}m ${pad(timer.seconds)}s`;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="253px"
          className={styles.image}
        />
        <span className={styles.timer}>{timerStr}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.row}>
          <div className={styles.bid}>
            <span className={styles.bidLabel}>Current bid</span>
            <span className={styles.bidValue}>
              <Image src="/eth.svg" alt="ETH" width={22} height={22} />
              {bid}
            </span>
          </div>
          <button className={styles.button}>PLACE BID</button>
        </div>
      </div>
    </div>
  );
}
