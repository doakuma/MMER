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
  const { lineType } = listData;
  console.log("lineType", lineType);
  if (lineType === "lineIngr") {
    return ingrLine({ ...listData });
  } else {
    return cookLine({ ...listData });
  }
};

const ingrLine = (props: any) => {
  const { ingrName, ingrAmt, onClick, onChange, lineKey } = props;
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
        <option value="">주재료</option>
        <option value="">양념</option>
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
        defaultValue={ingrName}
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
        defaultValue={ingrAmt}
      />
      <button className="btn-add" onClick={onClick}>
        재료 추가
      </button>
    </li>
  );
};
const cookLine = (props: any) => {
  const { cookDesc, onClick, onChange, lineKey } = props;
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
        defaultValue={cookDesc}
      ></textarea>
      <button className="btn-add" onClick={onClick}>
        순서 추가
      </button>
    </li>
  );
};

export default LineItem;
