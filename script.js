const defaultProducts = [
    { id: 1, name: "Urban Echo", category: "for men", price: 350, stock: 10, image: "images/Men_echo.png" },
    { id: 2, name: "Midnight Renegade", category: "for men", price: 380, stock: 5, image: "images/men_renegade.png" },
    { id: 3, name: "Iron & Ink", category: "for men", price: 350, stock: 12, image: "images/men_iron.png" },
    { id: 4, name: "Nomad Theory", category: "for men", price: 420, stock: 8, image: "images/men_nomad.png" },
    { id: 5, name: "Vantage Point", category: "for men", price: 320, stock: 15, image: "images/men_vantage.png" },
    { id: 6, name: "Static Signal", category: "for men", price: 380, stock: 2, image: "images/men_static.png" },
    { id: 7, name: "Chrome Horizon", category: "for men", price: 450, stock: 7, image: "images/men_chrome.png" },
    { id: 8, name: "Rogue Element", category: "for men", price: 360, stock: 4, image: "images/men_rogue.png" },
    { id: 9, name: "Apex Flow", category: "for men", price: 340, stock: 9, image: "images/men_apex.png" },
    { id: 10, name: "Obsidian Soul", category: "for men", price: 400, stock: 6, image: "images/men_obsidian.png" },
    { id: 11, name: "Native Pulse", category: "for men", price: 380, stock: 3, image: "images/men_pulse.png" },
    { id: 12, name: "The Architect", category: "for men", price: 420, stock: 5, image: "images/men_architect.png" },
    { id: 13, name: "Wildflower Spirit", category: "for women", price: 280, stock: 15, image: "images/women_wild.png" },
    { id: 14, name: "Luna Bloom", category: "for women", price: 300, stock: 4, image: "images/women_luna.png" },
    { id: 15, name: "Velvet Riot", category: "for women", price: 350, stock: 7, image: "images/women_velvet.png" },
    { id: 16, name: "Ethereal Aura", category: "for women", price: 320, stock: 10, image: "images/women_ethereal.png" },
    { id: 17, name: "Neon Muse", category: "for women", price: 380, stock: 5, image: "images/women_neon.png" },
    { id: 18, name: "Golden Hour", category: "for women", price: 320, stock: 8, image: "images/women_golden.png" },
    { id: 19, name: "Femme Force", category: "for women", price: 340, stock: 11, image: "images/women_force.png" },
    { id: 20, name: "Cosmic Charm", category: "for women", price: 320, stock: 6, image: "images/women_cosmic.png" },
    { id: 21, name: "Petal & Paper", category: "for women", price: 280, stock: 9, image: "images/women_petal.png" },
    { id: 22, name: "Electric Honey", category: "for women", price: 360, stock: 3, image: "images/women_honey.png" },
    { id: 23, name: "Serene State", category: "for women", price: 300, stock: 14, image: "images/women_serene.png" },
    { id: 24, name: "Indigo Dream", category: "for women", price: 320, stock: 9, image: "images/women_indigo.png" },
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

const getInv = () => JSON.parse(localStorage.getItem('he_inv')) || (localStorage.setItem('he_inv', JSON.stringify(defaultProducts)), defaultProducts);
const saveInv = (d) => localStorage.setItem('he_inv', JSON.stringify(d));
const getRevs = () => JSON.parse(localStorage.getItem('he_revs')) || [];
const saveRevs = (d) => localStorage.setItem('he_revs', JSON.stringify(d));

function generateFakeReviews() {
    const names = ["Jo****n D.", "Ma****a S.", "Pe****o G.", "Li****a R.", "Em****n L.", "Ka****n V.", "Ro****t B.", "Je****a C."];
    const goodTexts = ["Amazing quality!", "Perfect sublimation print.", "Fast shipping.", "Cool design.", "Very comfortable fabric.", "Will order again!", "Highly recommended!"];
    const badTexts = ["A bit tight for me.", "Shipping took too long.", "Color is slightly different from the picture.", "It's okay.", "Not what I expected but decent."];
    
    let revs = [];
    getInv().forEach(p => {
        let numRevs = Math.floor(Math.random() * 10) + 5; 
        for (let i = 0; i < numRevs; i++) {
            let chance = Math.random();
            let stars = 5;
            if(chance < 0.05) stars = 1;
            else if(chance < 0.1) stars = 2;
            else if(chance < 0.25) stars = 3;
            else if(chance < 0.5) stars = 4;

            let text = stars >= 4 ? goodTexts[Math.floor(Math.random() * goodTexts.length)] : badTexts[Math.floor(Math.random() * badTexts.length)];
            
            let d = new Date();
            d.setDate(d.getDate() - Math.floor(Math.random() * 180));
            let dateStr = d.toISOString().split('T')[0];

            revs.push({ id: p.id, user: names[Math.floor(Math.random() * names.length)], stars: stars, text: text, pName: p.name, date: dateStr });
        }
    });
    saveRevs(revs);
}

let existingRevs = getRevs();
if (existingRevs.length < 10 || (existingRevs.length > 0 && !existingRevs[0].date)) {
    generateFakeReviews();
}

let cart = [];
let curId = null;
let discount = 0;

function initApp() {
    render(getInv());
    initReviewDashboard(); 
    
    setTimeout(() => { 
        if (!sessionStorage.getItem('promoShown')) {
            let promo = document.getElementById('promoModal');
            if(promo) promo.style.display = 'flex'; 
            sessionStorage.setItem('promoShown', 'true');
        }
    }, 500);
}

function render(data) {
    const grid = document.getElementById('productGrid');
    if(!grid) return;
    grid.innerHTML = data.map(p => `
        <div class="card">
            <img src="${p.image}" onerror="this.src='https://placehold.co/300x300?text=${p.name}'">
            <h4>${p.name}</h4><p>₱${p.price}</p>
            <p style="font-size:10px; color:${p.stock < 3 ? 'red' : 'green'}">Stock: ${p.stock}</p>
            <button class="add-btn" onclick="openP(${p.id})">VIEW</button>
        </div>`).join('');
}

function filterCat(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filtered = (cat === 'all') ? getInv() : getInv().filter(p => p.category === cat);
    render(filtered);
}

function openP(id) {
    const p = getInv().find(x => x.id === id);
    curId = id;
    document.getElementById('modalDetails').innerHTML = `
        <img src="${p.image}" onerror="this.src='https://placehold.co/300x300?text=${p.name}'">
        <div style="text-align:left;">
            <p style="color:#888; font-size:12px;">${p.category.toUpperCase()}</p>
            <h2 style="margin:5px 0;">${p.name}</h2>
            <p style="font-size:22px; font-weight:bold; color:#000; margin-bottom:15px;">₱${p.price}</p>
            <p style="font-size:13px; margin-bottom:20px;">Availability: <b>${p.stock} in stock</b></p>
            <button class="add-btn" onclick="addToCart('${p.name}', ${p.price})">ADD TO BAG</button>
        </div>`;
    renderReviews();
    document.getElementById('productModal').style.display = 'block';
}

function addToCart(n, p) {
    let inv = getInv();
    if (inv.find(x => x.name === n).stock <= 0) return alert("Sold out!");
    cart.push({ name: n, price: p });
    document.getElementById('cartCount').innerText = cart.length;
    closeModals();
}

const proceedBtn = document.getElementById('proceedCheckout');
if (proceedBtn) {
    proceedBtn.onclick = () => {
        if (cart.length === 0) return alert("Empty Bag!");
        document.getElementById('cartModal').style.display = 'none';
        document.getElementById('checkoutItemsList').innerHTML = cart.map(i => `<div style="display:flex;justify-content:space-between;padding:5px 0;"><span>${i.name}</span><span>₱${i.price}</span></div>`).join('');
        updateFinalTotal();
        document.getElementById('checkoutModal').style.display = 'block';
    };
}

function applyVoucher() {
    const input = document.getElementById('voucherInput').value.trim().toUpperCase();
    const subtotal = cart.reduce((s, i) => s + i.price, 0);
    
    if (input === "HEFREE50") {
        discount = subtotal * 0.5; 
        document.getElementById('voucherMsg').innerText = "🎟️ 50% OFF Applied!"; 
        document.getElementById('voucherMsg').style.color = "green";
    } else if (input === "") {
        discount = 0;
        document.getElementById('voucherMsg').innerText = "";
    } else {
        discount = 0; 
        document.getElementById('voucherMsg').innerText = "❌ Invalid Voucher"; 
        document.getElementById('voucherMsg').style.color = "red";
    }
    updateFinalTotal();
}

function updateFinalTotal() {
    const subtotal = cart.reduce((s, i) => s + i.price, 0);
    const shippingFee = subtotal > 0 ? 50 : 0;
    const grandTotal = subtotal + shippingFee - discount;

    const finalDisplay = document.getElementById('finalPriceDisplay');
    if (finalDisplay) {
        finalDisplay.innerText = "₱" + grandTotal.toLocaleString();
    }
}

const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) {
    checkoutForm.onsubmit = (e) => {
        e.preventDefault();
        
        if(!document.getElementById('custName').value || !document.getElementById('custAddr').value) {
            return alert("Please fill up all required fields!");
        }

        let inv = getInv();
        cart.forEach(c => { 
            let p = inv.find(x => x.name === c.name); 
            if (p) p.stock--; 
        });
        saveInv(inv);
        
        let ords = JSON.parse(localStorage.getItem('he_ords')) || [];
        ords.push({ 
            id: Date.now().toString().slice(-4), 
            name: document.getElementById('custName').value, 
            total: document.getElementById('finalPriceDisplay').innerText,
            date: new Date().toLocaleString()
        });
        localStorage.setItem('he_ords', JSON.stringify(ords));
        
        alert("🎉 Order Success! Thank you for your purchase."); 
        location.reload();
    };
}

