import React from 'react';

function MemoComp(){
  console.log('Rendring Memo Component');
  return(
    <div>

    </div>
  )
}
export default React.memo(MemoComp);  