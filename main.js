let myStore = new Store("Danh sách sản phẩm");

function showHome() {
    document.getElementById("main").innerHTML = `
<h2>Danh sách sản phẩm</h2>
    <table id="productTable">
    <tr>
        <th style="text-align: center">ID</th>
        <th style="text-align: center">Tên sản phẩm</th>
        <th style="text-align: center">Giá sản phẩm</th>
        <th style="text-align: center">Hình ảnh</th>
        <th style="text-align: center" colspan="2">Hành động</th>
    </tr>
    <tbody id="listProduct"></tbody>
    </table>
    `

    let list = myStore.listProduct;
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html += `
        <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].image}" width="200px" alt=""></td>
            <td><button onclick="removeProduct(${i})">xóa</button></td>
            <td><button onclick="showFormUpdate(${i})">Cập nhật</button></td>
        </tr>
        `
    }
    document.getElementById("listProduct").innerHTML = html;
}


function showFormUpdate(index) {
    let list = myStore.listProduct;
    let oldProduct = list[index];
    document.getElementById("main").innerHTML = `
    <input type="text" id="id" placeholder="Id" value="${oldProduct.id}">
    <input type="text" id="name" placeholder="Name" value="${oldProduct.name}">
    <input type="text" id="price" placeholder="Price" value="${oldProduct.price}">
    <input type="text" id="image" placeholder="Image" value="${oldProduct.image}">
    <button onclick="update(${index})">Cập nhật</button>
    `;
}

function update(index) {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(id, name, price, image);
    myStore.update(index, newProduct);
    showHome();
}

function removeProduct(index) {
    let isConfirm = confirm("Bạn chắc chắn chứ?");
    if (isConfirm) {
        myStore.remove(index);
        showHome();
    }
}

function showFormAdd() {
    document.getElementById("main").innerHTML = `
    <input type="text" id="id" placeholder="Id">
    <input type="text" id="name" placeholder="Name">
    <input type="text" id="price" placeholder="Price">
    <input type="text" id="image" placeholder="Image">
    <button onclick="add()">Thêm sản phẩm</button>
    `
}

function add() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(id, name, price, image);
    myStore.add(newProduct);
    showHome();
}

function searchProduct() {
    document.getElementById("main").innerHTML = `
    <input type="text" id="find" placeholder="nhập tên sản phẩm cần tìm">
    <button onclick="search()">Tìm kiếm</button>
    `
}

function search() {
    let keyword = document.getElementById("find").value;
        let filteredProducts = myStore.search(keyword);
        showHome(filteredProducts);
    }

showHome();