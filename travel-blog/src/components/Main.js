const Main = ({ portrait, hero }) => {
  return (
    <main className="main">
      <header className="main__header">
        <img src={hero} alt="Blog Header hero"/>
      </header>
      <section className="main__content">
        <div className="main__portrait">
          <div className="main__headshot">
            <img src={portrait} alt="Blog author"/>
          </div>
        </div>
        <article className="article">
          <h1 className="article__title">
            A little about me
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore vel odit voluptate, veritatis rem quas temporibus, dolores explicabo esse nemo. Necessitatibus totam numquam praesentium voluptates ducimus. Itaque, architecto quaerat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore vel odit voluptate, veritatis rem quas temporibus, dolores explicabo esse nemo. Necessitatibus totam numquam praesentium voluptates ducimus. Itaque, architecto quaerat.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore vel odit voluptate, veritatis rem quas temporibus, dolores explicabo esse nemo. Necessitatibus totam numquam praesentium voluptates ducimus. Itaque, architecto quaerat.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore vel odit voluptate, veritatis rem quas temporibus, dolores explicabo esse nemo. Necessitatibus totam numquam praesentium voluptates ducimus. Itaque, architecto quaerat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore vel odit voluptate, veritatis rem quas temporibus, dolores explicabo esse nemo. Necessitatibus totam numquam praesentium voluptates ducimus. Itaque, architecto quaerat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore vel odit voluptate, veritatis rem quas temporibus, dolores explicabo esse nemo. Necessitatibus totam numquam praesentium voluptates ducimus. Itaque, architecto quaerat.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore vel odit voluptate, veritatis rem quas temporibus, dolores explicabo esse nemo. Necessitatibus totam numquam praesentium voluptates ducimus. Itaque, architecto quaerat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore vel odit voluptate, veritatis rem quas temporibus, dolores explicabo esse nemo. Necessitatibus totam numquam praesentium voluptates ducimus. Itaque, architecto quaerat.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore vel odit voluptate, veritatis rem quas temporibus, dolores explicabo esse nemo. Necessitatibus totam numquam praesentium voluptates ducimus. Itaque, architecto quaerat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore vel odit voluptate, veritatis rem quas temporibus, dolores explicabo esse nemo. Necessitatibus totam numquam praesentium voluptates ducimus. Itaque, architecto quaerat.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Main;