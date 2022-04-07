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
  // return <div></div>;
  return (
    <Link
      href={`/recipe/recipeDetail?menuId=${_.get(
        listData,
        "attributes.menuId"
      )}`}
    >
      <a className="list-item">
        <dl>
          <dt>
            {/* <Image
              src={_.get(listData, "attributes.imgSrc")}
              width={_.get(listData, "attributes.imgWidth")}
              height={_.get(listData, "attributes.imgHeight")}
              alt={_.get(listData, "attributes.menuNm")}
              // layout={isHome ? "responsive" : "fixed"}
              layout="responsive"
              objectFit="cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL={_.get(listData, "attributes.imgSrc")}
            /> */}
            <span className="userIcon"></span>
          </dt>
          <dd className="info-head">
            <strong className="tit-item">
              {_.get(listData, "attributes.menuNm")}
            </strong>
            <span className="info-item">
              {calcDday(_.get(listData, "attributes.lastCookDate"))} days ago
            </span>
          </dd>
          {_.isArray(_.get(listData, "attributes.menuTag")) && (
            <dd>
              <ul className="list-tag">
                {_.get(listData, "attributes.menuTag").map(
                  (row: any, idx: number) => {
                    return <li key={idx}>#{row}</li>;
                  }
                )}
              </ul>
            </dd>
          )}

          <dd className="info-addtl">
            <strong className="item-difc">
              {_.get(listData, "attributes.menuDifct")}
            </strong>
            <span className="item-reqTime">
              {_.get(listData, "attributes.menuReqTime")}
            </span>
          </dd>
        </dl>
      </a>
    </Link>
  );
};

export default ListItem;
