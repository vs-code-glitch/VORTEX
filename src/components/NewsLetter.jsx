function NewsLetter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-3">
        <div className="lg:cols-span-2 my-4">
          <h1 className="md:text-5xl sm:text-4xl text-xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign to our newsletter and stay up to date </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="py-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#5aeeae] w-[200px] rounded-md font-medium md:mx-0 my-6 mx-auto py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data.Read our{' '}
            <span className="text-[#5aeeae]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter