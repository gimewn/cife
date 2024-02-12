import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import User from '@assets/user.svg';
import Lock from '@assets/lock.svg';

import Main from '@components/MainContainer';
import LoginForm from '@components/LoginForm';
import InputBox from '@components/InputBox';

import { PAGE_URL } from '@util/path';
import { login } from '@api/Login';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onClickLoginButton = async () => {
    const result = await login(userId, password);
    if (result === 'success') {
      localStorage.setItem('isLogin', 1);
      navigate(PAGE_URL.HOME);
    } else if (result === 'fail') {
      alert('로그인 정보를 다시 한 번 확인해주세요.');
    }
  };

  return (
    <Main>
      <LoginForm>
        <h1 className="text-4xl font-bold">로그인</h1>
        <div className="w-full flex flex-col gap-5">
          <InputBox>
            <img src={User} />
            <input
              type="text"
              className="outline-none w-full"
              placeholder="아이디를 입력해주세요."
              onChange={(e) => setUserId(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <img src={Lock} />
            <input
              type="password"
              className="outline-none w-full"
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputBox>
        </div>
        <div className="flex gap-3 w-full justify-end">
          <NavLink to={PAGE_URL.SIGNUP}>
            <button className="btn bg-purple">회원가입</button>
          </NavLink>
          <button className="btn bg-red" onClick={onClickLoginButton}>
            로그인
          </button>
        </div>
      </LoginForm>
    </Main>
  );
};

export default Login;
