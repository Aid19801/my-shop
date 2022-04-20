import * as React from "react";
import useUser from "../lib/useUser";
import Layout from "../components/layout";
import Form, { Credentials } from "../components/login-form";
import fetchJson, { FetchError } from "../lib/fetchJson";
import PageTitle from "../components/page-title";

export default function Login() {
  const { mutateUser } = useUser({
    redirectTo: "/categories",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const actionLoginRequest = async ({ username, password }: Credentials) => {
    const body = {
      username,
      password,
    };

    setIsLoading(true);
    try {
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof FetchError) {
        setErrorMsg(
          "Oh no! There was a problem with your logins. Please try later or contact Support."
        );
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };
  return (
    <Layout>
      <PageTitle text="Login" />
      <div className="login">
        {isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <Form onSubmit={actionLoginRequest} errorMsg={errorMsg} />
        )}
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </Layout>
  );
}
