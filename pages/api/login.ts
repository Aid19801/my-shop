require("isomorphic-fetch");
import type { User } from "./user";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.body;
  let myHeaders = new Headers();
  myHeaders.append(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  let urlencoded = new URLSearchParams();
  urlencoded.append("username", "mor_2314");
  urlencoded.append("password", "83r5^_");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
  };

  try {
    const resp = await fetch(
      "https://fakestoreapi.com/auth/login",
      requestOptions
    );

    const { token } = await resp.json();
    const user = {
      token,
      isLoggedIn: true,
      username,
      avatarUrl:
        "https://pbs.twimg.com/profile_images/1511286110823104515/Hp2VkmKh_400x400.jpg",
    } as User;
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }

  // const { username } = await req.body;

  // try {
  //   const {
  //     data: { login, avatar_url },
  //   } = await octokit.rest.users.getByUsername({ username });

  //   const user = { isLoggedIn: true, login, avatarUrl: avatar_url } as User;
  //   req.session.user = user;
  //   await req.session.save();
  //   res.json(user);
  // } catch (error) {
  //   res.status(500).json({ message: (error as Error).message });
  // }
}
