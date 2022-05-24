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
  let edtorRef = useRef<HTMLElement | null>(null);
  let tagRef = useRef(null);
  const [urIntro, setUrIntro] = useState(userIntro);
  const [urTag, setUrTag] = useState(userTag);
  const handleChange = (e: any) => {
    console.log("handleChange", e);
    // setUrIntro(e);
  };
  const config = {
    placeholderText: "당신은 어떤 사람인가요? 간단한 소개를 부탁드려요!",
    charCounterCount: false,
  };

  const removeTag = (e: any, tarId: any) => {
    e.preventDefault();
    const rvTag = _.filter(urTag, (o) => {
      console.log(o.tagId, tarId);
      return o.tagId !== tarId;
    });

    setUrTag(rvTag);
  };
  const appendTag = (e: any) => {
    e.preventDefault();
    if (_.isEmpty(_.get(tagRef, "current.value"))) return;
    let tagNum = _.random(1, 999);
    let _appTag = {
      tagName: _.get(tagRef, "current.value"),
      tagId: `tag${tagNum}`,
    };
    setUrTag((prev: any) => [...prev, _appTag]);
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
                ref={edtorRef}
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
      <div className="box-tagInput">
        <input
          type="text"
          className="text"
          placeholder="태그를 입력하세요"
          ref={tagRef}
        />
        <button className="btn-add" type="button" onClick={(e) => appendTag(e)}>
          append tag
        </button>
      </div>
      <ul className="list-userTag modify">
        {!_.isEmpty(urTag) &&
          urTag.map((row: any) => {
            return (
              <li key={row.tagId}>
                <Link href={`/search/${row.tagId}`}>
                  <a className="btn-userTag">{`#${row.tagName}`}</a>
                </Link>
                <button
                  className="btn-delTag"
                  onClick={(e) => removeTag(e, row.tagId)}
                >
                  delete tag
                </button>
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
