import * as React from "react";
import styles from "./login.module.css";

type LoginFormProps = {
  //
};
export const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={() => null}
      />
      <input type="password" name="password" onChange={() => null} />
    </form>
  );
};

export default LoginForm;