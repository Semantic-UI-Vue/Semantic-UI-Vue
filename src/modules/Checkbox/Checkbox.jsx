import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiCheckbox',
  mixins: [listenersMixin],
  model: {
    prop: 'inputValue',
    event: 'change',
  },
  props: {
    disabled: Boolean,
    inputValue: [Array, Boolean, Number, String],
    label: String,
    radio: Boolean,
    toggle: Boolean,
    value: String,
  },
  computed: {
    isArray() {
      return Array.isArray(this.inputValue);
    },
    isChecked() {
      if (this.radio && this.value) {
        return this.inputValue === this.value;
      }

      if (this.isArray) {
        return this.inputValue.includes(this.value);
      }

      return !!this.inputValue;
    },
  },
  methods: {
    setValue(e) {
      const checked = e.target.checked;

      if (this.radio && this.value) {
        this.$emit('change', this.value);
      } else if (this.isArray) {
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
        class={classes(
          'ui',
          !(this.label || this.$slots.default) && 'fitted',
          this.radio && 'radio',
          this.toggle && 'toggle',
          this.disabled && 'disabled',
          'checkbox',
        )}
      >
        <input
          ref="input"
          class="hidden"
          readonly=""
          tabiindex="0"
          type={this.radio ? 'radio' : 'checkbox'}
          checked={this.isChecked}
          onChange={this.setValue}
        />
        <label onClick={() => this.$refs.input.click()}>{this.label || this.$slots.default}</label>
      </ElementType>
    );
  },
};
