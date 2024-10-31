import axios from "axios";
import { useState, useEffect } from "react";

export const Average = () => {
  const [data, setData] = useState<any>({})


  const getData= async () => {
    const apiRes = (await axios.get('/average')).data;
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
