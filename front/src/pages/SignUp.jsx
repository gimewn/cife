import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import User from '@assets/user.svg';
import Lock from '@assets/lock.svg';
import LockCheck from '@assets/lock_check.svg';

import LoginForm from '@components/LoginForm';
import Main from '@components/MainContainer';
import InputBox from '@components/InputBox';

import { PAGE_URL } from '@util/path';
import { checkIsExist, signup } from '@api/SignUp';

const SignUp = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isSame, setIsSame] = useState(false);
  const [isIdExist, setIsIdExist] = useState(true);
  const navigate = useNavigate();

  const checkIsSame = (checkedPassword) => {
    setIsSame(password === checkedPassword);
  };

  const onClickCheckExistButton = async () => {
    const result = await checkIsExist(userId);
    setIsIdExist(result);
    if (result) {
      alert('이미 존재하는 아이디입니다.');
    }
  };

  const onClickSignUpButton = async () => {
    if (isIdExist) {
      alert('아이디 중복 확인을 체크해주세요.');
    } else if (!isSame) {
      alert('비밀번호를 다시 한 번 확인해주세요.');
    } else {
      const result = await signup(userId, password);
      if (result === 'success') {
        alert('회원가입 성공');
        navigate(PAGE_URL.LOGIN);
      } else {
        alert('다시 한 번 시도해주세요.');
      }
    }
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
                onChange={(e) => {
                  setIsIdExist(true);
                  setUserId(e.target.value);
                }}
              />
            </InputBox>
            <button
              className={`btn ${isIdExist ? 'bg-red' : 'bg-gray'}`}
              disabled={!isIdExist}
              onClick={onClickCheckExistButton}
            >
              중복확인
            </button>
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
          <button className="btn bg-red" onClick={onClickSignUpButton}>
            회원가입
          </button>
        </div>
      </LoginForm>
    </Main>
  );
};

export default SignUp;
