import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof(amount) !== 'number') {
      throw new TypeError('amount must be number');
    }

    this._amount = amount;
    this._currency = currency;

  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this.currency = currency
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }
}
