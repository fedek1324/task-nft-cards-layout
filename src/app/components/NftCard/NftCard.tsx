"use client";

import { useState, useEffect, memo } from "react";
import Image from "next/image";
import { NftCardData } from "../../utils/generateCardData";
import styles from "./NftCard.module.scss";

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function formatTimeLeft(endTime: number): string {
  const diff = Math.max(0, endTime - Date.now());
  const hours = Math.floor(diff / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);
  return `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

function Timer({ endTime }: { endTime: number }) {
  const [timerStr, setTimerStr] = useState(formatTimeLeft(endTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerStr(formatTimeLeft(endTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <span className={styles.timer} suppressHydrationWarning>
      {timerStr}
    </span>
  );
}

interface NftCardProps {
  data: NftCardData;
}

const NftCard = memo(function NftCard({ data }: NftCardProps) {
  const { name, image, bid, endTime } = data;

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
        <Timer endTime={endTime} />
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
});

export default NftCard;
