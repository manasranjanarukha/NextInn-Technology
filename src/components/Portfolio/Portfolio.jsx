import React from "react";
import "./Portfolio.css";
import portfolio_1 from "../../assets/images/portfolio-1.webp";
import portfolio_2 from "../../assets/images/portfolio-2.webp";
import portfolio_3 from "../../assets/images/portfolio-3.webp";

function Portfolio() {
  const portfolioItems = [
    {
      id: "1",
      title: "Glowstar - Diamond Business App",
      image: portfolio_1,
      link: "https://6822d5e6b5efe.site123.me/portfolio/glowstar-diamond-business-app",
    },
    {
      id: "2",
      title: "Seaqua Cosmetics",
      image: portfolio_2,
      link: "https://6822d5e6b5efe.site123.me/portfolio/seaqua-cosmetics",
    },
    {
      id: "3",
      title: "Sur Sangam",
      image: portfolio_3,
      link: "https://6822d5e6b5efe.site123.me/portfolio/sur-sangam",
    },
  ];
  return (
    <div>
      <section id="portfolio" className="portfolio-section">
        <div className="container-fluid page-header-style">
          <div className="row">
            <div className="container module-title-container">
              <div className="row modules-title text-center">
                <div className="col-xs-12">
                  <div className="page-header-wrap">
                    <h2
                      id="section-6822d96d62388-title"
                      className="page-header"
                    >
                      Portfolio
                    </h2>
                    <hr className="small" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {portfolioItems.map((item) => {
            return (
              <div className="img-wrapper" key={item.id}>
                <img src={item.image} alt="html-1" loading="lazy" />

                <div className="info">
                  <h1>{item.title}</h1>

                  <button>VIEW</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
