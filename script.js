// =================================
// DATOS DE PROPIEDADES
// =================================

const properties = [
    {
        id: 1,
        title: "Apartamento Vista al Mar",
        location: "Bocagrande, Cartagena",
        price: "$850,000,000",
        priceUSD: "USD $220,000",
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        gallery: [
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ],
        description: "Hermoso apartamento con vista panorámica al mar Caribe en la exclusiva zona de Bocagrande. Cuenta con amplias terrazas, acabados de lujo y acceso directo a la playa. Ideal para quienes buscan vivir frente al mar en una de las zonas más prestigiosas de Cartagena.",
        features: [
            "Vista al mar",
            "Balcón privado",
            "Piscina comunitaria",
            "Gimnasio",
            "Seguridad 24/7",
            "Parqueadero cubierto",
            "Zona de BBQ",
            "Salón social"
        ],
        type: "Venta"
    },
    {
        id: 2,
        title: "Casa Colonial Centro Histórico",
        location: "Centro Histórico, Cartagena",
        price: "$1,200,000,000",
        priceUSD: "USD $310,000",
        bedrooms: 4,
        bathrooms: 3,
        area: 200,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        gallery: [
            "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ],
        description: "Espectacular casa colonial completamente restaurada en el corazón del Centro Histórico de Cartagena. Conserva el encanto arquitectónico de la época colonial con todas las comodidades modernas. Techos altos, patio interior con fuente y ubicación privilegiada cerca de los principales atractivos turísticos.",
        features: [
            "Arquitectura colonial",
            "Patio interior",
            "Techos altos",
            "Aire acondicionado",
            "Internet de alta velocidad",
            "Cocina equipada",
            "Terraza en azotea",
            "Completamente amueblada"
        ],
        type: "Venta"
    },
    {
        id: 3,
        title: "Penthouse Exclusivo Manga",
        location: "Manga, Cartagena",
        price: "$650,000,000",
        priceUSD: "USD $168,000",
        bedrooms: 2,
        bathrooms: 2,
        area: 95,
        image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
        gallery: [
            "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/2211044/pexels-photo-2211044.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ],
        description: "Moderno penthouse con terraza privada en el barrio residencial de Manga. Diseño contemporáneo con espacios abiertos, iluminación natural y acabados de primera calidad. La terraza ofrece vistas a 360 grados de la ciudad y el mar. Perfecto para profesionales o parejas que buscan estilo de vida moderno.",
        features: [
            "Terraza privada",
            "Diseño moderno",
            "Iluminación LED",
            "Electrodomésticos incluidos",
            "Piscina infinity",
            "Coworking space",
            "Pet friendly",
            "Ascensor privado"
        ],
        type: "Venta"
    },
    {
        id: 4,
        title: "Villa de Playa Manzanillo",
        location: "Manzanillo del Mar, Cartagena",
        price: "$2,500,000,000",
        priceUSD: "USD $645,000",
        bedrooms: 5,
        bathrooms: 4,
        area: 350,
        image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
        gallery: [
            "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ],
        description: "Exclusiva villa de playa ubicada en la tranquila zona de Manzanillo del Mar. Con acceso directo a playa privada, amplios jardines tropicales y piscina infinity. Perfecta para familias que buscan privacidad y contacto con la naturaleza sin alejarse de la ciudad. Incluye casa de huéspedes independiente.",
        features: [
            "Acceso directo a playa",
            "Piscina infinity",
            "Jardín tropical",
            "Casa de huéspedes",
            "Cocina gourmet",
            "Bodega de vinos",
            "Sistema domótico",
            "Generador eléctrico"
        ],
        type: "Venta"
    },
    {
        id: 5,
        title: "Apartamento Moderno Castillogrande",
        location: "Castillogrande, Cartagena",
        price: "$4,500,000/mes",
        priceUSD: "USD $1,160/mes",
        bedrooms: 2,
        bathrooms: 2,
        area: 85,
        image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
        gallery: [
            "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ],
        description: "Apartamento totalmente equipado y amueblado en el exclusivo sector de Castillogrande. Ideal para alquiler temporal o permanente. Cuenta con todas las comodidades necesarias para una estadía confortable. Ubicación estratégica cerca de restaurantes, playas y centros comerciales.",
        features: [
            "Completamente amueblado",
            "Aire acondicionado central",
            "Smart TV",
            "Internet fibra óptica",
            "Cocina moderna equipada",
            "Lavandería",
            "Parqueadero",
            "Servicios incluidos"
        ],
        type: "Arriendo"
    },
    {
        id: 6,
        title: "Loft Contemporáneo Getsemaní",
        location: "Getsemaní, Cartagena",
        price: "$420,000,000",
        priceUSD: "USD $108,000",
        bedrooms: 1,
        bathrooms: 1,
        area: 55,
        image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
        gallery: [
            "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ],
        description: "Loft de concepto abierto en el vibrante barrio de Getsemaní, el corazón cultural y bohemio de Cartagena. Diseño minimalista con toques industriales, perfecto como inversión para alquiler turístico o como primera vivienda. A pasos de galerías de arte, restaurantes y la vida nocturna de la ciudad.",
        features: [
            "Concepto abierto",
            "Diseño industrial",
            "Ventanas piso-techo",
            "Cocina americana",
            "Área de trabajo",
            "Ubicación céntrica",
            "Cerca de vida nocturna",
            "Alta rentabilidad turística"
        ],
        type: "Venta"
    }
];

// =================================
// INICIALIZACIÓN DE LA PÁGINA
// =================================

document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();

    const currentPage = window.location.pathname;

    if (currentPage.includes('index.html') || currentPage === '/') {
        loadProperties();
    } else if (currentPage.includes('detalle.html')) {
        loadPropertyDetail();
    } else if (currentPage.includes('agendar.html')) {
        initializeScheduleForm();
    }
});

// =================================
// MENÚ MÓVIL
// =================================

function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });

        document.addEventListener('click', function(event) {
            if (!event.target.closest('.header-content')) {
                nav.classList.remove('active');
            }
        });
    }
}

