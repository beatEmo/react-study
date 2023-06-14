import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        { title: "你不知道的JavaScript", price: "99", count: 1 },
        { title: "唐诗宋词", price: "55", count: 1 },
        { title: "Nust实战", price: "199", count: 1 },
        { title: "软件设计", price: "90", count: 1 }
      ]
    };
  }

  addBook() {
    // 继承自Component时 以下做法可以让react重新渲染页面
    // 注意 这里变动的数据books 是同一个东西 它指向的内存地址是一样的
    // 若继承自PurComponent 页面就没法变化了 因为变动的books没有发生变化
    // this.state.books.push({
    //   title: "jingpinmei",
    //   price: "990",
    //   count: 5
    // });
    // this.setState({ books: this.state.books });

    // 浅拷贝一层books数组 无需管books里面有多么复杂
    // 数据变化后 PurComponent比较的仅仅是books 发现前后books不一样了（虽然它们指向的是同一个对象地址）
    const books = [...this.state.books];
    books.push({ title: "jingpinmei", price: "990", count: 5 });
    this.setState({ books });
  }

  addBookCount(index) {
    const books = [...this.state.books];
    books[index].count++;
    this.setState({ books });
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <h1>书籍列表</h1>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <h4>
                name:{book.title},price:{book.price},counter:{book.count}
              </h4>
              <button onClick={(e) => this.addBookCount(index)}>+1</button>
            </li>
          ))}
        </ul>
        <button onClick={(e) => this.addBook()}>增加书籍</button>
      </div>
    );
  }
}

export default App;
