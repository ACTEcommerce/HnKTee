// 1. COMPLETE PRODUCT DATABASE (36 ITEMS)
const products = [
    // --- FOR MEN (12 Items) ---
    { id: 1, name: "Urban Echo", category: "for men", price: 350, stock: 8, image: "images/Men_echo.png" },
    { id: 2, name: "Midnight Renegade", category: "for men", price: 380, stock: 2, image: "images/men_renegade.png" },
    { id: 3, name: "Iron & Ink", category: "for men", price: 350, stock: 12, image: "images/men_iron.png" },
    { id: 4, name: "Nomad Theory", category: "for men", price: 420, stock: 5, image: "images/men_nomad.png" },
    { id: 5, name: "Vantage Point", category: "for men", price: 320, stock: 10, image: "images/men_vantage.png" },
    { id: 6, name: "Static Signal", category: "for men", price: 380, stock: 0, image: "images/men_static.png" },
    { id: 7, name: "Chrome Horizon", category: "for men", price: 450, stock: 7, image: "images/men_chrome.png" },
    { id: 8, name: "Rogue Element", category: "for men", price: 360, stock: 1, image: "images/men_rogue.png" },
    { id: 9, name: "Apex Flow", category: "for men", price: 340, stock: 9, image: "images/men_apex.png" },
    { id: 10, name: "Obsidian Soul", category: "for men", price: 400, stock: 6, image: "images/men_obsidian.png" },
    { id: 11, name: "Native Pulse", category: "for men", price: 380, stock: 4, image: "images/men_pulse.png" },
    { id: 12, name: "The Architect", category: "for men", price: 420, stock: 3, image: "images/men_architect.png" },

    // --- FOR WOMEN (12 Items) ---
    { id: 13, name: "Wildflower Spirit", category: "for women", price: 280, stock: 15, image: "images/women_wild.png" },
    { id: 14, name: "Luna Bloom", category: "for women", price: 300, stock: 3, image: "images/women_luna.png" },
    { id: 15, name: "Velvet Riot", category: "for women", price: 350, stock: 7, image: "images/women_velvet.png" },
    { id: 16, name: "Ethereal Aura", category: "for women", price: 320, stock: 10, image: "images/women_ethereal.png" },
    { id: 17, name: "Neon Muse", category: "for women", price: 380, stock: 5, image: "images/women_neon.png" },
    { id: 18, name: "Golden Hour", category: "for women", price: 320, stock: 8, image: "images/women_golden.png" },
    { id: 19, name: "Femme Force", category: "for women", price: 340, stock: 11, image: "images/women_force.png" },
    { id: 20, name: "Cosmic Charm", category: "for women", price: 320, stock: 6, image: "images/women_cosmic.png" },
    { id: 21, name: "Petal & Paper", category: "for women", price: 280, stock: 9, image: "images/women_petal.png" },
    { id: 22, name: "Electric Honey", category: "for women", price: 360, stock: 2, image: "images/women_honey.png" },
    { id: 23, name: "Serene State", category: "for women", price: 300, stock: 14, image: "images/women_serene.png" },
    { id: 24, name: "Indigo Dream", category: "for women", price: 320, stock: 9, image: "images/women_indigo.png" },

    // --- UNISEX / JACKETS (12 Items) ---
    { id: 25, name: "Midnight Bomber", category: "unisex", price: 850, stock: 4, image: "images/unisex_bomber.png" },
    { id: 26, name: "Stellar Scout", category: "unisex", price: 550, stock: 10, image: "images/unisex_hoodie.png" },
    { id: 27, name: "Pixel Windbreaker", category: "unisex", price: 750, stock: 6, image: "images/unisex_windbreaker.png" },
    { id: 28, name: "Apex Quarter-Zip", category: "unisex", price: 520, stock: 8, image: "images/unisex_zip.png" },
    { id: 29, name: "Wild Sherpa", category: "unisex", price: 950, stock: 2, image: "images/unisex_sherpa.png" },
    { id: 30, name: "Urban Edge Crew", category: "unisex", price: 480, stock: 12, image: "images/unisex_crewneck.png" },
    { id: 31, name: "Titan Varsity", category: "unisex", price: 1100, stock: 2, image: "images/unisex_varsity.png" },
    { id: 32, name: "Jungle Fleece", category: "unisex", price: 450, stock: 15, image: "images/unisex_fleece.png" },
    { id: 33, name: "Rocket Puffer", category: "unisex", price: 1250, stock: 5, image: "images/unisex_puffer.png" },
    { id: 34, name: "Doodle Anorak", category: "unisex", price: 680, stock: 7, image: "images/unisex_anorak.png" },
    { id: 35, name: "Berry Track", category: "unisex", price: 600, stock: 4, image: "images/unisex_track.png" },
    { id: 36, name: "Nomad Denim", category: "unisex", price: 900, stock: 3, image: "images/unisex_denim.png" }
];

