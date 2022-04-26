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
  lineKey?: any;
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
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
    onChange,
    lineKey,
  } = listData;
  if (lineType === "lineIngr") {
    return ingrLine({ ...listData });
  } else {
    return cookLine({ ...listData });
  }
};

const ingrLine = (props: any) => {
  console.log("ingrLine", props);
  const { menuId, ingrName, ingrType, ingrAmt, onClick, onChange, lineKey } =
    props;
  return (
    <li>
      <label className="tit-regist" htmlFor={`ingr-${lineKey}-type`}>
        재료 종류
      </label>
      <select
        name="ingrType"
        className="text"
        onChange={onChange}
        id={`ingr-${lineKey}-type`}
      >
        <option value="">Type</option>
      </select>
      <label className="tit-regist" htmlFor={`ingr-${lineKey}-name`}>
        재료 명
      </label>
      <input
        type="text"
        className="text"
        name="ingrName"
        onChange={onChange}
        id={`ingr-${lineKey}-name`}
      />
      <label className="tit-regist" htmlFor={`ingr-${lineKey}-amt`}>
        재료 양
      </label>
      <input
        type="text"
        className="text"
        name="ingrAmt"
        onChange={onChange}
        id={`ingr-${lineKey}-amt`}
      />
      <button className="btn-add" onClick={onClick}>
        재료 추가
      </button>
    </li>
  );
};
const cookLine = (props: any) => {
  const {
    menuId,
    cookDesc,
    cookImg,
    cookImgAlt,
    seqType,
    cookSeq,
    onClick,
    onChange,
    lineKey,
  } = props;
  return (
    <li>
      <label className="tit-regist" htmlFor="cookDesc">
        {lineKey + 1}
      </label>
      <textarea
        className="text"
        name="cookDesc"
        onChange={onChange}
        id={`cook-${lineKey}`}
      ></textarea>
      <button className="btn-add" onClick={onClick}>
        순서 추가
      </button>
    </li>
  );
};

export default LineItem;
