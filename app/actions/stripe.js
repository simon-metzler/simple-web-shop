"use server";

import { headers } from "next/headers";

import { stripe } from "../../lib/stripe";

export async function fetchClientSecret({ p_id }) {
  const prices = [
    { id: 1, price: "price_1RBFvABTmGxjAB2izY6md2Aw" },
    { id: 2, price: "price_1RBFvgBTmGxjAB2iQWaiQ55d" },
    { id: 3, price: "price_1RBFy1BTmGxjAB2iIWwW7YtA" },
  ];

  const foundPrice = prices.find((p) => p.id === p_id);
  const price = foundPrice?.price;

  if (!price) {
    throw new Error("Price not found");
  }

  const origin = (await headers()).get("origin");

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of
        // the product you want to sell
        price: price,
        quantity: 1,
      },
    ],
    mode: "payment",
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  return session.client_secret;
}
