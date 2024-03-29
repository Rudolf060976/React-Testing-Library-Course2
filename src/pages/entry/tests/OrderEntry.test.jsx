import { findAllByRole, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import OrderEntry from '../OrderEntry';


describe('Order Entry Component Tests', () => {

  test('Handles Error for scoops and toppings routes', async () => {

    server.resetHandlers(
      rest.get('http://localhost:3000/scoops', (req, res, ctx) => {

        return res(
          ctx.status(500)
        );

      }),
      rest.get('http://localhost:3000/toppings', (req, res, ctx) => {

        return res(
          ctx.status(500)
        );

      })
    )

    render(<OrderEntry />);

    await waitFor(async () => {
      // REMEMBER THAT WE ARE MAKING 2 SERVER CALLS HERE, SO WE HAVE TO WAIT FOR 2 RESPONSES, THAT´S WHY WE USE waitFor
      const alertComponents = await screen.findAllByRole('alert');

      expect(alertComponents).toHaveLength(2);

    });    

  });


});