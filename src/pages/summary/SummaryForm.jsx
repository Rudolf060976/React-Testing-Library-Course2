import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`

  

`;



function SummaryForm() {

  const [agreed, setAgreed] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const handleCheckboxClick = (e) => {

    setAgreed(e.target.checked);

  };

  return (
    <StyledContainer>
      <input type="checkbox" id="checkAgree" value={agreed} onClick={handleCheckboxClick} />
      <label htmlFor="checkAgree">I agree to <span onMouseEnter={() => setShowPopover(true)} onMouseLeave={() => setShowPopover(false)}>Terms and Conditions</span></label>
      <button disabled={!agreed} >Confirm Order</button>
      {
        showPopover && (
          <div>
            There were be No Delivery!
          </div>
        )
      }
    </StyledContainer>
  )
}

export default SummaryForm;