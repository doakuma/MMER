import _ from "lodash";
import Link from "next/link";

const UserPriend = ({
  priData = [
    {
      priName: "개똥아",
      priImage: "/images/user/@usericon.png",
      priId: "user0001",
    },
    {
      priName: "똥싸니",
      priImage: "/images/user/@usericon.png",
      priId: "user0002",
    },
    {
      priName: "아니오",
      priImage: "/images/user/@usericon.png",
      priId: "user0003",
    },
    {
      priName: "개똥아",
      priImage: "/images/user/@usericon.png",
      priId: "user0004",
    },
    {
      priName: "똥싸니",
      priImage: "/images/user/@usericon.png",
      priId: "user0005",
    },
    {
      priName: "아니오",
      priImage: "/images/user/@usericon.png",
      priId: "user0006",
    },
    {
      priName: "개똥아",
      priImage: "/images/user/@usericon.png",
      priId: "user0007",
    },
    {
      priName: "똥싸니",
      priImage: "/images/user/@usericon.png",
      priId: "user0008",
    },
    {
      priName: "아니오",
      priImage: "/images/user/@usericon.png",
      priId: "user0009",
    },
  ],
}) => {
  return (
    <section className="cont-section userInfo">
      <h3 className="tit-user">Priends</h3>
      <ul className="list-priends">
        {!_.isEmpty(priData) &&
          priData.map((row) => {
            console.log("priDAta");
            return (
              <li key={row.priId}>
                <Link href={`/user/${row.priId}`}>
                  <a className="icon-priends">
                    <img src={row.priImage} alt="" />
                  </a>
                </Link>
                <div className="info-priends">{row.priName}</div>
              </li>
            );
          })}
        <li>
          <a href="" className="icon-priends more"></a>
        </li>
      </ul>
    </section>
  );
};

export default UserPriend;
