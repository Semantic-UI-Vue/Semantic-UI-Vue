export default function getChildProps() {
  const listeners = { ...this.$listeners };

  Object
    .entries(this.$options.events || {})
    .forEach(([name, { custom }]) => {
      if (custom) {
        delete listeners[name];
      }
    });

  return listeners;
}
