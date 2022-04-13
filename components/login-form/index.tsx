import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./login.module.css";

type Inputs = {
  username: string;
  password: string;
};

type LoginFormProps = {
  //
};
export const LoginForm: React.FC<LoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: true })} />
        {errors.username && <span>This field is required</span>}
        <input {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default LoginForm;
