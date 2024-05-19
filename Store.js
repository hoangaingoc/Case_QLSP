class Store {
    constructor(key) {
        this.key = key;
        this.listProduct = JSON.parse(localStorage.getItem(this.key)) || [];
    }

    save() {
        localStorage.setItem(this.key, JSON.stringify(this.listProduct));
    }

    add(newProduct) {
        this.listProduct.push(newProduct);
        this.save();
    }

    update(index, newProduct) {
        this.listProduct[index] = newProduct;
        this.save();
    }

    remove(index) {
        this.listProduct.splice(index, 1);
        this.save();
    }
    search(keyword) {
        return this.listProduct.filter(Product => Product.name.toLowerCase().includes(keyword.toLowerCase()));
    }
}