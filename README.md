# Fitness shop on React

## Demo

[Demo Link](https://fitness-shop-test.netlify.app/)

## Description

There are two pages implemented in this project, the first is the main static page, the second is the product page, a dynamic page.

- There are two dynamic blocks on the main page. These are recommended products and reviews, both of these blocks represent slider, and slider elements are generated automatically depending on the API. The data for the blocks comes from the JSON file of the project, but it can also be a database.
- With React Router, when a user clicks on a product, they are directed to the selected product page, where they can get more information about the product, such as: product photos, description, reviews (the slider component for reviews is reused, but the data for each product is different). Also on the product page you can click "more" and see other products of the store, and go to the page of suggested products.

## To start the project locally

_run_

```bsh
 npm i
```

```bsh
 npm run build
```

```bsh
 npm run preview
```

## Technologies

- TypeScript
- React
- SCSS
- React Router
- Vite
