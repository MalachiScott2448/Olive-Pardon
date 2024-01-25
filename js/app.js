const confirmBtn = document.getElementById("confirmBtn");
const totalDisplay = document.getElementById("total");
const cartSubTotal = document.getElementById("cartSubTotal");
const menuDivs = document.querySelectorAll(".menu-div");

let subtotal = 0;
let tax = 0.07;

const menuType = [
    "appetizers",
    "entrees",
    "drinks",
    "desserts"
];



let menuItems = [
    {
        id: 1,
        type: "appetizers",
        item: "Olive Poppers",
        desc: "These delicious olives covered in olive sauce and deep fried in olive oil will keep your mouth watering",
        imgUrl: "olive_poppers.jpg",
        price: 6.99,
        qty: 0,
    },
    {
        id: 2,
        type: "appetizers",
        item: "Blooming Onion",
        desc: "Blooming onion finished with a crispy exterior(Blooming onion may or may not contain olive)",
        imgUrl: "blooming_onion.jpg",
        price: 12.89,
        qty: 0,
    },
    {
        id: 3,
        type: "appetizers",
        item: "Mozzarella Sticks",
        desc: "These are Mozzarella sticks that surprisingly does not contain olives. However, it does not come with marinara. In replacement, it comes with olive sauce",
        imgUrl: "",
        price: 5.69,
        qty: 0,
    },
    {
        id: 4,
        type: "appetizers",
        item: "Bread Sticks",
        desc: "Our world famous bread sticks come completely free as long as you spend more than $999",
        imgUrl: "",
        price: 1.09,
        qty: 0,
    },
    {
        id: 5,
        type: "entrees",
        item: "House Garden Salad",
        desc: "This is just a normal salad. I don't know what you expected by reading this description. There is literally nothing special about this salad. It has lettuce and tomatoes. Were you expecting anything different?",
        imgUrl: "",
        price: 23.38,
        qty: 0,
    },
    {
        id: 6,
        type: "entrees",
        item: "Olive sandwich with jalapeno relish",
        desc: "An olive sandwich that contains olive and olive juice. If we are out of jalapeno relish, we do have olive relish to substitute it",
        imgUrl: "",
        price: 58.20,
        qty: 0,
    },
    {
        id: 7,
        type: "entrees",
        item: "Olive Salad",
        desc: "Olive Salad with Garlic dressing",
        imgUrl: "",
        price: 1.23,
        qty: 0,
    },
    {
        id: 8,
        type: "entrees",
        item: "Pork and Olive Vindaloo",
        desc: "A curry made with 59% olive, 6% curry, and 4% pork",
        imgUrl: "",
        price: 0.25,
        qty: 0,
    },
    {
        id: 9,
        type: "drinks",
        item: "Water",
        desc: "Water garnished with an olive",
        imgUrl: "",
        price: 9.99,
        qty: 0,
    },
    {
        id: 10,
        type: "drinks",
        item: "Carbonated Olive Juice",
        desc: "Olive",
        imgUrl: "",
        price: 6.99,
        qty: 0,
    },
    {
        id: 11,
        type: "drinks",
        item: "Olive Beer",
        desc: "Introducing the exquisitely crafted and imaginatively concocted elixir known as Olive Beer, a libation that transcends the boundaries of traditional beverages, captivating the senses with a symphony of flavors that dance upon the palate in a harmonious celebration of creativity and taste. Picture a meticulously brewed fusion of the finest hops, barley, and a touch of magic, harmoniously blended in a secret alchemical process that elevates the essence of beer to unprecedented heights. But here's where the journey truly begins with the infusion of succulent olives, handpicked under the full moon by mystical beings with a penchant for perfection. The aroma of Olive Beer is nothing short of enchanting; as you lift the glass to your nose, you'll be greeted by the heady fragrance of sun-kissed olives intertwined with the malty richness of the beer. Each sip is a revelation, a kaleidoscope of flavors that unfold like a tapestry of culinary wonders. The initial notes tease the taste buds with a delicate olive brininess, followed by a crescendo of hoppy bitterness that is both bold and refined. As the elixir cascades down your throat, you'll experience a symphony of textures the effervescence of the beer dancing on your tongue, while the olives impart a luscious, velvety mouthfeel that leaves you yearning for more. It's a sensory adventure, a pilgrimage for the taste buds that transcends the ordinary and ventures into the realm of extraordinary. Olive Beer is not just a drink; it's a liquid masterpiece, a testament to the boundless possibilities of flavor innovation. This beverage is not confined by the limitations of conventional brewing; it's a daring leap into uncharted territories, where the unexpected becomes the norm and the ordinary becomes extraordinary. Indulge in the audacious allure of Olive Beer a beverage that defies convention, challenges expectations, and invites you to embark on a journey of taste that knows no bounds. Raise your glass to a concoction that is as bold as it is beguiling, as unconventional as it is unforgettable Olive Beer, where imagination meets intoxication in a sip of liquid marvel. Cheers to the extraordinary!",
        imgUrl: "",
        price: 0.78,
        qty: 0,
    },
    {
        id: 12,
        type: "drinks",
        item: "Olive Juice",
        desc: "Juice made with olives",
        imgUrl: "",
        price: 0.78,
        qty: 0,
    },
    {
        id: 13,
        type: "desserts",
        item: "Anything and Everything Cookie Bundle",
        desc: "anything that is found in the kitchen, weather it be olives or Burger King foot lettuce, we put in this bundle of cookies and call it a day",
        imgUrl: "",
        price: 40.41,
        qty: 0,
    },
    {
        id: 14,
        type: "desserts",
        item: "Olive Topped Cake",
        desc: "An olive cake with green olive icing and an olive on top for extra flavor",
        imgUrl: "",
        price: 12.99,
        qty: 0,
    },
    {
        id: 15,
        type: "desserts",
        item: "Olive Flavored Donuts",
        desc: "Olives that taste like donuts(may or may not be the other way around)",
        imgUrl: "",
        price: 6.99,
        qty: 0,
    },
    {
        id: 16,
        type: "desserts",
        item: "Olives",
        desc: "These are just olives",
        imgUrl: "",
        price: 3.59,
        qty: 0,
    },
]

