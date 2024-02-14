import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Star from '@assets/star.svg';

import useModal from '@hooks/useModal';

import Main from '@components/MainContainer';
import CultureDetailItem from '@components/Culture/CultureDetailItem';
import CultureDeleteModal from '@components/Modal/CultureDeleteModal';
import Loader from '@components/Loader';

import { PAGE_URL } from '@util/path';

import { getCulture } from '@api/Culture';
import { formatDate } from '@util/funcs';

const CultureDetail = () => {
  const params = useParams();
  const { data, isLoading } = useQuery(['cultureInfo', params.cultureId], () =>
    getCulture(params.cultureId),
  );
  const { BaseModal, isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  if (isLoading) return <Loader />;

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
    if (data.reservedDate) {
      return (
        <p>
          <span className="font-bold text-2xl">{data.reservedDate}</span>
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
          <span className="font-bold text-2xl">{formatDate(data.sawDate)}</span>
          <span>에 관람 예정이에요.</span>
        </p>
      );
    } else {
      return (
        <p>
          <span className="font-bold text-2xl">{formatDate(data.sawDate)}</span>
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
        </>
      );
    } else {
      return <p>기대평을 작성하지 않으셨어요.</p>;
    }
  };

  return (
    <>
      <Main className="w-full">
        <div className="w-full">
          <div className="flex justify-between w-full items-center mb-6">
            <div className="flex gap-2">
              <h1 className="main-section-title my-0 text-3xl break-all">
                [{data.category}] {data.title}
              </h1>
              {data.isImportant && <img src={Star} />}
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button className="btn bg-black" onClick={openModal}>
              삭제하기
            </button>
            <button
              className="btn bg-purple"
              onClick={() =>
                navigate(PAGE_URL.CULTURE_EDIT, {
                  state: {
                    cultureId: data.cultureId,
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
            <>
              <p className="text-2xl">✍🏻</p>
              {expectationText()}
            </>
          </CultureDetailItem>
          {data.expectation && (
            <textarea
              value={data.expectation}
              disabled
              className="bg-white w-full min-h-60 rounded-lg p-3 outline-none"
            ></textarea>
          )}
          <button
            className="btn bg-purple w-full py-3"
            onClick={() => {
              const url = data.reviewId
                ? PAGE_URL.REVIEW_DETAIL(data.reviewId)
                : PAGE_URL.REVIEW_EDIT;
              navigate(url, {
                state: {
                  cultureId: data.cultureId,
                  category: data.category,
                  title: data.title,
                },
              });
            }}
          >
            {data.reviewId ? '후기 보러 가기' : '후기 작성하기'}
          </button>
        </div>
      </Main>
      <BaseModal isOpen={isOpen} closeModal={closeModal}>
        <CultureDeleteModal closeModal={closeModal} title={data.title} category={data.category} />
      </BaseModal>
    </>
  );
};

export default CultureDetail;
