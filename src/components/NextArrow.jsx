import { FaCircleRight } from "react-icons/fa6";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={
        "text-3xl absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer opacity-30 hover:opacity-100 duration-500"
      }
      onClick={onClick}
    >
      <FaCircleRight />
    </div>
  );
};

export default NextArrow;
