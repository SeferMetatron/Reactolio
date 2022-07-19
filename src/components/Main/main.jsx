import "./main.css";

const Main = () => {
  return (
    <div className="main-content">
      <div className="card">
        <img src="./Images/doge.png" alt="first" />
        <h3>Skills</h3>
        <p>
          Critical Thinking. New Perspectives for new Ideas. HTML, CSS, learning
          JS.
        </p>
      </div>
      <div className="card">
        <img src="./Images/nyon.png" alt="second" />
        <h3>Projects</h3>
        <p>Here is a list of my most recent projects:</p>
        <ul className="proj-list">
          <li className="proj-list-item">
            <a href="#" className="proj-link">
              Lorem
            </a>
          </li>
          <li className="proj-list-item">
            <a href="#" className="proj-link">
              Ipsum
            </a>
          </li>
          <li className="proj-list-item">
            <a href="#" class="proj-link">
              Omnifood Challenge
            </a>
          </li>
          <li className="proj-list-item">
            <a href="#" className="proj-link">
              Queries
            </a>
          </li>
        </ul>
      </div>
      <div className="card">
        <img src="./Images/raptur.jpg" alt="third" />
        <h3>Queries</h3>
        <p>
          If you have any questions, contact me at:
          <a href="https://github.com/SeferMetatron" className="q-link">
            SeferMetatron
          </a>
        </p>
      </div>
    </div>
  );
};
export default Main;
