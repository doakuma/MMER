import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import moment from "moment";

const ListItem = ({ listData = {} }) => {
  const calcDday = (date: number) => {
    let toDay = moment();
    let dDay = toDay.diff(date, "days");
    return dDay;
  };
  return (
    <Link href={`/recipe/recipeDetail?menuId=${_.get(listData, "menuId")}`}>
      <a className="list-item">
        <dl>
          <dt>
            <Image
              src={_.get(listData, "imgSrc")}
              width={_.get(listData, "imgWidth")}
              height={_.get(listData, "imgHeight")}
              alt={_.get(listData, "menuNm")}
              // layout={isHome ? "responsive" : "fixed"}
              layout="responsive"
              objectFit="cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL={_.get(listData, "imgSrc")}
            />
            <span className="userIcon"></span>
          </dt>
          <dd className="info-head">
            <strong className="tit-item">{_.get(listData, "menuNm")}</strong>
            <span className="info-item">
              {calcDday(_.get(listData, "lastCookDate"))} days ago
            </span>
          </dd>
          <dd>
            <ul className="list-tag">
              {_.get(listData, "menuTag").map((row: any, idx: number) => {
                return <li key={idx}>#{row}</li>;
              })}
            </ul>
          </dd>
          <dd className="info-addtl">
            <strong className="item-difc">
              {_.get(listData, "menuDifct")}
            </strong>
            <span className="item-reqTime">
              {_.get(listData, "menuReqTime")}
            </span>
          </dd>
        </dl>
      </a>
    </Link>
  );
};

export default ListItem;
