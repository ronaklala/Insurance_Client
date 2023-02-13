import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Header = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      setUser(null);
    } else {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logged Out SuccessFully");
    setUser(null);
  };
  return (
    <>
      <div className="ekit-template-content-markup ekit-template-content-header ekit-template-content-theme-support">
        <div
          data-elementor-type="wp-post"
          data-elementor-id={290}
          className="elementor elementor-290"
        >
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-401548d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="401548d"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a4a8d4a animated fadeIn"
                data-id="a4a8d4a"
                data-element_type="column"
                data-settings='{"animation":"fadeIn","animation_delay":200,"background_background":"classic"}'
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-cbba2a5 de_scroll_animation_no elementor-widget elementor-widget-image"
                    data-id="cbba2a5"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '/*! elementor - v3.10.1 - 17-01-2023 */\n.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}',
                        }}
                      />{" "}
                      <a href="#/">
                        <img
                          width={800}
                          height={270}
                          src="#"
                          className="elementor-animation-float attachment-large size-large wp-image-59"
                          alt="Logo"
                          loading="lazy"
                          srcSet=""
                          sizes="(max-width: 800px) 100vw, 800px"
                        />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-44d31e5"
                data-id="44d31e5"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-9b80e82 elementor-reverse-tablet elementor-reverse-mobile elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="9b80e82"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c5e3743"
                        data-id="c5e3743"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-31ac6cd de_scroll_animation_no elementor-widget elementor-widget-ekit-nav-menu animated fadeIn"
                            data-id="31ac6cd"
                            data-element_type="widget"
                            data-settings='{"_animation":"fadeIn"}'
                            data-widget_type="ekit-nav-menu.default"
                          >
                            <div className="elementor-widget-container">
                              <div
                                className="ekit-wid-con ekit_menu_responsive_tablet"
                                data-hamburger-icon="icon icon-menu-7"
                                data-hamburger-icon-type="icon"
                                data-responsive-breakpoint={1024}
                              >
                                {" "}
                                <button className="elementskit-menu-hamburger elementskit-menu-toggler">
                                  <i
                                    aria-hidden="true"
                                    className="ekit-menu-icon icon icon-menu-7"
                                  />{" "}
                                </button>
                                <div
                                  id="ekit-megamenu-header"
                                  className="elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default elementskit_line_arrow ekit-nav-menu-one-page- ekit-nav-dropdown-hover"
                                  ekit-dom-added="yes"
                                >
                                  <ul
                                    id="menu-header"
                                    className="elementskit-navbar-nav elementskit-menu-po-left submenu-click-on-icon"
                                  >
                                    <li
                                      id="menu-item-599"
                                      className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-43 menu-item-599 nav-item elementskit-mobile-builder-content"
                                      data-vertical-menu="750px"
                                    >
                                      <a
                                        href="/"
                                        className="ekit-menu-nav-link"
                                      >
                                        Home
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-592"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-592 nav-item elementskit-mobile-builder-content"
                                      data-vertical-menu="750px"
                                    >
                                      <a
                                        href="/About"
                                        className="ekit-menu-nav-link"
                                      >
                                        About
                                      </a>
                                    </li>

                                    <li
                                      id="menu-item-592"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-592 nav-item elementskit-mobile-builder-content"
                                      data-vertical-menu="750px"
                                    >
                                      <a
                                        href="/Contact"
                                        className="ekit-menu-nav-link"
                                      >
                                        Contact US
                                      </a>
                                    </li>
                                    {user !== null ? (
                                      <>
                                        <li
                                          id="menu-item-592"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-592 nav-item elementskit-mobile-builder-content"
                                          data-vertical-menu="750px"
                                        >
                                          <a
                                            href="/Insurance"
                                            className="ekit-menu-nav-link"
                                          >
                                            Get Insurance
                                          </a>
                                        </li>
                                      </>
                                    ) : (
                                      <></>
                                    )}

                                    {/* <li
                                      id="menu-item-602"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-602 nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content"
                                      data-vertical-menu="750px"
                                    >
                                      <a
                                        href="../services/index.html"
                                        className="ekit-menu-nav-link ekit-menu-dropdown-toggle"
                                      >
                                        Services
                                        <i className="icon icon-down-arrow1 elementskit-    menu-indicator" />
                                      </a>
                                      <ul className="elementskit-dropdown elementskit-submenu-panel">
                                        <li
                                          id="menu-item-605"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-605 nav-item elementskit-mobile-builder-content"
                                          data-vertical-menu="750px"
                                        >
                                          <a
                                            href="../services/index.html"
                                            className=" dropdown-item"
                                          >
                                            Services
                                          </a>{" "}
                                        </li>
                                        <li
                                          id="menu-item-601"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-601 nav-item elementskit-mobile-builder-content"
                                          data-vertical-menu="750px"
                                        >
                                          <a
                                            href="../service-detail/index.html"
                                            className=" dropdown-item"
                                          >
                                            Service Detail
                                          </a>
                                        </li>
                                      </ul>
                                    </li> */}
                                  </ul>
                                  <div className="elementskit-nav-identity-panel">
                                    <div className="elementskit-site-title">
                                      <a
                                        className="elementskit-nav-logo"
                                        href="https://askproject.net/Insurve"
                                        target="_self"
                                        rel
                                      >
                                        <img
                                          width={1236}
                                          height={418}
                                          src=""
                                          className="attachment-full size-full"
                                          alt="Logo"
                                          decoding="async"
                                          loading="lazy"
                                          srcSet=""
                                        />
                                      </a>
                                    </div>
                                    <button
                                      className="elementskit-menu-close elementskit-menu-toggler"
                                      type="button"
                                    >
                                      X
                                    </button>
                                  </div>
                                </div>
                                <div className="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay" />
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7e6fad1"
                        data-id="7e6fad1"
                        data-element_type="column"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-2494e0c elementor-widget__width-auto elementor-hidden-mobile de_scroll_animation_no elementor-widget elementor-widget-button"
                            data-id="2494e0c"
                            data-element_type="widget"
                            data-widget_type="button.default"
                          >
                            {user === null ? (
                              <>
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a
                                      href="/login"
                                      className="elementor-button-link elementor-button elementor-size-sm"
                                      role="button"
                                    >
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">
                                          Login
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a
                                      href="#/"
                                      className="elementor-button-link elementor-button elementor-size-sm"
                                      role="button"
                                      onClick={handleLogout}
                                    >
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">
                                          Logout
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Header;
