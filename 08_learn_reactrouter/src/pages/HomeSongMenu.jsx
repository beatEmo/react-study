import React, { PureComponent } from "react";
import { withRouter } from "../hoc";

export class HomeSongMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      songMenus: [
        { id: 111, name: "草十大" },
        { id: 112, name: "画个图华人" },
        { id: 113, name: "高度统一和" },
        { id: 114, name: "一个坑" }
      ]
    };
  }
  navigateToDetill(id) {
    const { navigate } = this.props.router;
    navigate("/detill/" + id);
  }
  render() {
    const { songMenus } = this.state;
    return (
      <div>
        <h1>HomeSongMenu Page</h1>
        {songMenus.map((songMenu) => (
          <li
            key={songMenu.id}
            onClick={(e) => this.navigateToDetill(songMenu.id)}
          >
            {songMenu.name}
          </li>
        ))}
      </div>
    );
  }
}

export default withRouter(HomeSongMenu);
