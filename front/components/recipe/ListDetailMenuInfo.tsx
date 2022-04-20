import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
const ListDetailMenuInfo = (props: any) => {
  const [menuInfo, setMenuInfo] = useState({});
  useEffect(() => {
    // setMenuInfo(_.get(props, "menuInfo"));
    setMenuInfo(_.get(props, "data"));
  }, [props]);
  const calcDday = (date: number) => {
    let toDay = moment();
    let dDay = toDay.diff(date, "days");
    return dDay;
  };
  return (
    <header
      className="detail-header"
      // style={{ backgroundImage: `url(${_.get(menuInfo, "imgSrc")})` }}
    >
      <h2 className="header-tit">{_.get(menuInfo, "menuNm")}</h2>
      <p className="header-info">
        {calcDday(_.get(menuInfo, "lastCookDate"))} days ago
      </p>
      <img src={_.get(menuInfo, "imgSrc")} className="header-img" />
      {!_.isEmpty(_.get(menuInfo, "menuTag")) && (
        <ul className="header-tag">
          {/* {_.get(menuInfo, "menuTag").map((row: any, idx: number) => {
            return <li key={idx}>#{row}</li>;
          })} */}

          <li>#{_.get(menuInfo, "menuTag")}</li>
        </ul>
      )}
    </header>
  );
};

export default ListDetailMenuInfo;
