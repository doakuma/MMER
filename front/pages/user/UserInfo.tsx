import Layout from "../../components/common/Layout";
import _ from "lodash";
import Link from "next/link";

const UserInfo = (props: any) => {
  const { userName, userId, userIntro, userTag, userSns } = props;
  return (
    <section className="cont-section userInfo">
      <header className="head-userInfo">
        <h3 className="tit-user">User Info</h3>
        <Link href="/userSetting">
          <a className="btn-userSet">Setting</a>
        </Link>
      </header>
      <figure className="img-user">
        <img src="/images/user/@userImage.png" alt="" className="userImg" />
        <figcaption className="user-summary">
          <dl>
            <dt className="summ-tit">{userName}</dt>
            <dd className="summ-intro">{userIntro}</dd>
          </dl>
        </figcaption>
        <div className="imgUpload">
          <input type="file" id="imgUpload" name="imgUpload" className="file" />
          <label htmlFor="imgUpload" className="btnUpload"></label>
        </div>
      </figure>
      <ul className="list-userTag">
        {!_.isEmpty(userTag) &&
          userTag.map((row) => {
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
          userSns.map((row, idx) => {
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
