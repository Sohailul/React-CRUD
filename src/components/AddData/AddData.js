import React from "react";

const AddData = () => {
  const handleAddData = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;

    const user = { name, email, address, phone };

    // send data to the server
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success", data);
        event.target.reset();
      });
  };
  return (
    <div className="mt-32">
      <div className="text-white m-auto p-6 max-w-md bg-slate-800 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-center text-3xl mb-12 font-bold text-white">
          Please Add a New Data
        </h2>
        <form onSubmit={handleAddData}>
          <div className="mb-6">
            <label className="ml-2 block mb-2 text-sm font-medium text-white text-xl">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="ml-2 block mb-2 text-sm font-medium text-white text-xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="ml-2 block mb-2 text-sm font-medium text-white text-xl">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Address"
              required
            />
          </div>
          <div className="mb-6">
            <label className="ml-2 block mb-2 text-sm font-medium text-white text-xl">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Phone"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-green-500 hover:bg-gree-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add User Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddData;
