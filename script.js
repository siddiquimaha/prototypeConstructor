// Creating a grocery store object with different categories
// Grocery Store Constructor Function
function GroceryStore() {
    // Private store data
    const store = {
        "fruits": {
            "mango": {
                "color": ["red", "green"],
                "price": 200,
                "prmotion_month": [10, 11],
                "is_discount": true,
            },
            "apple": {
                "price": 300,
            },
            "banana": {
                "price": 150,
            },
            "orange": {
                "price": 250,
            },
            "grapes": {
                "price": 320,
            },
        },
        "vegetables": {
            "brinjal": {
                "price": 50,
            },
            "potatoes": {
                "price": 80,
            },
            "tomatoes": {
                "price": 120,
            },
            "ladyfinger": {
                "price": 200,
            },
            "green chillie": {
                "price": 60,
            },
        },
        "meats": {
            "chicken": {
                "price": 630,
            },
            "beef": {
                "price": 1300,
            },
            "fish": {
                "price": 1500,
            },
        },
        "dryfruits": {
            "almond": {
                "price": 2800,
            },
            "walnuts": {
                "price": 3500,
            },
        },
        "oils": {
            "sunflower": {
                "price": 550,
            },
            "corn": {
                "price": 2800,
            },
            "olive": {
                "price": 767,
            },
        }
    };

    this._discountPrice = function(itemData) {
        const discountRate = 0.2;
        let finalPrice = itemData.price;

        function hasDiscount(item) {
            return item && item.is_discount;
        }

        function isPromotionMonth(item, currentMonth) {
            return item.prmotion_month.includes(currentMonth);
        }

        const currentMonth = new Date().getMonth() + 1;
        if (hasDiscount(itemData) && isPromotionMonth(itemData, currentMonth)) {
            finalPrice -= finalPrice * discountRate;
        } else {
            finalPrice = null;
        }

        return finalPrice;
    };

    // Public method to render grocery table
    this.renderTable = function(tableBodyId) {
        const tableBody = document.querySelector(`#${tableBodyId}`);

        for (let category in store) {
            for (let item in store[category]) {
                const productPrice = store[category][item];
                if (productPrice.price) {
                    const tRow = document.createElement("tr");
                    
                    const categoryCell = document.createElement("td"); 
                    categoryCell.innerText = category;

                    const itemCell = document.createElement("td");
                    itemCell.innerText = item;

                    const priceCell = document.createElement("td");
                    priceCell.innerText = productPrice.price;

                    const discountPriceCell = document.createElement("td");
                    const discountPrice = this._discountPrice(productPrice);
                    discountPriceCell.innerText = discountPrice !== null ? discountPrice.toFixed(2) : "null";

                    tRow.appendChild(categoryCell);
                    tRow.appendChild(itemCell);
                    tRow.appendChild(priceCell);
                    tRow.appendChild(discountPriceCell);

                    tableBody.appendChild(tRow);
                }        
            }
        }
    };
}

// Creating an instance of GroceryStore and rendering the table
const myGroceryStore = new GroceryStore();
myGroceryStore.renderTable("groceryTable");




// function discountPrice(store, itemName, itemData, tRow) {
//     const discountRate = 0.2;
//     let finalPrice = itemData.price;
//     console.log(finalPrice);

//     if (store.fruits[itemName] && store.fruits[itemName].is_discount) {
//         let promotionMonths = store.fruits[itemName].prmotion_month;

//         if (promotionMonths.includes(10) || promotionMonths.includes(11)) {
//             let discount = itemData.price * discountRate;
//             finalPrice -= discount;
//         }
//     }

//     const disPriceCell = document.createElement("td");
//     disPriceCell.innerText = finalPrice;
//     tRow.appendChild(disPriceCell);
//     tableBody.appendChild(tRow);
// }
/*const tableBody = document.querySelector("#groceryTable tbody");
function discountPrice(store, itemName, itemData, tRow) {
    const discountRate = 0.2;
    let finalPrice = itemData.price;

    function hasDiscount(item) {
        return item && item.is_discount;
    }

    function isPromotionMonth(item, currentMonth) {
        return item.prmotion_month.includes(currentMonth);
    }

    if (hasDiscount(store.fruits[itemName])) {
        const currentMonth = new Date().getMonth() + 1;
        if (isPromotionMonth(store.fruits[itemName], currentMonth)) {
            const discount = finalPrice * discountRate;
            finalPrice -= discount;
        }
    }

    const discountPriceCell = document.createElement("td");
    discountPriceCell.innerText = finalPrice.toFixed(2); // Format price to two decimal places
    tRow.appendChild(discountPriceCell);
}


function groceryTable(store) {
    for (let category in store) {
        for (let item in store[category]) {
            // console.log(item);
            const productPrice = store[category][item];
            if (productPrice.price) {
                const tRow = document.createElement("tr");
                
                const categoryCell =    document.createElement("td"); 
                categoryCell.innerText = category;

                const itemCell = document.createElement("td");
                itemCell.innerText = item;

                const priceCell = document.createElement("td");
                priceCell.innerText = productPrice.price;

                tRow.appendChild(categoryCell);
                tRow.appendChild(itemCell);
                tRow.appendChild(priceCell);
                discountPrice(store, item, productPrice, tRow);
                tableBody.appendChild(tRow);
            }        
        }
    }
}
groceryTable(grocery_Store);*/






