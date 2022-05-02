import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import moment from "moment";

export interface IListItems {
  id?: string;
  imgSrc?: string;
  imgWidth?: string;
  imgHeight?: string;
  menuNm?: string;
  menuDate?: string;
  menuId?: string;
  menuTag?: any;
  isHome?: boolean;
}

const ListItem = (listData: IListItems) => {
  const calcDday = (date: number) => {
    let toDay = moment();
    let dDay = toDay.diff(date, "days");
    return dDay;
  };
  const calcDifc = () => {
    let _difc;
    _difc = _.get(listData, "menuDifct") * 20;
    return _difc;
  };
  return (
    <Link
      href={`/recipe/${_.get(listData, "id")}`}
      // as={`/recipe/${_.get(listData, "menuNm")}`}
    >
      <a className="list-item">
        <dl>
          <dt>
            <span className="wrapImg">
              <img
                src={_.get(listData, "imgSrc")}
                width={_.get(listData, "imgWidth")}
                height={_.get(listData, "imgHeight")}
                alt={_.get(listData, "menuNm")}
                // layout={isHome ? "responsive" : "fixed"}
                // layout="responsive"
                // objectFit="cover"
                // loading="lazy"
                // placeholder="blur"
                // blurDataURL={_.get(listData, "imgSrc")}
              />
            </span>
            <span
              className="userIcon"
              style={{
                backgroundImage: `url(${_.get(listData, "userInfo")})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></span>
          </dt>
          <dd className="info-head">
            <strong className="tit-item">{_.get(listData, "menuNm")}</strong>
            <span className="info-item">
              {calcDday(_.get(listData, "lastCookDate"))} days ago
            </span>
          </dd>
          {!_.isEmpty(_.get(listData, "menuTag")) && (
            <dd>
              <ul className="list-tag">
                {/* {_.get(listData, "menuTag").map((row: any, idx: number) => {
                  return <li key={idx}>#{row}</li>;
                })} */}
                <li>#{_.get(listData, "menuTag")}</li>
              </ul>
            </dd>
          )}
          <dd className="info-addtl">
            <strong className="item-difc">
              <span
                className="difc-meter"
                style={{ width: calcDifc() + "%" }}
              ></span>
            </strong>
            <span className="item-reqTime">
              {_.get(listData, "menuReqTime")}Min
            </span>
          </dd>
        </dl>
      </a>
    </Link>
  );
};

export default ListItem;
