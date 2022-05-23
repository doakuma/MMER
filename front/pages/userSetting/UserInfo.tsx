import dynamic from "next/dynamic";
import _ from "lodash";
import Link from "next/link";

// import "font-awesome/css/font-awesome.css";

import { useState } from "react";

const FroalaEditor = dynamic(
  () => import("../../components/common/FroalaEditor"),
  {
    ssr: false,
  }
);

const UserInfo = (userInfo: any) => {
  const { userName, userId, userIntro, userTag, userSns } = userInfo;
  const [urIntro, setUrIntro] = useState(userIntro);
  const handleChange = (e: any) => {
    console.log("handleChange", e);
    setUrIntro(e);
  };
  const config = {
    placeholder: "Edit Your Content Here!",
    charCounterCount: false,
  };
  return (
    <section className="cont-section userInfo">
      <header className="head-userInfo">
        <h3 className="tit-user">User Info</h3>
        <Link href="/settings">
          <a className="btn-userSet">Setting</a>
        </Link>
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
                model={"니가 그렇게 싸움을 잘해?!!"}
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
export default UserInfo;
