import React from "react";
import { useRouter } from "next/router";
const Button = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("");
  };
  return (
    <div
      onClick={() => {
        onClickHandler();
      }}
    >
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Log in with Poogle
      </button>
    </div>
  );
};

export default Button;
