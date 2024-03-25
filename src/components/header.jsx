import React from "react";
import { useUserContext } from "./Contextprovider";

function Header() {
  const { cardQuantity, cardAmount } = useUserContext();

  return (
    <>
      <header>
        <div className="row bg-light d-flex justify-content-between align-items-center py-3">
          <div className="col">TOTAL QTY: {cardQuantity}</div>
          <div className="col">TOTAL Price : { (cardAmount).toFixed(2)}</div>
          <div className="col-auto">
            <button className="btn btn-primary">Proceed to pay</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;