const Contact = () => {
  const name = "Alex";
  return (
    <section>
      <h1 className="font-semibold text-2xl pb-4">Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind</p>

      <form className="flex flex-col gap-4 pt-4">
        <div className="sm:flex sm:gap-10">
          <div className="flex flex-col">
            <label>First name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
              className="outline-none border-2 border-[#eaecf0] rounded-md px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label>Last name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
              className="outline-none border-2 border-[#eaecf0] rounded-md px-2 py-1"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="yourname@gmail.com"
            className="outline-none border-2 border-[#eaecf0] rounded-md px-2 py-1"
          />
        </div>

        <div className="flex flex-col">
          <label>Message</label>
          <textarea
            type="text"
            id="message"
            placeholder="Send me a message and I'll you as soon as possible... "
            className="outline-none border-2 border-[#eaecf0] rounded-md px-2 py-1 h-24"
          />
        </div>

        <div className="flex gap-3 items-start sm:items-center">
          <input type="checkbox" />
          <p>You agree to providing your data to {name} who may contact you</p>
        </div>

        <button
          className="bg-blue-600 rounded-md py-1 text-white"
          id="btn__submit"
        >
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
