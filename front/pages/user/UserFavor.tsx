import Layout from "../../components/common/Layout";
import _ from "lodash";
import Link from "next/link";

const UserFavor = ({
  favorData = [
    {
      favorTit: "이유식",
      favorCont: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      favorTit: "메인요리",
      favorCont:
        "mpedit blanditiis laborum, eum recusandae nesciunt vel vitae saepe,",
    },
    {
      favorTit: "쌀국수",
      favorCont: "Fuga impedit repudiandae ipsum.",
    },
    {
      favorTit: "콩피",
      favorCont:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit blanditiis laborum,",
    },
  ],
}) => {
  return (
    <section className="cont-section userInfo">
      <h3 className="tit-user">Favorites</h3>
      <ul className="list-favor">
        {!_.isEmpty(favorData) &&
          favorData.map((row, idx) => {
            return (
              <li key={idx}>
                <dl>
                  <dt>
                    <Link href={`/search/${row.favorTit}`}>
                      <a target="_blank">{row.favorTit}</a>
                    </Link>
                  </dt>
                  <dd>{row.favorCont}</dd>
                </dl>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default UserFavor;
