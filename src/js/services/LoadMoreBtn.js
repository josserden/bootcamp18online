export class LoadMoreBtn {
  constructor({ selector, className, isHide = false, callback = () => null }) {
    this.selector = document.querySelector(selector);
    this.className = className;
    this.callback = callback;

    if (isHide) {
      this.hide();
    }

    this.bindEvent();
  }

  hide() {
    this.selector.classList.add(this.className);
  }

  show() {
    this.selector.classList.remove(this.className);
  }

  bindEvent() {
    this.selector.addEventListener('click', this.callback);
  }
}