// =================================
// CARGAR PROPIEDADES EN INDEX
// =================================

function loadProperties() {
    const propertiesGrid = document.getElementById('propertiesGrid');

    if (!propertiesGrid) return;

    propertiesGrid.innerHTML = '';

    properties.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertiesGrid.appendChild(propertyCard);
    });
}

function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.onclick = () => navigateToDetail(property.id);

    card.innerHTML = `
        <img src="${property.image}" alt="${property.title}" class="property-image">
        <div class="property-content">
            <h3 class="property-title">${property.title}</h3>
            <p class="property-location">📍 ${property.location}</p>
            <div class="property-features">
                <span>🛏️ ${property.bedrooms} hab.</span>
                <span>🚿 ${property.bathrooms} baños</span>
                <span>📐 ${property.area}m²</span>
            </div>
            <p class="property-price">${property.price}</p>
            <button class="btn btn-primary">Ver detalles</button>
        </div>
    `;

    return card;
}

function navigateToDetail(propertyId) {
    window.location.href = `detalle.html?id=${propertyId}`;
}

// =================================
// CARGAR DETALLE DE PROPIEDAD
// =================================

function loadPropertyDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get('id'));

    const property = properties.find(p => p.id === propertyId);

    if (!property) {
        window.location.href = 'index.html';
        return;
    }

    const detailContent = document.getElementById('detailContent');

    if (!detailContent) return;

    detailContent.innerHTML = `
        <div class="detail-header">
            <h1 class="detail-title">${property.title}</h1>
            <p class="detail-location">📍 ${property.location}</p>
        </div>

        <div class="gallery-container">
            <div class="gallery-main">
                <img src="${property.gallery[0]}" alt="${property.title}" class="gallery-main-image" id="mainImage">
            </div>
            <div class="gallery-thumbnails">
                ${property.gallery.map((img, index) => `
                    <img src="${img}"
                         alt="${property.title} - Imagen ${index + 1}"
                         class="gallery-thumbnail ${index === 0 ? 'active' : ''}"
                         onclick="changeMainImage('${img}', this)">
                `).join('')}
            </div>
        </div>

        <div class="detail-info">
            <div class="detail-description">
                <h3>Descripción de la Propiedad</h3>
                <p>${property.description}</p>

                <div class="property-highlights">
                    <h3>Información General</h3>
                    <div class="highlights-grid">
                        <div class="highlight-item">
                            <span class="highlight-label">Habitaciones</span>
                            <span class="highlight-value">🛏️ ${property.bedrooms}</span>
                        </div>
                        <div class="highlight-item">
                            <span class="highlight-label">Baños</span>
                            <span class="highlight-value">🚿 ${property.bathrooms}</span>
                        </div>
                        <div class="highlight-item">
                            <span class="highlight-label">Área</span>
                            <span class="highlight-value">📐 ${property.area}m²</span>
                        </div>
                        <div class="highlight-item">
                            <span class="highlight-label">Tipo</span>
                            <span class="highlight-value">🏷️ ${property.type}</span>
                        </div>
                    </div>
                </div>

                <h3>Características y Comodidades</h3>
                <ul class="features-list">
                    ${property.features.map(feature => `<li>✓ ${feature}</li>`).join('')}
                </ul>

                <div class="location-info">
                    <h3>Ubicación y Entorno</h3>
                    <p><strong>Zona:</strong> ${property.location}</p>
                    <p>Cartagena de Indias es conocida por su rica historia colonial, hermosas playas del Caribe y
                    vibrante cultura. Esta propiedad se encuentra en una de las zonas más codiciadas de la ciudad,
                    con fácil acceso a servicios, restaurantes, centros comerciales y atractivos turísticos.</p>
                </div>
            </div>

            <div class="detail-sidebar">
                <div class="price-box">
                    <p class="price-label">Precio</p>
                    <p class="price-amount">${property.price}</p>
                    <p class="price-label">${property.priceUSD}</p>
                </div>

                <a href="agendar.html?property=${property.id}" class="btn btn-primary" style="width: 100%; text-align: center; margin-bottom: 1.5rem;">
                    Agendar Visita
                </a>

                <div class="contact-box">
                    <h4>Contacto Directo</h4>
                    <div class="contact-item">
                        <span>📱</span>
                        <div>
                            <strong>Teléfono</strong>
                            <p>+57 300 123 4567</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span>📧</span>
                        <div>
                            <strong>Email</strong>
                            <p>info@cartagenasol.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span>💬</span>
                        <div>
                            <strong>WhatsApp</strong>
                            <p>+57 300 123 4567</p>
                        </div>
                    </div>
                </div>

                <div class="share-box">
                    <h4>Compartir Propiedad</h4>
                    <div class="share-buttons">
                        <button class="share-btn" onclick="shareProperty('facebook')" title="Compartir en Facebook">📘</button>
                        <button class="share-btn" onclick="shareProperty('twitter')" title="Compartir en Twitter">🐦</button>
                        <button class="share-btn" onclick="shareProperty('whatsapp')" title="Compartir en WhatsApp">💬</button>
                        <button class="share-btn" onclick="shareProperty('email')" title="Compartir por email">📧</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    initializeGallery();
}

function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('mainImage');

    if (mainImage) {
        mainImage.style.opacity = '0';

        setTimeout(() => {
            mainImage.src = imageSrc;
            mainImage.style.opacity = '1';
        }, 200);
    }

    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));

    if (thumbnail) {
        thumbnail.classList.add('active');
    }
}

function initializeGallery() {
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

function shareProperty(platform) {
    const url = window.location.href;
    const title = document.querySelector('.detail-title')?.textContent || 'Propiedad en Cartagena';

    let shareUrl = '';

    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' - ' + url)}`;
            break;
        case 'email':
            shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// =================================
