import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import TextField from "@mui/material/TextField";
import { Button } from "../../atomos/Button";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  closeModal: () => void;
};

const RegisterForm = ({ closeModal }: Props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  const registerUser = (data: Inputs) => {
    const { fullName, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setError("confirmPassword", {
        message: "Las contraseñas no coinciden",
        type: "validate",
      });
      return;
    }

    if (localStorage) {
      const localUsers = localStorage.getItem("USERS") || "{}";

      const users = JSON.parse(localUsers);

      if (users[email]) {
        setError("email", {
          message:
            "ya existe el usuario, Hubo un error. revisa tu usuario o contraseña",
          type: "validate",
        });
        return;
      }

      localStorage.setItem(
        "USERS",
        JSON.stringify({ [email]: { fullName, password } })
      );
      toast.success("Se creó el usuario exitosamente", {
        position: "top-right",
      });
      localStorage.setItem("isAuth", "true");
      //   this.setAuth(true);
      closeModal();
    }
  };

  return (
    <div className="p-8">
      <h2>Registro</h2>
      <form className="mt-4 grid gap-4" onSubmit={handleSubmit(registerUser)}>
        <TextField
          className="w-full"
          label="Nombre completo"
          size="small"
          {...register("fullName", {
            required: "El campo es obligatorio",
          })}
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
        />
        <TextField
          className="w-full"
          label="Email"
          type="email"
          size="small"
          {...register("email", {
            required: "El campo es obligatorio",
          })}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
        />
        <TextField
          className="w-full"
          label="Contraseña"
          type="password"
          size="small"
          {...register("password", {
            required: "El campo es obligatorio",
          })}
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
        />
        <TextField
          className="w-full"
          label="Confirmar contraseña"
          type="password"
          size="small"
          {...register("confirmPassword", {
            required: "El campo es obligatorio",
          })}
          error={Boolean(errors.confirmPassword?.message)}
          helperText={errors.confirmPassword?.message}
        />
        <div className="mt-8">
          <Button>Enviar</Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
