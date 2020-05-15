import React from "react";
import About from "./Navbar";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      initialArr: "",
      quotesArr: [
        "There is nothing permanent except change.",
        "There is no charm equal to tenderness of heart.",
        "Learning never exhausts the mind.",
        "Honesty is the first chapter in the book of wisdom.",
        "I have not failed. I've just found 10,000 ways that won't work.",
        "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        "If opportunity doesn't knock, build a door.",
      ],
      randomClassnames: [
        "tile is-child notification is-info",
        "tile is-child notification  is-primary",
      ],
    };
  }
  componentDidMount() {
    this.timeout = setTimeout((quotesArr) => {
      this.randomArrGen((quotesArr = this.state.quotesArr));
    }, 1000);
  }
  componentWillUpdate() {
    this.timeout = setTimeout((quotesArr) => {
      this.randomArrGen((quotesArr = this.state.quotesArr));
      this.state.randomClassnames.reverse();
    }, 5000);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  randomArrGen = (quotesArr) => {
    return this.setState({
      ...this.state,
      initialArr:
        quotesArr[Math.floor(Math.random() * (quotesArr.length - 0) + 0)],
    });
  };
  render() {
    return (
      <div className="App">
        <About />
        <div class="tile is-parent">
          <article class={this.state.randomClassnames[0]}>
            <p class="title">Aman Sharma Fullstack Developer</p>
            <hr />
            {this.state.initialArr !== null ? (
              <div
                class="content"
                style={{ fontFamily: " cursive", fontSize: "30px" }}
              >
                {this.state.initialArr}
              </div>
            ) : null}
          </article>
        </div>
      </div>
    );
  }
}

export default Homepage;
