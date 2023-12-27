import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Swal from "sweetalert2";

const RegisterPages = () => {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "correo@correo.com",
    password: "123456",
    name: "Vladimir Rugama",
  });

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const { name, email, password } = form;
    const ok = await register(name, email, password);
    
    if (ok !== true) {
      Swal.fire("Error", ok, "error");
    }
  };

   const todoOk = () => {
        return ( 
            form.email.length > 0 && 
            form.password.length > 0 &&
            form.name.length > 0
        ) ? true : false;
    }

  return (
    <form
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={onSubmit}
    >
      <span className="login100-form-title mb-3">
        Chat - Registro
      </span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <Link to={"/auth/login"} className="txt1">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          className="login100-form-btn"
          type="submit"
          disabled={!todoOk()}
        >
          Crear cuenta
        </button>
      </div>
    </form>
  );
};

export default RegisterPages;
