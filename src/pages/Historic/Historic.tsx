import axios from "axios";
import { useState, useEffect } from "react";

export const Historic = () => {
  const [data, setData] = useState<any[]>([])


  const getData= async () => {
    const apiRes = (await axios.get('/historic')).data;
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
