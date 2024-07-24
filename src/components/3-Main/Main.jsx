import "./Main.css";

const Main = () => {
  return (
    <main className="flex">
      <section className="left-section flex">
        <button className="active">all projects</button>
        <button>html and css</button>
        <button>javascipt</button>
        <button>react & Mui</button>
        <button>node & express</button>
      </section>

      <section className="flex right-section">
        {["aa", "bb", "cc", "dd"].map((item) => {
          return (
            <article key={item} className="card">
              <img width={266} src="/1.jpg" alt="" />

              <div className="box" style={{ width: "266px" }}>
                <h1 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, quaerat.
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github-square"></div>
                  </div>

                  <a className="link flex" href="#more">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
