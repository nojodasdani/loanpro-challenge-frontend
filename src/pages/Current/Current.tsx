import axios from "axios";
import { useState, useEffect } from "react";

export const Current = () => {
  const [value, setValue] = useState();

  const getData= async () => {
    const apiRes = (await axios.get('/current')).data;
    setValue(apiRes.value);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      The current exchange is: {value}
    </>
  );
};
