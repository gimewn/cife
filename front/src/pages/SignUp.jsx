import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import User from '@assets/user.svg';
import Lock from '@assets/lock.svg';
import LockCheck from '@assets/lock_check.svg';

import LoginForm from '@components/LoginForm';
import Main from '@components/MainContainer';
import InputBox from '@components/InputBox';

import { PAGE_URL } from '@util/path';

const SignUp = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isSame, setIsSame] = useState(false);

  const checkIsSame = (checkedPassword) => {
    setIsSame(password === checkedPassword);
  };

  return (
    <Main>
      <LoginForm>
        <h1 className="text-4xl font-bold">회원가입</h1>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex justify-between items-center">
            <InputBox type="notFull">
              <img src={User} />
              <input
                type="text"
                className="outline-none w-full"
                placeholder="아이디를 입력해주세요."
                onChange={(e) => setUserId(e.target.value)}
              />
            </InputBox>
            <button className="btn bg-red">중복확인</button>
          </div>
          <InputBox>
            <img src={Lock} />
            <input
              type="password"
              className="outline-none w-full"
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputBox>
          <div className="w-full">
            <InputBox>
              <img src={LockCheck} />
              <input
                type="password"
                className="outline-none w-full"
                placeholder="비밀번호를 다시 한 번 입력해주세요."
                onChange={(e) => checkIsSame(e.target.value)}
              />
            </InputBox>
            <p className={`${isSame ? 'text-purple' : 'text-red'} mt-3`}>
              {isSame ? '✔️ 비밀번호가 일치합니다' : '❗ 비밀번호가 일치하지 않아요'}
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-full justify-end">
          <NavLink to={PAGE_URL.LOGIN}>
            <button className="btn bg-purple">로그인</button>
          </NavLink>
          <button className="btn bg-red">회원가입</button>
        </div>
      </LoginForm>
    </Main>
  );
};

export default SignUp;
