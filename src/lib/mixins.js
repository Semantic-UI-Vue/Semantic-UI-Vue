export const classMixin = {
  methods: {
    getUIClass() {
      const ownName = this.constructor.options && this.constructor.options.name;
      const parentName = this.$parent && this.$parent.constructor.options &&
        this.$parent.constructor.options.name;
      const inGroup = ownName && parentName && parentName.match(new RegExp(`^${ownName}.*Group$`));
      return inGroup ? '' : 'ui';
    },
  },
};

export const listenersMixin = {
  methods: {
    generateListeners() {
      const listeners = { ...this.$listeners };

      Object
        .keys(this.$options.events || {})
        .forEach((name) => {
          delete listeners[name];
        });

      return {
        on: listeners,
      };
    },
  },
};