let reviewMode = 'store'; 
let reviewStarFilter = 'all'; 
let reviewChartIns = null;

function initReviewDashboard() {
    const select = document.getElementById('reviewItemSelect');
    if(select) {
        select.innerHTML = getInv().map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    }
    updateReviewDashboard();
}

function setReviewMode(mode) {
    reviewMode = mode;
    document.getElementById('btnStoreView').className = mode === 'store' ? 'add-btn active-mode' : 'add-btn inactive-mode';
    document.getElementById('btnItemView').className = mode === 'item' ? 'add-btn active-mode' : 'add-btn inactive-mode';
    document.getElementById('reviewItemSelect').style.display = mode === 'item' ? 'inline-block' : 'none';
    updateReviewDashboard();
}

function setStarFilter(star, btn) {
    reviewStarFilter = star;
    document.querySelectorAll('.filter-star').forEach(b => b.classList.remove('active-star'));
    btn.classList.add('active-star');
    updateReviewDashboard();
}

function updateReviewDashboard() {
    let allRevs = getRevs();
    
    if (reviewMode === 'item') {
        let selectedId = parseInt(document.getElementById('reviewItemSelect').value);
        allRevs = allRevs.filter(r => r.id === selectedId);
    }

    let total = allRevs.length;
    let avg = 0;
    let starCounts = [0, 0, 0, 0, 0]; 
    if (total > 0) {
        let sum = 0;
        allRevs.forEach(r => {
            sum += r.stars;
            starCounts[r.stars - 1]++;
        });
        avg = (sum / total).toFixed(1);
    }

    document.getElementById('avgRatingDisplay').innerText = avg;
    document.getElementById('totalReviewCount').innerText = total + " Reviews";
    document.getElementById('avgStarsDisplay').innerText = '★'.repeat(Math.round(avg)) + '☆'.repeat(5 - Math.round(avg));

    drawRatingDashboardChart(starCounts);

    let displayRevs = allRevs;
    if (reviewStarFilter !== 'all') {
        displayRevs = displayRevs.filter(r => r.stars === parseInt(reviewStarFilter));
    }

    displayRevs.sort((a,b) => new Date(b.date) - new Date(a.date));

    const list = document.getElementById('advancedReviewList');
    if(list) {
        if(displayRevs.length === 0) {
            list.innerHTML = "<p style='text-align:center; padding: 20px; color:#888;'>No reviews match your filter.</p>";
        } else {
            list.innerHTML = displayRevs.map(r => `
                <div class="gen-review-card">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
                        <b>${r.user}</b>
                        <span style="color:#ee4d2d; font-size:16px;">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</span>
                    </div>
                    <p style="font-size:11px; color:#888; margin-bottom:10px;">Variation: ${r.pName} | Date: ${r.date}</p>
                    <p style="color:#333;">"${r.text}"</p>
                </div>
            `).join('');
        }
    }
}

