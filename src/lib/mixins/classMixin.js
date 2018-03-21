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
