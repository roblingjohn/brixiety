import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import comicData from "../assets/comicData/comicData"

class NavButtons extends Component {
  state = {
    comic: {
      id: parseInt(this.props.id),
    },
  };

  componentDidMount = () => {
    this.setState(() => {
      return {
        comic: {
          id: this.props.id,
        },
      };
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
      <Row className="navRow">
        <Col className="navCol">
          {this.state.comic.id > 1 && (
            <div>
              <Link to="/comic/1" id={1}>
                <button className="navButton">Oldest</button>
              </Link>
              <Link
                to={`/comic/${this.state.comic.id - 1}`}
                id={this.state.comic.id - 1}
              >
                <button className="navButton">Older</button>
              </Link>{" "}
            </div>
          )}
        </Col>

        <Col>
          {this.state.comic.id < comicData.length && (
            <div>
              <Link
                to={`/comic/${parseInt(this.state.comic.id) + 1}`}
                id={parseInt(this.state.comic.id) + 1}
              >
                <button className="navButton">Newer</button>
              </Link>
              <Link to={`/comic/${comicData.length}`}>
                <button className="navButton">Newest</button>
              </Link>
            </div>
          )}
        </Col>
      </Row>
    );
  }
}

export default NavButtons;
