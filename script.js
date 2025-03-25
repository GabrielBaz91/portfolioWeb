// Datos de los proyectos actualizados con tus repositorios reales
const projects = [
    {
        title: "Sistema de Gestión",
        description: "Plataforma administrativa para gestión de usuarios",
        technologies: ["Java", "Spring Boot", "Hibernate", "JPA", "Spring Security", "MySQL", "HTML", "JavaScript", "CSS"],
        githubUrl: "https://github.com/GabrielBaz91/sistemagestion",
        icon: `<i class="fas fa-users-cog"></i>`,
        longDescription: `
            <p>Sistema completo para administración empresarial con:</p>
            <ul>
                <li>Control de usuarios y permisos</li>
                <li>Registro de actividades</li>
                <li>Reportes personalizados</li>
                <li>Interfaz intuitiva</li>
            </ul>
            <a href="https://github.com/GabrielBaz91/sistemagestion" target="_blank" class="project-github-btn">
                <i class="fab fa-github"></i> Ver en GitHub
            </a>
        `
    },
    {
        title: "Sistema de Inventario",
        description: "Solución para control de stock y almacén",
        technologies: ["Java", "Spring Boot", "Hibernate", "JPA", "MySQL"],
        githubUrl: "https://github.com/GabrielBaz91/Proyecto-Inventario",
        icon: `<i class="fas fa-boxes"></i>`,
        longDescription: `
            <p>Sistema especializado en:</p>
            <ul>
                <li>Gestión de productos</li>
                <li>Control de entradas/salidas</li>
                <li>Alertas de stock</li>
                <li>Integración con códigos de barras</li>
            </ul>
            <a href="https://github.com/GabrielBaz91/Proyecto-Inventario" target="_blank" class="project-github-btn">
                <i class="fab fa-github"></i> Ver en GitHub
            </a>
        `
    },
    {
        title: "Tienda Online Bazar",
        description: "Plataforma de comercio electrónico",
        technologies: ["HTML", "JavaScript", "CSS"],
        githubUrl: "https://github.com/GabrielBaz91/Primera-tienda-bazar-",
        icon: `<i class="fas fa-store"></i>`,
        longDescription: `
            <p>Tienda virtual con:</p>
            <ul>
                <li>Catálogo interactivo</li>
                <li>Carrito de compras</li>
                <li>Diseño responsive</li>
                <li>Filtros de productos</li>
            </ul>
            <a href="https://github.com/GabrielBaz91/Primera-tienda-bazar-" target="_blank" class="project-github-btn">
                <i class="fab fa-github"></i> Ver en GitHub
            </a>
        `
    }
];

// Datos de habilidades
const backendSkills = [
    "Java 17", "Spring Boot", "Hibernate", 
    "JPA", "Spring Security", "MySQL", 
    "Microservicios", "REST APIs", 
];

const frontendSkills = [
    "HTML5", "CSS3", "JavaScript", 
     "React", "AJAX", "JSON"
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
        `;
        
        // Animación al hacer hover
        projectCard.addEventListener('mouseenter', () => {
            projectCard.querySelector('h3').style.color = 'var(--color-primary)';
            projectCard.querySelector('.project-icon').style.transform = 'rotate(10deg) scale(1.2)';
        });
        
        projectCard.addEventListener('mouseleave', () => {
            projectCard.querySelector('h3').style.color = '';
            projectCard.querySelector('.project-icon').style.transform = '';
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
    document.querySelectorAll('.nav-btn').forEach(anchor => {
        if (anchor.classList.contains('github-btn')) return;
        
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    renderSkills();
    setupSmoothNavigation();
});