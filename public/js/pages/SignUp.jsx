import React, { useEffect, useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };
  const inputConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    console.log(`email changed: ${email}`);
  }, [email])

  return (
    <div className="sign-uo-container">
      <p>管理者登録</p>
      <br></br>
      <div className="input-list">
        <label htmlFor="email">e-mail </label>
        <input
          type="email"
          id="email"
          required={true}
          value={email}
          onChange={inputEmail}
          placeholder="emailを入力してください"
        />
      </div>
      <div className="input-list">
        <label htmlFor="password">パスワード </label>
        <input
          type="password"
          id="password"
          required={true}
          value={password}
          onChange={inputPassword}
          placeholder="パスワードを入力してください"
        />
      </div>
      <div className="input-list">
        <label htmlFor="confirmPassword">確認用パスワード </label>
        <input
          type="password"
          id="confirmPassword"
          required={true}
          value={confirmPassword}
          onChange={inputConfirmPassword}
          placeholder="確認用を入力してください"
        />
      </div>
      <div>
        <button>登録する</button>
      </div>
      <br></br>
    </div>
  );
}

export default SignUp;