import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(384);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    function handleResize() {
      const tempHeaderHeight = Math.max(384, window.innerHeight);
      setHeaderHeight(tempHeaderHeight);
      setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    }

    handleResize();
    mainRef.current.hidden = false;
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div className="container">
          <div
            className={styles.heroBannerText}
            style={{ minHeight: bannerHeight }}
          >
            <p className="colorSuccess">
              <b>Hi, I'm</b>
            </p>
            <h1>
              <span className="colorWarning">Rohit</span>{" "}
              <span className="colorDanger">Dhill</span>
            </h1>
            <p>{siteConfig.tagline}</p>
            <SocialLinks />
            <nav className={clsx("pagination-nav", styles.heroBannerButton)}>
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("#about")}>
                  <div className="pagination-nav__sublabel">Read my</div>
                  <div className="pagination-nav__label">Introduction</div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main id="about" ref={mainRef} hidden={true}>
        <div className={styles.aboutHeader}>
          <h2 className="underlineColorSuccess">Hey there!</h2>
        </div>
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src={useBaseUrl("/img/profilepic.png")} />
              </div>
              <div className="col col--9">
                <h2>Hello, </h2>
                <p>
                  I'm currently a sophomore at{" "}
                  <a href="https://mnit.ac.in/">Malaviya National Institute of Technology, Jaipur</a> pursuing B.Tech in the Computer Science discipline.
                </p>
                <p>
                  I have a very deep affection towards everything and anything related to Cyber Security. Reading about things and tinkering with them in my home-lab environment is how my day goes by.
                </p>
                <p>
                  Apart from breaking things, I also enjoy building them.
                  I mostly go by the <b>s4dr0t1</b> moniker online.
                </p>
                <p>
                  If you have something, you want to talk to me about, hit me up on my socials or through {" "}<a href="mailto:contact@rohitdhill.me">email</a>. You can check out my PGP key {" "}<a href="https://raw.githubusercontent.com/s4dr0t1/s4dr0t1.github.io/main/static/s4dr0t1.asc">here</a> 
                </p>

                {/* <p>
                  You can read more{" "}
                  <Link to={useBaseUrl("/about")}>about me</Link> or check out{" "}
                  <Link to={useBaseUrl("/projects")}>my projects</Link> if you
                  are interested.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <section className={styles.directoryBody}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("blog/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My blog</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My Infosec ramblings</div>
                </Link>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
