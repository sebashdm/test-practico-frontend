import { screen, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Home from './index';

const MockHome = () => (
    <HelmetProvider>
        <Home />
    </HelmetProvider>
);

describe('Home screen', () => {
    beforeEach(() => {
        render(<MockHome />);
    });

    it('Renders properly', () => {
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });

});
