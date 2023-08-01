import LeftNav from "../shared/LeftNav/LeftNav";

const AddEvent = () => {
  return (
    <div className="md:flex md:justify-between mt-14">
      <LeftNav></LeftNav>
      <div className="w-8/12 mx-auto">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Event Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Event Title"
                  name="event"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Event Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  placeholder="Event Date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Enter description"
                  className="input input-bordered h-[100px] w-full"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  name="image"
                  placeholder="Enter image url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="text-end mt-10">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
