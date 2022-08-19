export default function SearchInput({ $target, initialState, onChange }) {
  this.$element = document.createElement('form');
  this.$element.className = 'SearchInput';
  this.state = initialState;

  $target.appendChild(this.$element);

  this.$element.addEventListener('keyup', (e) => {
    const ignoreKeys = ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLet', 'ArrowRight'];
    if (!ignoreKeys.includes(e.key)) {
      onChange(e.target.value);
    }
  });

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  this.$element.focus();

  this.render = () => {
    this.$element.innerHTML = `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value=${this.state}>`;
  };

  this.render();
}
