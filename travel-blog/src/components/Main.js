import '../App.scss';

const Main = ({ portrait, hero }) => {
  return (
    <main className="main">
      <header className="header">
        <img src={hero} alt="Blog Header hero"/>
      </header>
      <section className="content">
        <div className="portrait" >
          <img src={portrait} alt="Blog author"/>
        </div>
        <article>
          <h1>
            A little about me
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore vel odit voluptate, veritatis rem quas temporibus, dolores explicabo esse nemo. Necessitatibus totam numquam praesentium voluptates ducimus. Itaque, architecto quaerat.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Main;