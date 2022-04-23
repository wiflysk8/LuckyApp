import React from "react";
import Nav from "../../shared/components/Nav/Nav";
import { getCookieUtil } from "../../shared/utils/getCookieUtil";

export default function ProfilePage() {
  const stringUser = getCookieUtil("user");
  const user = JSON.parse(stringUser ? stringUser : "{}");

  return (
    <div>
      <h1>PROFILE PAGE</h1>
      Hello {user.name}
      <Nav />
    </div>
  );
}
