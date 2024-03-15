import './index.css'

const CryptocurrencyItem = props => {
  const {eachCrypto} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = eachCrypto

  return (
    <li className="list-container">
      <div className="coin-logo-name">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="usd-value">{usdValue}</p>
      <p className="euro-value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
