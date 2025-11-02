// Custom Cursor
const cursor = document.getElementById('cursor');

if (cursor) {
    const rings = cursor.querySelectorAll('.ring');
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        // Move both rings to mouse position
        rings.forEach((ring, index) => {
            const translateX = e.clientX - 24; // 24px = 1.5rem (half of 3rem)
            const translateY = e.clientY - 24;
            ring.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
        });
    });
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, .project-card, .skill-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // Hide cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        document.body.style.cursor = 'default';
    }
}

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message (you can customize this)
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section > .container').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Skills Data (you can modify this or load from a JSON file)
const skillsData = [
    { name: 'HTML5', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg', color: '#e34c26' },
    { name: 'CSS3', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg', color: '#264de4' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg', color: '#f7df1e' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg', color: '#61dafb' },
    { name: 'Bootstrap', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bootstrap.svg', color: '#7952b3' },
    { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg', color: '#06b6d4' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg', color: '#339933' },
    { name: 'Express.js', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg', color: '#000000' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg', color: '#47a248' },
    { name: 'MySQL', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg', color: '#00758f' },
    { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg', color: '#336791' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg', color: '#3776ab' },
    { name: 'Spring Boot', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spring.svg', color: '#6db33f' }
];

// Projects Data (you can modify this or load from a JSON file)
const projectsData = [
    {
        title: 'Project 1',
        description: 'Brief description of your project',
        image: 'https://via.placeholder.com/400x300',
        github: 'https://github.com',
        live: 'https://example.com'
    },
    {
        title: 'Project 2',
        description: 'Brief description of your project',
        image: 'https://via.placeholder.com/400x300',
        github: 'https://github.com',
        live: 'https://example.com'
    },
    {
        title: 'Project 3',
        description: 'Brief description of your project',
        image: 'https://via.placeholder.com/400x300',
        github: 'https://github.com',
        live: 'https://example.com'
    }
];

// Render Skills
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    skillsData.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        
        skillCard.innerHTML = `
            <img src="${skill.image}" alt="${skill.name} logo" class="skill-logo">
            <h3>${skill.name}</h3>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='https://via.placeholder.com/400x300'">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 5px;">
                        <i class="fab fa-github"></i> Code
                    </a>
                    <a href="${project.live}" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 5px;">
                        <i class="fas fa-external-link-alt"></i> Live
                    </a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
});

// Typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on hero title
// window.addEventListener('DOMContentLoaded', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 100);
//     }
// });

