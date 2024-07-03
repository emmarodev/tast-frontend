"use client";

import { useEffect, useState } from "react";

const getProfileData = () => {
  const [data, setData] = useState();
  const [errMsg, setErrMsg] = useState();

  useEffect(() => {
    const userid = localStorage.getItem("token");
    fetch("https://tast-pwvf.onrender.com/user/retrieve/profile", {
      method: "POST",
      body: JSON.stringify({ userid: userid }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);

        if (data.status && data.status_code === 200) {
          setData(data.data);
        } else {
          setErrMsg(data.message);
        }
      })
    );
  }, []);

  return { data, errMsg };
};

export default getProfileData;
