export function Button(options) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("class", "rounded-0");
  button.classList.add("btn");
  button.innerText = options.text;
  button.addEventListener("click", options.callback);

  return button;
}
