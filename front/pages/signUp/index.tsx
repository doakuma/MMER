import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/common/Layout";

const signInUser = async (credential: any) => {
  let url = `/api/user/signUp`;
  let _headers = {
    "Content-Type": "application/json",
  };
  let _body = JSON.stringify(credential);
  return await axios.post(url, {
    headers: _headers,
    body: _body,
  });
};
const signUp = () => {
  const initSgInfo = {
    userMail: "",
    userPw: "",
    sgCfPw: "",
  };
  const [sgInfo, setSgInfo] = useState(initSgInfo);
  const handleConfirm = (e: any) => {
    e.preventDefault();
    console.log("sgInfo", sgInfo);
    signUn();
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSgInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const signUn = async () => {
    const response = await signInUser(sgInfo);

    console.log("response", response);
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
            <label className="label" htmlFor="userMail">
              E-mail
            </label>
            <input
              type="email"
              className="text"
              name="userMail"
              id="userMail"
              placeholder="Enter your email address"
              onChange={handleChange}
            />
          </div>
          <div className="line-signUp">
            <label className="label" htmlFor="userPw">
              Input Password
            </label>
            <input
              type="password"
              className="text"
              name="userPw"
              id="userPw"
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
            <Link href="/">
              <a className="btn">Cancel</a>
            </Link>
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
