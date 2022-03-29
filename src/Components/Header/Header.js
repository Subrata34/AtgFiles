
import React from "react";
import { Button } from "react-bootstrap-v5";
import {FiSearch} from "react-icons/fi"

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h3>ATG WORLD</h3>
      </div>
      <div style={{marginRight:"290px",marginLeft:"320px"}}>
        <input
          type="text"
          style={{ width: "60%", justifyContent: "center",marginTop:"5px" }}
        />
        <Button style={{height:"30px",marginTop:"0px",paddingTop:"0px",borderTop:"0px"}}> <FiSearch/></Button>
       
      </div>
      <div>
        <div>
            <div style={{display:"flex"}}>
          <h4>create Account :</h4>
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              It's free
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
