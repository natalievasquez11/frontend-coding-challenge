import { render, screen, act, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchProducts, Product } from './client';
import { DefaultRequestBody, rest } from 'msw';
import { setupServer } from 'msw/node';



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

const fakeProducts:Product[] = [
  {  amount: null, brand_subtype: 'fake-brand-subtype1', brand: 'fake-brand1', cannabinoids: [], category: null,
    description: 'skunky', dosage: '', effects: [], flavors: [], image_urls: [],
    ingredients: [], kind_subtype: '', kind: '', custom_product_type: '',
    name: 'fake-product-1', percent_cbd: 2, percent_cbda: 2, percent_thc: 2, percent_thca: 2,
    percent_tac: 2, product_id: 1, product_percent_cbd: 2, product_percent_thc: 2,
    review_count: 2, root_subtype: '', terpenes: [], type: ''
  }, 
  {  amount: null, brand_subtype: 'fake-brand-subtype2', brand: 'fake-brand2', cannabinoids: [], category: null,
  description: 'skunky', dosage: '', effects: [], flavors: [], image_urls: [],
  ingredients: [], kind_subtype: '', kind: '', custom_product_type: '',
  name: 'fake-product-2', percent_cbd: 2, percent_cbda: 2, percent_thc: 2, percent_thca: 2,
  percent_tac: 2, product_id: 2, product_percent_cbd: 2, product_percent_thc: 2,
  review_count: 2, root_subtype: '', terpenes: [], type: ''
  }, 
  {  amount: null, brand_subtype: 'fake-brand-subtype1', brand: 'fake-brand1', cannabinoids: [], category: null,
  description: 'skunky', dosage: '', effects: [], flavors: [], image_urls: [],
  ingredients: [], kind_subtype: '', kind: '', custom_product_type: '',
  name: 'fake-product-3', percent_cbd: 2, percent_cbda: 2, percent_thc: 2, percent_thca: 2,
  percent_tac: 2, product_id: 3, product_percent_cbd: 2, product_percent_thc: 2,
  review_count: 2, root_subtype: '', terpenes: [], type: ''
  }
];

const productResponse = rest.get<DefaultRequestBody, Product[]>('../public/data/products.json', (req, res, ctx) => {
    return res(ctx.json(fakeProducts))
});

const handlers = [productResponse]

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('products presented on app load', async () => { 
  render(<App />);
  const productItem = await screen.findByTestId('product-item');
  expect(productItem).toBeVisible();
});


// describe('App', () => {
//   test('user search input filters & presents products that matching name and/or description', () => {
//     render(<App />);

//   });
// });

// describe('App', () => {
//   test('product adds to cart', () => {
//     render(<App />);

//   });
// });

// describe('App', () => {
//   test('product removes from cart', () => {
//     render(<App />);

//   });
// });