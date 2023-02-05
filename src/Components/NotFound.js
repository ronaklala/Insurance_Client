import React from "react";
import Header from "../Layouts/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div
        data-elementor-type="wp-page"
        data-elementor-id={456}
        className="elementor elementor-456"
      >
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-8c6ae73 elementor-section-height-min-height elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
          data-id="8c6ae73"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-50dc86f"
              data-id="50dc86f"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-ed3ae02 de_scroll_animation_no elementor-widget elementor-widget-image animated fadeInUp"
                  data-id="ed3ae02"
                  data-element_type="widget"
                  data-settings='{"_animation":"fadeInUp","_animation_delay":200}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      decoding="async"
                      width={800}
                      height={344}
                      src="../wp-content/uploads/sites/127/2023/01/404_Asset-4.png"
                      className="attachment-large size-large wp-image-468"
                      alt=""
                      loading="lazy"
                      srcSet="
                      https://askproject.net/Insurve/wp-content/uploads/sites/127/2023/01/404_Asset-4.png         1001w,
                      https://askproject.net/Insurve/wp-content/uploads/sites/127/2023/01/404_Asset-4-300x129.png  300w,
                      https://askproject.net/Insurve/wp-content/uploads/sites/127/2023/01/404_Asset-4-768x330.png  768w,
                      https://askproject.net/Insurve/wp-content/uploads/sites/127/2023/01/404_Asset-4-800x344.png  800w
                    "
                      sizes="(max-width: 800px) 100vw, 800px"
                    />
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-4cd70ee de_scroll_animation_no elementor-widget elementor-widget-elementskit-heading animated fadeInUp"
                  data-id="4cd70ee"
                  data-element_type="widget"
                  data-settings='{"_animation":"fadeInUp","_animation_delay":400}'
                  data-widget_type="elementskit-heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <div className="ekit-heading elementskit-section-title-wraper text_center ekit_heading_tablet- ekit_heading_mobile-text_center">
                        <h2 className="ekit-heading--title elementskit-section-title">
                          Oops, Page Not{" "}
                          <span>
                            <span>Found</span>
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-20653c6 de_scroll_animation_no elementor-widget elementor-widget-text-editor animated fadeInUp"
                  data-id="20653c6"
                  data-element_type="widget"
                  data-settings='{"_animation":"fadeInUp","_animation_delay":600}'
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <center>
                      <p>The Page You are trying to find is not available.</p>
                    </center>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-a326d36 elementor-align-center elementor-mobile-align-center de_scroll_animation_no elementor-widget elementor-widget-button animated fadeInUp"
                  data-id="a326d36"
                  data-element_type="widget"
                  data-settings='{"_animation":"fadeInUp","_animation_delay":700}'
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a
                        href="/"
                        className="elementor-button-link elementor-button elementor-size-sm"
                        role="button"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            Back to Homepage
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
    </>
  );
};

export default NotFound;
