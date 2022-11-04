import profile from "../assets/p16787843_i_h9_ab.jpg";
import slack from "../assets/slack.png";
import github from "../assets/github.png";
import dots from "../assets/dots.svg";
import icon from "../assets/icon.svg";

const Linktree = () => {
  return (
    <section className="bg-white w-full">
      <div className="flex justify-end lg:mx-10">
        <div className="rounded-full w-10 h-10 border-solid border-2 border-gray-300 flex items-center justify-center">
          <img src={dots} alt="" className="sm:hidden" />
          <img src={icon} alt="" className="hidden sm:flex" />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-5">
        <img
          src={profile}
          alt=""
          className="rounded-full w-20 h-20 object-cover mx-auto"
          id="profile__img"
        />
        <p className="text-center mb-3 font-bold" id="twitter">
          @Lex_Feranmi
        </p>
        <p className="hidden" id="slack">
          Lex043
        </p>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center font-bold"
          id="twitter"
          href="https://twitter.com"
          target="_blank"
        >
          Twitter Link
        </a>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center font-bold"
          id="btn__zuri"
          href="https://training.zuri.team/"
          target="_blank"
        >
          Zuri Team
        </a>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center font-bold"
          id="books"
          href="http://books.zuri.team"
          target="_blank"
        >
          Zuri Books
        </a>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center font-bold"
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=Lex043"
          target="_blank"
        >
          Python Books
        </a>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center font-bold"
          id="pitch"
          href="https://background.zuri.team"
          target="_blank"
        >
          Background Check for Coders
        </a>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center font-bold"
          id="book__design"
          href="https://books.zuri.team/design-rules"
          target="_blank"
        >
          Design Books
        </a>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center font-bold"
          id="contact"
          href="/contact"
        >
          Contact Me
        </a>

        <div className="flex justify-center gap-2 sm:gap-4 pt-4">
          <a href="https://slack.com" target="_blank">
            <img src={slack} alt="slack__logo" className="w-9 object-cover" />
          </a>

          <a href="https://github.com/Lex043/First-Hngi9-Task" target="_blank">
            <img src={github} alt="github__logo" className="w-9 object-cover" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Linktree;
