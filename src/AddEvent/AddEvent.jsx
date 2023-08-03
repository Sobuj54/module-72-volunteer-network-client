import Swal from "sweetalert2";
import LeftNav from "../shared/LeftNav/LeftNav";
import { useContext } from "react";
import { AuthContext } from "../Context/ContextAPI";

const AddEvent = () => {
  const { user } = useContext(AuthContext);

  const handleCreateEvent = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const date = form.date.value;
    const description = form.description.value;
    const url = form.url.value;
    const email = user.email;

    const createdEvent = { email, title, date, description, url };
    console.log(createdEvent);

    fetch("https://volunteer-network-server-peach.vercel.app/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createdEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New event has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="md:flex md:justify-between mt-14">
      <LeftNav></LeftNav>
      <div className="w-10/12 md:w-8/12 mx-auto mt-5 md:mt-1">
        <form onSubmit={handleCreateEvent} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Event Title"
                  name="title"
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
                  name="date"
                  placeholder="Event Date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
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
                  type="text"
                  name="url"
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
