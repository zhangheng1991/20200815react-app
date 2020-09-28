import React, { useState, useEffect } from 'react';

function MyHooks() {
  const [count, setCount] = useState(0);
  useEffect(() => {});
  return (
    <div>
      <div onClick={() => setCount(count + 1)} >点击</div>
      <p>{count}</p>
      sdfsdfsdf
    </div>
  );
}

export default MyHooks;
