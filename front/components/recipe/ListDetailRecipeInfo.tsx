import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import { useEffect, useState } from "react";
const ListDetailRecipeInfo = (props: any) => {
  const [seqIngr, setSeqIngr] = useState([]);
  const [seqSrc, setSeqSrc] = useState([]);
  const [seqCook, setSeqCook] = useState([]);
  useEffect(() => {
    setSeqIngr(_.get(props, "seqIngr"));
    setSeqSrc(_.get(props, "seqSrc"));
    setSeqCook(_.get(props, "seqCook"));
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
                <span className="detail-order">{row.cookSeq}</span>
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
