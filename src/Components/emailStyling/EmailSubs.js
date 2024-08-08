const EmailSubs = () => {
  return (
    // container
    <div className="flex items-center justify-center h-screen bg-zinc-700">
      {/* card */}
      <div className=" bg-zinc-800 p-2 rounded-2xl">
        {/* flex container */}

        <div className="flex items-center  flex-col md:flex-row rounded-l-xl">
          {/* image */}
          <img
            src="images/image.jpg"
            alt=""
            className="object-center rounded-xl h-80  md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hoverl:rounded-xl duration-200"
          />

          {/*content  */}
          {/* conent container */}
          <div className="p-6 md:p-12">
            {/* heading */}
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left ">
              Get diet and fitness tips in your inbox
            </h2>
            {/* parah */}
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Eat better and exercise better. Sign up for the Diet & Fitness
              {/* btn and input caontainer */}
              {/* input */}
              <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  className="p-2 px-4 text-center text-white bg-zinc-800 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none border border-zinc-600 "
                />
                {/* btn */}
                <button className="bg-lime-500 px-5 py-3 rounded-md text-zinc-800 hover:bg-lime-700 hover:text-white">
                  Subscribe
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubs;
