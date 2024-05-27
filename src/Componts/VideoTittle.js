const VideoTittle = ({ title, overview }) => {
  console.log(title);
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-2 px-8 text-lg bg-opacity-50 rounded-lg">
          ▶ play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-8  text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTittle;
