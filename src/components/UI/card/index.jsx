import React from "react";
import "./style.scss";

const index = (data) => {
  const {
    user: { avatar, email, first_name, status },
  } = data;

  return (
    <>
      <div className="main_section_card">
        <img
          className="main_section_card_img"
          src={avatar}
          alt="picsum photos"
        />
        <h4 className="main_section_card_h4">{first_name}</h4>
        <p className="main_section_card_p">{email}</p>
        <button className={`btn ${status ? "btn_success" : "btn_danger" }`} >
        {status ? "ONLINE" : "OFFLINE"}
        </button>
      </div>
    </>
  );
};

export default index;
