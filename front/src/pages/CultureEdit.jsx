import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import DatePicker from '@components/DatePicker';
import Main from '@components/MainContainer';

import Calendar from '@assets/calendar.svg';
import SmileHeart from '@assets/smile_with_heart.png';
import SlightlySmile from '@assets/slightly_smile.png';

const CultureEdit = () => {
  const { state } = useLocation();

  const [category, setCategory] = useState('뮤지컬');
  const [title, setTitle] = useState();
  const [link, setLink] = useState();
  const [sawDate, setSawDate] = useState(new Date());
  const [reserveLimitDate, setReserveLimitDate] = useState(new Date());
  const [isImportant, setIsImportant] = useState(null);
  const [expectation, setExpectation] = useState();

  const [sawDateInputIsOpen, setSawDateInputIsOpen] = useState(false);
  const [limitDateInputIsOpen, setLimitDateInputIsOpen] = useState(false);

  const pageTitle = state ? '문화생활을 수정할게요!' : '새로운 문화생활을 등록할게요!';

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(false);
    if (!category) return;
    if (title == false) return;
    if (isImportant === null) return;
    setIsCompleted(true);
  }, [category, title, isImportant]);

  return (
    <Main>
      <h1 className="main-section-title mt-0 mb-6 w-full">{pageTitle}</h1>
      <section className="w-full flex flex-col gap-7">
        <div className="w-full flex flex-col gap-3">
          <p className="text-lg font-bold">카테고리를 선택해주세요</p>
          <div className="bg-white rounded-xl w-fit pr-3">
            <select
              className="w-fit outline-none p-3 rounded-xl cursor-pointer"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="뮤지컬">뮤지컬</option>
              <option value="전시">전시</option>
              <option value="콘서트">콘서트</option>
              <option value="클래식/무용">클래식/무용</option>
              <option value="스포츠">스포츠</option>
            </select>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="text-lg font-bold">타이틀을 입력해주세요</p>
          <input
            type="text"
            className="p-3 rounded-xl w-full outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="text-lg font-bold">예매처 링크를 입력해주세요</p>
          <input
            type="url"
            className="p-3 rounded-xl w-full outline-none"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="text-lg font-bold">공연일이나 예상 관람일을 입력해주세요</p>
          <div
            className="w-fit bg-white flex p-3 cursor-pointer rounded-xl"
            onClick={(e) => {
              if (
                e.target.closest('.react-datepicker__header ') ||
                e.target.closest('.react-datepicker__navigation')
              )
                return;
              setSawDateInputIsOpen(!sawDateInputIsOpen);
            }}
          >
            <DatePicker
              selected={sawDate}
              isOpen={sawDateInputIsOpen}
              onChangeHandler={(date) => setSawDate(date)}
            />
            <img src={Calendar} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="text-lg font-bold">예매 마감일을 입력해주세요</p>
          <p className="text-sm">* 현장 예매일 경우, 공연일이나 예상 관람일을 선택해주세요!</p>
          <div
            className="w-fit bg-white flex p-3 cursor-pointer rounded-xl"
            onClick={(e) => {
              if (
                e.target.closest('.react-datepicker__header ') ||
                e.target.closest('.react-datepicker__navigation')
              )
                return;
              setLimitDateInputIsOpen(!limitDateInputIsOpen);
            }}
          >
            <DatePicker
              selected={reserveLimitDate}
              isOpen={limitDateInputIsOpen}
              onChangeHandler={(date) => setReserveLimitDate(date)}
            />
            <img src={Calendar} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="text-lg font-bold">놓치고 싶지 않은 문화생활인가요?</p>
          <div className="flex gap-3">
            <div
              className={`${
                isImportant === true ? 'bg-red text-white' : 'bg-white'
              } flex p-3 rounded-xl items-center gap-2 cursor-pointer hover:bg-red hover:text-white `}
              onClick={() => setIsImportant(true)}
            >
              <img src={SmileHeart} className="w-5" />
              <p className="font-bold">이번에 꼭 보고 싶어요!</p>
            </div>
            <div
              className={`${
                isImportant === false && isImportant !== null ? 'bg-red text-white' : 'bg-white'
              } flex p-3 rounded-xl items-center gap-2 cursor-pointer hover:bg-red hover:text-white `}
              onClick={() => setIsImportant(false)}
            >
              <img src={SlightlySmile} className="w-5" />
              <p className="font-bold">그 정도는 아니에요</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="text-lg font-bold">기대평이 있으신가요?</p>
          <textarea
            className="w-full rounded-xl outline-none p-3 min-h-44"
            onChange={(e) => setExpectation(e.target.value)}
          />
        </div>
        <div className="ml-auto mr-0">
          <button className={`btn ${isCompleted ? 'bg-black' : 'bg-gray'}`}>
            {state ? '수정하기' : '등록하기'}
          </button>
        </div>
      </section>
    </Main>
  );
};

export default CultureEdit;
