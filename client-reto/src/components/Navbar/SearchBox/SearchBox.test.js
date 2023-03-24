import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../../features/store';
import SearchBar from './index';

describe('Componente <Searchbar />', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
              <Provider store={store}>
                <SearchBar />
              </Provider>
            </BrowserRouter>
        );
    });

    it('Renders correctly', () => {
        const form = screen.getByTestId('search-form');
        expect(form).toBeInTheDocument();
    });

    it('renders placeholder text', () => {
        const input = screen.getByPlaceholderText('Buscar productos, marcas y más...');
        expect(input).toBeInTheDocument();
    });


    it('Contains a button', () => {
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('can type in the input text', () => {
        const input = screen.getByPlaceholderText('Buscar productos, marcas y más...');
        userEvent.type(input, 'ps5');
        expect(input).toHaveValue('ps5');
    });

    it('Can press enter to send', () => {
        const input = screen.getByPlaceholderText('Buscar productos, marcas y más...');
        const form = screen.getByTestId('search-form');
        const mockFunction = jest.fn();
        form.onsubmit = mockFunction;
        userEvent.type(input, '{enter}');
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    it('Can click to send', () => {
        const button = screen.getByRole('button', { name: 'Buscar' });
        const form = screen.getByTestId('search-form');
        const mockFunction = jest.fn();
        form.onsubmit = mockFunction;
        userEvent.click(button);
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    it('url change before send', () => {
        const input = screen.getByPlaceholderText('Buscar productos, marcas y más...');
        userEvent.type(input, 'ps5');
        userEvent.type(input, '{enter}');
        expect(window.location.pathname).toEqual('/items');
        expect(window.location.search).toEqual('?search=ps5');
    });
});
