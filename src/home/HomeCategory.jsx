import React from "react";
import { Link } from "react-router-dom";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/buying-your-first-dslr-6.jpg?fit=1500%2C1000&ssl=1",
    // imgUrl: 'https://m.media-amazon.com/images/I/81wk12fBFES._AC_SL1500_.jpg',
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    // imgUrl: "https://domf5oio6qrcr.cloudfront.net/medialibrary/7262/hb-feet-0616207265009467.jpg",
    imgUrl: 'https://people.com/thmb/8LOaEHYiImG4A28zi6lplN8YcxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Comfortable-Dress-Shoes-of-2023-tout-f0677d2031d7485992bc5cccfe173245.jpg',
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: "https://quickphotodubai.com/wp-content/uploads/2021/11/Best-professional-photographers-in-Dubai2.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: "https://www.brides.com/thmb/BAkK8Sl-wCY3EQzwNiu92zcEu10=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/semi-formal-attire-recirc-REBECCA-YALE-PHOTOGRAPHY-a57b76eac9b14e4e85377c58a8df86b3.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: "https://girlyessentials.com.ng/wp-content/uploads/2022/07/giftbag.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "https://m.media-amazon.com/images/I/81aMwe7G72L._AC_SL1500_.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/*  Header Section */}
        <div className="section-header text-center ">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        {/* section card */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1 ">
            {categoryList.map((val, i) => (
              <div key={i} className="col">
                <Link to="/shop" className="category-item">
                  <div className="category-inner">
                    {/* image thumbnail */}
                    <div className="category-thumb">
                      <img className="itemed "src={val.imgUrl} alt="" />
                    </div>
                    {/* content */}
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={val.iconName}></i>
                      </div>
                      <Link to="/shop">
                        <h6>{val.title}</h6>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 ">
            <Link to="/shop" className="lab-btn">
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
