import React, {Component, createContext} from 'react';
// Provider and Consumer are connected through their "parent" context
const { Provider, Consumer } = createContext();

// Provider will be exported wrapped in ConfigProvider component.
class ConfigProvider extends Component {
    state = {
        books: [],
        incrementLikes: (id) => {
            const book = (this.state.books.find(search => search.id === id)) ? this.state.books.findIndex(search => search.id === id) : null;
            if (book === null) {
                const {books} = this.state;
                books.push({
                    id,
                    likes: 1
                });
                this.setState({
                    books
                });
            } else {
                const newState = [
                    ...this.state.books.slice(0, book),
                    {
                        id,
                        likes: this.state.books[book].likes + 1
                    },
                    ...this.state.books.slice(book + 1)
                ];
                this.setState({
                    books: newState
                });
            }
        },
        deleteBook: id => {
            const newState = this.state.books.filter(search => search.id !== id);
            this.setState({
                books: newState
            });
        }
    };

    render() {
        return (
            <Provider
                value={{
                    library: this.state
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { ConfigProvider };

export default Consumer;