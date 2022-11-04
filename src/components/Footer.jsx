import zuriLogo from "../assets/zuriLogo.svg";
import I4GLogo from "../assets/I4G.png";

const Footer = () => {
  return (
    <section>
      <p className="border-t-2 mt-20 pt-4 sm:border-t-2 sm:text-black"></p>
      <div className="sm:flex pt-4 sm:items-center sm:justify-between">
        <img src={zuriLogo} alt="" className="max-w-full" />
        <p className="text-gray-500 my-2">HNG Internship 9 Frontend Task</p>
        <img src={I4GLogo} alt="" className="max-w-full" />
      </div>
    </section>
  );
};

export default Footer;
