import React from 'react'
import Button from '../../components/ReuseableComponents/button/Button'
import './mint.scss'
function Mint() {
  return (
    <main>
    <div className="mint-container">
      <div className="mint-content">
        <div className="left-content">
          <h1>WELCOME TO MTS MINTING</h1>
          <p>Welcome to Meta Tiger Society, where an exclusive collection of 5,555 hand-drawn NFT tigers prowl the Ethereum blockchain...  </p>
          <p>Celebrate the natural majesty of the tiger, support the protection of this critically endangered animal, and benefit from a range of incredible utilities by joining the Meta Tiger movement today!.</p>
        </div>
        <div className="right-content">
          <div className="img-header">
            <div className="img"></div>
            <div className="img-card-group">
            <div className="img-card"></div>
            <div className="img-card"></div>
            <div className="img-card"></div>
            </div>
          </div>
          <div className="mint-price">
            <h1>MINT PRICE</h1>
            <h6>TOTAL</h6>
            <div className="btn-group">
              <button>-</button>
              <p className="mint-count">4</p>
              <button>+</button>
            </div>
            <Button title="MINT"/>
            <p>Buy with credit card</p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p>META TIGER SOCIETY - ALL RIGHTS RESERVED | DESIGN BY CERKA</p>
    </footer>
    </main>
  )
}

export default Mint