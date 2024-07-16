function Group() {
  return (
    <div className="h-screen flex items-center justfy-center flex-col py-10">
      <div className="flex flex-col items-center h-full justify-center py-10">
        <p className="text-3xl text-primary mb-3">Explore Group</p>
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full p-6 bg-gray-50 rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8 ">
              <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl">
                Search Groups
              </h1>
              <p className="font-light text-gray-500">
                Find the groups you're interested in by using the search and
                filter options below.
              </p>
              <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                <div>
                  <label
                    htmlFor="group-search"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Search Groups
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-primary bg-gray-200 border border-gray-300 rounded-l-md">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="group-search"
                      className="rounded-none rounded-r-lg bg-gray-50 border text-primary focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="Search groups"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="filter-orderby"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Order by
                  </label>
                  <select
                    id="filter-orderby"
                    className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected>Choose an option</option>
                    <option value="popularity">Popularity</option>
                    <option value="date">Date</option>
                    <option value="name">Name</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Group;
