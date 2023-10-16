class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
          console.error('Todos los campos (título, descripción, precio, miniatura, código, stock)son obligatorios para un producto.')  
        return;
        }
        
        const existingProduct = this.products.find(p => p.code === product.code);
        if (existingProduct) {
            console.error('Ya existe un producto con el mismo código')
            return;
        }

        const newProduct = {
            ...product,
            id: this.productIdCounter++
        };
        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            return product;
        } else {
            console.error('Producto no encontrado');
            return null;
        }
    }
}
