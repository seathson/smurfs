'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

const axios = require('axios').default;
const crypto = require('crypto');
const { createContext } = require('vm');

module.exports = createCoreService('api::checkout.checkout', ({ strapi }) => ({

  // Создание корректной сигнатуры для получения инвойса в дальнейшем
  async generateSignature(order) {
    let signatureData = order.cost + ':' + 'USD' + ':' + order.id.toString() + ":" + '59a040f69f5301aed93dd367'
    const sha256 = crypto.createHash("sha256");
    sha256.update(signatureData, "utf8");
    return sha256.digest("hex");
  },

  //  Запрос на получение инвойса, используя ранее созданную сигнатуру и прочие данные из формы
  async requestPayopInvoice(order, signature) {
    const payopInvoice = await axios.post('https://payop.com/v1/invoices/create', {
      "publicKey": "application-ee1e2f5f-3586-4761-843a-94765ae4fb5d",
      "order": {
        "id": order.id.toString(),
        "amount": order.cost,
        "currency": "USD",
        "items": [
          {
            "id": order.smurf.id,
            "name": order.smurf.title,
            "price": order.smurf.finalPrice
          }
        ],
        "description": order.smurf.resource
      },
      "signature": signature,
      "payer": {
        "email": order.email,
        "phone": "",
        "name": "",
        "extraFields": {}
      },
      "language": "en",
      "resultUrl": `https://smurfs.lol/payment-completed?orderid=${order.smurf.id}`,
      "failPath": `https://smurfs.lol/payment-rejected?orderid=${order.smurf.id}`,
      "metadata": {}
    })
    return payopInvoice.data
  },

  async generateSignatureForCustomPayment({ amount, currency }) {
    let signatureData = amount + ':' + currency + ':' + 'custom' + ":" + '59a040f69f5301aed93dd367'
    const sha256 = crypto.createHash("sha256");
    sha256.update(signatureData, "utf8");
    return sha256.digest("hex");
  },

  async requestPayopInvoiceForCustomPayment({ amount, currency, email }, signature) {
    try {
      const payopInvoice = await axios.post('https://payop.com/v1/invoices/create', {
        "publicKey": "application-ee1e2f5f-3586-4761-843a-94765ae4fb5d",
        "order": {
          "id": 'custom',
          "amount": amount,
          "currency": currency,
          "items": [],
          "description": 'Payment for Riot Points in League of Legends (Delivery via Gifting system)'
        },
        "signature": signature,
        "payer": {
          "email": email,
          "phone": "",
          "name": "",
          "extraFields": {}
        },
        "language": "en",
        "resultUrl": `https://smurfs.lol/`,
        "failPath": `https://smurfs.lol/`,
        "metadata": {}
      })
      return payopInvoice.data
    } catch(err) {
      console.log(err.response.data.message);
      ctx.status = 500
      ctx.body = 'error'
    }
  }

}));
