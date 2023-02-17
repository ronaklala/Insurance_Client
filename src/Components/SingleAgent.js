import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";

const SingleAgent = () => {
  const [agent, setAgent] = useState();

  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));

    axios
      .get("http://localhost:5000/client/agent/" + params.id)
      .then((res) => {
        setAgent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setAgent(null);
        setLoading(false);
      });
  }, [params.id]);

  const ContactAgent = (uid, aid) => {
    axios
      .post("http://localhost:5000/client/contact/agent/" + uid + "/" + aid)
      .then((res) => {
        if (res.status === 200) {
          toast.success(
            "Work Request Succesfully Sent, Please Wait for a confirmation"
          );
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          toast.error(
            "You have already contacted Please Wait or Check Your Email"
          );
        }
      });
  };

  return (
    <>
      <Header />
      <div
        data-elementor-type="wp-page"
        data-elementor-id={405}
        className="elementor elementor-405"
      >
        {loading === true ? (
          <>
            <center>
              <h4>Loading Agent Data....</h4>
            </center>
          </>
        ) : (
          <>
            {agent === null ? (
              <>
                <center>
                  <h4>No Such Agent Found</h4>
                  <a href="/">
                    <button>Get Back to HomePage</button>
                  </a>
                </center>
                <br />
              </>
            ) : (
              <>
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-3e0f6a0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="3e0f6a0"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f54a19b"
                      data-id="f54a19b"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                          className="elementor-section elementor-inner-section elementor-element elementor-element-9df9cca elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="9df9cca"
                          data-element_type="section"
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5845006 animated fadeIn"
                              data-id="5845006"
                              data-element_type="column"
                              data-settings='{"animation":"fadeIn"}'
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-9a60f4b de_scroll_animation_no elementor-widget elementor-widget-image"
                                  data-id="9a60f4b"
                                  data-element_type="widget"
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    {agent.profile_img === "" ? (
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
                                          src={agent.profile_img}
                                          className="attachment-large size-large wp-image-179"
                                          alt=""
                                          loading="lazy"
                                        />{" "}
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-66 elementor-inner-column elementor-element elementor-element-e5d2ca4 animated fadeIn"
                              data-id="e5d2ca4"
                              data-element_type="column"
                              data-settings='{"animation":"fadeIn","animation_delay":200}'
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-d85a194 de_scroll_animation_no elementor-widget elementor-widget-text-editor"
                                  data-id="d85a194"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <style
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "/*! elementor - v3.10.1 - 17-01-2023 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#818a91;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#818a91;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}",
                                      }}
                                    />{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-e48135b de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="e48135b"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      {agent.name}
                                    </h2>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-def0ec5 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="def0ec5"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Email :
                                    </h2>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-c717301 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-text-editor"
                                  data-id="c717301"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>{agent.email}</p>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-ace68f6 de_scroll_animation_no elementor-widget elementor-widget-spacer"
                                  data-id="ace68f6"
                                  data-element_type="widget"
                                  data-widget_type="spacer.default"
                                >
                                  <div className="elementor-widget-container">
                                    <style
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "/*! elementor - v3.10.1 - 17-01-2023 */\n.elementor-column .elementor-spacer-inner{height:var(--spacer-size)}.e-con{--container-widget-width:100%}.e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer{width:var(--container-widget-width,var(--spacer-size));--align-self:var(--container-widget-align-self,initial);--flex-shrink:0}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{height:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{height:var(--container-widget-height,var(--spacer-size))}",
                                      }}
                                    />{" "}
                                    <div className="elementor-spacer">
                                      <div className="elementor-spacer-inner" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-d15ecb7 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="d15ecb7"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      IS Verified Agent :
                                    </h2>{" "}
                                  </div>
                                </div>

                                <div
                                  className="elementor-element elementor-element-4c55c06 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-text-editor"
                                  data-id="4c55c06"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>Yes</p>{" "}
                                  </div>
                                </div>

                                <div
                                  className="elementor-element elementor-element-ace68f6 de_scroll_animation_no elementor-widget elementor-widget-spacer"
                                  data-id="ace68f6"
                                  data-element_type="widget"
                                  data-widget_type="spacer.default"
                                >
                                  <div className="elementor-widget-container">
                                    <style
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "/*! elementor - v3.10.1 - 17-01-2023 */\n.elementor-column .elementor-spacer-inner{height:var(--spacer-size)}.e-con{--container-widget-width:100%}.e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer{width:var(--container-widget-width,var(--spacer-size));--align-self:var(--container-widget-align-self,initial);--flex-shrink:0}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{height:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{height:var(--container-widget-height,var(--spacer-size))}",
                                      }}
                                    />{" "}
                                    <div className="elementor-spacer">
                                      <div className="elementor-spacer-inner" />
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="elementor-element elementor-element-d15ecb7 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="d15ecb7"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Category :
                                    </h2>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-4c55c06 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-text-editor"
                                  data-id="4c55c06"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>{agent.category}</p>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-fb6de6c de_scroll_animation_no elementor-widget elementor-widget-spacer"
                                  data-id="fb6de6c"
                                  data-element_type="widget"
                                  data-widget_type="spacer.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-spacer">
                                      <div className="elementor-spacer-inner" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-0f7d9b7 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="0f7d9b7"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Type :
                                    </h2>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-f350dc0 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-text-editor"
                                  data-id="f350dc0"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>{agent.type}</p>{" "}
                                  </div>
                                </div>

                                <div
                                  className="elementor-element elementor-element-fc894a0 de_scroll_animation_no elementor-widget elementor-widget-spacer"
                                  data-id="fc894a0"
                                  data-element_type="widget"
                                  data-widget_type="spacer.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-spacer">
                                      <div className="elementor-spacer-inner" />
                                    </div>
                                  </div>
                                </div>

                                {agent.banner !== null ? (
                                  <>
                                    <div
                                      className="elementor-element elementor-element-b3a9a77 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-heading"
                                      data-id="b3a9a77"
                                      data-element_type="widget"
                                      data-widget_type="heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">
                                          Brand :
                                        </h2>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-0629ca9 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-text-editor"
                                      data-id="0629ca9"
                                      data-element_type="widget"
                                      data-widget_type="text-editor.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <p>{agent.brand}</p>{" "}
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                <div
                                  className="elementor-element elementor-element-fc894a0 de_scroll_animation_no elementor-widget elementor-widget-spacer"
                                  data-id="fc894a0"
                                  data-element_type="widget"
                                  data-widget_type="spacer.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-spacer">
                                      <div className="elementor-spacer-inner" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-0f7d9b7 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="0f7d9b7"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <button
                                      onClick={() => {
                                        ContactAgent(user._id, agent._id);
                                      }}
                                    >
                                      Contact Now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section
                          className="elementor-section elementor-inner-section elementor-element elementor-element-2483497 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="2483497"
                          data-element_type="section"
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-130cfd5"
                              data-id="130cfd5"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-62296ca de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="62296ca"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h3 className="elementor-heading-title elementor-size-default">
                                      Case Overviews
                                    </h3>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-78f8401 de_scroll_animation_no elementor-widget elementor-widget-text-editor"
                                  data-id="78f8401"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>
                                      Sed mollis tellus nulla, et sodales tortor
                                      efficitur id. Cras accumsan scelerisque
                                      lacus vehicula egestas. Curabitur ac
                                      rutrum augue. Sed sed nisi turpis. Quisque
                                      id ullamcorper erat. Vivamus maximus
                                      congue sem non finibus. In hac habitasse
                                      platea dictumst. Nunc cursus, magna eu
                                      placerat tincidunt, nulla augue tincidunt
                                      magna, vitae facilisis mi velit et ex.
                                      Donec tincidunt, turpis sed placerat
                                      placerat, est felis bibendum elit, a
                                      feugiat dui arcu non nisl.
                                    </p>
                                    <p>
                                      Mauris id commodo sem, vel vehicula
                                      tortor. Ut sagittis nulla sit amet rutrum
                                      pellentesque. Pellentesque sed elit a est
                                      imperdiet scelerisque. Curabitur eget
                                      convallis massa, in commodo tellus.
                                      Aliquam hendrerit libero vel arcu
                                      consectetur euismod. Aliquam laoreet
                                      ullamcorper velit at consequat.
                                    </p>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-9ceafe2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="9ceafe2"
                  data-element_type="section"
                  data-settings='{"background_background":"classic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9802a17"
                      data-id="9802a17"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-23f6fe4 de_scroll_animation_no elementor-widget elementor-widget-text-editor animated fadeInUp"
                          data-id="23f6fe4"
                          data-element_type="widget"
                          data-settings='{"_animation":"fadeInUp"}'
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <p>Our Process</p>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-96fa765 de_scroll_animation_no elementor-widget elementor-widget-elementskit-heading animated fadeInUp"
                          data-id="96fa765"
                          data-element_type="widget"
                          data-settings='{"_animation":"fadeInUp","_animation_delay":200}'
                          data-widget_type="elementskit-heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="ekit-wid-con">
                              <div className="ekit-heading elementskit-section-title-wraper text_center   ekit_heading_tablet-   ekit_heading_mobile-text_left">
                                <h2 className="ekit-heading--title elementskit-section-title ">
                                  Simple Step to Get Your{" "}
                                  <span>
                                    <span>Insured</span>
                                  </span>
                                </h2>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <section
                          className="elementor-section elementor-inner-section elementor-element elementor-element-997fe65 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="997fe65"
                          data-element_type="section"
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6a16d2c"
                              data-id="6a16d2c"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-1c7fe9d elementor-view-stacked elementor-widget__width-auto elementor-shape-circle de_scroll_animation_no elementor-widget elementor-widget-icon"
                                  data-id="1c7fe9d"
                                  data-element_type="widget"
                                  data-widget_type="icon.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                      <div className="elementor-icon">
                                        <i
                                          aria-hidden="true"
                                          className="icon icon-pencil"
                                        />{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-cd07d57 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="cd07d57"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      First Step
                                    </h2>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-bf7b16d elementor-widget-divider--view-line de_scroll_animation_no elementor-widget elementor-widget-divider"
                                  data-id="bf7b16d"
                                  data-element_type="widget"
                                  data-widget_type="divider.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                      <span className="elementor-divider-separator"></span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-f8fc211 de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="f8fc211"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h3 className="elementor-heading-title elementor-size-default">
                                      Get Quotation
                                    </h3>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-7038446 de_scroll_animation_no elementor-widget elementor-widget-text-editor"
                                  data-id={7038446}
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Ut elit tellus, luctus
                                      nec ullamcorper mattis, pulvinar dapibus
                                      leo.
                                    </p>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-3ae9636 de_scroll_animation_no elementor-widget elementor-widget-button"
                                  data-id="3ae9636"
                                  data-element_type="widget"
                                  data-widget_type="button.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-button-wrapper">
                                      <a
                                        href="#/"
                                        className="elementor-button-link elementor-button elementor-size-sm"
                                        role="button"
                                      >
                                        <span className="elementor-button-content-wrapper">
                                          <span className="elementor-button-text">
                                            Get a Quote
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f409a77"
                              data-id="f409a77"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-3c2ca5e elementor-view-stacked elementor-widget__width-auto elementor-shape-circle de_scroll_animation_no elementor-widget elementor-widget-icon"
                                  data-id="3c2ca5e"
                                  data-element_type="widget"
                                  data-widget_type="icon.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                      <div className="elementor-icon">
                                        <i
                                          aria-hidden="true"
                                          className="icon icon-edit1"
                                        />{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-b656f0f elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="b656f0f"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Second Step
                                    </h2>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-d93d1ca elementor-widget-divider--view-line de_scroll_animation_no elementor-widget elementor-widget-divider"
                                  data-id="d93d1ca"
                                  data-element_type="widget"
                                  data-widget_type="divider.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                      <span className="elementor-divider-separator"></span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-1b9854e de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="1b9854e"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h3 className="elementor-heading-title elementor-size-default">
                                      Fill the Application
                                    </h3>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-ad6566d de_scroll_animation_no elementor-widget elementor-widget-text-editor"
                                  data-id="ad6566d"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Ut elit tellus, luctus
                                      nec ullamcorper mattis, pulvinar dapibus
                                      leo.
                                    </p>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-61d69da de_scroll_animation_no elementor-widget elementor-widget-button"
                                  data-id="61d69da"
                                  data-element_type="widget"
                                  data-widget_type="button.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-button-wrapper">
                                      <a
                                        href="#/"
                                        className="elementor-button-link elementor-button elementor-size-sm"
                                        role="button"
                                      >
                                        <span className="elementor-button-content-wrapper">
                                          <span className="elementor-button-text">
                                            Our Forms
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-074ab99"
                              data-id="074ab99"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-be6a0db elementor-view-stacked elementor-widget__width-auto elementor-shape-circle de_scroll_animation_no elementor-widget elementor-widget-icon"
                                  data-id="be6a0db"
                                  data-element_type="widget"
                                  data-widget_type="icon.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                      <div className="elementor-icon">
                                        <i
                                          aria-hidden="true"
                                          className="icon icon-medal1"
                                        />{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-20d7713 elementor-widget__width-auto de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="20d7713"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Third Step
                                    </h2>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-44f5ebb elementor-widget-divider--view-line de_scroll_animation_no elementor-widget elementor-widget-divider"
                                  data-id="44f5ebb"
                                  data-element_type="widget"
                                  data-widget_type="divider.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                      <span className="elementor-divider-separator"></span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-9b07b5f de_scroll_animation_no elementor-widget elementor-widget-heading"
                                  data-id="9b07b5f"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h3 className="elementor-heading-title elementor-size-default">
                                      Get Insured &amp; Covered
                                    </h3>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-6673e77 de_scroll_animation_no elementor-widget elementor-widget-text-editor"
                                  data-id="6673e77"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Ut elit tellus, luctus
                                      nec ullamcorper mattis, pulvinar dapibus
                                      leo.
                                    </p>{" "}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-8ae4d0e de_scroll_animation_no elementor-widget elementor-widget-button"
                                  data-id="8ae4d0e"
                                  data-element_type="widget"
                                  data-widget_type="button.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-button-wrapper">
                                      <a
                                        href="#/"
                                        className="elementor-button-link elementor-button elementor-size-sm"
                                        role="button"
                                      >
                                        <span className="elementor-button-content-wrapper">
                                          <span className="elementor-button-text">
                                            Give a Review
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
          </>
        )}
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default SingleAgent;
