import { useNavigate, useParams } from 'react-router-dom';

import Star from '@assets/star.svg';

import useModal from '@hooks/useModal';

import Main from '@components/MainContainer';
import CultureDetailItem from '@components/Culture/CultureDetailItem';
import CultureDeleteModal from '@components/Modal/CultureDeleteModal';

import { DUMMY_DATA } from '@util/variable';
import { PAGE_URL } from '@util/path';

const CultureDetail = () => {
  const params = useParams();
  const data = DUMMY_DATA[params.cultureId - 1];
  const { BaseModal, isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const linkText = () => {
    if (data.link) {
      return (
        <p>
          <span
            className="font-extrabold text-xl underline cursor-pointer hover:text-red"
            onClick={() => window.open(data.link)}
          >
            이 링크
          </span>
          <span>에서 예매하실 수 있어요.</span>
        </p>
      );
    } else {
      return <p>아직 링크를 입력하지 않으셨어요.</p>;
    }
  };

  const reservedDateText = () => {
    if (data.reserved_date) {
      return (
        <p>
          <span className="font-bold text-2xl">{data.reserved_date}</span>
          <span>에 예매했어요.</span>
        </p>
      );
    } else {
      return <p>아직 예매하지 않으셨어요.</p>;
    }
  };

  const sawDateText = () => {
    if (data.saw_date >= new Date()) {
      return (
        <p>
          <span className="font-bold text-2xl">{data.saw_date}</span>
          <span>에 관람 예정이에요.</span>
        </p>
      );
    } else {
      return (
        <p>
          <span className="font-bold text-2xl">{data.saw_date}</span>
          <span>에 관람했어요.</span>
        </p>
      );
    }
  };

  const expectationText = () => {
    if (data.expectation) {
      return (
        <>
          <p>
            <span className="font-bold text-2xl">기대평</span>
            <span>을 작성하셨어요.</span>
          </p>
          <p>{data.expectation}</p>
        </>
      );
    } else {
      return <p>기대평을 작성하지 않으셨어요.</p>;
    }
  };

  return (
    <>
      <Main className="w-full">
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-2">
            <h1 className="main-section-title my-0 text-3xl">
              [{data.category}] {data.title}
            </h1>
            {data.is_important && <img src={Star} />}
          </div>
          <div className="flex gap-2">
            <button className="btn bg-black" onClick={openModal}>
              삭제하기
            </button>
            <button
              className="btn bg-purple"
              onClick={() =>
                navigate(PAGE_URL.CULTURE_EDIT, {
                  state: {
                    cultureId: data.culture_id,
                  },
                })
              }
            >
              수정하기
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-6 mt-8">
          <CultureDetailItem>
            <p className="text-2xl">🔗</p>
            {linkText()}
          </CultureDetailItem>
          <CultureDetailItem>
            <p className="text-2xl">🎟️</p>
            {reservedDateText()}
          </CultureDetailItem>
          <CultureDetailItem>
            <p className="text-2xl">🖼️</p>
            {sawDateText()}
          </CultureDetailItem>
          <CultureDetailItem>
            <p className="text-2xl">✍🏻</p>
            {expectationText()}
          </CultureDetailItem>
        </div>
      </Main>
      <BaseModal isOpen={isOpen} closeModal={closeModal}>
        <CultureDeleteModal closeModal={closeModal} title={data.title} category={data.category} />
      </BaseModal>
    </>
  );
};

export default CultureDetail;