let cart = [];

// 2. INITIALIZE STORE & DEMO DATA
function initApp() {
    let existingOrders = JSON.parse(localStorage.getItem('he_orders'));
    
    if (!existingOrders || existingOrders.length === 0) {
        const firstNames = ["James", "Emma", "Michael", "Sophia", "William", "Olivia", "David", "Mia", "Noah", "Charlotte"];
        const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Miller", "Davis", "Garcia"];
        const designs = ["Urban Echo", "Midnight Bomber", "Luna Bloom", "Titan Varsity", "Apex Flow"];
        
        let demoOrders = [];
        const today = new Date();

        for (let i = 1; i <= 65; i++) {
            let orderDate = new Date();
            if (i <= 8) { orderDate = today; } 
            else if (i <= 45) { orderDate.setDate(today.getDate() - Math.floor(Math.random() * 20)); } 
            else { orderDate.setMonth(today.getMonth() - 1); } 

            const fName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const lName = lastNames[Math.floor(Math.random() * lastNames.length)];

            demoOrders.push({
                id: "ORD-" + (7000 + i),
                customer: `${fName} ${lName}`,
                items: designs[Math.floor(Math.random() * designs.length)],
                total: [350, 850, 1100, 420][Math.floor(Math.random() * 4)],
                date: orderDate.toISOString().split('T')[0],
                address: "USA Shipping Blvd",
                email: `${fName.toLowerCase()}@email.com`
            });
        }
        localStorage.setItem('he_orders', JSON.stringify(demoOrders));
    }
    renderShirts(products);
}

// 3. STOREFRONT LOGIC
function renderShirts(data) {
    const grid = document.getElementById('productGrid');
    if(!grid) return;
    grid.innerHTML = data.map(p => `
        <div class="card" onclick="openModal('${p.name}', ${p.price}, '${p.image}')">
            <img src="${p.image}" onerror="this.src='https://placehold.co/300x300?text=${p.name}'">
            <h3>${p.name}</h3>
            <p>₱${p.price.toLocaleString()}.00</p>
            <p style="font-size:11px; color:${p.stock <= 3 ? 'red' : 'green'}; font-weight:bold;">STOCK: ${p.stock}</p>
            <button class="add-btn">VIEW DETAILS</button>
        </div>
    `).join('');
}

function openModal(name, price, img) {
    document.getElementById('modalDetails').innerHTML = `
        <img src="${img}" style="width:100%; max-height:250px; object-fit:contain;" onerror="this.src='https://placehold.co/300x300?text=Shirt'">
        <h2 style="margin-top:15px;">${name}</h2>
        <h3>₱${price.toLocaleString()}.00</h3>
        <button class="add-btn" onclick="addToCart('${name}', ${price})">ADD TO BAG</button>
    `;
    document.getElementById('productModal').style.display = "block";
}

function addToCart(name, price) {
    cart.push({name, price});
    document.getElementById('cartCount').innerText = cart.length;
    updateCartUI();
    alert(name + " added to bag!");
}

function updateCartUI() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartItemsList').innerHTML = cart.map(i => `<p style="border-bottom:1px solid #eee; padding:5px;">${i.name} - ₱${i.price}</p>`).join('');
    document.getElementById('cartTotal').innerText = "Total: ₱" + total.toLocaleString() + ".00";
}

// 4. ADMIN TAB SYSTEM (FIXED)
function showTab(tabId) {
    // Tago-on tanang tabs
    const tabs = document.querySelectorAll('.admin-tab');
    tabs.forEach(tab => tab.style.display = 'none');

    // Ipakita ang napili nga tab
    document.getElementById(tabId).style.display = 'block';

    // Refresh content base sa tab
    if(tabId === 'stockTab') renderStockAdmin();
    if(tabId === 'salesTab') loadAdminDashboard();
}

function renderStockAdmin() {
    const tableBody = document.getElementById('adminStockTable');
    if(!tableBody) return;
    tableBody.innerHTML = products.map(p => `
        <tr style="border-bottom: 1px solid #eee;">
            <td style="padding:10px;">${p.name}</td>
            <td style="font-weight:bold; color:${p.stock <=3 ? 'red' : 'black'}">${p.stock}</td>
            <td><input type="number" id="qty-${p.id}" style="width:60px; padding:5px;" placeholder="0"></td>
            <td><button onclick="updateStock(${p.id})" class="add-btn" style="padding:5px 10px; width:auto;">UPDATE</button></td>
        </tr>
    `).join('');
}

