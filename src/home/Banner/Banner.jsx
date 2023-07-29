const Banner = () => {
  return (
    <div className="mt-12 ">
      <h2 className="text-2xl md:text-4xl font-bold text-center uppercase">
        I grow by helping people in need.
      </h2>
      <form className="w-3/4 md:w-2/6 mx-auto flex items-center mt-5">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-success w-full max-w-xs "
        />

        <input className="btn btn-primary" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Banner;
