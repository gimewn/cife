import { useParams } from 'react-router-dom';

import Main from '@components/MainContainer';

import { DUMMY_DATA } from '@util/variable';

const CultureDetail = () => {
  const params = useParams();
  const data = DUMMY_DATA[params.cultureId - 1];

  return <Main></Main>;
};

export default CultureDetail;
