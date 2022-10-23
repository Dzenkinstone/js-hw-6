const listRef = document.querySelector("ul");
console.log(listRef);

const itemRef = listRef.children;
console.log(itemRef);

for (const item of itemRef) {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("ul li").length}`);
}
