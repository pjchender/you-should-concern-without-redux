import { memo } from 'react';

const Demo = () => {
  console.log('demo render');

  return <span>demo</span>;
};

// export default Demo;
export default memo(Demo);
