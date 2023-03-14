import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";

const Insurance = () => {
  const [cat, setCat] = useState();

  const [type, setType] = useState();

  const [agents, setAgents] = useState();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("https://insurance-api-five.vercel.app/client/agents/get")
      .then((res) => {
        setAgents(res.data);
        setLoading(false);
      });

    if (localStorage.getItem("user") === null) {
      window.location.href = "/login";
    }

    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleSearch = () => {
    axios
      .post(
        "https://insurance-api-five.vercel.app/client/agent/get/" +
          cat +
          "/" +
          type +
          "/" +
          user.city +
          "/" +
          user._id
      )
      .then((res) => {
        toast.success("Work Alert Sent Successfully");
      })
      .catch((err) => {
        if (err.response.status === 403) {
          toast.error("No Agents Found For Your City");
        } else if (err.response.status === 405) {
          toast.error("You have applied for this Agent Request");
        }
      });
  };

  return (
    <>
      <Header />
      <div className="elementor elementor-487">
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-ef9084c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          style={{ marginBottom: 0 }}
          data-id="ef9084c"
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column  elementor-top-column elementor-element elementor-element-ace4896"
              data-id="ace4896"
              data-element_type="column"
            >
              {" "}
              <select
                className="ekit_search-field"
                onChange={(e) => {
                  setCat(e.target.value);
                }}
              >
                <option>Search by Insurance Category</option>
                <option value="Life Insurance">Life Insurance</option>
                <option value="Non-Life Insurance">Non-Life Insurance</option>
              </select>
            </div>
            &nbsp; &nbsp;
            <div
              className="elementor-column  elementor-top-column elementor-element elementor-element-ace4896"
              data-id="ace4896"
              data-element_type="column"
            >
              {" "}
              <select
                className="ekit_search-field"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option>Search by Insurance Type</option>
                <option value="Health Insurance">Health Insurance</option>
                <option value="Life Insurance">Life Insurance</option>
                <option value="Car Insurance">Car Insurance</option>
                <option value="House Insurance">House Insurance</option>
                <option value="Business Insurance">Business Insurance</option>
              </select>
            </div>
            &nbsp; &nbsp;
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a
                  href="#/"
                  className="elementor-button-link elementor-button elementor-size-sm"
                  role="button"
                  onClick={handleSearch}
                >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">Search</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-e92c02e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="e92c02e"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column  elementor-top-column elementor-element elementor-element-80a2072"
                data-id="80a2072"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-2212437 de_scroll_animation_no elementor-widget elementor-widget-elementskit-heading animated fadeInUp"
                    data-id={2212437}
                    data-element_type="widget"
                    data-settings='{"_animation":"fadeInUp","_animation_delay":200}'
                    data-widget_type="elementskit-heading.default"
                  >
                    <br />
                    <div className="elementor-widget-container">
                      <div className="ekit-wid-con">
                        <div className="ekit-heading elementskit-section-title-wraper text_center   ekit_heading_tablet-   ekit_heading_mobile-text_center">
                          <h2 className="ekit-heading--title elementskit-section-title ">
                            Meet Our{" "}
                            <span>
                              <span>Professional</span>
                            </span>{" "}
                            Insurance Agents
                          </h2>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-2403a83 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="2403a83"
                    data-element_type="section"
                  >
                    {loading === true ? (
                      <>
                        <h2>Loading Agents</h2>
                      </>
                    ) : (
                      <>
                        <div className="elementor-container elementor-column-gap-default">
                          {agents.length === 0 ? (
                            <>
                              <h2>No Insurnace Found in Your City</h2>
                            </>
                          ) : (
                            <>
                              {agents.map((a, i) => (
                                <>
                                  <div
                                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-90c4f12 animated fadeInUp"
                                    key={i}
                                    data-id="90c4f12"
                                    data-element_type="column"
                                    data-settings='{"animation":"fadeInUp","animation_delay":400}'
                                  >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-2d5c1b3 de_scroll_animation_no elementor-widget elementor-widget-elementskit-team"
                                        data-id="2d5c1b3"
                                        data-element_type="widget"
                                        data-widget_type="elementskit-team.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="ekit-wid-con">
                                            <div className="profile-image-card elementor-animation- ekit-team-img text-center">
                                              {a.profile_img === "" ? (
                                                <>
                                                  <img
                                                    decoding="async"
                                                    width={800}
                                                    height={800}
                                                    src="https://i.ibb.co/LhVypFg/image-removebg-preview.png"
                                                    className="attachment-large size-large wp-image-179"
                                                    alt=""
                                                    loading="lazy"
                                                  />{" "}
                                                </>
                                              ) : (
                                                <>
                                                  <img
                                                    decoding="async"
                                                    width={800}
                                                    height={800}
                                                    src={a.profile_img}
                                                    className="attachment-large size-large wp-image-179"
                                                    alt=""
                                                    loading="lazy"
                                                  />{" "}
                                                </>
                                              )}
                                            </div>
                                          </div>{" "}
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-element elementor-element-d4b780d de_scroll_animation_no elementor-widget elementor-widget-heading"
                                        style={{ textAlign: "center" }}
                                        data-id="d4b780d"
                                        data-element_type="widget"
                                        data-widget_type="heading.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <h4
                                            className="elementor-size-default"
                                            style={{ marginBottom: 0 }}
                                          >
                                            {a.name}
                                          </h4>{" "}
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-element elementor-element-6140f33 de_scroll_animation_no elementor-widget elementor-widget-text-editor"
                                        data-id="6140f33"
                                        data-element_type="widget"
                                        data-widget_type="text-editor.default"
                                      >
                                        <div
                                          className="elementor-widget-container"
                                          style={{
                                            justifyContent: "center",
                                            display: "flex",
                                          }}
                                        >
                                          <a
                                            href={
                                              "/Agent/" + a._id + "/" + a.name
                                            }
                                          >
                                            <button className="btn btn-primary">
                                              View
                                            </button>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ))}
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </section>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Insurance;
