import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/common/Layout";

const signUp = () => {
  const initSgInfo = {
    sgEmail: "",
    sgIpPw: "",
    sgCfPw: "",
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
            <h3 className="tit-user">Sign Up</h3>
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
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>
          <div className="line-signUp">
            <label className="label" htmlFor="sgCfPw">
              Confirm Password
            </label>
            <input
              type="password"
              className="text"
              name="sgCfPw"
              id="sgCfPw"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
          <div className="btn-area md">
            <button
              type="button"
              className="btn primary"
              onClick={handleConfirm}
            >
              Sign Up
            </button>
            <button type="button" className="btn">
              Cancel
            </button>
          </div>
          <div className="btn-area md hasAccount">
            <p className="txt-signUp ">Do you have account?</p>
            <Link href="/signIn">
              <a className="btn primary">Sign In</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default signUp;
