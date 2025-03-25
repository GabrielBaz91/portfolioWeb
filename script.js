// Datos de los proyectos con enlaces a GitHub
const projects = [
    {
        title: "Sistema de Gestión E-Commerce",
        description: "Plataforma completa para comercio electrónico",
        technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
        githubUrl: "https://github.com/tuusuario/ecommerce-system",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
        `,
        longDescription: `
            <p>Desarrollé un sistema completo de e-commerce con:</p>
            <ul>
                <li>Catálogo de productos con filtros avanzados</li>
                <li>Carrito de compras con persistencia</li>
                <li>Pasarela de pagos integrada</li>
                <li>Sistema de recomendaciones</li>
            </ul>
            <p>Tecnologías clave: Spring Boot, JPA, Redis para caché</p>
        `
    },
    {
        title: "Dashboard Administrativo",
        description: "Panel de control para gestión empresarial",
        technologies: ["Spring Boot", "Hibernate", "Chart.js", "MySQL"],
        githubUrl: "https://github.com/tuusuario/admin-dashboard",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="20" x2="12" y2="10"></line>
                <line x1="18" y1="20" x2="18" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
        `,
        longDescription: `
            <p>Dashboard interactivo para visualización de:</p>
            <ul>
                <li>Métricas de ventas en tiempo real</li>
                <li>Análisis de comportamiento de usuarios</li>
                <li>Reportes financieros automatizados</li>
                <li>Alertas personalizables</li>
            </ul>
            <p>Integración con múltiples fuentes de datos</p>
        `
    },
    {
        title: "API de Pagos",
        description: "Sistema seguro de procesamiento de transacciones",
        technologies: ["Java", "Spring Security", "JWT", "OAuth2"],
        githubUrl: "https://github.com/tuusuario/payment-api",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
        `,
        longDescription: `
            <p>API robusta para procesamiento de pagos con:</p>
            <ul>
                <li>Autenticación JWT y OAuth2</li>
                <li>Encriptación de extremo a extremo</li>
                <li>Integración con múltiples proveedores</li>
                <li>Sistema de reconciliación automática</li>
            </ul>
        `
    },
    {
        title: "Portal Web Corporativo",
        description: "Sitio institucional con CMS integrado",
        technologies: ["HTML5", "CSS3", "JavaScript", "Spring Boot"],
        githubUrl: "https://github.com/tuusuario/corporate-portal",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
        `,
        longDescription: `
            <p>Portal web responsive con:</p>
            <ul>
                <li>Diseño adaptativo para todos los dispositivos</li>
                <li>Sistema de gestión de contenidos</li>
                <li>Formularios interactivos</li>
                <li>Integración con redes sociales</li>
                <li>Optimización SEO</li>
            </ul>
        `
    },
    {
        title: "Sistema de Inventarios",
        description: "Gestión inteligente de stock y almacén",
        technologies: ["Java", "Spring Data", "React", "MongoDB"],
        githubUrl: "https://github.com/tuusuario/inventory-system",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
        `,
        longDescription: `
            <p>Sistema completo de gestión de inventarios con:</p>
            <ul>
                <li>Control de stock en tiempo real</li>
                <li>Alertas de reposición automáticas</li>
                <li>Integración con código de barras</li>
                <li>Reportes de movimientos</li>
                <li>Proyección de demanda</li>
            </ul>
        `
    }
];

// Datos de habilidades
const backendSkills = [
    "Java 17", "Spring Boot", "Spring MVC", 
    "Hibernate", "JPA", "Spring Security", 
    "Microservicios", "Docker", "PostgreSQL", 
    "MySQL", "MongoDB", "JUnit", "Mockito",
    "Spring Data", "REST APIs", "JWT"
];

const frontendSkills = [
    "JavaScript", "React", "HTML5", 
    "CSS3", "Responsive Design", "Chart.js",
    "WebSocket", "REST API Consumption", "Tailwind",
    "Bootstrap", "AJAX", "JSON"
];

// Renderizar proyectos
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-icon">
                    ${project.icon}
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </div>
            <div class="tech-tags">
                ${project.technologies.map(tech => 
                    `<span class="tech-tag">${tech}</span>`
                ).join('')}
            </div>
            <div class="project-description">
                ${project.longDescription}
            </div>
            <a href="${project.githubUrl}" target="_blank" class="project-github-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver en GitHub
            </a>
        `;
        
        // Evento para expandir/contraer la descripción
        projectCard.addEventListener('click', function(e) {
            // Evitar que el clic en el botón GitHub active el toggle
            if (e.target.closest('.project-github-btn')) {
                return;
            }
            
            this.classList.toggle('expanded');
            
            // Scroll suave para mantener el proyecto visible
            if (this.classList.contains('expanded')) {
                this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
        
        // Efecto hover para el texto
        const projectInfo = projectCard.querySelector('.project-info');
        const originalFontSize = window.getComputedStyle(projectInfo).fontSize;
        
        projectCard.addEventListener('mouseenter', function() {
            projectInfo.style.fontSize = '1.1em';
            projectInfo.querySelector('h3').style.fontSize = '1.4em';
            projectInfo.querySelector('p').style.fontSize = '1.1em';
        });
        
        projectCard.addEventListener('mouseleave', function() {
            if (!this.classList.contains('expanded')) {
                projectInfo.style.fontSize = originalFontSize;
                projectInfo.querySelector('h3').style.fontSize = '';
                projectInfo.querySelector('p').style.fontSize = '';
            }
        });
        
        projectsContainer.appendChild(projectCard);
    });
}

// Renderizar habilidades
function renderSkills() {
    const backendSkillsContainer = document.getElementById('backend-skills');
    const frontendSkillsContainer = document.getElementById('frontend-skills');
    
    backendSkills.forEach(skill => {
        const skillChip = document.createElement('div');
        skillChip.className = 'skill-chip';
        skillChip.textContent = skill;
        backendSkillsContainer.appendChild(skillChip);
    });
    
    frontendSkills.forEach(skill => {
        const skillChip = document.createElement('div');
        skillChip.className = 'skill-chip';
        skillChip.textContent = skill;
        frontendSkillsContainer.appendChild(skillChip);
    });
}

// Configurar navegación suave
function setupSmoothNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Excluir el botón de GitHub
            if (this.classList.contains('github-btn')) {
                return;
            }
            
            e.preventDefault();
            
            // Actualizar botón activo
            document.querySelectorAll('.nav-btn').forEach(btn => {
                if (!btn.classList.contains('github-btn')) {
                    btn.classList.remove('active');
                }
            });
            this.classList.add('active');
            
            // Desplazamiento suave
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// Inicializar todo cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    renderSkills();
    setupSmoothNavigation();
    
    // Configurar efecto de gradiente animado en el fondo
    document.body.style.background = `
        linear-gradient(135deg, 
            var(--bg-dark) 0%, 
            var(--bg-dark) 50%, 
            rgba(26, 188, 156, 0.1) 100%
        )
    `;
    
    // Animación sutil de cambio de color
    let hueRotation = 0;
    setInterval(() => {
        hueRotation = (hueRotation + 0.5) % 360;
        document.documentElement.style.setProperty(
            '--color-start', 
            `hsl(${(160 + hueRotation) % 360}, 76%, 50%)`
        );
        document.documentElement.style.setProperty(
            '--color-mid', 
            `hsl(${(210 + hueRotation) % 360}, 76%, 50%)`
        );
        document.documentElement.style.setProperty(
            '--color-end', 
            `hsl(${(10 + hueRotation) % 360}, 76%, 50%)`
        );
    }, 5000);
});