function drawRatingDashboardChart(counts) {
    const ctx = document.getElementById('ratingChart');
    if(!ctx) return;
    if(reviewChartIns) reviewChartIns.destroy();

    let displayCounts = [...counts].reverse(); 
    let labels = ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'];
    let colors = ['#ee4d2d', '#ff7875', '#ffa940', '#ffd666', '#d9d9d9'];

    reviewChartIns = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{ data: displayCounts, backgroundColor: colors, borderRadius: 4 }]
        },
        options: {
            indexAxis: 'y', 
            responsive: true,
            maintainAspectRatio: false,
            scales: { x: { display: false }, y: { grid: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });
}

function renderReviews() {
    const revs = getRevs().filter(x => x.id === curId);
    document.getElementById('reviewList').innerHTML = revs.length ? revs.map(x => `<div style="margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;"><b>${x.user}</b> <span style="color:#ee4d2d;">${'★'.repeat(x.stars)}</span><br><span style="font-size:10px;color:#888">${x.date}</span><p>${x.text}</p></div>`).join('') : "No reviews yet.";
}

function closeModals() { document.querySelectorAll('.modal').forEach(m => m.style.display = 'none'); }
function closeOutside(e) { if (e.target.classList.contains('modal')) closeModals(); }
function openContact() { document.getElementById('contactModal').style.display = 'block'; }
function closePromo() { document.getElementById('promoModal').style.display = 'none'; }

