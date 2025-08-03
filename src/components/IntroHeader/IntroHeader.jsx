import "./IntroHeader.css";
import IntroheaderImage from "../../assets/images/IntroHeader.webp";
import { Parallax } from "react-scroll-parallax";

function IntroHeader() {
  return (
    <section className="intro-header">
      <div className="intro-header__container">
        <div className="intro-header__content__left">
          <h1 className="intro-header__title">Transform Your Ideas</h1>
          <div className="intro-header__separator" />
          <p className="intro-header__subtitle">From Concept to Reality</p>
        </div>

        <Parallax speed={-10}>
          <div className="intro-header__parallax__right">
            <img
              src={IntroheaderImage}
              alt="IntroheaderImage"
              className="intro-header__image"
            />
          </div>
        </Parallax>
      </div>
    </section>
  );
}

export default IntroHeader;
