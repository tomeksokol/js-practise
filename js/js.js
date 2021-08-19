const inputFavSmurf = qs("#fav-smurf");

console.log(inputFavSmurf.value);

inputFavSmurf.addEventListener("input", (event) => {
  console.log(event);
  console.log(event.target.value);
});

const qs = (selector) => document.querySelector(selector);
const btnClickMe = qs("#btn");
btnClickMe.addEventListener("click", (e) => {
  console.log("I have been clicked!!! 😍😍😍");
  let p = document.createElement("p");
  p.classList.add("bold");
  p.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sunt cupiditate velit officia placeat commodi maiores, voluptates illum necessitatibus eveniet fugiat omnis quae incidunt inventore? Incidunt provident quisquam unde labore.`;
  document.body.appendChild(p);
});
