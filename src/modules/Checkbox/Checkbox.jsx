import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiCheckbox',
  model: {
    prop: 'inputValue',
    event: 'change',
  },
  props: {
    inputValue: [Array, Boolean],
    label: String,
    toggle: Boolean,
    value: String,
  },
  computed: {
    isArray() {
      return Array.isArray(this.inputValue);
    },
    isChecked() {
      if (this.isArray) {
        return this.inputValue.includes(this.value);
      }

      return !!this.inputValue;
    },
  },
  methods: {
    setValue(e) {
      const checked = e.target.checked;

      if (this.isArray) {
        if (checked) {
          this.$emit('change', this.inputValue.concat([this.value]));
        } else {
          this.$emit('change', this.inputValue.filter(v => v !== this.value));
        }
      } else {
        this.$emit('change', checked);
      }
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('ui', !this.label && 'fitted', this.toggle && 'toggle', 'checkbox')}
      >
        <input
          ref="input"
          class="hidden"
          readonly=""
          tabiindex="0"
          type="checkbox"
          checked={this.isChecked}
          onChange={this.setValue}
        />
        <label onClick={() => this.$refs.input.click()}>{this.label}</label>
      </ElementType>
    );
  },
};
