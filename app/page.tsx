"use client";

import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { LuCircle as ProfileIcon } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import "@/styles/global.css";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.logo}>
            <BlueprintLogo />
          </div>
          <span className={styles.headerText}>
            <span className={styles.blueprint}>blueprint</span> volunteers
          </span>
        </div>
        <div className={styles.contentSurround}>
          <div className={styles.contentScroll}>
            <div className={styles.profileRow}>
              <ProfileIcon size={30} />
              <div className={styles.profileName}>
                <p>
                  <span style={{ fontWeight: "bold" }}>etam3</span>
                  <span style={{ fontWeight: "normal" }}> at </span>
                  <span style={{ fontWeight: "bold" }}>Mission Bit</span>
                </p>
                <div className={styles.locName}>
                  <p style={{ fontWeight: "lighter" }}>San Francisco, CA</p>
                </div>
              </div>
            </div>

            <img
              className={styles.postImage}
              src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
              width={346}
              height={231}
            />

            <p>
              This past weekend, I taught at Mission Bit. I was working with a
              group of high school students who were building their first web
              pages. I really enjoyed being able to help guide 10 students on
              learning CS fundamentals through a project! They were all really
              eager to learn, and I&#39;m glad I signed up. Highly recommend to
              any other software engineers interested in volunteering! Sign-up
              here: https://missionbit.org/get-involved/volunteer-with-us/
            </p>
            <div className={styles.smallText}>
              <p>Likes 3</p>
              <p>View Comments 2</p>
            </div>
            <div className={styles.iconRow}>
              <div className={styles.iconLeft}>
                <HeartIcon size={24} />
                <TbMessageCircle size={24} />
              </div>
              <div className={styles.iconRight}>
                <ShareIcon size={24} />
              </div>
            </div>

            <p style={{ fontWeight: "lighter", fontSize: 10 }}>February 1</p>
          </div>
          <div className={styles.postBorder}></div>

          <div className={styles.contentScroll}>
            <div className={styles.profileRow}>
              <ProfileIcon size={30} />
              <div className={styles.profileName}>
                <p>
                  <span style={{ fontWeight: "bold" }}> carolyn123 </span>
                  <span style={{ fontWeight: "normal" }}> at </span>
                  <span style={{ fontWeight: "bold" }}>
                    Boys and Girls Club
                  </span>
                </p>
                <div className={styles.locName}>
                  <p style={{ fontWeight: "lighter" }}>Oakland, CA</p>
                </div>
              </div>
            </div>

            <p>I recently volunteered at my local Boys and Girls Club!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
