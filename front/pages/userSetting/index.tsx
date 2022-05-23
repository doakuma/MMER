import Layout from "../../components/common/Layout";
import UserFavor from "./UserFavor";
import UserInfo from "./UserInfo";
import UserNotification from "./UserNotification";
import UserPriend from "./UserPriend";

const User = () => {
  return (
    <Layout home={false} siteTitle="MMER | userSetting">
      <UserInfo />
      <UserFavor />
    </Layout>
  );
};

export default User;
