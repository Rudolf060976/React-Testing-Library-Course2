import { findAllByRole, render, screen } from '@testing-library/react';
import Options from '../Options';

describe('Options Component Test', () => {

  test('Displays an image for each scoop from the server', async () => {

    render(<Options optionType="scoops" />);

    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i } )

    expect(scoopImages).toHaveLength(4);

    const altTextArray = scoopImages.map(element => element.alt);

    expect(altTextArray).toEqual([
      'Chocolate scoop',
      'Mint Chip scoop',
      'Vanilla scoop',
      'Salted caramel scoop',
    ]);
    
  });

  test('Displays an image for each Topping from the server', async () => {

    render(<Options optionType="toppings" />);

    const toppingImages = await screen.findAllByRole('img', { name: /topping$/i });

    expect(toppingImages).toHaveLength(3);

    const altTextArray = toppingImages.map(element => element.alt);

    expect(altTextArray).toEqual([
      'Cherries topping',
      'M&Ms topping',
      'Hot Fudge topping',
    ]);

  });


});