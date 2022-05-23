import Layout from "../../components/common/Layout";
import _ from "lodash";
import Link from "next/link";

const UserNotification = ({
  notiData = [
    {
      notiDate: "", // 알람 일자
      notiImage: "/images/stock/menu01.jpg", // 대상 레시피 이미지
      notiTargetId: "56", // 대상 레시피 아이디
      notiTargetNm: "뭐 그런거지", // 대상 레시피 이름
      actUserNm: "개똥아", // 액션 사용자 이름
      actUserId: "user0001", // 액션 사용자 ID
      actType: "notiType0001", // 액션 타입 : 좋아요, 퍼가요, 댓글, 장보기, follow, 장보기 완료, 장보기 알람, 재료량 알람
      notiReadYn: false,
    },
    {
      notiImage: "/images/stock/menu01.jpg",
      notiTargetId: "56",
      notiTargetNm: "뭐 그런거지",
      actUserNm: "개똥아",
      actUserId: "user0001",
      actType: "notiType0002",
      notiReadYn: true,
    },
    {
      notiImage: "/images/stock/menu01.jpg",
      notiTargetId: "56",
      notiTargetNm: "뭐 그런거지",
      actUserNm: "개똥아",
      actUserId: "user0001",
      actType: "notiType0003",
      notiReadYn: true,
    },
    {
      notiImage: "/images/stock/menu01.jpg",
      notiTargetId: "56",
      notiTargetNm: "뭐 그런거지",
      actUserNm: "개똥아",
      actUserId: "user0001",
      actType: "notiType0004",
      notiReadYn: true,
    },
    {
      notiImage: "/images/stock/menu01.jpg",
      notiTargetId: "56",
      notiTargetNm: "뭐 그런거지",
      actUserNm: "개똥아",
      actUserId: "user0001",
      actType: "notiType0005",
      notiReadYn: true,
    },
    {
      notiImage: "/images/stock/menu01.jpg",
      notiTargetId: "56",
      notiTargetNm: "뭐 그런거지",
      actUserNm: "개똥아",
      actUserId: "user0001",
      actType: "notiType0006",
      notiReadYn: true,
    },
    {
      notiImage: "/images/stock/menu01.jpg",
      notiTargetId: "56",
      notiTargetNm: "뭐 그런거지",
      actUserNm: "개똥아",
      actUserId: "user0001",
      actType: "notiType0007",
      notiReadYn: true,
    },
  ],
}) => {
  const notiContent = (notiType: any) => {
    switch (_.get(notiType, "actType")) {
      case "notiType0001": // 좋아요
        return (
          <>
            <Link href={`/user/${_.get(notiType, "actUserId")}`}>
              <a className="link-notification">
                [{_.get(notiType, "actUserNm")}]
              </a>
            </Link>
            가{" "}
            <Link href={`/recipe/${_.get(notiType, "notiTargetId")}`}>
              <a className="link-notification">
                [{_.get(notiType, "notiTargetNm")}]
              </a>
            </Link>
            에 좋아요를 눌렀습니다.
          </>
        );
      // return (<Link href={/user/${notiType.actUserId}}><a>${notiType.actUser}</a></Link>가 ${notiType.notiTargetNm}에 좋아요를 눌렀습니다.;)
      // case 'notiType0002' :
      // return notiType = ``
      // case 'notiType0003' :
      // return notiType = ``
      // case 'notiType0004' :
      // return notiType = ``
      // case 'notiType0005' :
      // return notiType = ``
      // case 'notiType0006' :
      // return notiType = ``
      // case 'notiType0007' :
      // return notiType = ``
      // case 'notiType0008' :
      // return notiType = ``
      default:
        break;
    }
  };
  return (
    <section className="cont-section userInfo">
      <h3 className="tit-user">Notifications</h3>
      <>
        {!_.isEmpty(notiData) &&
          notiData.map((row, idx) => {
            return (
              <article
                className={
                  _.get(row, "notiReadYn")
                    ? "box-notification readed"
                    : "box-notification"
                }
                key={idx}
              >
                <figure className="cont-notification">
                  <span className="box-imgNoti">
                    <img src={row.notiImage} alt="" className="imgNoti" />
                  </span>
                  <figcaption className="desc-notification">
                    {notiContent(row)}
                  </figcaption>
                </figure>
              </article>
            );
          })}
      </>
      {/* <article className="box-notification readed">
        <figure className="cont-notification">
          <span className="box-imgNoti">
            <img src="/images/stock/menu01.jpg" alt="" className="imgNoti" />
          </span>
          <figcaption className="desc-notification">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius sit
            nostrum dolor ullam libero saepe deserunt eligendi vitae culpa in
            illum unde tempore ut molestiae quis assumenda error, esse odio.
          </figcaption>
        </figure>
      </article> */}
    </section>
  );
};

export default UserNotification;
