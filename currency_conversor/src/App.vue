<template>
  <div id="app">
    <div class="wrapper">
      <header>Currency Converter</header>
      <form action="#">
        <div class="amount">
          <p>Enter Amount</p>
          <input type="text" value="1" />
        </div>
        <div class="drop-list">
          <div class="from">
            <p>From</p>
            <div class="select-box">
              <img src="https://flagcdn.com/48x36/us.png" alt="flag" />
              <select>
                <!-- Options tag are inserted from JavaScript -->
              </select>
            </div>
          </div>
          <div class="icon"><i class="fas fa-exchange-alt"></i></div>
          <div class="to">
            <p>To</p>
            <div class="select-box">
              <img src="https://flagcdn.com/48x36/np.png" alt="flag" />
              <select>
                <!-- Options tag are inserted from JavaScript -->
              </select>
            </div>
          </div>
        </div>
        <div class="exchange-rate">Getting exchange rate...</div>
        <button>Get Exchange Rate</button>
      </form>
    </div>
  </div>
</template>
<script>
import country_list from "@/modules/country_list";
/*
const dropList = document.querySelectorAll("form select"),
  fromCurrency = document.querySelector(".from select"),
  toCurrency = document.querySelector(".to select"),
  getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
  for (let currency_code in country_list) {
    // selecting USD by default as FROM currency and NPR as TO currency
    let selected =
      i == 0
        ? currency_code == "USD"
          ? "selected"
          : ""
        : currency_code == "NPR"
        ? "selected"
        : "";
    // creating option tag with passing currency code as a text and value
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    // inserting options tag inside select tag
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropList[i].addEventListener("change", (e) => {
    loadFlag(e.target); // calling loadFlag with passing target element as an argument
  });
}

function loadFlag(element) {
  for (let code in country_list) {
    if (code == element.value) {
      // if currency code of country list is equal to option value
      let imgTag = element.parentElement.querySelector("img"); // selecting img tag of particular drop list
      // passing country code of a selected currency code in a img url
      imgTag.src = `https://flagcdn.com/48x36/${country_list[
        code
      ].toLowerCase()}.png`;
    }
  }
}

window.addEventListener("load", () => {
  getExchangeRate();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault(); //preventing form from submitting
  getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
  let tempCode = fromCurrency.value; // temporary currency code of FROM drop list
  fromCurrency.value = toCurrency.value; // passing TO currency code to FROM currency code
  toCurrency.value = tempCode; // passing temporary currency code to TO currency code
  loadFlag(fromCurrency); // calling loadFlag with passing select element (fromCurrency) of FROM
  loadFlag(toCurrency); // calling loadFlag with passing select element (toCurrency) of TO
  getExchangeRate(); // calling getExchangeRate
});

function getExchangeRate() {
  const amount = document.querySelector("form input");
  const exchangeRateTxt = document.querySelector("form .exchange-rate");
  let amountVal = amount.value;
  // if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
  if (amountVal == "" || amountVal == "0") {
    amount.value = "1";
    amountVal = 1;
  }
  exchangeRateTxt.innerText = "Getting exchange rate...";
  let url = `https://v6.exchangerate-api.com/v6/180b160dbc46c707417554b9/latest/${fromCurrency.value}`;
  // fetching api response and returning it with parsing into js obj and in another then method receiving that obj
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let exchangeRate = result.conversion_rates[toCurrency.value]; // getting user selected TO currency rate
      let totalExRate = (amountVal * exchangeRate).toFixed(2); // multiplying user entered value with selected TO currency rate
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    })
    .catch(() => {
      // if user is offline or any other error occured while fetching data then catch function will run
      exchangeRateTxt.innerText = "Something went wrong";
    });
}
*/
export default {
  mounted() {
    const dropList = document.querySelectorAll("form select"),
      fromCurrency = document.querySelector(".from select"),
      toCurrency = document.querySelector(".to select"),
      getButton = document.querySelector("form button");

    this.fromCurrency = fromCurrency;
    this.toCurrency = toCurrency;
    for (let i = 0; i < dropList.length; i++) {
      for (let currency_code in country_list) {
        // selecting USD by default as FROM currency and NPR as TO currency
        let selected =
          i == 0
            ? currency_code == "USD"
              ? "selected"
              : ""
            : currency_code == "NPR"
            ? "selected"
            : "";
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
      }
      dropList[i].addEventListener("change", (e) => {
        this.loadFlag(e.target); // calling loadFlag with passing target element as an argument
      });
    }
    window.addEventListener("load", () => {
      this.getExchangeRate();
    });

    getButton.addEventListener("click", (e) => {
      e.preventDefault(); //preventing form from submitting
      this.getExchangeRate();
    });

    const exchangeIcon = document.querySelector("form .icon");
    exchangeIcon.addEventListener("click", () => {
      let tempCode = fromCurrency.value; // temporary currency code of FROM drop list
      fromCurrency.value = toCurrency.value; // passing TO currency code to FROM currency code
      toCurrency.value = tempCode; // passing temporary currency code to TO currency code
      this.loadFlag(fromCurrency); // calling loadFlag with passing select element (fromCurrency) of FROM
      this.loadFlag(toCurrency); // calling loadFlag with passing select element (toCurrency) of TO
      this.getExchangeRate(); // calling getExchangeRate
    });
  },
  methods: {
    loadFlag(element) {
      for (let code in country_list) {
        if (code == element.value) {
          // if currency code of country list is equal to option value
          let imgTag = element.parentElement.querySelector("img"); // selecting img tag of particular drop list
          // passing country code of a selected currency code in a img url
          imgTag.src = `https://flagcdn.com/48x36/${country_list[
            code
          ].toLowerCase()}.png`;
        }
      }
    },
    getExchangeRate() {
      const amount = document.querySelector("form input");
      const exchangeRateTxt = document.querySelector("form .exchange-rate");
      let amountVal = amount.value;
      // if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
      if (amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
      }
      exchangeRateTxt.innerText = "Getting exchange rate...";
      let url = `https://v6.exchangerate-api.com/v6/180b160dbc46c707417554b9/latest/${this.fromCurrency.value}`;
      // fetching api response and returning it with parsing into js obj and in another then method receiving that obj
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          let exchangeRate = result.conversion_rates[this.toCurrency.value]; // getting user selected TO currency rate
          let totalExRate = (amountVal * exchangeRate).toFixed(2); // multiplying user entered value with selected TO currency rate
          exchangeRateTxt.innerText = `${amountVal} ${this.fromCurrency.value} = ${totalExRate} ${this.toCurrency.value}`;
        })
        .catch(() => {
          // if user is offline or any other error occured while fetching data then catch function will run
          exchangeRateTxt.innerText = "Something went wrong";
        });
    },
  },
  data() {
    return {
      fromCurrency: "",
      toCurrency: "",
    };
  },
};
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 10px;
  background: #675afe;
}
::selection {
  color: #fff;
  background: #675afe;
}
.wrapper {
  width: 370px;
  padding: 30px;
  border-radius: 7px;
  background: #fff;
  box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.05);
}
.wrapper header {
  font-size: 28px;
  font-weight: 500;
  text-align: center;
}
.wrapper form {
  margin: 40px 0 20px 0;
}
form :where(input, select, button) {
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: none;
}
form p {
  font-size: 18px;
  margin-bottom: 5px;
}
form input {
  height: 50px;
  font-size: 17px;
  padding: 0 15px;
  border: 1px solid #999;
}
form input:focus {
  padding: 0 14px;
  border: 2px solid #675afe;
}
form .drop-list {
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
}
.drop-list .select-box {
  display: flex;
  width: 115px;
  height: 45px;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  border: 1px solid #999;
}
.select-box img {
  max-width: 21px;
}
.select-box select {
  width: auto;
  font-size: 16px;
  background: none;
  margin: 0 -5px 0 5px;
}
.select-box select::-webkit-scrollbar {
  width: 8px;
}
.select-box select::-webkit-scrollbar-track {
  background: #fff;
}
.select-box select::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 8px;
  border-right: 2px solid #ffffff;
}
.drop-list .icon {
  cursor: pointer;
  margin-top: 30px;
  font-size: 22px;
}
form .exchange-rate {
  font-size: 17px;
  margin: 20px 0 30px;
}
form button {
  height: 52px;
  color: #fff;
  font-size: 17px;
  cursor: pointer;
  background: #675afe;
  transition: 0.3s ease;
}
form button:hover {
  background: #4534fe;
}
</style>
