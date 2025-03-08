import React from "react";
import { coursesCard } from "../../dummydata";
import Title from "../common/title/Title";
import OnlineCourses from "../allcourses/OnlineCourses";

const HAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Title subtitle="Our Courses" title="Explore our popular online courses" />
          <div className="coursesCard">
            <div className="grid3">
              {coursesCard.slice(0, 3).map((val) => (
                <div className="items">
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>

                    <div className="right">
                      <div className="text">
                        <h1>{val.coursesName}</h1>
                        <div className="rate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <label>(5.0)</label>
                        </div>
                        <div className="details">
                          {val.courTeacher.map((detail) => (
                            <>
                              <div className="box">
                                <div className="dimg">
                                  <img src={detail.dcover} alt="" />
                                </div>
                                <div className="para">
                                  <h4>{detail.name}</h4>
                                </div>
                              </div>
                              <span>{detail.totalTime}</span>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <button className="outline-btn">ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <OnlineCourses />
    </>
  );
};

export default HAbout;