function openAbout(section) {
    let content = '';
    if (section === 'company') content = '<h2>🏢 About Company</h2><p style="margin-top:10px;">H & E GRAPHIC TEES provides premium sublimation prints and high-quality apparel.</p>';
    if (section === 'products') content = '<h2>👕 About Products</h2><p style="margin-top:10px;">Our products feature premium dry-fit materials perfect for everyday wear.</p>';
    if (section === 'owner') content = '<h2>👤 About Owner</h2><p style="margin-top:10px;">Dedicated to bringing the best graphic designs to life through top-tier printing.</p>';
    document.getElementById('aboutContent').innerHTML = content;
    document.getElementById('aboutModal').style.display = 'block';
}

setTimeout(() => {
    const cartBtn = document.getElementById('cartBtn');
    if(cartBtn) {
        cartBtn.onclick = () => {
            const cartList = document.getElementById('cartItemsList');
            if (cart.length === 0) cartList.innerHTML = "<p>Your bag is empty.</p>";
            else cartList.innerHTML = cart.map(i => `<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #eee;"><span>${i.name}</span><span>₱${i.price}</span></div>`).join('');
            document.getElementById('cartTotalDisplay').innerText = "Total: ₱" + cart.reduce((s, i) => s + i.price, 0);
            document.getElementById('cartModal').style.display = 'block';
        };
    }
    const searchInput = document.getElementById('shirtSearch');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = getInv().filter(p => p.name.toLowerCase().includes(term) || p.category.includes(term));
            render(filtered);
        });
    }
}, 500);

