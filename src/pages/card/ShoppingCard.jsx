import React from 'react'

const ShoppingCard = () => {
    return (
        <>
             <div className="modal-dialog modal-fullscreen-xxl-down">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Shopping Card</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body ">
                  <img src="./img/undraw_empty_cart_co35.svg" className="img-fluid" width="500" alt="" />
                </div>
                <div className="modal-footer">
                  {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                  <button type="button" className="supper-btn">Place Order</button>
                </div>
              </div>
            </div>
        </>
    )
}

export default ShoppingCard
