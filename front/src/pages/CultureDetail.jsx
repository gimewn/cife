import { useParams } from 'react-router-dom';

const CultureDetail = () => {
  const params = useParams();

  return <>{params.cultureId}</>;
};

export default CultureDetail;
