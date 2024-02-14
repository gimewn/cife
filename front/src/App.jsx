import { useEffect } from 'react';
import Router from './Router';

function App() {
  useEffect(() => {
    console.log(`   ...Λ＿Λ
    （ㆍωㆍ)つ━☆*。
    ⊂　　 ノ 　　　.카
    　し-Ｊ　　　    °。이 *´¨)
    　　　　　　..　.· ´¸.·프*´¨) ¸.·*¨)
    　　　　　　　　　　(¸.·´ (¸.'*
    `);

    console.log(`＼척추 수술 2천만원... 허리 펴...／
    　　ｏ
    　　 。
    　　　｡
    　　∧＿∧
    　 (*　･ω･)
    ＿(__つ/￣￣￣/_
    　　＼/　　　/
    `);
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
