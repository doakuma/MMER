import Layout from "../../components/common/Layout";

const signUp = () => {
  return (
    <Layout home={false} siteTitle="MMER | SignUp">
      <section className="cont-section">
        <div className="box-signUp">
          <header className="head-signUp">
            <h3 className="tit-user">Sign Up</h3>
            <p className="txt-signUp">Dolce Far Niente!!!</p>
          </header>
          <div className="line-signUp">
            <label className="label" htmlFor="sgEmail">
              E-mail
            </label>
            <input type="email" className="text" name="sgEmail" id="sgEmail" />
          </div>
          <div className="line-signUp">
            <label className="label" htmlFor="sgIpPw">
              Input Password
            </label>
            <input type="password" className="text" name="sgIpPw" id="sgIpPw" />
          </div>
          <div className="line-signUp">
            <label className="label" htmlFor="sgCfPw">
              Confirm Password
            </label>
            <input type="password" className="text" name="sgCfPw" id="sgCfPw" />
          </div>
          <div className="btn-area md">
            <button type="button" className="btn primary">
              Sign Up
            </button>
            <button type="button" className="btn">
              Cancel
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default signUp;
