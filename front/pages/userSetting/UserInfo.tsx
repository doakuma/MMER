import dynamic from "next/dynamic";
import _ from "lodash";
import Link from "next/link";

// import "font-awesome/css/font-awesome.css";

import { memo, useRef, useState } from "react";

const FroalaEditor = dynamic(
  () => import("../../components/common/FroalaEditor"),
  {
    ssr: false,
  }
);
// TODO: 상태관ㄹ
// context api 를 이용한 상태값 관리 필요
const UserInfo = (props: any) => {
  const { userName, userId, userIntro, userTag, userSns, onModyfy } = props;
  let edtorRef = useRef();
  const [urIntro, setUrIntro] = useState(userIntro);
  const handleChange = (e: any) => {
    console.log("handleChange", e);
    // setUrIntro(e);
  };
  const config = {
    placeholderText: "당신은 어떤 사람인가요? 간단한 소개를 부탁드려요!",
    charCounterCount: false,
  };
  return (
    <section className="cont-section userInfo">
      <header className="head-userInfo">
        <h3 className="tit-user">User Info</h3>
      </header>
      <figure className="img-user">
        <img src="/images/user/@userImage.png" alt="" className="userImg" />
        <figcaption className="user-summary">
          <dl>
            <dt className="summ-tit">{userName}</dt>
            <dd className="summ-intro">
              <FroalaEditor
                tag="textarea"
                config={config}
                model={urIntro}
                ref={(el: any) => (edtorRef = el)}
                // onModelChange={handleChange}
              />
            </dd>
          </dl>
        </figcaption>
        <div className="imgUpload">
          <input type="file" id="imgUpload" name="imgUpload" className="file" />
          <label htmlFor="imgUpload" className="btnUpload"></label>
        </div>
      </figure>
      <ul className="list-userTag">
        {!_.isEmpty(userTag) &&
          userTag.map((row: any) => {
            return (
              <li key={row.tagId}>
                <Link href={`/search/${row.tagId}`}>
                  <a className="btn-userTag">{`#${row.tagName}`}</a>
                </Link>
              </li>
            );
          })}
      </ul>
      <ul className="list-userSocial">
        {!_.isEmpty(userSns) &&
          userSns.map((row: any, idx: any) => {
            return (
              <li key={idx}>
                <Link href={row.snsLink}>
                  <a className="btn-userSocial" target="_blank">
                    <i className={`icon-${row.snsType}`} />
                    {row.snsType}
                  </a>
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
};
export default memo(UserInfo);
