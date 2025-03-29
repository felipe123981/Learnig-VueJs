<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="__apr-constructor-code"></div>
    <form class="__apr-constructor-form">
      <span class="__apr-constructor-error"></span>
      <div class="__apr-constructor-container">
        <button
          type="button"
          class="__apr-constructor-button"
          @click="createInvoice"
        >
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            image-rendering="optimizeQuality"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            viewBox="0 0 4091.27 4091.73"
          >
            <g fill-rule="nonzero">
              <path
                d="m4030.06 2540.77c-273.24 1096.01-1383.32 1763.02-2479.46 1489.71-1095.68-273.24-1762.69-1383.39-1489.33-2479.31 273.12-1096.13 1383.2-1763.19 2479-1489.95 1096.06 273.24 1763.03 1383.51 1489.76 2479.57l.02-.02z"
                fill="#f7931a"
              ></path>
              <path
                d="m2947.77 1754.38c40.72-272.26-166.56-418.61-450-516.24l91.95-368.8-224.5-55.94-89.51 359.09c-59.02-14.72-119.63-28.59-179.87-42.34l90.16-361.46-224.36-55.94-92 368.68c-48.84-11.12-96.81-22.11-143.35-33.69l.26-1.16-309.59-77.31-59.72 239.78s166.56 38.18 163.05 40.53c90.91 22.69 107.35 82.87 104.62 130.57l-104.74 420.15c6.26 1.59 14.38 3.89 23.34 7.49-7.49-1.86-15.46-3.89-23.73-5.87l-146.81 588.57c-11.11 27.62-39.31 69.07-102.87 53.33 2.25 3.26-163.17-40.72-163.17-40.72l-111.46 256.98 292.15 72.83c54.35 13.63 107.61 27.89 160.06 41.3l-92.9 373.03 224.24 55.94 92-369.07c61.26 16.63 120.71 31.97 178.91 46.43l-91.69 367.33 224.51 55.94 92.89-372.33c382.82 72.45 670.67 43.24 791.83-303.02 97.63-278.78-4.86-439.58-206.26-544.44 146.69-33.83 257.18-130.31 286.64-329.61l-.07-.05zm-512.93 719.26c-69.38 278.78-538.76 128.08-690.94 90.29l123.28-494.2c152.17 37.99 640.17 113.17 567.67 403.91zm69.43-723.3c-63.29 253.58-453.96 124.75-580.69 93.16l111.77-448.21c126.73 31.59 534.85 90.55 468.94 355.05z"
                fill="#fff"
              ></path>
            </g>
          </svg>
          USD 432 <span></span> Pay
        </button>
      </div>
      <div class="__apr-constructor-container-total-amount">
        <span class="__apr-constructor-crypto-total-amount"></span
        ><span class="__apr-constructor-total-amount"></span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
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
        const invoice_url = `https://apirone.com/invoice?id=${result.invoice}`;
        const link = document.createElement("a");
        link.href = invoice_url;
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
