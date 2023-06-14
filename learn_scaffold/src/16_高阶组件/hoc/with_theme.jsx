import ThemeContext from "../context/ThemeContext";

function withTheme(OriginComponent) {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {(value) => <OriginComponent {...value} {...props} />}
      </ThemeContext.Consumer>
    );
  };
}

export default withTheme;
