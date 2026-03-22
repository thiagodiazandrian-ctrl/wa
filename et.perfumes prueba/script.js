// Función para crear SVG de botella de perfume
function createPerfumeImage(color1, color2) {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23${color1};stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23${color2};stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='400' fill='url(%23grad)'/%3E%3Crect x='60' y='20' width='80' height='30' rx='5' fill='%23FFD700' opacity='0.8'/%3E%3Crect x='70' y='50' width='60' height='200' rx='10' fill='%23FFFFFF' opacity='0.3'/%3E%3Cpath d='M 80 50 Q 85 40 100 40 Q 115 40 120 50' fill='%23FFD700'/%3E%3Ccircle cx='100' cy='100' r='15' fill='%23FFFFFF' opacity='0.4'/%3E%3Ctext x='100' y='320' font-size='24' text-anchor='middle' fill='%23000000' font-weight='bold'%3EET%3C/text%3E%3C/svg%3E`;
}

// Perfumes Data con IMÁGENES SVG
const perfumes = [
    // TOP VENTAS
    {
        id: 1,
        name: "Lattafa Khamrah",
        category: "top-ventas",
        price: 84990,
        emoji: "🔥",
        image: createPerfumeImage("D4AF37", "8B4513"),
        description: "Fragancia cálida y especiada"
    },
    {
        id: 2,
        name: "Lattafa Asad",
        category: "top-ventas",
        price: 69990,
        emoji: "🖤",
        image: createPerfumeImage("1a1a1a", "2d2d2d"),
        description: "Perfume intenso y profundo"
    },
    {
        id: 3,
        name: "Lattafa Yara",
        category: "top-ventas",
        price: 79990,
        emoji: "💫",
        image: createPerfumeImage("FF69B4", "FFB6C1"),
        description: "Fragancia sofisticada"
    },
    {
        id: 4,
        name: "Afnan 9PM",
        category: "top-ventas",
        price: 89990,
        emoji: "🌙",
        image: createPerfumeImage("1a1a2e", "16213e"),
        description: "Perfume para la noche"
    },
    {
        id: 5,
        name: "Armaf Club de Nuit Intense Man",
        category: "top-ventas",
        price: 99990,
        emoji: "💎",
        image: createPerfumeImage("4a90e2", "2e5c8a"),
        description: "Fragancia premium intensa"
    },
    {
        id: 6,
        name: "Rasasi Hawas",
        category: "top-ventas",
        price: 89990,
        emoji: "🏜️",
        image: createPerfumeImage("8B6914", "DAA520"),
        description: "Aroma oriental puro"
    },
    {
        id: 7,
        name: "Swiss Arabian Shaghaf Oud",
        category: "top-ventas",
        price: 99990,
        emoji: "👑",
        image: createPerfumeImage("C41E3A", "8B0000"),
        description: "Oud auténtico"
    },

    // SEGUNDA LÍNEA
    {
        id: 8,
        name: "Lattafa Fakhar Black",
        category: "segunda-linea",
        price: 74990,
        emoji: "⚫",
        image: createPerfumeImage("000000", "1a1a1a"),
        description: "Perfume oscuro y misterioso"
    },
    {
        id: 9,
        name: "Lattafa Bade'e Al Oud Oud for Glory",
        category: "segunda-linea",
        price: 69990,
        emoji: "✨",
        image: createPerfumeImage("9370DB", "8A2BE2"),
        description: "Oud exótico"
    },
    {
        id: 10,
        name: "Afnan Supremacy Not Only Intense",
        category: "segunda-linea",
        price: 99990,
        emoji: "👸",
        image: createPerfumeImage("FF1493", "FF69B4"),
        description: "Fragancia intensa y elegante"
    },
    {
        id: 11,
        name: "Armaf Club de Nuit Sillage",
        category: "segunda-linea",
        price: 89990,
        emoji: "🎩",
        image: createPerfumeImage("2F4F4F", "556B7D"),
        description: "Perfume versátil"
    },

    // DULCES
    {
        id: 12,
        name: "Lattafa Khamrah Qahwa",
        category: "dulces",
        price: 94990,
        emoji: "☕",
        image: createPerfumeImage("8B4513", "A0522D"),
        description: "Dulce con notas de café"
    },
    {
        id: 13,
        name: "Lattafa Yara Candy",
        category: "dulces",
        price: 84990,
        emoji: "🍬",
        image: createPerfumeImage("FFB6C1", "FFC0CB"),
        description: "Fragancia dulce y envolvente"
    },
    {
        id: 14,
        name: "Paris Corner Khair Pistachio",
        category: "dulces",
        price: 89990,
        emoji: "🥜",
        image: createPerfumeImage("9ACD32", "ADFF2F"),
        description: "Dulce con toques de frutos secos"
    },
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');

let currentFilter = 'todos';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(perfumes);
    updateCartCount();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    cartIcon.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartModal);
    continueShoppingBtn.addEventListener('click', closeCartModal);
    checkoutBtn.addEventListener('click', handleCheckout);
    searchInput.addEventListener('input', handleSearch);

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            filterProducts();
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });
}

// Render Products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">No se encontraron perfumes</div>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Agregar
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryLabel(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${formatPrice(product.price)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Agregar al Carrito
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Filter Products
function filterProducts() {
    let filtered = perfumes;

    if (currentFilter !== 'todos') {
        filtered = perfumes.filter(p => p.category === currentFilter);
    }

    if (searchInput.value.trim()) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );
    }

    renderProducts(filtered);
}

// Handle Search
function handleSearch(e) {
    filterProducts();
}

// Add to Cart
function addToCart(productId) {
    const product = perfumes.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();

    const buttons = document.querySelectorAll('.add-to-cart-btn');
    const btn = Array.from(buttons).find(b => b.onclick.toString().includes(productId.toString()));
    if (btn) {
        btn.classList.add('added');
        btn.textContent = '✓ Agregado';
        setTimeout(() => {
            btn.classList.remove('added');
            btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Agregar al Carrito';
        }, 2000);
    }
}

// Update Cart Display
function updateCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-cart"></i>
                <p>Tu carrito está vacío</p>
                <p style="font-size: 12px;">Agrega perfumes para comenzar a comprar</p>
            </div>
        `;
        totalPrice.textContent = '0';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${formatPrice(item.price)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartItems.appendChild(cartItem);
    });

    totalPrice.textContent = formatPrice(total);
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCart();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    updateCart();
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart Count Badge
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

// Open Cart
function openCart() {
    cartModal.classList.add('active');
    updateCart();
}

// Close Cart
function closeCartModal() {
    cartModal.classList.remove('active');
}

// Handle Checkout
function handleCheckout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const items = cart.map(item => `${item.name} x${item.quantity}`).join(', ');
    const message = `Hola, me gustaría comprar: ${items}. Total: $${formatPrice(total)}`;
    
    const whatsappUrl = `https://wa.me/543436222159?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    cart = [];
    saveCart();
    updateCartCount();
    closeCartModal();
    alert('¡Gracias por tu compra! Te contactaremos pronto.');
}

// Format Price
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Get Category Label
function getCategoryLabel(category) {
    const labels = {
        'top-ventas': '🔥 TOP VENTAS',
        'segunda-linea': '📈 SEGUNDA LÍNEA',
        'dulces': '🧁 DULCES'
    };
    return labels[category] || category;
}

document.querySelector('.search-btn').addEventListener('click', () => {
    filterProducts();
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        filterProducts();
    }
});