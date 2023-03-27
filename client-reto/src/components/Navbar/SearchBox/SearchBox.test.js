import React from "react";
import { render, fireEvent } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import SearchBox from "./index";
import { setTerm } from "../../../redux/search/searchSlice";
import thunk from "redux-thunk";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const mockStore = configureMockStore([thunk]);
describe("SearchBox", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      search: {
        term: "",
      },
    });
  });

  it("should render correctly", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBox />
      </Provider>
    );

    expect(
      getByPlaceholderText("Buscar productos, marcas y más...")
    ).toBeTruthy();
  });

  it("should update the search term in the store when the input value changes", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBox />
      </Provider>
    );

    const searchInput = getByPlaceholderText(
      "Buscar productos, marcas y más..."
    );
    fireEvent.change(searchInput, { target: { value: "iphone" } });

    const actions = store.getActions();
    const expectedAction = setTerm("iphone");
    expect(actions).toEqual([expectedAction]);
  });
});
