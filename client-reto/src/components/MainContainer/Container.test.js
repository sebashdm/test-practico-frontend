import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from '.';

describe('Container', () => {
    it('renders children', () => {
      render(
        <Container>
          <div>Test</div>
        </Container>
      );
  
      expect(screen.getByText('Test')).toBeInTheDocument();
    });
  });