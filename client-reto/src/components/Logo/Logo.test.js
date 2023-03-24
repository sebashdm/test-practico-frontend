import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Logo from './index';


describe('Logo', () => {
    test('renders logo image', () => {
        render(
        <BrowserRouter>
          <Logo />
        </BrowserRouter>
      );
  
      const logoImg = screen.getByAltText('Logo Mercado Libre');
      expect(logoImg).toBeInTheDocument();
    });
  
    test('contains link to homepage', () => {
        render(
        <BrowserRouter>
          <Logo />
        </BrowserRouter>
      );
  
      const linkElement = screen.getByRole('link', { name: /volver al inicio/i });
      expect(linkElement).toHaveAttribute('href', '/');
    });
  });