import React, { PureComponent } from "react";
import { withRouter } from "../hoc";

export class SongDetill extends PureComponent {
  render() {
    const { router } = this.props;
    const { params } = router;
    return <div>SongDetill: {params.id}</div>;
  }
}

export default withRouter(SongDetill);
