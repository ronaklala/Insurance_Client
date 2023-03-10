import React, { useEffect, useState } from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import GetApplication from "./GetApplication";

const Applications = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setLoading(false);
  }, []);

  return (
    <>
      <Header />
      {loading === true ? (
        <></>
      ) : (
        <>
          <GetApplication
            id={user._id}
            name={user.name}
            email={user.email}
            city={user.city}
            phone={user.phone}
          />
        </>
      )}

      <Footer />
    </>
  );
};

export default Applications;
