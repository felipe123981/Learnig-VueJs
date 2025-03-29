<template>
  <div id="app">
    <div class="wrapping">
      <div class="coinpay">
        <div class="logo">
          <p>c☻in</p>
          <p><bold>Q</bold>R CODE</p>
        </div>
        <div class="details">
          <p>
            Use c☻in pay to generate your bitcoin payment qr-codes to use freely
            or on the go to take your own payments or use c☻in pay to support
            the content creators and artists you love & pay others.
          </p>
        </div>
        <div class="start">
          <button onclick="start();">generate QR Code</button>
        </div>
        <div class="payment">
          <form onsubmit="getQR();return false;" action="">
            <p>Enter the bitcoin address to recieve payment</p>
            <input required type="text" id="wallet" />
            <p>Enter the amount for the transaction</p>
            <input
              required
              type="number"
              value="0.001"
              placeholder="4.20"
              min="0"
              step="0.001"
              id="amount"
            />
            <p>Name of recipient of payment label</p>
            <input
              required
              type="text"
              id="label"
              placeholder="name or label"
            />
            <p>Payment message or note.</p>
            <input
              required
              type="text"
              id="message"
              placeholder="message, payment note"
            />
            <input class="go" type="submit" value="create QRCode" />
          </form>
        </div>
        <div class="yourQR">
          <div id="qrCode" class="qr"></div>
          <a href="" class="downloadQR" download>download</a>
          <div class="info">
            <table>
              <p>
                Use the image above directly from this page or save the qrCode
                image so you can get paid or pay someone at a later date with it
                in sync with your btc wallet.
              </p>
              <tr>
                <td>recieve BTC address</td>
                <td id="wwalet"></td>
              </tr>
              <tr>
                <td>transaction amount</td>
                <td id="aamount"></td>
              </tr>
              <tr>
                <td>label</td>
                <td id="llabel"></td>
              </tr>
              <tr>
                <td>message</td>
                <td id="mmessage"></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentModal",
  async mounted() {
    await this.amountTotal();
    this.keydownEventAmount();
  },
  data() {
    return {
      args: {
        account: "apr-0bfb905069cf665d46c18aad2dcbf504",
        amount: "432",
        amountIndicatedCustomer: "false",
        nameButton: "Pay",
        crypto: "BTC",
        fiat: "USD",
        switchCurrency: "false",
        additionalInfo: [
          { name: "Sour Diesel cannabis", cost: "12", qty: "11", total: "132" },
          { name: "Ecstasy pills", cost: "10", qty: "30", total: "300" }
        ],
        primaryColor: "#5D8AB9",
        lifetime: "3600"
      }
    };
  },
  methods: {
    async amountTotal() {
      const getExchange = await fetch(
        `https://apirone.com/api/v2/ticker?currency=${this.args.crypto.toLowerCase()}`
      );
      const result = await getExchange.json();
      const amountTotal = document.querySelector(
        ".__apr-constructor-total-amount"
      );
      const containerAmountTotal = document.querySelector(
        ".__apr-constructor-container-total-amount"
      );
      const cryptoAmountTotal = document.querySelector(
        ".__apr-constructor-crypto-total-amount"
      );
      let total;
      if (
        this.args.switchCurrency === "false" &&
        this.args.amountIndicatedCustomer === "false"
      ) {
        total = this.args.amount / result[this.args.fiat.toLowerCase()];
        if (this.args.amount !== "0" && this.args.amount !== "") {
          amountTotal.innerText = total.toFixed(8);
          cryptoAmountTotal.textContent = `${this.args.crypto} `;
          this.fade(containerAmountTotal, 300, "in");
        } else {
          this.fade(containerAmountTotal, 300, "out");
        }
      } else if (
        this.args.switchCurrency === "false" &&
        this.args.amountIndicatedCustomer === "true"
      ) {
        const amountInput = document.querySelector(
          "input[name='apr_amount']"
        ).value;
        total = amountInput / result[this.args.fiat.toLowerCase()];
        if (amountInput !== "") {
          amountTotal.innerText = total.toFixed(8);
          cryptoAmountTotal.textContent = `${this.args.crypto} `;
          this.fade(containerAmountTotal, 300, "in");
        } else {
          this.fade(containerAmountTotal, 300, "out");
        }
      } else if (this.args.switchCurrency === "true") {
        total = Number(this.args.amount);
        this.fade(containerAmountTotal, 0, "out");
        amountTotal.innerText = total.toFixed(8);
      }
      return total;
    },
    fade(element, duration, direction) {
      let startOpacity, endOpacity;
      if (direction === "in") {
        startOpacity = 0;
        endOpacity = 1;
        element.style.display = "block";
      } else if (direction === "out") {
        startOpacity = 1;
        endOpacity = 0;
      }
      let startTime = null;
      function animate(currentTime) {
        if (!startTime) {
          startTime = currentTime;
        }
        const elapsedTime = currentTime - startTime;
        let progress = elapsedTime / duration;
        if (progress > 1) {
          progress = 1;
        }
        element.style.opacity =
          startOpacity + (endOpacity - startOpacity) * progress;
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else if (direction === "out") {
          element.style.display = "none";
        }
      }
      requestAnimationFrame(animate);
    },
    keydownEventAmount() {
      const amount = document.querySelector("input[name='apr_amount']");
      amount.addEventListener("keydown", (event) => {
        if (
          ((event.metaKey || event.ctrlKey) &&
            [67, 86, 88, 65].includes(event.keyCode)) ||
          event.keyCode === 8 ||
          event.keyCode === 9 ||
          event.keyCode === 46 ||
          event.key === "."
        ) {
          return true;
        } else if (event.keyCode === 46 || !/^[0-9]$/.test(event.key)) {
          event.preventDefault();
        }
      });
    },
    async createInvoice() {
      const totalAmountValue = document.querySelector(
        ".__apr-constructor-total-amount"
      ).innerText;
      const options = {
        currency: this.args.crypto.toLowerCase(),
        amount: Math.round(Number(totalAmountValue * 100000000) || 0),
        lifetime: Number(this.args.lifetime)
      };
      if (this.args.additionalInfo.length) {
        options["user-data"] = { items: this.args.additionalInfo };
      }
      const response = await fetch(
        `https://apirone.com/api/v2/accounts/${
          this.args.account || "BLANK_FIELD"
        }/invoices`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(options)
        }
      );
      const result = await response.json();
      if (response.status === 200) {
        const link = document.createElement("a");
        link.href = result["invoice-url"];
        link.target = "_blank";
        link.click();
      } else {
        const error = document.querySelector(".__apr-constructor-error");
        if (this.args.account === "") {
          error.textContent = "Enter your account ID";
          this.fade(error, 300, "in");
        } else if (result.message === "Amount should be a positive integer.") {
          error.textContent = "Amount should be positive.";
          this.fade(error, 300, "in");
        } else {
          error.textContent = result.message;
          this.fade(error, 300, "in");
        }
        setTimeout(() => {
          this.fade(error, 300, "out");
        }, 5000);
      }
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 8px;
}
* {
  color: var(--text-color);
}
.__apr-constructor-error {
  display: none;
  margin-bottom: 12px;
  color: #ff0000;
  border: 1px solid #ff0000;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #f9e8e8;
}
.__apr-constructor-container-input {
  display: inline-block;
  margin-right: 16px;
  position: relative;
  margin-top: 6px;
}
.__apr-constructor-fiat-icon {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #5d8ab9;
}
.__apr-constructor-form {
  max-width: 400px;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji",
    sans-serif;
}
.__apr-constructor-container {
  display: flex;
  flex-wrap: wrap;
}
.__apr-constructor-button {
  background-color: #5d8ab9;
  color: #ffffff;
  border: 1px solid;
  border-color: #5d8ab9;
  padding: 0 16px 0 12px;
  border-radius: 8px;
  cursor: pointer;
  height: 36px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  margin-top: 6px;
  display: flex;
  align-items: center;
}
.__apr-constructor-button svg {
  width: 20px;
  margin-right: 8px;
}
.__apr-constructor-button span {
  width: 0.5px;
  background: #ced4da;
  height: 100%;
  display: block;
  margin: 0 8px;
}
.__apr-constructor-input {
  width: 200px;
  height: 36px;
  outline: none;
  border-radius: 8px;
  border: 1px solid #ced4da;
  transition: 0.2s;
  padding-left: 12px;
  padding-right: 42px;
  font-family: inherit;
}
.__apr-constructor-input:focus {
  border: 1px solid #5d8ab9;
}
.__apr-constructor-container-total-amount {
  display: none;
  text-align: start;
  margin-top: 12px;
}
</style>
