import { useLocation } from 'react-router-dom';

const Review = () => {
  const { state } = useLocation();
  return (
    <>
      <h1>리뷰</h1>
      <p>{state.cultureId}</p>
    </>
  );
};

export default Review;
