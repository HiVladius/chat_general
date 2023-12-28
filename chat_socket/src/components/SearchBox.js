import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Logout } from "@mui/icons-material";

function SearchBox() {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4>{auth.name}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button
            className="btn text-danger"
            onClick={logout}
          >
            Salir
            <span style={{ marginLeft: "5px" }}>
              <Logout />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
