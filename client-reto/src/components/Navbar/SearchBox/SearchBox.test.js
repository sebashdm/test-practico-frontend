import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import SearchBox from "./index";
import { fecthAsyncItems } from "../../../redux/items/itemsSlice";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureMockStore([thunk]);
describe("SearchBox", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      items: {
        items: [],
        selectedItem: {},
        loading: null,
      },
    });
  });

  it("should render correctly", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchBox />
        </BrowserRouter>
      </Provider>
    );

    expect(
      getByPlaceholderText("Buscar productos, marcas y más...")
    ).toBeTruthy();
  });

  it("should dispatch fetchAsyncItems when the form is submitted with a search term", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchBox />
        </BrowserRouter>
      </Provider>
    );

    const searchInput = getByPlaceholderText(
      "Buscar productos, marcas y más..."
    );
    fireEvent.change(searchInput, { target: { value: "iphone" } });
    fireEvent.submit(getByTestId("search-form"));

    const expectedAction = {
      type: "items/fecthAsyncItems/pending",
      meta: {
        arg: "iphone",
        requestId: expect.any(String),
        requestStatus: "pending",
      },
    };

    const actions = store.getActions();
    expect(actions).toEqual([expectedAction]);
  });
});
