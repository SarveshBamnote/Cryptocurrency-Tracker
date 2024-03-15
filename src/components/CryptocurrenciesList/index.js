import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoList: []}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({cryptoList: formattedData, isLoading: false})
  }

  renderCryptocurrencyList = () => {
    const {cryptoList} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="crypto-table">
          <div className="table-header">
            <p className="coin-type">Coin Type</p>
            <p className="usd">USD</p>
            <p className="euro">EURO</p>
          </div>
          <ul className="ul-container">
            {cryptoList.map(eachCrypto => (
              <CryptocurrencyItem eachCrypto={eachCrypto} key={eachCrypto.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrencyList()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
