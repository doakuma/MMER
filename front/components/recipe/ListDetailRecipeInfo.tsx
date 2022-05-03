import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import { useEffect, useState } from "react";
const ListDetailRecipeInfo = (props: any) => {
  const [seqIngr, setSeqIngr] = useState([]);
  const [seqSrc, setSeqSrc] = useState([]);
  const [seqCook, setSeqCook] = useState([]);
  useEffect(() => {
    // return result;
    let arrIngr: any = _.filter(props, (o) => {
      return _.get(o, "seqType") === "재료";
    });
    let arrSrc: any = _.filter(props, (o) => {
      return _.get(o, "seqType") === "양념";
    });
    let cookSeeq: any = _.filter(props, (o) => {
      return _.get(o, "seqType") === "조리";
    });
    setSeqIngr(arrIngr);
    setSeqSrc(arrSrc);
    setSeqCook(cookSeeq);
  }, [props]);
  return (
    <div className="detail-body">
      {drawSeq(seqIngr)}
      {drawSeq(seqSrc)}
      {drawSeq(seqCook)}
    </div>
  );
};

const drawSeq = (type: any) => {
  return (
    <>
      <h3 className="stit-seq">{_.get(type, "[0].seqType")}</h3>
      <div className="box-detail">
        {!_.isEmpty(type) &&
          type.map((row: any, idx: number) => {
            return (
              <div className="detial-line" key={idx}>
                <span className="detail-order">{idx + 1}</span>
                <div className="detial-cont">
                  <span className="cont-text">{row.cookDesc}</span>
                  {!_.isEmpty(row.cookImg) && (
                    <Image
                      src={row.cookImg}
                      width="180"
                      height="120"
                      alt={row.cookImgAlt}
                      className="cont-img"
                    />
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ListDetailRecipeInfo;
