const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black">
      <div className="mt-[20%] ml-14">
        <h1 className="font-extrabold text-4xl text-stone-50 mb-6">{title}</h1>
        <p className="max-w-md text-lg text-stone-50 mb-6">" {overview} "</p>
        <div>
          <button className="py-3 px-5 text-xl font-bold bg-slate-50 rounded-2xl hover:bg-opacity-80">
            Play
          </button>
          <button className="py-3 px-5 text-xl font-bold bg-gray-500 text-stone-50 rounded-2xl ml-2 hover:bg-opacity-70">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
