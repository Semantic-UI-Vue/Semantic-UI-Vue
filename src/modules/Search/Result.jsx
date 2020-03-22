export default {
  name: 'SuiSearchResult',
  functional: true,
  props: {
    title: {
      type: String,
      description: 'Display title.',
    },
    description: {
      type: String,
      description: 'Additional text with less emphasis.',
    },
    url: {
      type: String,
      description: 'Link to open on click.',
    },
  },
  render(_, { props, listeners }) {
    const { title, description, url } = props;
    const urlProps = url ? { url } : {};

    return (
      <div {...urlProps} onClick={() => listeners.select(props)} class="result">
        <div class="content">
          {title && <div class="title">{title}</div>}
          {description && <div class="description">{description}</div>}
        </div>
      </div>
    );
  },
};
