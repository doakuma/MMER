import _ from "lodash";
import { useState } from "react";
import Layout from "../../components/common/Layout";
import UserFavor from "./UserFavor";
import UserInfo from "./UserInfo";
import UserNotification from "./UserNotification";
import UserPriend from "./UserPriend";

const data = {
  userInfo: {
    userName: "doakuma",
    userId: "0001",
    userIntro: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    userTag: [
      {
        tagName: "주말요리",
        tagId: "tag001",
      },
      {
        tagName: "파릐타임",
        tagId: "tag002",
      },
      {
        tagName: "tag3",
        tagId: "tag003",
      },
      {
        tagName: "tag4",
        tagId: "tag004",
      },
    ],
    userSns: [
      {
        snsType: "google",
        snsLink: "",
      },
      {
        snsType: "instagram",
        snsLink: "",
      },
      {
        snsType: "facebook",
        snsLink: "https://www.facebook.com/doakuma",
      },
      {
        snsType: "twitter",
        snsLink: "",
      },
    ],
  },
};
const UserSetting = () => {
  // const [urIntro, setUrIntro] = useState(userIntro);
  const introChange = () => {};
  return (
    <Layout home={false} siteTitle="MMER | userSetting">
      <UserInfo userInfo={_.get(data, "userInfo")} />
      <UserFavor />
      <section className="cont-section userInfo">
        <div className="btn-area md">
          <button
            className="btn primary"
            // onClick={(e) => modifyData(e)}
          >
            수정
          </button>
          <button
            className="btn"
            //  onClick={onReset}
          >
            취소
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default UserSetting;
