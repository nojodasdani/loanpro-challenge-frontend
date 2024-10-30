import { useState, useEffect } from "react";
import axios from "axios";

export const Average = () => {
  const [data, setData] = useState<any>({})


  const getData= async () => {
    const apiHost = 'http://localhost:3000/dev/average'
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
            <td>Last 10 days</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>Last month</td>
          </tr>
            <tr>
            <td>{data.lastTenDays}</td>
            <td></td>
            <td>{data.lastMonth}</td>
          </tr>
      </table>
    </div>
  );
};
