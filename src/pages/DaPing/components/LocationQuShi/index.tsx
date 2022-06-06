import React, { useRef, MutableRefObject, useEffect } from 'react';

const DianLiang = () => {
  const divEl: MutableRefObject<any> = useRef(null);

  useEffect(() => {

  });

  return (
    <div>
      <div ref={divEl} />
    </div>
  );
};

export default DianLiang;
