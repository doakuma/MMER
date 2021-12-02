import Image from "next/image";
import Link from "next/link";
import _ from "lodash";

import ListDetailMenuInfo from "./ListDetailMenuInfo";
import ListDetaiIngrInfo from "./ListDetaiIngrInfo";
const ListDetail = ({
  imgSrc,
  imgWidth,
  imgHeight,
  menuNm,
  menuDate,
  menuData,
  menuTag,
}) => {
  return (
    <div className="cont-detail">
      <div className="detail-left">
        {/* <ListDetailMenuInfo/> */}
        <header
          className="detail-header"
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <h2 className="header-tit">{menuNm}</h2>
          <p className="header-info">+{menuDate} days ago</p>
          <ul className="header-tag">
            {menuTag.map((row, idx) => {
              return <li key={idx}>#{row}</li>;
            })}
          </ul>
        </header>
        <ListDetaiIngrInfo />
      </div>
      <div className="detail-right">
        <div className="detail-body">
          {menuData.map((row, idx) => {
            return (
              <div className="detial-line" key={idx}>
                <span className="detail-order">{row.recOrder}</span>
                <div className="detial-cont">
                  {!_.isEmpty(row.recImg) && (
                    <Image src={row.recImg} width="180" height="120" />
                  )}
                  {row.recCont}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="btn-area md">
        <Link href="/recipe/recipeLists">
          <a className="btn primary">리스트 보기</a>
        </Link>
      </div>
    </div>
  );
};

export default ListDetail;
