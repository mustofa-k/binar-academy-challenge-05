import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlinePlayCircle } from "react-icons/ai";

function CarouselHome() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <div className="hero1">
          <div className="bg-home-filter">
            <div className="hero-content w-50 my-5 px-4 pb-5 d-flex flex-column justify-content-center">
              <h1 className="fs-1 fw-bold text-white mb-0 ">
                Doctor Strange in the Multiverse of Madness
              </h1>
              <p className="text-white fs-6 mt-5 mb-4">
                Journey into the unknown with Doctor Strange, with the help of
                mystical allies both old and new, across the confusing and
                dangerous alternate realities of the Multiverse to confront a
                mysterious new enemy.
              </p>
              <button className="btn-trailer py-2 border border-0 rounded-5">
                <p className="fw-bold m-auto d-flex justify-content-center gap-1 align-items-center text-white">
                  <AiOutlinePlayCircle className="fs-5 text-warning" /> WATCH TRAILER
                </p>
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero2">
          <div className="bg-home-filter">
            <div className="hero-content w-50 my-5 px-4 pb-5 d-flex flex-column justify-content-center">
              <h1 className="fs-1 fw-bold text-white mb-0 ">
                Spiderman No Way Home
              </h1>
              <p className="text-white fs-6 mt-5 mb-4">
                For the first time in Spider-Mans screen history, the true
                identity of this friendly hero is revealed, making his
                responsibilities as a superpowered person clash with his normal
                life, and putting everyone closest to him in the most threatened
                position.
              </p>
              <button className="btn-trailer py-2 border border-0 rounded-5">
                <p className="fw-bold m-auto d-flex justify-content-center gap-1 align-items-center text-white">
                  <AiOutlinePlayCircle className="fs-5 text-warning" /> WATCH TRAILER
                </p>
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero3">
          <div className="bg-home-filter">
            <div className="hero-content w-50 my-5 px-4 pb-5 d-flex flex-column justify-content-center">
              <h1 className="fs-1 fw-bold text-white mb-0 ">The Conjuring</h1>
              <p className="text-white fs-6 mt-5 mb-4">
                When husband and wife Rod and Carolyn realized that their family
                was being disturbed by an evil spirit - the two of them finally
                asked for help from a couple of supernatural experts to
                investigate this problem.
              </p>
              <button className="btn-trailer  py-2 border border-0 rounded-5">
                <p className="fw-bold m-auto d-flex justify-content-center gap-1 align-items-center text-white">
                  <AiOutlinePlayCircle className="fs-5 text-warning"/> WATCH TRAILER
                </p>
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
