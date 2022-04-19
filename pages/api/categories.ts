import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export type Categories =
  | ["electronics", "jewelry", "men's clothing", "women's clothing"]
  | [];

export default withIronSessionApiRoute(categoriesRoute, sessionOptions);

async function categoriesRoute(
  req: NextApiRequest,
  res: NextApiResponse<Categories>
) {
  const user = req.session.user;

  if (!user || user.isLoggedIn === false) {
    res.status(401).end();
    return;
  }

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  try {
    const resp = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await resp.json();
    res.json(categories);
  } catch (error) {
    res.status(200).json([]);
  }
}