function checkLogin() {
    if (document.getElementById('adminUser').value === 'admin' && document.getElementById('adminPass').value === 'admin') {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('storeLayout').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        loadAdmin();
    } else alert("Invalid Username or Password!");
}

function closeAdmin() {
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('storeLayout').style.display = 'grid'; 
}

function showTab(tabId) {
    document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

function addS(id) {
    let inv = getInv(); inv.find(x => x.id === id).stock += 10;
    saveInv(inv); loadAdmin(); render(getInv());
}

function loadAdmin() {
    const fakeTotalOrders = 15842;
    const fakeTotalSales = 4850000;
    document.getElementById('totalOrders').innerText = fakeTotalOrders.toLocaleString();
    document.getElementById('totalSales').innerText = "₱" + fakeTotalSales.toLocaleString();

    const o = JSON.parse(localStorage.getItem('he_ords')) || [];
    const fakeOrdersTable = `<tr><td style="padding:10px;">#9928</td><td>Maria Clara</td><td>₱1,250</td></tr><tr><td style="padding:10px;">#9927</td><td>Juan Dela Cruz</td><td>₱850</td></tr><tr><td style="padding:10px;">#9926</td><td>Pedro Penduko</td><td>₱2,100</td></tr>`;
    document.getElementById('adminOrdersBody').innerHTML = fakeOrdersTable + o.map(x => `<tr><td style="padding:10px;">#${x.id}</td><td>${x.name}</td><td>${x.total}</td></tr>`).join('');
    document.getElementById('adminStockTable').innerHTML = `<thead><tr style="text-align:left; color:#888;"><th>Product</th><th>Stock</th><th>Action</th></tr></thead><tbody>` + getInv().map(p => `<tr><td style="padding:10px;">${p.name}</td><td>${p.stock}</td><td><button onclick="addS(${p.id})">+10</button></td></tr>`).join('') + `</tbody>`;

    setTimeout(renderAdminCharts, 200); 
}

let yearlyAdminChartIns = null;
let monthlyAdminChartIns = null;
const adminYearsList = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];
const adminFakeYearlySales = [15000, 22000, 38000, 45000, 60000, 85000, 110000, 150000, 210000, 280000, 350000, 480000, 620000, 850000, 1100000, 1450000];
const adminMonthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const adminMonthlyData = {};
adminYearsList.forEach((year, index) => {
    let base = adminFakeYearlySales[index] / 12;
    adminMonthlyData[year] = adminMonthsList.map(() => Math.floor(base + (Math.random() * (base * 0.4) * 2 - (base * 0.4))));
});

function renderAdminCharts() {
    const select = document.getElementById('yearSelect');
    if (!select) return;
    select.innerHTML = ''; 
    adminYearsList.forEach(y => {
        let opt = document.createElement('option');
        opt.value = y; opt.innerText = y;
        if (y === '2026') opt.selected = true; 
        select.appendChild(opt);
    });

    const ctxY = document.getElementById('yearlyChart');
    if (ctxY) {
        if (yearlyAdminChartIns) yearlyAdminChartIns.destroy();
        yearlyAdminChartIns = new Chart(ctxY.getContext('2d'), {
            type: 'line',
            data: { labels: adminYearsList, datasets: [{ label: 'Yearly Sales (₱)', data: adminFakeYearlySales, borderColor: '#000', backgroundColor: 'rgba(0,0,0,0.1)', borderWidth: 3, fill: true, tension: 0.3, pointBackgroundColor: '#ee4d2d' }] },
            options: { responsive: true, scales: { y: { beginAtZero: true } } }
        });
    }
    updateAdminMonthlyChart();
}

