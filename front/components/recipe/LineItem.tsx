import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import moment from "moment";

export interface ILineItem {
  lineType?: string;
  menuId?: string;
  cookDesc?: string;
  cookImg?: string;
  cookImgAlt?: string;
  seqType?: string;
  cookSeq?: number;
  ingrName?: string;
  ingrType?: string;
  ingrAmt?: string;
  onClick?: (event: Event) => void;
}

const LineItem = (listData: ILineItem) => {
  const {
    menuId,
    lineType,
    cookDesc,
    cookImg,
    cookImgAlt,
    seqType,
    cookSeq,
    ingrName,
    ingrType,
    ingrAmt,
    onClick,
  } = listData;
  if (lineType === "lineIngr") {
    return ingrLine({ ...listData });
  } else {
    return cookLine({ ...listData });
  }
};

const ingrLine = (props: any) => {
  const { menuId, ingrName, ingrType, ingrAmt, onClick } = props;
  return (
    <li>
      <label className="tit-regist" htmlFor="selIngr">
        재료 종류
      </label>
      <select name="selIngr" id="selIngr" className="text">
        <option value="">Type</option>
      </select>
      <label className="tit-regist" htmlFor="nmIngr">
        재료 명
      </label>
      <input type="text" className="text" id="nmIngr" />
      <label className="tit-regist" htmlFor="amtIngr">
        재료 양
      </label>
      <input type="text" className="text" id="amtIngr" />
      <button className="btn-add" onClick={onClick}>
        재료 추가
      </button>
    </li>
  );
};
const cookLine = (props: any) => {
  const { menuId, cookDesc, cookImg, cookImgAlt, seqType, cookSeq, onClick } =
    props;
  return (
    <li>
      <label className="tit-regist" htmlFor="cookSeq01">
        {cookSeq}
      </label>
      <textarea className="text" id="cookSeq01"></textarea>
      <button className="btn-add" onClick={onClick}>
        순서 추가
      </button>
    </li>
  );
};

export default LineItem;
