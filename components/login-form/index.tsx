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

export const Form: React.FC<FormProps> = ({ onSubmit, errorMsg }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Credentials>();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
        <input
          placeholder="username"
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
            maxLength: 20,
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
    </>
  );
};

export default Form;