// FORMULARIO DE AGENDAR VISITA
// =================================

function initializeScheduleForm() {
    loadPropertyOptions();

    const scheduleForm = document.getElementById('scheduleForm');

    if (!scheduleForm) return;

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    const dateInput = document.getElementById('fecha');
    if (dateInput) {
        dateInput.setAttribute('min', minDate);
    }

    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('property');

    if (propertyId) {
        const propertySelect = document.getElementById('propiedad');
        if (propertySelect) {
            propertySelect.value = propertyId;
        }
    }

    scheduleForm.addEventListener('submit', handleScheduleSubmit);
}

function loadPropertyOptions() {
    const propertySelect = document.getElementById('propiedad');

    if (!propertySelect) return;

    properties.forEach(property => {
        const option = document.createElement('option');
        option.value = property.id;
        option.textContent = `${property.title} - ${property.location}`;
        propertySelect.appendChild(option);
    });
}

function handleScheduleSubmit(event) {
    event.preventDefault();

    const formData = {
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        email: document.getElementById('email').value,
        propiedad: document.getElementById('propiedad').value,
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value,
        mensaje: document.getElementById('mensaje').value
    };

    const selectedProperty = properties.find(p => p.id === parseInt(formData.propiedad));

    console.log('Visita agendada:', {
        ...formData,
        propertyName: selectedProperty ? selectedProperty.title : 'Desconocida'
    });

    const form = document.getElementById('scheduleForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (form && confirmationMessage) {
        form.style.display = 'none';
        confirmationMessage.style.display = 'block';
    }

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

// =================================
// SMOOTH SCROLL PARA ENLACES
// =================================

document.addEventListener('click', function(event) {
    if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});
