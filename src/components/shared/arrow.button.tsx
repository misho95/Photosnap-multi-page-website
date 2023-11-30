interface PropsType {
  type: string;
}

const ArrowButton = ({ type }: PropsType) => {
  return (
    <button
      className={`flex items-center gap-[15px] hover:underline text-[12px] font-bold ${
        type === "primary" ? "text-white" : "text-black"
      }`}
    >
      <span>GET AN INVITE</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
        <g
          fill="none"
          fillRule="evenodd"
          stroke={`${type === "primary" ? "#fff" : "#000"}`}
        >
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </button>
  );
};

export default ArrowButton;
