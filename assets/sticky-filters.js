class StickyFilters extends HTMLElement {
    constructor() {
        super();
        this.lastScrollTop = 0; 
    }

    connectedCallback() {
        this.stickyOffset = this.offsetTop; 
        this.handleScroll = this.handleScroll.bind(this); 


        window.addEventListener('scroll', this.handleScroll);
 
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop >= this.stickyOffset) {
            this.classList.add('is-sticky');

            if (scrollTop > this.lastScrollTop) {
              
                this.classList.add('scrolling-down');
                this.classList.remove('scrolling-up');
            } else {
     
                this.classList.add('scrolling-up');
                this.classList.remove('scrolling-down');
            }
        } else {
          
            this.classList.remove('is-sticky', 'scrolling-down', 'scrolling-up');
        }

        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
}


customElements.define('sticky-filters', StickyFilters);
