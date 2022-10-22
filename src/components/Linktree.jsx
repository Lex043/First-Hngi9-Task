import profile from "../assets/p16787843_i_h9_ab.jpg";

const Linktree = () => {
  return (
    <section className="bg-white w-full">
      <div className="flex justify-center flex-col gap-5">
        {/*profile__img  */}
        <img
          src={profile}
          alt=""
          className="rounded-full w-20 h-20 object-cover mx-auto"
        />

        {/* twitterid */}
        <p className="text-center mb-3">Lex_Feranmi</p>

        {/* slack id */}
        <p className="hidden">Lex043</p>

        {/* twitter link */}
        <button className="bg-[#eaecf0] py-5 rounded-md">
          <a href="https://twitter.com/Lex_Feranmi" target="_blank">
            Twitter Link
          </a>
        </button>

        {/* btn__zuri */}
        <button className="bg-[#eaecf0] py-5 rounded-md">
          <a href="https://training.zuri.team/" target="_blank">
            Zuri Team
          </a>
        </button>

        {/* books */}
        <button className="bg-[#eaecf0] py-5 rounded-md">
          <a href="http://books.zuri.team" target="_blank">
            Zuri Books
          </a>
        </button>

        {/* book__python */}
        <button className="bg-[#eaecf0] py-5 rounded-md">
          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=Lex043"
            target="_blank"
          >
            Python Books
          </a>
        </button>

        {/* pitch */}
        <button className="bg-[#eaecf0] py-5 rounded-md">
          <a href="https://background.zuri.team" target="_blank">
            Background Checkers for Coders
          </a>
        </button>

        {/* book__design */}
        <button className="bg-[#eaecf0] py-5 rounded-md">
          <a href="https://books.zuri.team/design-rules" target="_blank">
            Design Books
          </a>
        </button>
      </div>
    </section>
  );
};

export default Linktree;
