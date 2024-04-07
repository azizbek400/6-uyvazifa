const box = document.querySelector(".box");

const render = (data) => {
    box.innerHTML = data.map(
        (item) => `
        <div>
        <h1>${item.name}</h1>
        <button onclick="deleteItem(${item.id})">delete</button>
        </div>
        `
    );
};

const getData = () => {
    fetch(-------------------------------------------------------)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });

};

getData();