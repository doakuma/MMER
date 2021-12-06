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
    <dl className="pantry-item">
      <dt>
        <Image
          src={_.get(listData, "ingrImg")}
          width={_.get(listData, "imgWidth")}
          height={_.get(listData, "imgHeight")}
          alt={_.get(listData, "ingrNm")}
          // layout={isHome ? "responsive" : "fixed"}
          // layout="responsive"
          objectFit="contain"
          loading="lazy"
          placeholder="blur"
          blurDataURL={_.get(listData, "ingrImg")}
        />
      </dt>
      <dd className="pantry-detail">
        <strong className="ingr-nm">{_.get(listData, "ingrNm")}</strong>
        <span className="ingr-amt">
          {_.get(listData, "ingrAmt")}({_.get(listData, "ingrAmtTp")})
        </span>
        <span className="ingr-update">
          {calcDday(_.get(listData, "ingrUpdate"))} days ago
        </span>
        <em className="ingr-knd">{_.get(listData, "ingrKnd")}</em>
      </dd>
    </dl>
  );
};

export default ListItem;
