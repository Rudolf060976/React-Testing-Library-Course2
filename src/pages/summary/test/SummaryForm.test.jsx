import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';


describe('SummaryForm Tests', () => {

  test('Initially the checkbox is unchecked and the button is disabled', () => {

    render(<SummaryForm />);

    const checkboxElement = screen.getByRole('checkbox', { name: /i agree to/i });

    const buttonElement = screen.getByRole('button', { name: /confirm order/i });

    expect(checkboxElement).not.toBeChecked();

    expect(buttonElement).toBeDisabled();    

  });

  test('When the checkbox is checked, the button is enabled', () => {

    render(<SummaryForm />);

    const checkboxElement = screen.getByRole('checkbox', { name: /i agree to/i });

    const buttonElement = screen.getByRole('button', { name: /confirm order/i });

    userEvent.click(checkboxElement);

    expect(buttonElement).toBeEnabled();

  });

  test('When the checkbox is unchecked again, the button is disabled', () => {

    render(<SummaryForm />);

    const checkboxElement = screen.getByRole('checkbox', { name: /i agree to/i });

    const buttonElement = screen.getByRole('button', { name: /confirm order/i });

    userEvent.click(checkboxElement);

    userEvent.click(checkboxElement);

    expect(buttonElement).toBeDisabled();

  });

  test('Popover responds to hover', async () => {

    // popover starts out hidden
    render(<SummaryForm />);
    
    const popoverElementHidden = screen.queryByText(/no delivery/i);

    expect(popoverElementHidden).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox label
    const termsElement = screen.getByText(/terms and conditions/i);

    userEvent.hover(termsElement);

    const popoverElementPresent = await screen.findByText(/no delivery/i);

    expect(popoverElementPresent).toBeInTheDocument();

    // popover disappears when we mouse out

    userEvent.unhover(termsElement);

    const popoverElementHiddenAgain = screen.queryByText(/no delivery/i);

    expect(popoverElementHiddenAgain).not.toBeInTheDocument();

  });

});





