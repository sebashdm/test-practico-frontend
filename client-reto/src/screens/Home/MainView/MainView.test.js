import React from 'react';
import { screen, render } from '@testing-library/react';
import ItemsContainer from '.';

describe('ItemsContainer Component', () => {
    it('renders', () => {
        render(<ItemsContainer />);
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });

    it('Render children', () => {
        render(
            <ItemsContainer>
                <div>
                    <h3>Test Container</h3>
                </div>
            </ItemsContainer>
        );
        const titles = screen.getAllByRole('heading');
        expect(titles.length).toBe(1);
    });
});
