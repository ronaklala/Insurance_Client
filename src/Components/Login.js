import axios from "axios";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
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
    if (user.email === "" || user.password === "") {
      console.log(user);
      toast.error("Please Fill the Whole Form");
    } else {
      axios
        .post("http://localhost:5000/client/user/login", user)
        .then((res) => {
          window.localStorage.setItem("user", JSON.stringify(res.data[0]));
          toast.success("Logged in Successfully");
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            toast.error("Incorrect Passwords");
          } else {
            toast.error("No Such User Found");
          }
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
                    <p>Login Now</p>{" "}
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
                          If you don't have an Account Please Register Here
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
                        href="/register"
                        className="elementor-button-link elementor-button elementor-size-sm"
                        role="button"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            Register
                          </span>
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
                                Your Email & Password{" "}
                                <span className="wpforms-required-label">
                                  *
                                </span>
                              </label>
                              <div className="wpforms-field-row wpforms-field-medium">
                                <div className="wpforms-field-row-block wpforms-first wpforms-one-half">
                                  <input
                                    type="email"
                                    id="wpforms-506-field_0"
                                    className="wpforms-field-name-first wpforms-field-required"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    required
                                    onChange={handleChange}
                                  />
                                  <label
                                    htmlFor="wpforms-506-field_0"
                                    className="wpforms-field-sublabel after wpforms-sublabel-hide"
                                  >
                                    First
                                  </label>
                                </div>
                                <div className="wpforms-field-row-block wpforms-one-half">
                                  <input
                                    type="password"
                                    id="wpforms-506-field_0-last"
                                    className="wpforms-field-name-last wpforms-field-required"
                                    name="password"
                                    onChange={handleChange}
                                    placeholder="***********"
                                    required
                                  />
                                  <label
                                    htmlFor="wpforms-506-field_0-last"
                                    className="wpforms-field-sublabel after wpforms-sublabel-hide"
                                  >
                                    Last
                                  </label>
                                </div>
                              </div>
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
                              Login Now
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

export default Login;
