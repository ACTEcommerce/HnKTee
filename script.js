const products = [
    { id: 1, name: "Urban Echo", category: "for men", price: 32, image: "images/Men_echo.png" },
    { id: 2, name: "Midnight Renegade", category: "for men", price: 38, image: "images/men_renegade.png" },
    { id: 3, name: "Iron & Ink", category: "for men", price: 35, image: "images/men_iron.png" },
    { id: 4, name: "Nomad Theory", category: "for men", price: 42, image: "images/men_nomad.png" },
    { id: 5, name: "Vantage Point", category: "for men", price: 32, image: "images/men_vantage.png" },
    { id: 6, name: "Static Signal", category: "for men", price: 38, image: "images/men_static.png" },
    { id: 7, name: "Chrome Horizon", category: "for men", price: 45, image: "images/men_chrome.png" },
    { id: 8, name: "Rogue Element", category: "for men", price: 36, image: "images/men_rogue.png" },
    { id: 9, name: "Apex Flow", category: "for men", price: 34, image: "images/men_apex.png" },
    { id: 10, name: "Obsidian Soul", category: "for men", price: 40, image: "images/men_obsidian.png" },
    { id: 11, name: "Native Pulse", category: "for men", price: 38, image: "images/men_pulse.png" },
    { id: 12, name: "The Architect", category: "for men", price: 42, image: "images/men_architect.png" },
    { id: 13, name: "Wildflower Spirit", category: "for women", price: 28, image: "images/women_wild.png" },
    { id: 14, name: "Luna Bloom", category: "for women", price: 30, image: "images/women_luna.png" },
    { id: 15, name: "Velvet Riot", category: "for women", price: 35, image: "images/women_velvet.png" },
    { id: 16, name: "Ethereal Aura", category: "for women", price: 32, image: "images/women_ethereal.png" },
    { id: 17, name: "Neon Muse", category: "for women", price: 38, image: "images/women_neon.png" },
    { id: 18, name: "Golden Hour", category: "for women", price: 32, image: "images/women_golden.png" },
    { id: 19, name: "Femme Force", category: "for women", price: 34, image: "images/women_force.png" },
    { id: 20, name: "Cosmic Charm", category: "for women", price: 32, image: "images/women_cosmic.png" },
    { id: 21, name: "Petal & Paper", category: "for women", price: 28, image: "images/women_petal.png" },
    { id: 22, name: "Electric Honey", category: "for women", price: 36, image: "images/women_honey.png" },
    { id: 23, name: "Serene State", category: "for women", price: 30, image: "images/women_serene.png" },
    { id: 24, name: "Indigo Dream", category: "for women", price: 32, image: "images/women_indigo.png" },
    { id: 25, name: "Midnight Bomber", category: "unisex", price: 85, image: "images/unisex_bomber.png" },
    { id: 26, name: "Stellar Scout Hoodie", category: "unisex", price: 55, image: "images/unisex_hoodie.png" },
    { id: 27, name: "Pixel Tech Windbreaker", category: "unisex", price: 75, image: "images/unisex_windbreaker.png" },
    { id: 28, name: "Apex Quarter-Zip", category: "unisex", price: 52, image: "images/unisex_zip.png" },
    { id: 29, name: "Wild One Sherpa", category: "unisex", price: 95, image: "images/unisex_sherpa.png" },
    { id: 30, name: "Urban Edge Crewneck", category: "unisex", price: 48, image: "images/unisex_crewneck.png" },
    { id: 31, name: "Titan Varsity Jacket", category: "unisex", price: 110, image: "images/unisex_varsity.png" },
    { id: 32, name: "Jungle Jamboree Fleece", category: "unisex", price: 45, image: "images/unisex_fleece.png" },
    { id: 33, name: "Rocket Riot Puffer", category: "unisex", price: 125, image: "images/unisex_puffer.png" },
    { id: 34, name: "Doodle Dream Anorak", category: "unisex", price: 68, image: "images/unisex_anorak.png" },
    { id: 35, name: "Berry Sweet Track Jacket", category: "unisex", price: 60, image: "images/unisex_track.png" },
    { id: 36, name: "Nomad Denim Jacket", category: "unisex", price: 90, image: "images/unisex_denim.png" }
];