function updateAdminMonthlyChart() {
    const select = document.getElementById('yearSelect');
    const ctxM = document.getElementById('adminMonthlyChart');
    if (!select || !ctxM) return;

    const selectedYear = select.value;
    const dataForYear = adminMonthlyData[selectedYear];
    
    if (monthlyAdminChartIns) monthlyAdminChartIns.destroy();
    monthlyAdminChartIns = new Chart(ctxM.getContext('2d'), {
        type: 'bar',
        data: { labels: adminMonthsList, datasets: [{ label: `Monthly Sales for ${selectedYear} (₱)`, data: dataForYear, backgroundColor: '#ee4d2d', borderRadius: 4 }] },
        options: { responsive: true, scales: { y: { beginAtZero: true } } }
    });
}

function openFooterDetail(title) {
    let content = '';
    
    switch(title) {
        case 'Help Centre':
            content = `
                <h2 style="color:#ee4d2d">❓ Help Centre</h2>
                <p style="margin-top:15px; line-height:1.6;">Having trouble with your order? Don't worry! You can message us via Live Chat or email us at <b>support@hetees.com</b>. We are active from 8AM to 8PM daily.</p>
            `;
            break;
        case 'Payment Methods':
            content = `
                <h2 style="color:#ee4d2d">💳 Payment Methods</h2>
                <p style="margin-top:15px;">At H & E Tees, payment is easy. We accept:</p>
                <ul style="text-align:left; margin-top:10px; padding-left:20px;">
                    <li><b>Cash on Delivery (COD)</b> - Pay upon item arrival.</li>
                    <li><b>GCash / Maya</b> - Scan the QR code during checkout.</li>
                    <li><b>QRPH</b> - Compatible with any banking app.</li>
                </ul>
            `;
            break;
        case 'Order Tracking':
            content = `
                <h2 style="color:#ee4d2d">🚚 Order Tracking</h2>
                <p style="margin-top:15px;">Once your shirt is shipped, we will send an <b>SMS or Email</b> with a tracking link. You can track your order via J&T or Flash Express.</p>
            `;
            break;
        case 'Free Shipping':
            content = `
                <h2 style="color:#ee4d2d">🔥 Free Shipping</h2>
                <p style="margin-top:15px;">Want free shipping? Simple! Just ensure your order reaches <b>₱1,500 and above</b> to automatically waive the shipping fee at checkout!</p>
            `;
            break;
        case 'Return & Refund':
            content = `
                <h2 style="color:#ee4d2d">🔄 Return & Refund</h2>
                <p style="margin-top:15px;">If there is print damage or an incorrect size received:
                <br><br>1. Do not wash the shirt yet.
                <br>2. Take a photo of the receipt and the item.
                <br>3. Message us within <b>7 days</b> so we can replace it immediately.</p>
            `;
            break;
        case 'Shop Policies':
            content = `
                <h2 style="color:#ee4d2d">📜 Shop Policies</h2>
                <p style="margin-top:15px;">No cancellation of orders once the design has been printed (as products are made-to-order). Please confirm your size using our Size Chart.</p>
            `;
            break;
        case 'Privacy Policy':
            content = `
                <h2 style="color:#ee4d2d">🔒 Privacy Policy</h2>
                <p style="margin-top:15px;">Your address and contact number are safe with us. We only use this information for delivery purposes and do not sell it to third parties.</p>
            `;
            break;
        case 'Flash Deals':
            content = `
                <h2 style="color:#ee4d2d">⚡ Flash Deals</h2>
                <p style="margin-top:15px;">Watch out for our Flash Sales every 15th and end of the month! Selected designs drop as low as <b>₱250!</b></p>
            `;
            break;
    }

    const modalContent = document.getElementById('aboutContent');
    const modal = document.getElementById('aboutModal');
    
    if (modalContent && modal) {
        modalContent.innerHTML = content;
        modal.style.display = 'block';
    }
}
