import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavButtons extends Component {
    currentComicId = this.props.comicId 

    render() {
        return (
            <div>
                <Link to="/comic/1"><button>Oldest</button></Link>
                <Link to={`/comic/${this.currentComicId-1}`}><button>Previous</button></Link>
                <Link to={`/comic/${this.currentComicId+1}`}><button>Next</button></Link>
                <Link><button>Newest</button></Link>

            </div>
        );
    }
}

export default NavButtons;