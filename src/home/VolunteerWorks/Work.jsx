const Work = ({ work }) => {
  const { eventName, imageURL } = work;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={imageURL} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{eventName}</h2>
        <button className="btn btn-primary  my-auto">Volunteer</button>
      </div>
    </div>
  );
};

export default Work;
