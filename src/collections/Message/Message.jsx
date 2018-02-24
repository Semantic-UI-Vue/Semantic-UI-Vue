import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import SuiIcon from '../../elements/Icon/Icon';
import SuiMessageContent from './MessageContent';
import SuiMessageHeader from './MessageHeader';
import SuiMessageItem from './MessageItem';
import SuiMessageList from './MessageList';

export default {
  name: 'SuiMessage',
  components: { SuiIcon, SuiMessageContent, SuiMessageHeader, SuiMessageItem, SuiMessageList },
  mixins: [listenersMixin],
  props: {
    content: String,
    dismissable: Boolean,
    header: String,
    icon: [Boolean, String],
    info: {
      type: Boolean,
      description: 'A message may be formatted to display information.',
    },
    list: Array,
  },
  methods: {
    handleDismiss() {
      this.$emit('dismiss');
    },
  },
  render() {
    const icon = typeof this.icon === 'string' && this.icon;

    const content = [
      this.header && <SuiMessageHeader>{this.header}</SuiMessageHeader>,
      this.content,
      this.$slots.default,
      this.list && (
        <SuiMessageList>
          {this.list.map(item => <SuiMessageItem>{item}</SuiMessageItem>)}
        </SuiMessageList>
      ),
    ];

    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
          'ui',
          this.icon && 'icon',
          this.info && 'info',
          'message',
        )}
      >
        {this.dismissable && <SuiIcon name="close" nativeOnClick={this.handleDismiss} />}
        {icon && <SuiIcon name={icon} />}
        {icon && <SuiMessageContent>{content}</SuiMessageContent>}
        {!icon && content}
      </ElementType>
    );
  },
};
