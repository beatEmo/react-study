import React, { PureComponent } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./style.css";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        { id: "11", name: "你不知道的JavaScript", price: 99 },
        { id: "22", name: "明朝的那些事儿", price: 199 },
        { id: "33", name: "React高级设计", price: 97 }
      ]
    };
  }
  removeBook(id) {
    const books = [...this.state.books];
    books.splice(id, 1);
    this.setState({ books });
  }
  addNewBook() {
    const newBooks = [...this.state.books];
    newBooks.push({
      id: new Date().getTime(),
      name: "React高级设计",
      price: 97
    });
    this.setState({ books: newBooks });
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <h2>书籍列表</h2>
        <TransitionGroup component="ul">
          {books.map((item, index) => (
            <CSSTransition key={item.id} classNames="book" timeout={1000}>
              <li>
                <span>
                  {item.name}-{item.price}
                </span>
                <button onClick={(e) => this.removeBook(index)}>删除</button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>

        <button onClick={(e) => this.addNewBook()}>添加书籍</button>
      </div>
    );
  }
}

export default App;
