const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black">
      <div className="pt-[32%] sm:pt-[20%] ml-4  sm:ml-14">
        <h1 className="font-bold md:font-extrabold mb-3 text-xl sm:text-3xl md:text-4xl text-stone-50 ">{title}</h1>
        <p className="hidden sm:block max-w-[250px] sm:max-w-md text-sm sm:text-lg text-stone-50 my-3 sm:my-6">" {overview} "</p>
        <div>
          <button className="py-1 px-2 sm:py-2 sm:px-4 md:py-3 md:px-5 text-sm md:text-xl font-bold bg-slate-50 rounded-xl md:rounded-2xl hover:bg-opacity-80">
            Play
          </button>
          <button className="py-1 px-2 sm:py-2 sm:px-4 md:py-3 md:px-5 text-sm md:text-xl font-bold bg-gray-500 text-stone-50 rounded-xl md:rounded-2xl ml-2 hover:bg-opacity-70">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
