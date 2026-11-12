// import "./App.css";
import "./style.css";

function App() {
  return (
    <>
      {/* HEADER */}
      <header></header>
      {/* HOME PAGE */}
      <section id="home">
        <h2 class="red">Home Page</h2>
        <p>Welome to home !</p>
      </section>
      {/* ABOUT PAGE */}
      <section id="about">
        <h2 class="blue">About Page</h2>
        <p>Welome to about page !</p>
      </section>
      {/* CONTACT PAGE */}
      <section id="contact">
        <h2 class="green">Contact Page</h2>
        <p>Welome to contact page !</p>
      </section>
      {/* FOOTER PAGE */}
      <footer>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact Us</a>
      </footer>
    </>
  );
}

export default App;
