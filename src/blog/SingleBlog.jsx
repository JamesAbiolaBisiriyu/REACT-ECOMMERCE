import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

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
                                <p className="">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Quo quibusdam repellendus
                                  iste doloremque magni, odit quia ipsam debitis
                                  eum ab eos, ex molestiae repudiandae optio
                                  rerum molestias possimus, labore nostrum?
                                  Dignissimos quibusdam quod sequi, ipsa
                                  repudiandae veniam recusandae! Architecto
                                  atque culpa eius ipsum maxime vitae dolor
                                  dolorem nihil delectus excepturi! Lorem ipsum
                                  dolor sit amet consectetur adipisicing elit.
                                  Recusandae, nostrum provident dolores, vero
                                  eaque aliquam possimus dignissimos repudiandae
                                  maxime itaque hic enim quas, tempore tenetur
                                  fuga nihil quibusdam tempora. Rem,
                                  perspiciatis voluptate magni aliquam deserunt
                                  ad est aut quam exercitationem quisquam
                                  temporibus beatae, eaque fuga repudiandae quae
                                  rerum? Sequi, porro.
                                </p>
                                <blockquote>
                                  <p>
                                    Dynamically recaptualize distributed
                                    technologies is Lorem ipsum, dolor sit amet
                                    consectetur adipisicing elit. Vitae
                                    molestias quibusdam tenetur voluptate
                                    commodi tempora eum repellendus voluptates
                                    placeat, harum assumenda debitis sunt
                                    adipisci ex voluptas neque quaerat ullam
                                    maiores! Totam deserunt sequi commodi
                                    ducimus?
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Odit, error dicta, vero,
                                  repellat eum cupiditate illo ad illum
                                  voluptatem explicabo velit perspiciatis iste
                                  consequatur. Ducimus ad aliquam vitae
                                  voluptatem eaque vel dolorem cupiditate
                                  quibusdam eveniet asperiores itaque quis,
                                  recusandae iste libero sequi? Ut iste aliquam
                                  impedit praesentium fugit, facilis
                                  exercitationem. Lorem ipsum dolor sit amet
                                  consectetur adipisicing elit. Inventore
                                  corporis doloribus cum atque odio minima
                                  necessitatibus ipsam assumenda, incidunt
                                  recusandae ipsum dolorem reiciendis placeat
                                  enim quod labore, harum nisi, aliquam at esse
                                  amet error commodi! Aspernatur voluptate
                                  libero officiis itaque iste dignissimos
                                  repellendus fuga. Ex veniam deserunt itaque
                                  nemo odio!
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />

                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Officia perferendis nisi eos
                                  consectetur earum, quos, facilis eum obcaecati
                                  possimus fugit quasi ullam rerum modi? Odit
                                  officiis ullam dignissimos esse neque
                                  molestiae, qui tempora quam deleniti placeat,
                                  porro fugiat. Nesciunt, earum mollitia! Ut
                                  blanditiis ab debitis eius, nulla dicta
                                  nesciunt autem fugit accusamus consequatur
                                  tenetur officiis voluptatem error quo velit
                                  incidunt, expedita sunt fugiat perspiciatis,
                                  sequi laboriosam. Ipsa nam eum sit!
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/L_b277qj3P4?si=jEpN9UtnxOO9UF91"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Assumenda quia hic ad
                                  aliquam sed, omnis ipsam possimus consequuntur
                                  impedit neque tenetur culpa sunt incidunt
                                  reprehenderit inventore aspernatur architecto
                                  ducimus debitis vero accusantium harum itaque?
                                  Libero, tenetur distinctio. Ullam velit
                                  necessitatibus voluptatibus laudantium quam
                                  quod, eveniet at soluta minus consequuntur
                                  beatae esse excepturi porro libero, dolorum
                                  sed corporis eaque qui praesentium. Lorem
                                  ipsum dolor sit amet consectetur adipisicing
                                  elit. Dignissimos reiciendis veniam vel
                                  asperiores officiis nulla deleniti aliquid
                                  nesciunt nemo in sunt excepturi, nobis dolorum
                                  architecto laudantium sequi officia atque
                                  aspernatur quod magni debitis. Soluta possimus
                                  illo ex! Voluptatem aperiam inventore
                                  architecto corrupti. Doloremque quo distinctio
                                  repellat maiores animi dignissimos neque iste
                                  esse omnis laudantium, magni in consequatur
                                  eligendi. Aut, id.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>{" "}
                                    <li>
                                      <a href="#">Buisness</a>
                                    </li>{" "}
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {
                                      socialList.map((val, i)=>(
                                        <li key={i}>
                                          <a href="#" className={val.className}>
                                            <i className={val.iconName}></i>
                                          </a>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
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
