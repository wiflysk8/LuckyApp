import React from "react";

const Fav = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div>
      <p>{user.mascota[1]}</p>
    </div>
  );
};

export default Fav;
