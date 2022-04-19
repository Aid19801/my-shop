// import * as React from "react";
// import { useForm } from "react-hook-form";
// import styles from "./input.module.css";

// type InputProps = {
//   name?: string;
//   label?: string;
//   required?: boolean;
//   errorMsg?: any;
//   validations?: any;
// };
// export const Input: React.FC<InputProps> = ({
//   name,
//   label,
//   required,
//   validations,
//   errorMsg,
// }) => {
//   const {
//     register,
//     formState: { errors },
//   } = useForm();

//   return (
//     <div className={styles.Input__container}>
//       <label className={styles.Input__label} htmlFor={name}>
//         {label}
//       </label>
//       <input
//         className={styles.Input__input}
//         type="text"
//       />
//       {errorMsg && <span>{errorMsg}</span>}
//     </div>
//   );
// };

// export default Input;
