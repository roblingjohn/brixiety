import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavButtons extends Component {
  state = {
    comic: {
      id: parseInt(this.props.id),
    },
  };

  componentDidMount = () => {
    this.setState({
      comic: {
        id: this.props.id,
      },
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.comic.id) {
      return {
        comic: {
          id: props.id,
        },
      };
    }
    return null;
  }

  componentDidUpdate = (nextProps) => {
    if (nextProps.id !== this.props.id) {
      this.setState({
        comic: {
          id: parseInt(this.props.id),
        },
      });
    }
  };

  handlePrevious = () => {
    this.setState({
      comic: {
        id: parseInt(this.currentComicId) - 1,
      },
    });
  };

  handleNext = () => {
    this.setState({
      comic: {
        id: parseInt(this.currentComicId) + 1,
      },
    });
  };

  currentComicId = this.state.comic.id;

  render() {
    return (
      <div>
        <h2>NavButtons: {this.state.comic.id}</h2>
        <Link to="/comic/1" id={1}>
          <button>Oldest</button>
        </Link>
        <Link
          to={`/comic/${this.state.comic.id - 1}`}
          id={this.state.comic.id - 1}
        >
          <button>Previous</button>
        </Link>
        <Link
          to={`/comic/${parseInt(this.state.comic.id) + 1}`}
          id={parseInt(this.state.comic.id) + 1}
        >
          <button>Next</button>
        </Link>
        <Link to={`/comic/100`}>
          <button>Newest</button>
        </Link>
      </div>
    );
  }
}

export default NavButtons;
