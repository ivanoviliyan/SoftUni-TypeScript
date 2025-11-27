// Create a class Product with:
// · static property productCount to track how many products were created, protect it from being changed outside the class
// · readonly id: number (auto-incremented using productCount)
// · name: string – ensure a products name is at least 1 characters long
// · price: number – ensure the price is > 0
// · getDetails(): string method to print info about the product in format "ID: <id>, Name: <name>, Price: $<price>"
// Create another class Inventory with:
// · private products: Product[]
// · method addProduct(product: Product): void
// · method listProducts(): string - returns formatted info about products in the inventory each on a new line and then on the final line prints the number of total products in the format "Total products created: <products count>"
// Use readonly, private, static, getters and setters and encapsulation appropriately.

class Product {
   static productCount: number = 0;
   readonly id: number;
   public name: string;
   public price: number;

   constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
      Product.productCount++;
      this.id = Product.productCount;
   }

   getDetails(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
   }
}

class Inventory {
   private products: Product[] = [];

   addProduct(product: Product): void {
      this.products.push(product);
   }

   listProducts(): string {
      const printArr: string[] = [];
      this.products.forEach((product) => {
         printArr.push(
            `ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`
         );
      });
      printArr.push(`Total products created: ${this.products.length}`);
      return printArr.join('\n');
   }
}

const inventory = new Inventory();
const product1 = new Product('Laptop', 1200);
const product2 = new Product('Phone', 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
