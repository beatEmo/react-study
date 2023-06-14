import React, { PureComponent } from "react";
import profilestyle from "./Profile.module.css";

export class Profile extends PureComponent {
  render() {
    return <div className={profilestyle.title}>Profile</div>;
  }
}

export default Profile;
