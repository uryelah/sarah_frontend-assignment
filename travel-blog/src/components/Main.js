const Main = ({ portrait, hero }) => {
  return (
    <main>
      <header>
        <img src={hero} alt="Blog Header hero"/>
      </header>
      <section>
        <img src={portrait} alt="Blog author"/>
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