document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const modalConfirmBtn = document.getElementById('modalConfirmBtn');

    function showModal(title, text) {
        modalTitle.textContent = title;
        modalBody.textContent = text;
        modalOverlay.classList.add('active');
    }

    function hideModal() {
        modalOverlay.classList.remove('active');
    }

    modalClose.addEventListener('click', hideModal);
    modalConfirmBtn.addEventListener('click', hideModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) hideModal();
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    document.getElementById('loginBtn').addEventListener('click', () => {
        showModal('NovaSync Authentication', 'Sign in to access your organization dashboard.');
    });

    document.getElementById('getStartedNavBtn').addEventListener('click', () => {
        showModal('Workspace Initialization', 'Setting up a new high-speed workspace...');
    });

    document.getElementById('trialBtn').addEventListener('click', () => {
        showModal('14-Day Access Granted', 'Your trial period has been activated for your current session.');
    });

    document.getElementById('demoBtn').addEventListener('click', () => {
        showModal('Interactive Walkthrough', 'Loading workspace telemetry simulation...');
    });

    document.querySelectorAll('.card-link').forEach(button => {
        button.addEventListener('click', (e) => {
            const action = e.target.getAttribute('data-action');
            showModal(action, `Accessing active settings and rules for ${action}.`);
        });
    });

    document.querySelectorAll('.plan-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const plan = e.target.getAttribute('data-plan');
            showModal('Subscription Selected', `Configuring deployment pipeline for the ${plan} plan.`);
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        showModal('Inquiry Transmitted', `Thank you ${name}. Our engineering team will contact your work address shortly.`);
        contactForm.reset();
    });

    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-footer');
            showModal(page, `Opening system document: ${page}`);
        });
    });
});