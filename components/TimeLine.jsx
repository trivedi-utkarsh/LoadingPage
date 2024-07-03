const TimeLine = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128.321"
        height="224"
        viewBox="0 0 206 132"
        fill="none"
        style={{ flexShrink: 0 }}
        className="absolute top-28"
      >
        <path
          d="M204 130.321C204 59.4513 132.955 2 45.3153 2L-20 2"
          stroke="url(#paint0_linear_1_11428)"
          strokeWidth="2.95937"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_11428"
            x1="-166.232"
            y1="-127.308"
            x2="406.474"
            y2="506.776"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A371F7" />
            <stop offset="0.00733964" stopColor="#9E72D3" />
            <stop offset="0.251918" stopColor="#6639BA" stopOpacity="0" />
            <stop offset="0.325848" stopColor="#6639BA" />
            <stop offset="0.945217" stopColor="#6639BA" />
            <stop offset="1" stopColor="#6639BA" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex items-center gap-x-2 mt-[17.5rem] ml-[7.5rem]">
        <div className="flex items-center justify-center h-4 w-4">
          <div className="absolute bg-[#DD7DF7] rounded-full w-4 h-4 blur-[9px]"></div>
          <div className="absolute bg-white rounded-full w-2 h-2 blur-[2px]"></div>
        </div>
        <h1 className="text-white ml-4">Initializing</h1>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="185"
        height="300"
        viewBox="0 0 185 300"
        fill="none"
        className="absolute ml-[8rem] mt-[20rem]"
      >
        <path
          d="M2.10059 1.5C2.10059 40.0235 2.10059 131.548 2.10059 170.071C2.10059 240.896 59.5152 298.311 130.341 298.311H183.125"
          stroke="url(#paint0_linear_1_11427)"
          strokeWidth="2.95937"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_11427"
            x1="301.301"
            y1="427.536"
            x2="-270.509"
            y2="-84.4212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A371F7" />
            <stop offset="0.00733964" stopColor="#9E72D3" />
            <stop offset="0.251918" stopColor="#6639BA" stopOpacity="0" />
            <stop offset="0.325848" stopColor="#6639BA" />
            <stop offset="0.945217" stopColor="#6639BA" />
            <stop offset="1" stopColor="#6639BA" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div
        className="absolute w-1/4 bottom-0 h-1 rounded-full mb-[4.6rem] ml-64"
        style={{
          background:
            "linear-gradient(180deg, #D2A8FF 0%, #A371F7 10%, #4C2E8E 68.84%, #6639BA 93.23%, rgba(102, 57, 186, 0.00) 100%)",
        }}
      ></div>
      <div className="absolute flex items-center gap-x-2 mt-[36rem] ml-[38rem]">
        <div className="flex flex-col items-center">
          <h1 className="text-white mb-3">Loading Content</h1>
          <div className="flex items-center justify-center h-4 w-4">
            <div className="absolute bg-[#DD7DF7] rounded-full w-4 h-4 blur-[9px]"></div>
            <div className="absolute bg-white rounded-full w-2 h-2 blur-[2px]"></div>
          </div>
        </div>
      </div>
      <div className="absolute w-1/4 bottom-0 h-1 mb-[4.6rem] ml-[44rem] bg-gradient-to-b from-purple-800 to-purple-200/30 rounded-full"></div>
      <div className="absolute flex items-center gap-x-2 mt-[36rem] ml-[66em]">
        <div className="flex flex-col items-center">
          <h1 className="text-white mb-3">Loading Graphics</h1>
          <div className="flex items-center justify-center h-4 w-4">
            <div className="absolute bg-[#DD7DF7] rounded-full w-4 h-4 blur-[9px]"></div>
            <div className="absolute bg-white rounded-full w-2 h-2 blur-[2px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
