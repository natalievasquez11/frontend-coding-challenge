import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchProducts } from './client';
import { act } from 'react-dom/test-utils';

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

//  const fakeProduct = {
//   amount: null, brand_subtype: 'brand_sub', brand: 'brand', cannabinoids: [0,1],
//   category: null, description: 'desc', dosage: 'dosage', effects: [2, 4],
//   flavors: ['berry', 'citrus'], image_urls: ['image_url'], ingredients: ['ing1', 'ing2'], 
//   kind_subtype: 'kind_sub', kind: 'kind', custom_product_type: 'custom_prod_type',
//   name: 'name', percent_cbd: 34, percent_cbda: 35, percent_thc: 76, percent_thca: 13,
//   percent_tac: 25, product_id: 342556, product_percent_cbd: 23, 
//   product_percent_thc: 5, review_count: 12, root_subtype: 'root_sub', 
//   terpenes: [454,56], type: 'type'
// };

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
  test('product adds to cart', async () => {
    render(<App />);

    screen.debug();
  });
});

describe('App', () => {
  test('product removes from cart', () => {
    render(<App />);

  });
});