confirmBtn.addEventListener("click", (e) => {
    e.preventDefault()
    getTotal()
});

const getTotal = () => {
    const subtotal = parseFloat(cartSubTotal.innerText);
    const tipAmt = parseFloat(document.getElementById("tipAmt").value);
    const otherAmt = parseFloat(document.getElementById("otherAmt").value);
    const yourTip = document.getElementById("tipTotal");
    const theSubtotal = document.getElementById("theSubtotal");
    const taxDisplay = document.getElementById("tax");

    let taxTotal = subtotal * tax;
    console.log(`this is the amount of tax to be charged: ${taxTotal}`);

    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt);
    console.log(`this is the amount of tax to be charged: ${taxTotal}`);

    let total = isNaN(tipAmt) ? subtotal + taxTotal + otherAmt : subtotal + taxTotal + receiptTip;
    console.log(`this is the total to pay: ${total}`);

    taxDisplay.innerText = taxTotal.toFixed(2);
    yourTip.innerText = receiptTip.toFixed(2);
    totalDisplay.innerText = total.toFixed(2);
}

menuDivs.forEach(div => {
    const menuSubheading = document.createElement("h3");
    menuSubheading.classList.add("menu-subheading", "text-capitalize");

    const row = document.createElement("div");
    row.classList.add("row");

    div.appendChild(menuSubheading);
    div.appendChild(row);
});

for (let i=0; i < menuType.length; i++){
    menuDivs[i].children[0].innerText = menuType[i];
    menuDivs[i].children[1].setAttribute("id", `${menuType[i]}Row`)
}

const appRow = document.getElementById("appetizersRow");
const entreesRow = document.getElementById("entreesRow");
const drinksRow = document.getElementById("drinksRow");
const dessertRow = document.getElementById("dessertsRow");

// let menu = [
//     "appRow",
//     "entreesRow",
//     "drinksRow",
//     "dessertRow"
// ]

menuItems.forEach(item => {
    const column = document.createElement("div");
    column.classList.add("col-md-3");

    const card = document.createElement("div");
    card.classList.add("card", "h-100")
    card.innerHTML = `
    <img src="media/${item.imgUrl}" alt="${item.desc}" class="img-fluid meni-img card-img-top">
                <div class="card-body">
                    <h4 class="card-title text-capitalize item-item">${item.item}</h4>
                    <p class="card-text text-uppercase item-desc">${item.desc}</p>
                </div>
                <footer class="card-footer">
                    <p class="card-text item-price">$${item.price}</p>
                    <div class="buttons-div d-flex">
                        <button class="btn button-primary cart-btn text-capitalize"
                        id="Btn${item.id}"
                        data-id="${item.id}"
                        data-price="${item.price}"
                        data-qty="${item.qty}"
                        data-item="${item.item}"
                        >Add to Cart</button>
                        <div class="qty-div">
                        <button
                        class="btn btn-secondary btn-subtract"
                        id="btnSubtract${item.id}"
                        data-id="${item.id}"
                        data-qty="${item.qty}"> - </button>
                            <span class="quantity" id="quantity${item.id}">${item.qty}</span>
                            <button
                            class="btn btn-secondary btn-add"
                            id="btnAdd${item.id}"
                            data-id="${item.id}"
                            data-qty="${item.qty}"> + </button>
                        </div>
                    </div>
                </footer>
            </div>
            <div class="menu-div" id="entreessDiv"></div>
            <div class="menu-div" id="drinksDiv"></div>
            <div class="menu-div" id="dessertsDiv"></div>
        </div>
    </section>    
    `

    column.appendChild(card);
    // menu.forEach(type => {
    //     type.appendChild(column);
    // });
    
    switch (item.type) {
        case "appetizers":
            appRow.appendChild(column)
            break;
        case "entrees":
            entreesRow.appendChild(column)
            break;
        case "drinks":
            drinksRow.appendChild(column)
            break;
        case "desserts":
            dessertsRow.appendChild(column)
            break;
        default:
            console.log("Error: menu type not listed")
            break;
    }
})
