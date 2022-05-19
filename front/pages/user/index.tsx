import Layout from "../../components/common/Layout";

const User = () => {
  return (
    <Layout home={false} siteTitle="MMER | User">
      <section className="cont-section userInfo">
        <header className="head-userInfo">
          <h3 className="tit-user">User Info</h3>
          <a href="" className="btn-userSet">
            Setting
          </a>
        </header>
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
        <ul className="list-userSocial">
          <li>
            <a href="" className="btn-userSocial">
              <i />
              facebook
            </a>
          </li>
          <li>
            <a href="" className="btn-userSocial">
              <i />
              instgrams
            </a>
          </li>
          <li>
            <a href="" className="btn-userSocial">
              <i />
              twitter
            </a>
          </li>
          <li>
            <a href="" className="btn-userSocial">
              <i />
            </a>
          </li>
        </ul>
      </section>
      <section className="cont-section userInfo">
        <h3 className="tit-user">Favorites</h3>
        <ul className="list-favor">
          <li>
            <dl>
              <dt>favor</dt>
              <dd>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit blanditiis laborum, eum recusandae nesciunt vel vitae
                saepe, molestiae hic necessitatibus cupiditate enim repellat
                reiciendis distinctio alias? Fuga impedit repudiandae ipsum.
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>favor</dt>
              <dd>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit blanditiis laborum, eum recusandae nesciunt vel vitae
                saepe, molestiae hic necessitatibus cupiditate enim repellat
                reiciendis distinctio alias? Fuga impedit repudiandae ipsum.
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>favor</dt>
              <dd>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit blanditiis laborum, eum recusandae nesciunt vel vitae
                saepe, molestiae hic necessitatibus cupiditate enim repellat
                reiciendis distinctio alias? Fuga impedit repudiandae ipsum.
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>favor</dt>
              <dd>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit blanditiis laborum, eum recusandae nesciunt vel vitae
                saepe, molestiae hic necessitatibus cupiditate enim repellat
                reiciendis distinctio alias? Fuga impedit repudiandae ipsum.
              </dd>
            </dl>
          </li>
        </ul>
      </section>
      <section className="cont-section userInfo">
        <h3 className="tit-user">Priends</h3>
        <ul className="list-priends">
          <li>
            <a href="" className="icon-priends">
              <img src="/images/user/@usericon.png" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="icon-priends">
              <img src="/images/user/@usericon.png" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="icon-priends">
              <img src="/images/user/@usericon.png" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="icon-priends">
              <img src="/images/user/@usericon.png" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="icon-priends">
              <img src="/images/user/@usericon.png" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="icon-priends">
              <img src="/images/user/@usericon.png" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="icon-priends">
              <img src="/images/user/@usericon.png" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="icon-priends">
              <img src="/images/user/@usericon.png" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="icon-priends">
              <img src="/images/user/@usericon.png" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="icon-priends">
              <img src="/images/user/@usericon.png" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="icon-priends more"></a>
          </li>
        </ul>
      </section>
      <section className="cont-section userInfo">
        <h3 className="tit-user">Notifications</h3>
      </section>
    </Layout>
  );
};

export default User;
