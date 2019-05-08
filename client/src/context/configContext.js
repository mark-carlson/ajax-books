import React, {Component, createContext} from 'react';

const {Provider, Consumer } = createContext();

class ConfigProvider extends Component {
    state = {
        library: {
            books: [],
            incrementLikes: id => {
                const book = (this.state.library.books.find(search => search.id === id)) ? this.state.library.books.findIndex(search => search.id === id) : null;
                if (book === null) {
                    const {books} = this.state.library;
                    books.push({
                        id,
                        likes: 1
                    });
                    this.setState({
                        books
                    })
                } else {
                    const newState = [
                        ...this.state.library.books.slice(0, book),
                        {
                            id,
                            likes: this.state.library.books[book].likes + 1
                        },
                        ...this.state.library.books(book + 1)
                    ];
                    this.setState({
                        library: {
                            ...this.state.library,
                            books: newState
                        }
                    })
                }
            }
        }
    }

    render() {
        return (
            <Provider
                value={{
                    library: this.state.library
                }}>
                {this.props.children}
                </Provider>
        )
    }
}

export { ConfigProvider };
export default Consumer;