import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';

import { createCulture, getCulture, updateCulture } from '@api/Culture';

import Calendar from '@assets/calendar.svg';
import SmileHeart from '@assets/smile_with_heart.png';
import SlightlySmile from '@assets/slightly_smile.png';

import DatePicker from '@components/DatePicker';
import Main from '@components/MainContainer';

import { CULTURE_CATEGORY } from '@util/variable';
import { PAGE_URL } from '@util/path';

const CultureEdit = () => {
  const { state } = useLocation();

  const { data, isLoading } = useQuery(['cultureInfo'], () => getCulture(state.cultureId), {
    enabled: !!state,
  });

  const [category, setCategory] = useState(CULTURE_CATEGORY[0]);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [sawDate, setSawDate] = useState(new Date());
  const [reserveLimitDate, setReserveLimitDate] = useState(new Date());
  const [isImportant, setIsImportant] = useState(null);
  const [expectation, setExpectation] = useState(undefined);

  const [sawDateInputIsOpen, setSawDateInputIsOpen] = useState(false);
  const [limitDateInputIsOpen, setLimitDateInputIsOpen] = useState(false);

  const pageTitle = state ? '문화생활을 수정할게요!' : '새로운 문화생활을 등록할게요!';

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!isLoading && data) {
      setCategory(data.category);
      setTitle(data.title);
      setLink(data.link || undefined);
      setSawDate(data.sawDate || new Date());
      setReserveLimitDate(data.limitDate || new Date());
      setIsImportant(data.isImportant != undefined ? data.isImportant : null);
      setExpectation(data.expectation || undefined);
    }
  }, [isLoading, data]);

  useEffect(() => {
    setIsCompleted(!!category && !!title && isImportant !== null);
  }, [category, title, isImportant]);

  const onClickConfirmButton = async () => {
    const data = {
      cultureId: state?.cultureId,
      categoryId: CULTURE_CATEGORY.indexOf(category) + 1,
      title: title,
      sawDate: sawDate,
      limitDate: reserveLimitDate,
      isImportant: isImportant,
      link: link,
      expectation: expectation,
    };
    const func = state ? updateCulture : createCulture;
    const result = await func(data);
    if (result == 'success') {
      alert('완료되었습니다.');
      window.location.href = PAGE_URL.CULTURE;
    } else {
      alert('다시 시도해주세요.');
    }
  };

  return (
    <Main>
      <h1 className="main-section-title mt-0 mb-6 w-full">{pageTitle}</h1>
      <section className="w-full flex flex-col gap-7">
        <div className="w-full flex flex-col gap-3">
          <p className="text-lg font-bold">카테고리를 선택해주세요</p>
          <div className="bg-white rounded-xl w-[130px] pr-3">
            <select
              className="w-full outline-none p-3 rounded-xl cursor-pointer"
              onChange={(e) => setCategory(e.target.value)}
            >
              {CULTURE_CATEGORY.map((item) => (
                <option key={item} value={item} selected={category === item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="text-lg font-bold">타이틀을 입력해주세요</p>
          <input
            type="text"
            value={title}
            className="p-3 rounded-xl w-full outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="text-lg font-bold">예매처 링크를 입력해주세요</p>
          <input
            type="url"
            className="p-3 rounded-xl w-full outline-none"
            value={link}
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
            value={expectation}
            className="w-full rounded-xl outline-none p-3 min-h-44"
            onChange={(e) => setExpectation(e.target.value)}
          />
        </div>
        <div className="ml-auto mr-0">
          <button
            className={`btn ${isCompleted ? 'bg-black' : 'bg-gray'}`}
            onClick={onClickConfirmButton}
            disabled={!isCompleted}
          >
            {state ? '수정하기' : '등록하기'}
          </button>
        </div>
      </section>
    </Main>
  );
};

export default CultureEdit;
