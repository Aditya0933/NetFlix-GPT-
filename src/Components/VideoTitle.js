const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black">
      <div className="pt-[20%] ml-14">
        <h1 className="font-bold md:font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-50 ">{title}</h1>
        <p className="max-w-[250px] sm:max-w-md text-sm sm:text-lg text-stone-50 my-3 sm:my-6">" {overview} "</p>
        <div>
          <button className="py-2 px-4 md:py-3 md:px-5 text-lg md:text-xl font-bold bg-slate-50 rounded-xl md:rounded-2xl hover:bg-opacity-80">
            Play
          </button>
          <button className="py-2 px-4 md:py-3 md:px-5 text-lg md:text-xl font-bold bg-gray-500 text-stone-50 rounded-xl md:rounded-2xl ml-2 hover:bg-opacity-70">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
