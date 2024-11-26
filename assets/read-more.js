class ReadMore extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
    
      document.addEventListener('DOMContentLoaded', this.init.bind(this));
    }
  
    get textContainer() {
      return this.querySelector('.text-container');
    }
  
    get readMoreButton() {
      return this.querySelector('.read-more-toggle');
    }
  
    init() {
      console.log('ReadMore initialized');
      
      if (!this.textContainer || !this.readMoreButton) return;
  
      this.maxLines = this.dataset.maxLines || 3; 
      this.lineClampStyle = `
        display: -webkit-box;
        -webkit-line-clamp: ${this.maxLines};
        -webkit-box-orient: vertical;
        overflow: hidden;
      `;
  
      this.applyLineClamp();
      this.checkOverflow();
      this.readMoreButton.addEventListener('click', this.toggleText.bind(this));
    }
  
    applyLineClamp() {
      this.textContainer.style.cssText += this.lineClampStyle;
    }
  
    removeLineClamp() {
      this.textContainer.style.webkitLineClamp = '';
      this.textContainer.style.overflow = '';
    }
  
    checkOverflow() {
      if (this.textContainer.scrollHeight > this.textContainer.clientHeight) {
        this.readMoreButton.style.display = 'inline-block';
      } else {
        this.readMoreButton.style.display = 'none';
      }
    }
  
    toggleText() {
      if (this.textContainer.style.webkitLineClamp) {
        this.removeLineClamp();
        this.readMoreButton.textContent = 'Read Less';
      } else {
        this.applyLineClamp();
        this.readMoreButton.textContent = 'Read More';
      }
    }
  }
  

  customElements.define('read-more', ReadMore);