function updateStock(id) {
    const input = document.getElementById(`qty-${id}`);
    const val = parseInt(input.value);
    if(isNaN(val)) return alert("Butangi og number, boss!");

    const prod = products.find(p => p.id === id);
    prod.stock += val;
    input.value = "";
    renderStockAdmin(); // Refresh table
    renderShirts(products); // Refresh storefront stocks
    alert(`${prod.name} stock updated!`);
}

// 5. LOGIN & DASHBOARD
function checkLogin() {
    const u = document.getElementById('adminUser').value;
    const p = document.getElementById('adminPass').value;
    if (u === "admin" && p === "admin") {
        document.getElementById('loginModal').style.display = "none";
        document.getElementById('storeLayout').style.display = "none";
        document.getElementById('adminPanel').style.display = "block";
        loadAdminDashboard();
    } else { alert("Sayop imong login details!"); }
}

function loadAdminDashboard() {
    const orders = JSON.parse(localStorage.getItem('he_orders')) || [];
    const today = new Date().toISOString().split('T')[0];
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    let dSales = 0, mSales = 0, ySales = 0, tSales = 0;

    orders.forEach(o => {
        const oDate = new Date(o.date);
        tSales += o.total;
        if (o.date === today) dSales += o.total;
        if (oDate.getMonth() === currentMonth && oDate.getFullYear() === currentYear) mSales += o.total;
        if (oDate.getFullYear() === currentYear) ySales += o.total;
    });

    document.getElementById('dailySales').innerText = "₱" + dSales.toLocaleString();
    document.getElementById('monthlySales').innerText = "₱" + mSales.toLocaleString();
    document.getElementById('yearlySales').innerText = "₱" + ySales.toLocaleString();
    document.getElementById('totalSales').innerText = "₱" + tSales.toLocaleString();

    document.getElementById('adminOrdersTable').innerHTML = orders.slice().reverse().map(o => `
        <tr onclick="viewOrderDetails('${o.id}')" style="cursor:pointer">
            <td style="color:blue; text-decoration:underline;">${o.id}</td>
            <td>${o.customer}</td>
            <td>${o.items}</td>
            <td>₱${o.total.toLocaleString()}</td>
            <td><span class="status-tag">PENDING</span></td>
        </tr>
    `).join('');
}

function viewOrderDetails(id) {
    const order = (JSON.parse(localStorage.getItem('he_orders')) || []).find(o => o.id === id);
    if (order) {
        document.getElementById('modalDetails').innerHTML = `
            <h3>ORDER INFO: ${order.id}</h3>
            <p><strong>Customer:</strong> ${order.customer}</p>
            <p><strong>Address:</strong> ${order.address}</p>
            <p><strong>Design:</strong> ${order.items}</p>
            <h2 style="color:green; margin-top:10px;">Paid: ₱${order.total.toLocaleString()}</h2>
            <button class="add-btn" onclick="document.getElementById('productModal').style.display='none'">CLOSE</button>
        `;
        document.getElementById('productModal').style.display = "block";
    }
}

// 6. CHECKOUT FORM
document.getElementById('checkoutForm').onsubmit = function(e) {
    e.preventDefault();
    if(cart.length === 0) return alert("Walay sulod imong bag!");

    const name = document.getElementById('custName').value;
    const newOrder = {
        id: "ORD-" + Math.floor(Math.random() * 9000 + 1000),
        customer: name,
        items: cart.map(i => i.name).join(", "),
        total: cart.reduce((s, i) => s + i.price, 0),
        date: new Date().toISOString().split('T')[0],
        address: document.getElementById('custAddr').value
    };

    let orders = JSON.parse(localStorage.getItem('he_orders')) || [];
    orders.push(newOrder);
    localStorage.setItem('he_orders', JSON.stringify(orders));

    alert("Salamat! Order Placed Successfully!");
    cart = [];
    document.getElementById('cartCount').innerText = "0";
    document.getElementById('checkoutModal').style.display = "none";
    renderShirts(products);
};

// 7. UI CONTROLS
function closeAdmin() {
    document.getElementById('adminPanel').style.display = "none";
    document.getElementById('storeLayout').style.display = "grid";
}

document.getElementById('adminToggleBtn').onclick = () => document.getElementById('loginModal').style.display='block';
document.getElementById('cartBtn').onclick = () => document.getElementById('cartModal').style.display='block';
document.getElementById('proceedCheckout').onclick = () => {
    document.getElementById('cartModal').style.display='none';
    document.getElementById('checkoutModal').style.display='block';
};

window.onclick = (e) => { 
    if (e.target.className === 'modal' || e.target.classList.contains('close-btn')) {
        document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    }
};

// RUN
initApp();
