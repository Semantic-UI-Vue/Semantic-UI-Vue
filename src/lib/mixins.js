export const classMixin = {
  methods: {
    getUIClass() {
      const ownName = this.constructor.options.name;
      const parentName = this.$parent.constructor.options.name;
      return parentName.match(new RegExp(`^${ownName}.*Group$`)) ? '' : 'ui';
    },
  },
};
