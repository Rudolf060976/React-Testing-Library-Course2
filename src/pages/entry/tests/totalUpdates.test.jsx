import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OrderTotalContextProvider } from '../../../context/ordersContext'

import Options from '../Options'
import OrderEntry from '../OrderEntry'


describe('Totals and Subtotals change and display the right values', () => {

  it('update scoop subtotal when scoops change', async () => {

    render(<Options optionType="scoops" />, { wrapper: OrderTotalContextProvider });

    // make sure subtotal starts out $0.00
    const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
    
    expect(scoopsSubtotal).toHaveTextContent('0.00')

    // update vanilla scoops to 1 and check the subtotal
    const vanillaInput = await screen.findByRole('spinbutton', { name: /vanilla/i })

    userEvent.clear(vanillaInput)

    userEvent.type(vanillaInput, '1')

    await waitFor(async () => {

      expect(scoopsSubtotal).toHaveTextContent('2.00')      
      
    })

  })

  it('update scoop subtotal when 2 scoops change', async () => {

    render(<Options optionType="scoops" />, { wrapper: OrderTotalContextProvider });

    // make sure subtotal starts out $0.00
    const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
    
    expect(scoopsSubtotal).toHaveTextContent('0.00')

    const chocolateInput = await screen.findByRole('spinbutton', { name: /chocolate/i })

    const vanillaInput = await screen.findByRole('spinbutton', { name: /vanilla/i })

      userEvent.clear(vanillaInput)

      userEvent.clear(chocolateInput)
      
      userEvent.type(vanillaInput, '1')
      
      userEvent.type(chocolateInput, '2')

      await waitFor(async () => {

        expect(scoopsSubtotal).toHaveTextContent('6.00')      
        
      })


  });

  it('update toppings subtotal when toppings change', async () => {

   

  })




})


