import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import { useEffect, useState } from "react";
const ListDetaiIngrInfo = (props: any) => {
  const [ingrData, setIngrData] = useState([]);
  useEffect(() => {
    setIngrData(props);
  }, [props]);
  return (
    <div className="wrap-ingr">
      {!_.isEmpty(_.get(ingrData, "ingrInfo")) &&
        _.get(ingrData, "ingrInfo").map((row: any, idx: number) => {
          return (
            <div className="box-ingr" key={idx}>
              <h3 className="stit-box">{row.ingrTitle}</h3>
              {_.get(row, "ingrLists").map((row2: any, idx2: number) => {
                return (
                  <dl className="list-ingr" key={idx2}>
                    <dt className="ingr-nm">{row2.ingrNm}</dt>
                    <dd className="ingr-amt">{row2.ingrAmt}</dd>
                  </dl>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default ListDetaiIngrInfo;
