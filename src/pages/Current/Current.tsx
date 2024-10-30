import { useState, useEffect } from "react";
import axios from "axios";

export const Current = () => {
  const [value, setValue] = useState();

  const getData= async () => {
    const apiHost = 'http://localhost:3000/dev/current'
    axios.get(apiHost).then((result: any)=>{
      setValue(result.data.value);
    }).catch((error)=>{
      alert(error);
    });
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
