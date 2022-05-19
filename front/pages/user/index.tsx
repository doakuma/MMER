import Layout from "../../components/common/Layout";
import UserFavor from "./UserFavor";
import UserInfo from "./UserInfo";
import UserNotification from "./UserNotification";
import UserPriend from "./UserPriend";

const User = () => {
  return (
    <Layout home={false} siteTitle="MMER | User">
      <UserInfo />
      <UserFavor />
      <UserPriend />
      <UserNotification />
    </Layout>
  );
};

export default User;
