import Layout from "../../components/common/Layout";
import UserFavor from "./UserFavor";
import UserInfo from "./UserInfo";
import UserNotification from "./UserNotification";
import UserPriend from "./UserPriend";
import axios from "axios";
import { useEffect, useState } from "react";
import _ from "lodash";

const User = () => {
  const [urInfo, setUrInfo] = useState();
  let url = `/api/user/getUser`;
  let params = {
    id: "1",
  };
  const getData = async () => {
    await axios.get(url, { params }).then((res) => {
      console.log("getUser", res);
      let _data = _.get(res, "data.result.data.userInfo");
      setUrInfo(_data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout home={false} siteTitle="MMER | User">
      <UserInfo {...urInfo} />
      <UserFavor />
      <UserPriend />
      <UserNotification />
    </Layout>
  );
};

export default User;
