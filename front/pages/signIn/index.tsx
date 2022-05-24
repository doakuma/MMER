import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/common/Layout";

const signIn = () => {
  const initSgInfo = {
    sgEmail: "",
    sgIpPw: "",
  };
  const [sgInfo, setSgInfo] = useState(initSgInfo);
  const handleConfirm = (e: any) => {
    e.preventDefault();
    console.log("sgInfo", sgInfo);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSgInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Layout home={false} siteTitle="MMER | SignUp">
      <section className="cont-section">
        <div className="box-signUp">
          <header className="head-signUp">
            <h3 className="tit-user">Sign In</h3>
            <p className="txt-signUp">Dolce Far Niente!!!</p>
          </header>
          <div className="line-signUp">
            <label className="label" htmlFor="sgEmail">
              E-mail
            </label>
            <input
              type="email"
              className="text"
              name="sgEmail"
              id="sgEmail"
              placeholder="Enter your email address"
              onChange={handleChange}
            />
          </div>
          <div className="line-signUp">
            <label className="label" htmlFor="sgIpPw">
              Input Password
            </label>
            <input
              type="password"
              className="text"
              name="sgIpPw"
              id="sgIpPw"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="btn-area md">
            <button
              type="button"
              className="btn primary"
              onClick={handleConfirm}
            >
              Sign Ip
            </button>
            <Link href="/">
              <a className="btn">Cancel</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default signIn;
