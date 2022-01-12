import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/scoops', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Chocolate',
          imagePath: '/images/chocolate.jpg'
        },
        {
          name: 'Mint Chip',
          imagePath: '/images/mint-chip.jpg'
        },
        {
          name: 'Vanilla',
          imagePath: '/images/vanilla.jpg'
        },
        {
          name: 'Salted caramel',
          imagePath: '/images/salted-caramel.jpg'
        },
      ])
    )


  }),
  rest.get('http://localhost:3000/toppings', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Cherries',
          imagePath: '/images/cherries.jpg'
        },
        {
          name: 'M&Ms',
          imagePath: '/images/m-and-ms.jpg'
        },
        {
          name: 'Hot Fudge',
          imagePath: '/images/hot-fudge.jpg'
        }
      ])
    );

  })
];