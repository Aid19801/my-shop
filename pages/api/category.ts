import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export type CategoryType = {
    category: "jewelery" | "electronics" | "men's clothing" | "women's clothing";
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
}

export default withIronSessionApiRoute(categoryRoute, sessionOptions);

async function categoryRoute(
  req: NextApiRequest,
  res: NextApiResponse<CategoryType[] | []>
) {
  const user = req.session.user;

  if (!user || user.isLoggedIn === false) {
    res.status(401).end();
    return;
  }

  try {
    const resp = await fetch(
      `https://fakestoreapi.com/products/category/${req.query.catName}`
    );
    const category = await resp.json();
    res.json(category);
  } catch (error) {
    res.status(200).json([]);
  }
}
