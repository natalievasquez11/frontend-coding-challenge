import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchProducts } from './client';

/**
 * We should test that following requirements are met.
 *
 * 1. Customer should be presented with a list of products on app load.
 *
 * 2. When a customer types in a search box some text, the product
 *    results should filter to display only items with a name
 *    or description matching that text.
 *
 * 3. Customer should be able to add a product to their cart.
 *
 * 4. Customer should be able to remove a product from their cart.
 *
 */

 describe('App', () => {
  test('products presented on app load', () => {
    render(<App />);

  });
});

describe('App', () => {
  test('user search input filters & presents products that matching name and/or description', () => {
    render(<App />);

  });
});

describe('App', () => {
  test('product adds to cart', () => {
    render(<App />);

  });
});

describe('App', () => {
  test('product removes from cart', () => {
    render(<App />);

  });
});