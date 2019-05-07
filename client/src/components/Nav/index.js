import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class Nav extends Component {
  calcTotalLikes() {
    return this.props.books.reduce((totalCount, book) => {
      return totalCount + book.likes;
    }, 0);
  }
  render() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        React Reading List
      </Link>
      <div className="nav navbar-nav navbar-right text-white total-likes">
        Total Likes: {this.calcTotalLikes()}
      </div>
    </div>
    </nav>
  );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Nav)
