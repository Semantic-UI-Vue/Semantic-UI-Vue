import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiCheckbox',
  model: {
    prop: 'inputValue',
    event: 'change',
  },
  mixins: [SemanticUIVueMixin],
  props: {
    disabled: Boolean,
    inputValue: [Array, Boolean, Number, String, Object],
    label: String,
    radio: Boolean,
    toggle: Boolean,
    name: String,
    value: [String, Object],
    required: Boolean,
  },
  events: {
    change: {
      custom: true,
    },
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
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
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
          tabindex="0"
          name={this.name}
          type={this.radio ? 'radio' : 'checkbox'}
          checked={this.isChecked}
          disabled={this.disabled}
          onChange={this.setValue}
          required={this.required}
        />
        <label
          onClick={() => this.$refs.input.click()}
          for={this.name}>
            {this.label || this.$slots.default}
          </label>
      </ElementType>
    );
  },
};
