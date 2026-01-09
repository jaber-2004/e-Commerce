import React from 'react'
import Images from '../Images'
import error from '/src/assets/404-error.avif'



const Error = () => {
  return (
    <>
      <Images className={"w-full h-[500px]"} srcImg={error} />
    </>
  );
}

export default Error