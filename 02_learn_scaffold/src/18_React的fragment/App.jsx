import React, { Fragment, PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      books: [
        { name: "明朝的哪些事儿", price: 23, counter: 1 },
        { name: "你不知道的JS", price: 98, counter: 1 },
        { name: "JavaScript修仙秘籍", price: 77, counter: 1 }
      ]
    };
  }
  render() {
    const { books } = this.state;
    return (
      // <>
      //   <header>标题</header>
      //   <p>内容</p>
      // </>
      <div>
        {books.map((book) => (
          <Fragment key={book.name}>
            <span>{book.name}</span>
            <span>{book.price}</span>
          </Fragment>
        ))}
      </div>
    );
  }
}

export default App;
