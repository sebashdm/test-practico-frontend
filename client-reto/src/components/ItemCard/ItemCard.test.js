import React from "react";
import { render } from "@testing-library/react";
import ItemCard from "./index";
import { BrowserRouter } from "react-router-dom";

const item = {
  address: "Calle 34 # 64- 110",
  picture: "http://example.com/image.png",
  title: "Test Item",
  price: {
    currency: "ARS",
    amount: 10.99,
    decimals: 0,
  },
  free_shipping: false,
  id: "abc123",
};

describe("ItemCard", () => {
  test("renders with correct data", () => {
    const { getByAltText, getByText } = render(
      <BrowserRouter>
        <ItemCard item={item} />
      </BrowserRouter>
    );

    const itemImage = getByAltText(item.title);
    expect(itemImage).toBeInTheDocument();
    expect(itemImage).toHaveAttribute("src", item.picture);

    const itemPrice = getByText(
      `$${item.price.amount.toLocaleString("es-AR")}`
    );
    expect(itemPrice).toBeInTheDocument();

    const itemTitleLink = getByText(item.title).closest("a");
    expect(itemTitleLink).toHaveAttribute("href", `/items/${item.id}`);

    const itemAddress = getByText(item.address);
    expect(itemAddress).toBeInTheDocument();
  });
});
