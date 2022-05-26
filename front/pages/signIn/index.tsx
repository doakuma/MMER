import axios from "axios";
import _ from "lodash";
import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/common/Layout";
import { UseUserDispatch, UseUserState } from "../context/UserContext";

const signInUser = async (credential: any) => {
  let url = `/api/user/signIn`;
  let _headers = {
    "Content-Type": "application/json",
  };
  let _body = JSON.stringify(credential);
  return await axios.post(url, {
    headers: _headers,
    body: _body,
  });
};

const signIn = () => {
  const { userList } = UseUserState();
  const dispatch = UseUserDispatch();
  const initSgInfo = {
    userMail: "",
    userPw: "",
  };
  const [sgInfo, setSgInfo] = useState(initSgInfo);
  const handleConfirm = (e: any) => {
    e.preventDefault();
    signIn();
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSgInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const signIn = async () => {
    const response = await signInUser(sgInfo);
    dispatch({
      type: "GET_USER",
      userMail: _.get(sgInfo, "userMail"),
    });

    console.log("response", response);
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
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="btn-area md">
            <button
              type="button"
              className="btn primary"
              onClick={(e) => handleConfirm(e)}
            >
              Sign In
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
