import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import { useEffect, useState } from "react";
const ListDetaiIngrInfo = (props: any) => {
  const [ingrData, setIngrData] = useState([]);
  useEffect(() => {
    setIngrData(_.get(props, "props"));
  }, [props]);
  // console.log("ingrData", ingrData);
  return (
    <div className="wrap-ingr">
      {!_.isEmpty(ingrData) && (
        <div className="box-ingr">
          <h3 className="stit-box">재료</h3>
          {ingrData.map((row2: any, idx2: number) => {
            return (
              <dl className="list-ingr" key={idx2}>
                <dt className="ingr-nm">{row2.ingrName}</dt>
                <dd className="ingr-amt">{row2.ingrAmt}</dd>
              </dl>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ListDetaiIngrInfo;
