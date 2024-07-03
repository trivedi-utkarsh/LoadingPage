import Layer from "./Layer";
import TimeLine from "./TimeLine";
const LoadingPage = () => {
  return (
    <>
      <TimeLine />
      <div className="h-screen bg-pageBg flex justify-center">
        <div className="relative rounded-[2.5rem] border-[6px] border-[#B566D3] h-36 w-48 mt-44">
          <Layer />
          <div className="flex justify-center items-center h-full w-full bg-[linear-gradient(99deg,_#7B54BB_25.52%,_#B566D3_62.48%,_rgba(255,255,255,0)_127.75%)] rounded-[2rem]">
            <div className="flex flex-col gap-y-3 items-center bg-gray-950 h-24 w-32 z-10 rounded-[2.5rem] text-center text-white">
              <h1 className="text-4xl mt-5">44%</h1>
              <div className="w-2/3 h-1 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-purple-400 rounded-full"
                  style={{ width: "44%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
