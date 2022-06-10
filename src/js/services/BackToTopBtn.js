export class BackToTopBtn {
  constructor({ selector, className }) {
    this.selector = document.querySelector(selector);
    this.className = className;
  }

  init() {
    this.handleClick();
    this.hide();
  }

  hide() {
    this.selector.classList.add(this.className);
  }

  show() {
    this.selector.classList.remove(this.className);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  handleClick() {
    this.selector.addEventListener('click', this.scrollToTop);
  }
}
