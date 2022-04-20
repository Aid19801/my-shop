import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export type ProductType = {
    category: "jewelery" | "electronics" | "men's clothing" | "women's clothing";
    description: string;
    title: string;
    price: number;
    image: string;
    id: number;
    rating: {
        rate: number;
        count: number;
    };
    map?: any;
    quantity?: number | null;
}

export default withIronSessionApiRoute(categoryRoute, sessionOptions);

async function categoryRoute(
  req: NextApiRequest,
  res: NextApiResponse<ProductType[] | []>
) {
  const user = req.session.user;

  if (!user || user.isLoggedIn === false) {
    res.status(401).end();
    return;
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

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
