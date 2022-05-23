import Layout from "../../components/common/Layout";

const UserInfo = () => {
  return (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              perferendis! Quam, maxime. Autem ratione explicabo odio quam, qui
              incidunt sed earum in quidem, inventore officia aut? Fugit tempore
              doloribus quisquam.
            </dd>
          </dl>
          <div className="imgUpload">
            <input
              type="file"
              id="imgUpload"
              name="imgUpload"
              className="file"
            />
            <label htmlFor="imgUpload" className="btnUpload"></label>
          </div>
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
            <i className="icon-google" />
            google
          </a>
        </li>
        <li>
          <a href="" className="btn-userSocial">
            <i className="icon-instagram" />
            instgrams
          </a>
        </li>
        <li>
          <a href="" className="btn-userSocial">
            <i className="icon-facebook" />
            facebook
          </a>
        </li>
        <li>
          <a href="" className="btn-userSocial">
            <i className="icon-twitter" />
            twitter
          </a>
        </li>
      </ul>
    </section>
  );
};

export default UserInfo;
