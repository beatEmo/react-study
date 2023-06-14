import React, { PureComponent } from "react";

import { WwButton, WwwDiv, ProfileWrapper } from "./style";
import { ThemeProvider } from "styled-components";

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <WwButton>
          <span>测试一</span>
        </WwButton>
        <WwwDiv>
          <span>测试二</span>
        </WwwDiv>
        <ThemeProvider theme={{ color: "red", fontSize: "20px" }}>
          <ProfileWrapper>倒就倒</ProfileWrapper>
        </ThemeProvider>
      </div>
    );
  }
}

export default Home;
