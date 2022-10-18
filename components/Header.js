/**
 * Zesty.io AutoGenerated Header Component
 * This file is used in [...slug.js] for example. It is not necceary and may be deleted or modified as needed.
 *
 */
import { useRouter } from 'next/router';
const fetch = require('node-fetch');
const configs = require('../zesty.config.json');
import { React, useState, useEffect } from 'react';

function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const stageURL = configs.stage;

  console.log(process.env.PRODUCTION);

  const [navs, setNavs] = useState([]);

  // async function fetchData(url) {
  //   // console.log('fetching data from: ', url);
  //   // let res = await fetch(url, { method: 'GET', mode: 'no-cors' });
  //   // let data = await res.json();
  //   // console.log(data);
  //   // setNavs(data);

  //   try {
  //     let res = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     return await res.json();
  //   } catch (error) {
  //     throw new Error(`HTTP error: ${error}`);
  //   }
  // }

  // useEffect(() => {
  //   // fetch request
  //   let data = fetchData(
  //     `https://7z8qfp6r-dev.webengine.zesty.io/nav-bar/?toJSON`,
  //   );
  // }, []);

  return (
    <>
      <header className="theme-main-menu sticky-menu theme-menu-eleven white-vr">
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <a href="index.html" className="d-block">
                <img src="images/logo/logo_05.png" alt="" width="95" />
              </a>
            </div>

            <div className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
              <a
                href="signin.html"
                className={
                  !isHomePage
                    ? 'login-btn-two text-dark fw-bold fw-500 d-flex align-items-center me-3 me-xl-5'
                    : 'login-btn-two fw-500 d-flex align-items-center me-3 me-xl-5'
                }
              >
                <img src="images/icon/icon_20.svg" alt="" className="me-2" />
                <span>login</span>
              </a>
              <a
                href="#"
                style={{
                  background:
                    !isHomePage &&
                    'linear-gradient(-90deg, #ff7df2 0%, #ff275b 100%)',
                }}
                className={
                  'start-btn-two fw-500 position-relative d-none d-lg-block'
                }
              >
                Get Started
              </a>
            </div>

            <nav className="navbar navbar-expand-lg order-lg-2">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="d-block d-lg-none">
                    <div className="logo">
                      <a href="index.html" className="d-block">
                        <img src="images/logo/logo_05.png" alt="" width="95" />
                      </a>
                    </div>
                  </li>
                  <li className="nav-item active dropdown">
                    <a
                      className={
                        !isHomePage ? 'fw-bold text-dark nav-link' : 'nav-link'
                      }
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Product
                    </a>
                  </li>
                  <li className="nav-item dropdown mega-dropdown-md">
                    <a
                      className={
                        !isHomePage ? 'fw-bold text-dark nav-link' : 'nav-link'
                      }
                      href="blog"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className={
                        !isHomePage ? 'fw-bold text-dark nav-link' : 'nav-link'
                      }
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>

                <div className="mobile-content d-block d-lg-none">
                  <div className="d-flex flex-column align-items-center justify-content-center mt-70">
                    <a
                      href="contact-us.html"
                      className="start-btn-two fw-500 position-relative"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
