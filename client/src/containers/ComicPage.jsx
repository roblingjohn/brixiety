import React, { Component } from "react";
import ComicDisplay from "../components/ComicDisplay";

class ComicPage extends Component {
  state = {
    comic: {
      id: parseInt(this.props.match.params.id),
    },
  };

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.id !== state.comic.id) {
      return {
        comic: {
          id: props.match.params.id,
        },
      };
    }
    return null;
  }

  componentDidUpdate = (nextProps) => {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        comic: {
          id: parseInt(this.props.match.params.id),
        },
      });
    }
  };

  componentDidMount() {
    if (this.props.match.params.id !== this.state.comic.id) {
      this.setState({
        comic: {
          id: parseInt(this.props.match.params.id),
        },
      });
    }
  }

  comicId = this.state.comic.id;

  render() {
    return (
      <div>
        <ComicDisplay id={this.state.comic.id} />
        {this.state.comic.id}
      </div>
    );
  }
}

export default ComicPage;
