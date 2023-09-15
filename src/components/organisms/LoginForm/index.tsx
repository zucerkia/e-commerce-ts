import React from "react";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

import { Button } from "../../atomos/Button";

type Inputs = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  const loginUser = (data: Inputs) => {
    const { email, password } = data;

    if (localStorage) {
      const user = JSON.parse(localStorage.getItem("USERS") || "{}");

      if (!user[email]) {
        setError("email", {
          message: "no hay usuario registrado con este email",
          type: "validate",
        });
        return;
      }

      if (password !== user[email].password) {
        setError("password", {
          message: "la contraseña no es correcta",
          type: "validate",
        });
        return;
      }

      localStorage.setItem("isAuth", "true");
      //   this.setAuth(true);
    }
  };

  return (
    <div className="p-8">
      <h2 className="mb-4">Login</h2>
      <form action="" className="grid gap-4" onSubmit={handleSubmit(loginUser)}>
        <TextField
          label="Email"
          {...register("email", {
            required: "Este campo es requerido",
          })}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          size="small"
        />
        <TextField
          label="contraseña"
          type="password"
          {...register("password", {
            required: "Este campo es requerido",
          })}
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          size="small"
        />
        <div className="mt-8">
          <Button>Enviar</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
