import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  // console.log(id);
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader
        title={"Single Blog Pages"}
        curPage={"Blog /  Blog Details"}
      />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12 ">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                    <ul className="lab-ul">
                                      {item.metaList.map((val, i) => (
                                        <li key={i}>
                                          <i className={val.iconName}></i>
                                          {val.text}
                                        </li>
                                      ))}
                                    </ul>
                                </div>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quo quibusdam repellendus iste doloremque magni, odit quia ipsam debitis eum ab eos, 
                                ex molestiae repudiandae optio rerum molestias possimus, labore nostrum? Dignissimos quibusdam quod sequi, 
                                ipsa repudiandae veniam recusandae! 
                                Architecto atque culpa eius ipsum maxime vitae dolor dolorem nihil delectus excepturi! Lorem ipsum dolor sit amet consectetur adipisicing 
                                elit. Recusandae, nostrum provident dolores, vero eaque aliquam possimus dignissimos repudiandae maxime itaque hic enim quas, tempore 
                                tenetur fuga nihil quibusdam tempora. Rem, perspiciatis 
                                voluptate magni aliquam deserunt ad est aut quam exercitationem quisquam temporibus beatae, eaque fuga repudiandae quae rerum? Sequi, 
                                porro.</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12 ">Right Side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
