import "./Home.css";

import NavBar from "./NavBar";
import Footer from "./Footer";
import trekking from "../icons/trekking.png";
import map from "../icons/map.png";
import earth from "../icons/earth.png";
import suitcases from "../icons/suitcases.png";
import island from "../icons/island.png";
import maldives from "../images/maldives.jpg";
import cottonbro from "../images/cottonbro.jpg";
import donald from "../images/donald.jpg";
import pool from "../images/pool.jpg";
import room from "../images/room.jpg";
import pixabay from "../images/pixabay.jpg";
import profile from "../images/profile.webp";
import background from "../images/background.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Home = () => {
  return (
    <>
      <div className="background-image">
        <NavBar></NavBar>
        <div className="someplace ">
          <h3 className="">
            Once a year go someplace you have never been before
          </h3>
          <div className="button text-center mt-5">
            <a href="#" className="btn btn ">
              see video
            </a>
          </div>
        </div>
      </div>
      {/* resevation area start */}

      <div className="container">
        <section>
          <div className="section-1 shadow p-3">
            <div className="row mx-2">
              <div className="col-lg-3 pt-2">
                <div className="dropup-center dropup">
                  <a
                    className=" dropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Date Arrival{" "}
                    <span className="float-end">
                      <i className="bi bi-calendar"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Action two
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Action three
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 pt-2">
                <div className="dropup-center dropup">
                  <a
                    className=" dropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Date depature{" "}
                    <span className="float-end">
                      <i className="bi bi-calendar"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Action two
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Action three
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 pt-2">
                <div className="dropdown ddown">
                  <a
                    className=" dropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    # of person{" "}
                    <span className="float-end">
                      <i className="bi bi-person-fill"></i>
                    </span>
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 pt-2">
                <div className="button-2 ">
                  <a href="" className="btn btn-md">
                    {" "}
                    Find now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* reservation area end  */}

      {/* services */}
      <div className="container service">
        <h4> OUR SERVICES</h4>
      </div>
      <section className="section-3">
        <Splide
          options={{
            type: "loop", // The carousel will loop infinitely
            perPage: 3, // Show 3 slides per page
            autoplay: true, // Automatically play the slides
            pauseOnHover: true, // Pause the autoplay on hover
            gap: "1rem", // Add some gap between the slides
            breakpoints: {
              768: {
                perPage: 2, // On tablet, show 2 slides per page
              },
              480: {
                perPage: 1, // On mobile, show 1 slide per page
              },
            },
          }}
        >
          <SplideSlide>
            <div className="card container">
              <div className="card-content">
                <div className="CardImg1">
                  <img src={trekking} alt="" width="30%" />
                </div>
                <div className="card-body">
                  <h5>Trekking</h5>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="#" className="btn">
                    {" "}
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card container">
              <div className="card-content">
                <div className="CardImg1">
                  <img src={map} alt="" width="30%" />
                </div>
                <div className="card-body">
                  <h5>Map</h5>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="#" className="btn">
                    {" "}
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card container">
              <div className="card-content">
                <div className="CardImg1">
                  <img src={island} alt="" width="30%" />
                </div>
                <div className="card-body">
                  <h5>island hopping</h5>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="#" className="btn">
                    {" "}
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card container">
              <div className="card-content">
                <div className="CardImg1">
                  <img src={suitcases} alt="" width="30%" />
                </div>
                <div className="card-body">
                  <h5>Suitcases</h5>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="#" className="btn">
                    {" "}
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card container">
              <div className="card-content">
                <div className="CardImg1">
                  <img src={earth} alt="" width="30%" />
                </div>
                <div className="card-body">
                  <h5>World-Round</h5>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="#" className="btn">
                    {" "}
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </section>
      {/* services end  */}

      {/* About start */}
      <div className="about">
        <div className="about-img">
          <div className="img">
            <img src={background} alt="" />
          </div>
        </div>
        <div className="about-content">
          <h5>ABOUT Hotel_luxyury</h5>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
      {/* About end */}

      {/* second slide start */}

      <section className="container blog">
        <h2>Blog Post</h2>
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            autoplay: true,
            pauseOnHover: true,
            gap: "1rem",
            arrows: true,
            breakpoints: {
              768: {
                perPage: 2, // On tablet, show 2 slides per page
              },
              480: {
                perPage: 1, // On mobile, show 1 slide per page
              },
            },
          }}
        >
          <SplideSlide>
            <div className="card">
              <div className="cardImg">
                <img
                  src={maldives}
                  alt="Maldives"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
              </div>
              <div className="container cardContent">
                <p className="blogContent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  repellat fugit vel ad, amet voluptatum molestias ea
                  laudantium. Quas temporibus, accusantium blanditiis ea aliquid
                  aspernatur assumenda! Odit velit sunt consequatur, nulla,
                  perferendis suscipit fugiat assumenda nam laborum culpa ullam
                  natus quo tempore officia aperiam sequi officiis. Repellat
                  odit modi dolores!
                </p>
                <div className="cardAction">
                  <button className="btn">learn more</button>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <div className="cardImg">
                <img
                  src={pool}
                  alt="pool"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
              </div>
              <div className="container cardContent">
                <p className="blogContent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  repellat fugit vel ad, amet voluptatum molestias ea
                  laudantium. Quas temporibus, accusantium blanditiis ea aliquid
                  aspernatur assumenda! Odit velit sunt consequatur, nulla,
                  perferendis suscipit fugiat assumenda nam laborum culpa ullam
                  natus quo tempore officia aperiam sequi officiis. Repellat
                  odit modi dolores!
                </p>
                <div className="cardAction">
                  <button className="btn">learn more</button>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <div className="cardImg">
                <img
                  src={room}
                  alt="room"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
              </div>
              <div className="container cardContent">
                <p className="blogContent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  repellat fugit vel ad, amet voluptatum molestias ea
                  laudantium. Quas temporibus, accusantium blanditiis ea aliquid
                  aspernatur assumenda! Odit velit sunt consequatur, nulla,
                  perferendis suscipit fugiat assumenda nam laborum culpa ullam
                  natus quo tempore officia aperiam sequi officiis. Repellat
                  odit modi dolores!
                </p>
                <div className="cardAction">
                  <button className="btn">learn more</button>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <div className="cardImg">
                <img
                  src={pixabay}
                  alt="pixabay"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
              </div>
              <div className="container cardContent">
                <p className="blogContent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  repellat fugit vel ad, amet voluptatum molestias ea
                  laudantium. Quas temporibus, accusantium blanditiis ea aliquid
                  aspernatur assumenda! Odit velit sunt consequatur, nulla,
                  perferendis suscipit fugiat assumenda nam laborum culpa ullam
                  natus quo tempore officia aperiam sequi officiis. Repellat
                  odit modi dolores!
                </p>
                <div className="cardAction">
                  <button className="btn">learn more</button>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <div className="cardImg">
                <img
                  src={donald}
                  alt="donald"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
              </div>
              <div className="container cardContent">
                <p className="blogContent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  repellat fugit vel ad, amet voluptatum molestias ea
                  laudantium. Quas temporibus, accusantium blanditiis ea aliquid
                  aspernatur assumenda! Odit velit sunt consequatur, nulla,
                  perferendis suscipit fugiat assumenda nam laborum culpa ullam
                  natus quo tempore officia aperiam sequi officiis. Repellat
                  odit modi dolores!
                </p>
                <div className="cardAction">
                  <button className="btn">learn more</button>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <div className="cardImg">
                <img
                  src={cottonbro}
                  alt="cottonbro"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
              </div>
              <div className="container cardContent">
                <p className="blogContent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  repellat fugit vel ad, amet voluptatum molestias ea
                  laudantium. Quas temporibus, accusantium blanditiis ea aliquid
                  aspernatur assumenda! Odit velit sunt consequatur, nulla,
                  perferendis suscipit fugiat assumenda nam laborum culpa ullam
                  natus quo tempore officia aperiam sequi officiis. Repellat
                  odit modi dolores!
                </p>
                <div className="cardAction">
                  <button className="btn">learn more</button>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </section>

      {/* second slide end  */}

      {/* questions start */}

      <div className="question"></div>

      {/* questions end */}

      {/* testimonial start */}
      <div className="testimonial-wrapper">
        <div className="container testimonials">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <h4 class="test">Testimonials</h4>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
              <p class="test-p">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>

          <Splide
            options={{
              type: "loop",
              perPage: 3,
              autoplay: true,
              pauseOnHover: true,
              gap: "1rem",
              arrows: true,
              breakpoints: {
                768: {
                  perPage: 2, // On tablet, show 2 slides per page
                },
                480: {
                  perPage: 1, // On mobile, show 1 slide per page
                },
              },
            }}
          >
            <SplideSlide>
              <div className="card shadow-sm p-3">
                <div className="card-body">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size="2x"
                    className="text-success mb-3"
                  />
                  <p className="card-text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={profile}
                      alt=""
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">john doe</h5>
                      <p className="text-muted">creative director</p>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card shadow-sm p-3">
                <div className="card-body">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size="2x"
                    className="text-success mb-3"
                  />
                  <p className="card-text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={profile}
                      alt=""
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">john doe</h5>
                      <p className="text-muted">creative director</p>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card shadow-sm p-3">
                <div className="card-body">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size="2x"
                    className="text-success mb-3"
                  />
                  <p className="card-text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={profile}
                      alt=""
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">john doe</h5>
                      <p className="text-muted">creative director</p>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card shadow-sm p-3">
                <div className="card-body">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size="2x"
                    className="text-success mb-3"
                  />
                  <p className="card-text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={profile}
                      alt=""
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">john doe</h5>
                      <p className="text-muted">creative director</p>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card shadow-sm p-3">
                <div className="card-body">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size="2x"
                    className="text-success mb-3"
                  />
                  <p className="card-text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={profile}
                      alt=""
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">john doe</h5>
                      <p className="text-muted">creative director</p>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card shadow-sm p-3">
                <div className="card-body">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size="2x"
                    className="text-success mb-3"
                  />
                  <p className="card-text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={profile}
                      alt=""
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">john doe</h5>
                      <p className="text-muted">creative director</p>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      {/* testimonial end */}

      {/* instagram starts */}

      <div className="instagram">
        <div className="row container">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <h4 class="test">Instagram</h4>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
            <p class="test-p">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>

        <section className="instagram-section">
          <Splide
            options={{
              type: "loop",
              perPage: 4,
              autoplay: true,
              pauseOnHover: true,
            }}
          >
            <SplideSlide>
              <img
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                src={room}
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                src={pool}
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                src={pixabay}
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                src={profile}
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                src={maldives}
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                src={donald}
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                src={cottonbro}
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                src={pool}
                alt=""
              />
            </SplideSlide>
          </Splide>
        </section>
      </div>

      {/* instagram ends */}

      {/* footer start */}
      <div>
        <Footer></Footer>
      </div>

      {/* footer end */}
    </>
  );
};

export default Home;
