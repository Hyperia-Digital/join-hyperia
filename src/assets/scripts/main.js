class SiteHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupListeners();
    }

    setupListeners() {
        const button = this.shadowRoot.querySelector('.menu-btn');
        const menu = this.shadowRoot.querySelector('.nav-links');
        const overlay = this.shadowRoot.querySelector('.overlay');

        const toggleMenu = (forceClose = false) => {
            const isOpen = forceClose ? false : !menu.classList.contains('active');
            button.classList.toggle('active', isOpen);
            menu.classList.toggle('active', isOpen);
            overlay.classList.toggle('active', isOpen);
            button.setAttribute('aria-expanded', isOpen);
            button.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        };

        button.addEventListener('click', () => toggleMenu());
        overlay.addEventListener('click', () => toggleMenu(true));

        menu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' || e.target.closest('a')) toggleMenu(true);
        });

        this.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('active')) {
                toggleMenu(true);
                button.focus();
            }
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        @import url('/assets/styles/site-layout/site-header.css');

        :host {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .nav-links { transition: right 0.3s ease-in-out; }
        .menu-btn.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .menu-btn.active span:nth-child(2) { opacity: 0; }
        .menu-btn.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
      </style>

      <nav class="site-nav" role="navigation" aria-label="Main Navigation">
        <slot name="logo"></slot>
        <div class="overlay"></div>
        <button 
          class="menu-btn" 
          aria-label="Open menu" 
          aria-expanded="false" 
          aria-controls="main-menu"
        >
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="main-menu" role="list">
          <slot></slot>
        </ul>
      </nav>
    `;
    }
}

customElements.define('site-header', SiteHeader);
