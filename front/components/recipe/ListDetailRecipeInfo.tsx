import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import { useEffect, useState } from "react";
const ListDetailRecipeInfo = (props: any) => {
  const [recipeData, setRecipeData] = useState({});
  useEffect(() => {
    setRecipeData(props.recpInfo);
  }, [props]);
  return (
    <div className="detail-body">
      <h2 className="stit-box">Recipe</h2>
      {!_.isEmpty(_.get(recipeData, "recpOrder")) &&
        _.get(recipeData, "recpOrder").map((row: any, idx: number) => {
          return (
            <div className="detial-line" key={idx}>
              <span className="detail-order">{row.recpSeq}</span>
              <div className="detial-cont">
                <span className="cont-text">{row.recpCont}</span>
                {!_.isEmpty(row.recpImg) && (
                  <Image
                    src={row.recpImg}
                    width="180"
                    height="120"
                    alt={row.recpImgAlt}
                    className="cont-img"
                  />
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ListDetailRecipeInfo;
