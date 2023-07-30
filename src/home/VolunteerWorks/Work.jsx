const Work = ({ work }) => {
  const { eventName, imageURL } = work;

  // generate random color
  const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };

  const color = randColor();

  return (
    <div
      className="card card-compact w-96 mx-auto bg-base-100 shadow-xl mt-5"
      style={{ backgroundColor: color }}>
      <figure>
        <img src={imageURL} alt="Shoes" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{eventName}</h2>
        <button className="btn btn-primary my-auto">Volunteer</button>
      </div>
    </div>
  );
};

export default Work;
