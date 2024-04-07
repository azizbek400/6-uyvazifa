const box = document.querySelector(".box");
const form = document.querySelector(".form");
const input = document.querySelector(".input");



const render = (data) => {
    box.innerHTML = data.map(
        (item) => `
        <div>
        <h1>${item.name}</h1>
        <button onclick="deleteItem(${item.id})">delete</button>
        </div>
        `
    )
    .join("");
};

const getData = () => {
    fetch()
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });

};

getData();


const deleteItem = (id) => {
    fetch(``, {
        method: "DELETE",
    })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        getData();
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(``, {
        method: "POST",
        body: JSON.stringify({name: input.value}),
    })
    .then((res) => res.json())
    .then(() => {
        input.value = "";
        getData();
    });
});