const floated = 'floated';
const left = 'left';
const right = 'right';

export default function suiFloated(el, { arg }) {
  el.classList.remove(left);
  el.classList.remove(right);
  el.classList.remove(floated);
  el.classList.add(arg);
  el.classList.add(floated);
}
