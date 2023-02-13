import axios from "axios";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    pass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((event) => {
      return {
        ...event,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.city === "" ||
      user.email === "" ||
      user.name === "" ||
      user.pass === "" ||
      user.phone === ""
    ) {
      toast.error("Please Fill the Whole Form");
    } else {
      axios
        .post("http://localhost:5000/client/user/add", user)
        .then((res) => {
          toast.success("User Registered");
          window.localStorage.setItem("user", JSON.stringify(user));
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        })
        .catch((err) => {
          toast.error("Internal Server Error");
        });
    }
  };

  return (
    <>
      <Header />
      <div
        data-elementor-type="wp-page"
        data-elementor-id="509"
        class="elementor elementor-509"
      >
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-7329726 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id={7329726}
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-11b5f25"
              data-id="11b5f25"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-cf3c7d5 de_scroll_animation_no elementor-widget elementor-widget-text-editor animated fadeInUp"
                  data-id="cf3c7d5"
                  data-element_type="widget"
                  data-settings='{"_animation":"fadeInUp"}'
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>Register Now</p>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-58e2bd0 de_scroll_animation_no elementor-widget elementor-widget-elementskit-heading animated fadeInUp"
                  data-id="58e2bd0"
                  data-element_type="widget"
                  data-settings='{"_animation":"fadeInUp","_animation_delay":200}'
                  data-widget_type="elementskit-heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <div className="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-text_left">
                        <h2 className="ekit-heading--title elementskit-section-title ">
                          If you have an Account Please Login Here
                        </h2>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-3da48c3 elementor-align-left elementor-mobile-align-left de_scroll_animation_no elementor-widget elementor-widget-button animated fadeInUp"
                  data-id="3da48c3"
                  data-element_type="widget"
                  data-settings='{"_animation":"fadeInUp","_animation_delay":400}'
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a
                        href="/login"
                        className="elementor-button-link elementor-button elementor-size-sm"
                        role="button"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">Login</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3fc1253"
              data-id="3fc1253"
              data-element_type="column"
              data-settings='{"background_background":"classic"}'
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-93575db ekit_wpForms_container-form-button-custom de_scroll_animation_no elementor-widget elementor-widget-elementskit-wp-forms"
                  data-id="93575db"
                  data-element_type="widget"
                  data-widget_type="elementskit-wp-forms.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con ekit_wpForms_container">
                      <div
                        className="wpforms-container wpforms-container-full"
                        id="wpforms-506"
                      >
                        <form
                          id="wpforms-form-506"
                          className="wpforms-validate wpforms-form wpforms-ajax-form"
                          noValidate="novalidate"
                        >
                          <noscript className="wpforms-error-noscript">
                            Please enable JavaScript in your browser to complete
                            this form.
                          </noscript>
                          <div className="wpforms-field-container">
                            <div
                              id="wpforms-506-field_0-container"
                              className="wpforms-field wpforms-field-name"
                              data-field-id={0}
                            >
                              <label
                                className="wpforms-field-label"
                                htmlFor="wpforms-506-field_0"
                              >
                                Your Name{" "}
                                <span className="wpforms-required-label">
                                  *
                                </span>
                              </label>
                              <div className="wpforms-field-row wpforms-field-medium">
                                <div className="wpforms-field-row-block wpforms-first">
                                  <input
                                    type="text"
                                    id="wpforms-506-field_0"
                                    className="wpforms-field-name-first wpforms-field-required"
                                    name="name"
                                    placeholder="Jhon"
                                    onChange={handleChange}
                                    required
                                  />
                                  <label
                                    htmlFor="wpforms-506-field_0"
                                    className="wpforms-field-sublabel after wpforms-sublabel-hide"
                                  >
                                    First
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div
                              id="wpforms-506-field_1-container"
                              className="wpforms-field wpforms-field-email"
                              data-field-id={1}
                            >
                              <label
                                className="wpforms-field-label"
                                htmlFor="wpforms-506-field_1"
                              >
                                Your Email{" "}
                                <span className="wpforms-required-label">
                                  *
                                </span>
                              </label>
                              <input
                                type="email"
                                id="wpforms-506-field_1"
                                className="wpforms-field-medium wpforms-field-required"
                                name="email"
                                placeholder="example@mail.com"
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div
                              id="wpforms-506-field_3-container"
                              className="wpforms-field wpforms-field-email"
                              data-field-id={3}
                            >
                              <label
                                className="wpforms-field-label"
                                htmlFor="wpforms-506-field_3"
                              >
                                Your Phone{" "}
                                <span className="wpforms-required-label">
                                  *
                                </span>
                              </label>
                              <input
                                type="number"
                                id="wpforms-506-field_3"
                                className="wpforms-field-medium wpforms-field-required"
                                name="phone"
                                onChange={handleChange}
                                placeholder="+1 (234) 567 890"
                                required
                              />
                            </div>

                            <div
                              id="wpforms-506-field_3-container"
                              className="wpforms-field wpforms-field-email"
                              data-field-id={3}
                            >
                              <label
                                className="wpforms-field-label"
                                htmlFor="wpforms-506-field_3"
                              >
                                Your Password{" "}
                                <span className="wpforms-required-label">
                                  *
                                </span>
                              </label>
                              <input
                                type="password"
                                id="wpforms-506-field_3"
                                className="wpforms-field-medium wpforms-field-required"
                                name="pass"
                                onChange={handleChange}
                                placeholder="************"
                                required
                              />
                            </div>

                            <div
                              id="wpforms-506-field_3-container"
                              className="wpforms-field wpforms-field-email"
                              data-field-id={3}
                            >
                              <label
                                className="wpforms-field-label"
                                htmlFor="wpforms-506-field_3"
                              >
                                Your City{" "}
                                <span className="wpforms-required-label">
                                  *
                                </span>
                              </label>
                              <input
                                type="email"
                                id="wpforms-506-field_3"
                                onChange={handleChange}
                                className="wpforms-field-medium wpforms-field-required"
                                name="city"
                                placeholder="Albania"
                                required
                              />
                            </div>
                          </div>
                          <div className="wpforms-submit-container">
                            <input
                              type="hidden"
                              name="wpforms[id]"
                              defaultValue={506}
                            />
                            <input
                              type="hidden"
                              name="wpforms[author]"
                              defaultValue={1}
                            />
                            <input
                              type="hidden"
                              name="wpforms[post_id]"
                              defaultValue={509}
                            />
                            <button
                              type="submit"
                              name="wpforms[submit]"
                              id="wpforms-submit-506"
                              className="wpforms-submit"
                              data-alt-text="Sending..."
                              data-submit-text="Submit Form"
                              aria-live="assertive"
                              value="wpforms-submit"
                              onClick={handleSubmit}
                            >
                              Submit Form
                            </button>
                            <img
                              decoding="async"
                              src="../wp-content/plugins/wpforms-lite/assets/images/submit-spin.svg"
                              className="wpforms-submit-spinner"
                              style={{ display: "none" }}
                              width={26}
                              height={26}
                              alt="Loading"
                            />
                          </div>
                        </form>
                      </div>{" "}
                      {/* .wpforms-container */}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default Register;
