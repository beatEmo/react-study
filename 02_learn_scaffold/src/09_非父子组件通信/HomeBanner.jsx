import ThemeContext from "./theme-context";

function HomeBanner() {
  return (
    <div>
      {/* 函数组件中使用context共享数据 */}
      <ThemeContext.Consumer>
        {(value) => {
          return <h2>dfafa: {value.age}</h2>;
        }}
      </ThemeContext.Consumer>
    </div>
  );
}

export default HomeBanner;