let cart = [];
const productGrid = document.getElementById('productGrid');
const sortOrder = document.getElementById('sortOrder');
const searchInput = document.getElementById('shirtSearch');

// RENDER WITH STAGGERED DELAY
function renderShirts(data) {
    productGrid.innerHTML = data.map((shirt, index) => `
        <div class="card" style="animation-delay: ${index * 0.05}s" onclick="openModal('${shirt.name}', ${shirt.price}, '${shirt.category}', '${shirt.image}')">
            <img src="${shirt.image}" onerror="this.src='https://placehold.co/300x300?text=Check+Path'">
            <h3>${shirt.name}</h3>
            <p>$${shirt.price}.00</p>
            <button class="add-btn">View Details</button>
        </div>
    `).join('');
}

// SMART FILTER & SORT
function updateDisplay() {
    let filtered = [...products];
    const activeCat = document.querySelector('.filter-btn.active').dataset.cat;
    const term = searchInput.value.toLowerCase();

    if (activeCat !== 'all') filtered = filtered.filter(p => p.category === activeCat);
    if (term) filtered = filtered.filter(p => p.name.toLowerCase().includes(term));

    if (sortOrder.value === 'low') filtered.sort((a, b) => a.price - b.price);
    if (sortOrder.value === 'high') filtered.sort((a, b) => b.price - a.price);

    renderShirts(filtered);
}

// CART PULSE ANIMATION
function addToCart(name, price) {
    cart.push({ name, price });
    const cartBtn = document.getElementById('cartBtn');
    document.getElementById('cartCount').innerText = cart.length;
    
    cartBtn.classList.add('pulse-anim');
    setTimeout(() => cartBtn.classList.remove('pulse-anim'), 400);

    updateCartUI();
    showToast(`${name} added to cart!`);
}

// TOAST NOTIFICATION
function showToast(msg) {
    const toast = document.createElement('div');
    toast.innerText = msg;
    toast.style.cssText = `position:fixed; bottom:20px; right:20px; background:#000; color:#fff; padding:12px 20px; z-index:5000; animation: fadeInUp 0.3s ease;`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function updateCartUI() {
    const list = document.getElementById('cartItemsList');
    list.innerHTML = cart.length === 0 ? "<p>Empty</p>" : cart.map((item, i) => `
        <div class="cart-item"><span>${item.name}</span><span>$${item.price} <button onclick="removeFromCart(${i})" style="color:red; border:none; background:none; cursor:pointer;">x</button></span></div>
    `).join('');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartTotal').innerText = `Total: $${total}.00`;
}

function removeFromCart(i) { cart.splice(i, 1); updateCartUI(); document.getElementById('cartCount').innerText = cart.length; }

// OPEN PRODUCT MODAL
function openModal(name, price, category, imagePath) {
    document.getElementById('modalDetails').innerHTML = `
        <img src="${imagePath}" style="width:100%; max-height:300px; object-fit:contain; margin-bottom:20px;">
        <h2>${name}</h2>
        <h3 style="margin:15px 0; font-size: 24px;">$${price}.00</h3>
        <button class="add-btn" style="width:100%;" onclick="addToCart('${name}', ${price}); event.stopPropagation();">Add to Cart</button>
    `;
    document.getElementById('productModal').style.display = "block";
}

// LISTENERS
sortOrder.onchange = updateDisplay;
searchInput.oninput = updateDisplay;
document.querySelectorAll('.filter-btn').forEach(btn => btn.onclick = () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateDisplay();
});

document.getElementById('cartBtn').onclick = () => { updateCartUI(); document.getElementById('cartModal').style.display = "block"; };
document.getElementById('contactBtn').onclick = (e) => { e.preventDefault(); document.getElementById('contactModal').style.display = "block"; };
document.getElementById('proceedCheckout').onclick = () => { document.getElementById('checkoutModal').style.display = "block"; document.getElementById('cartModal').style.display = "none"; };

// GLOBAL CLOSE
document.addEventListener('click', (e) => {
    const ids = ['productModal', 'cartModal', 'contactModal', 'checkoutModal'];
    const closeClasses = ['modal', 'close-btn', 'close-cart', 'close-contact', 'close-checkout'];
    if (e.target.className === 'modal' || closeClasses.some(c => e.target.classList.contains(c))) {
        ids.forEach(id => document.getElementById(id).style.display = "none");
    }
});

renderShirts(products);