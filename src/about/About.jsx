import React from "react";
import PageHeader from "../components/PageHeader";
const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc =
  "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "12600",
    text: "Marchant Enrolled",
  },
  { iconName: "icofont-graduate-alt", count: "30", text: "Certified Courses" },
  {
    iconName: "icofont-notification",
    count: "100",
    text: "Rewards and GitCards",
  },
];

const About = () => {
  return (
    <div>
      <PageHeader title={"About Our Brand"} curPage={"About"} />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">  
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  {/* <img src="/src/assets/images/about/01.jpg" alt="" /> */}
                  <img src="/imaged/01.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* 2nd col */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
