async function fetchData() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  const productsDiv = document.querySelector(".right_product_list");
  for (let item of products) {
    productsDiv.innerHTML += `
    <div class="product_card" onclick="goToDetail(${item.id})">
        <img src="${item.image}" alt="" />
        <div class="detail_product_card">
            <h3>${item.title}</h3>
            <span>${item.price}</span>
        </div>
    </div>
    `;
  }
}

document
  .getElementsByClassName("right_product_list")
  .addEventListener("load", fetchData());

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
fetch("https://fakestoreapi.com/products/${id}")
  .then((res) => res.json())
  .then((json) => console.log(json));
function goToDetail(id) {
  window.location.assign(`detail_product.html?id=${id}`);
}
