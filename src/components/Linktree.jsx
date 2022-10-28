import profile from "../assets/p16787843_i_h9_ab.jpg";

const Linktree = () => {
  return (
    <section className="bg-white w-full">
      <div className="flex justify-center flex-col gap-5">
        <img
          src={profile}
          alt=""
          className="rounded-full w-20 h-20 object-cover mx-auto"
          id="profile__img"
        />
        <p className="text-center mb-3" id="twitter">
          Lex_Feranmi
        </p>
        <p className="hidden" id="slack">
          Lex043
        </p>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center"
          id="twitter"
          href="https://twitter.com/Lex_Feranmi"
          target="_blank"
        >
          Twitter Link
        </a>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center"
          id="btn__zuri"
          href="https://training.zuri.team/"
          target="_blank"
        >
          Zuri Team
        </a>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center"
          id="books"
          href="http://books.zuri.team"
          target="_blank"
        >
          Zuri Books
        </a>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center"
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=Lex043"
          target="_blank"
        >
          Python Books
        </a>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center"
          id="pitch"
          href="https://background.zuri.team"
          target="_blank"
        >
          Background Check for Coders
        </a>

        <a
          className="bg-[#eaecf0] py-5 rounded-md text-center"
          id="book__design"
          href="https://books.zuri.team/design-rules"
          target="_blank"
        >
          Design Books
        </a>
      </div>
    </section>
  );
};

export default Linktree;
