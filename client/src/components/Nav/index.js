import React, {Component} from "react";
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
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <div className="total-likes" style={{color: "white"}}>Total Likes: {this.calcTotalLikes()}</div>
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
