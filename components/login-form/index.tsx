import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export type Credentials = {
  username: string;
  password: string;
};

type FormProps = {
  onSubmit: (creds: Credentials) => void;
  errorMsg: string;
};

const MyForm: React.FC<FormProps> = ({ onSubmit, errorMsg }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>();
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
        <input
          placeholder="username"
          data-testid="username"
          {...register("username", { required: true, maxLength: 20 })}
        />
        {errors.username?.type === "required" && (
          <p className="form__validationError">Username required</p>
        )}
        {errors.username?.type === "maxLength" && (
          <p className="form__validationError">Username too long</p>
        )}

        <input
          placeholder="password"
          {...register("password", {
            required: true,
            maxLength: 100,
            minLength: 5,
          })}
        />

        {errors.password?.type === "required" && (
          <p className="form__validationError">Password required</p>
        )}
        {errors.password?.type === "maxLength" && (
          <p className="form__validationError">Password too long</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="form__validationError">Password too short</p>
        )}

        <p>{errorMsg}</p>
        <input type="submit" />
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
        }
        input {
          height: 30px;
          margin-bottom: 30px;
        }
        .form__validationError {
          color: red;
          margin-top: -12px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default MyForm;
