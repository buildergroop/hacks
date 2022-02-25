import { BsFillPlayFill } from "react-icons/bs";
export const PlayButton = () => {
  return (
    <>
      <div
        className="h-[3rem] w-[3rem] bg-light-main opacity-[60%] rounded-full hidden md:grid place-items-center cursor-not-allowed transition-all"
      >
        <BsFillPlayFill className="text-dark-main h-[1.6rem] w-[1.6rem]" />
      </div>
    </>
  );
};
