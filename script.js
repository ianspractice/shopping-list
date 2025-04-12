const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addItem);

function addItem() {
  const value = input.value;
  console.log(value);
  input.value = "";
  console.log(input.value);
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  li.appendChild(span);
  li.appendChild(delBtn);
  span.textContent = value;
  delBtn.textContent = "Delete";
  ul.appendChild(li);
  delBtn.addEventListener("click", () => {
    li.remove();
  });
  input.focus();
}

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});
