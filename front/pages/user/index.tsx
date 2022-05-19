import Layout from "../../components/common/Layout";

const User = () => {
  return (
    <Layout home={false} siteTiel="MMER | User">
      <section className="cont-section userInfo">
        <h3 className="tit-user">User Info</h3>
        <figure className="img-user">
          <img src="/images/user/@userImage.png" alt="" className="userImg" />
          <figcaption>
            <dl className="user-summary">
              <dt className="summ-tit">User Nickname</dt>
              <dd className="summ-intro">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, perferendis! Quam, maxime. Autem ratione explicabo odio
                quam, qui incidunt sed earum in quidem, inventore officia aut?
                Fugit tempore doloribus quisquam.
              </dd>
            </dl>
          </figcaption>
        </figure>
        <ul className="list-userTag">
          <li>
            <a className="btn-userTag">#tag1</a>
          </li>
          <li>
            <a className="btn-userTag">#tag2</a>
          </li>
          <li>
            <a className="btn-userTag">#tag3</a>
          </li>
          <li>
            <a className="btn-userTag">#tag4</a>
          </li>
        </ul>
      </section>
      <section className="cont-section userInfo">
        <h3 className="tit-user">Favorites</h3>
      </section>
      <section className="cont-section userInfo">
        <h3 className="tit-user">Priends</h3>
      </section>
      <section className="cont-section userInfo">
        <h3 className="tit-user">Settings</h3>
      </section>
      <section className="cont-section userInfo">
        <h3 className="tit-user">Notifications</h3>
      </section>
    </Layout>
  );
};

export default User;
