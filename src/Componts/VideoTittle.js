const VideoTittle = ({ title, overview }) => {
  console.log(title);
  return (
    <div className=" w-screen aspect-video   pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-8 text-lg hover:opacity-70 rounded-lg">
          ▶ play
        </button>
        <button className="mx-2 bg-white text-black p-2 px-8  text-lg  hover:opacity-70 rounded-lg">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTittle;
