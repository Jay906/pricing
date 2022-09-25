const range = document.querySelector("#range");
const option = document.querySelector("#option");
const price = document.querySelector("#price");
const toggle = document.querySelector("#billing-toggle");
const toggleButton = document.querySelector("#billing-toggle-button");

let monthlyOptions = {
  0: {
    option: "10k",
    price: "8.00",
  },
  1: {
    option: "50k",
    price: "12.00",
  },
  2: {
    option: "100k",
    price: "16.00",
  },
  3: {
    option: "500k",
    price: "24.00",
  },
  4: {
    option: "1M",
    price: "36.00",
  },
};

function updateOptions(obj) {
  if (typeof obj !== "object") throw new Error("Must be object");
  const newObj = {};
  if (toggle.checked) {
    for (let key in obj) {
      newObj[key] = obj[key];
      newObj[key].price = (obj[key].price * 0.75).toFixed(2);
    }
    console.log(newObj);
    return newObj;
  }
  console.log(newObj);
  for (let key in obj) {
    newObj[key] = obj[key];
    newObj[key].price = ((obj[key].price / 75) * 100).toFixed(2);
  }

  return newObj;
}

function updateDOM() {
  const priceContent = `<span class="bold">$ ${
    monthlyOptions[range.value].price
  }</span> / month`;
  option.textContent = `${monthlyOptions[range.value].option} pageviews`;
  price.innerHTML = priceContent;
}

toggleButton.addEventListener("click", function () {
  toggle.checked = !toggle.checked;
  monthlyOptions = updateOptions(monthlyOptions);
  updateDOM();
});

range.addEventListener("change", function () {
  updateDOM();
});

range.addEventListener("input", function () {
  let value = range.value * 25;
  let bgColor = `linear-gradient(
    90deg,
    var(--full-slider-bar) ${value}%,
    var(--empty-slider-bar) ${value}%
  )`;
  range.style.background = bgColor;
});
