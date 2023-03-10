import axios from "axios";
import React, { useEffect, useState } from "react";
import ApplicationLoader from "./ApplicationLoader";

const GetApplication = (props) => {
  const [applications, setApp] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/client/user/getApplications/" + props.id)
      .then((res) => {
        setApp(res.data);
        setLoading(false);
      });
  }, [props.id]);
  return (
    <>
      {" "}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-37b5d3e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="37b5d3e"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-188117d"
            data-id="188117d"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-5fcbdf7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="5fcbdf7"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  {loading === true ? (
                    <>
                      <ApplicationLoader />
                    </>
                  ) : (
                    <>
                      {applications.map((a, i) => (
                        <>
                          <div
                            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-9d9c6c4 animated fadeInUp"
                            data-id="9d9c6c4"
                            data-element_type="column"
                            data-settings='{"animation":"fadeInUp","animation_delay":400}'
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-305e85e ekit-equal-height-disable de_scroll_animation_no elementor-widget elementor-widget-elementskit-icon-box"
                                data-id="305e85e"
                                data-element_type="widget"
                                data-widget_type="elementskit-icon-box.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="ekit-wid-con">
                                    {" "}
                                    {/* link opening */}
                                    {/* end link opening */}
                                    <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-   ">
                                      <div className="elementskit-box-header elementor-animation-">
                                        <div className="elementskit-info-box-icon  ">
                                          <i
                                            aria-hidden="true"
                                            className="elementkit-infobox-icon icon icon-home"
                                          />
                                        </div>
                                      </div>
                                      <div className="box-body">
                                        <h3 className="elementskit-info-box-title">
                                          {a.name}
                                        </h3>
                                        <p>
                                          {a.result === 1 ? (
                                            <>
                                              "Your Application Has been
                                              Accepted by the Agent. You can
                                              contact them now for further
                                              queries"
                                            </>
                                          ) : (
                                            <>
                                              {a.result === 2 ? (
                                                <>
                                                  "Your Application Has been
                                                  Rejected by the Agent."
                                                </>
                                              ) : (
                                                <>
                                                  "Your Application is still in
                                                  queue by the Agent."
                                                </>
                                              )}
                                            </>
                                          )}
                                        </p>
                                        <div className="box-footer disable_hover_button">
                                          {a.result === 1 ? (
                                            <>
                                              <button>Get Contact Now </button>
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                        <br />
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetApplication;
