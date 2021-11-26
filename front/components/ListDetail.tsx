import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
const ListDetail = ({
  imgSrc,
  imgWidth,
  imgHeight,
  menuNm,
  menuDate,
  menuData,
}) => {
  return (
    <div className="cont-detail">
      <header
        className="detail-header"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <h2 className="header-tit">{menuNm}</h2>
        <p className="header-info">+{menuDate} days ago</p>
      </header>
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
      <div className="btn-area md">
        <Link href="/recipe/recipeLists">
          <a className="btn primary">리스트 보기</a>
        </Link>
      </div>
    </div>
  );
};

export default ListDetail;
