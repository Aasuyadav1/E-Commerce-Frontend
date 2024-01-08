import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button({ title, ...props }) {


  return (
    <button
      className={`px-[10px] py-[10px]  border-solid border-[2px] border-black text-black rounded-full block  ${props.class}`}
    >
      {title}
    </button>
  );
}

export default Button;
