import React, { useState, useRef } from "react";
import "./index.scss";
const index = () => {
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(false);
  const menu = useRef();
  console.log(menu);
  const toogleMenu=()=>{
    console.log(menu.current);
    menu.current.classList.toggle("d-none");
  };

  return (
    <> 
      <section className="test">
        <div className="row mt-5 mb-5">
          <button
            className={` ${show ? "btn-danger" : "btn-success"} btn mx-5 w-25 `}
            onClick={() => {
              toogleMenu();

              setShow((e) => !e);
            }}
          >
            {show ? "hide" : "show"}
          </button>
          <button
            className="btn mx-5 btn-danger w-25"
            onClick={() => setShow(false)}
          >
            clear
          </button>
          <button
            className="btn mx-5 btn-success w-25"
            onClick={() => setShow(true)}
          >
            add
          </button>
        </div>

        <div ref={menu} className={` row ${show ? "d-block" : "d-none"}`}>
          <div className="col-lg-6">
            <h1>{number}</h1>
          </div>

          <button
            className="btn btn-success"
            onClick={() => setNumber(number + 1)}
          >
            +
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setNumber(number - 1)}
          >
            -
          </button>
        </div>
      </section>
    </>
  );
};

export default index;
