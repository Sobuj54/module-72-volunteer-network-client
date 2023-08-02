const EventTask = ({ event }) => {
  const { title, date, url, description } = event;

  return (
    <div className="rounded-xl glass flex justify-between w-11/12 mx-auto lg:w-full shadow-lg">
      <div>
        <img src={url} />
      </div>
      <div className="w-full px-5 my-auto">
        <h2 className=" text-lg lg:text-3xl font-bold">{title}</h2>
        <p className="mt-5 lg:text-lg ">{description}</p>
        <p className="font-semibold mt-1 md:mt-4">{date}</p>
        <div className="text-end">
          <button className="btn btn-primary mt-2">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EventTask;
