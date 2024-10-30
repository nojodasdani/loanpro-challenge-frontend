import { useState, useEffect } from "react";
import axios from "axios";

export const Historic = () => {
  const [data, setData] = useState<any[]>([])


  const getData= async () => {
    const apiHost = 'http://localhost:3000/dev/historic'
    const apiRes = (await axios.get(apiHost)).data;
    console.log("response", apiRes);
    setData(apiRes);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <table>
          <tr>
            <td>Date</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>Value</td>
          </tr>
        {data.map((item) => (
            <tr>
            <td>{item.date}</td>
            <td></td>
            <td>{item.value}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
