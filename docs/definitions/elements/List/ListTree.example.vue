<template lang="html">
  <sui-list>
    <sui-list-item>
      <sui-list-icon name="folder" />
      <sui-list-content>
        <sui-list-header>src</sui-list-header>
        <sui-list-description>Source files for project</sui-list-description>
        <sui-list-list>
          <sui-list-item>
            <sui-list-icon name="folder" />
            <sui-list-content>
              <sui-list-header>site</sui-list-header>
              <sui-list-description>Your site"s theme</sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-list-icon name="folder" />
            <sui-list-content>
              <sui-list-header>themes</sui-list-header>
              <sui-list-description>Packaged theme files</sui-list-description>
              <sui-list-list>
                <sui-list-item>
                  <sui-list-icon name="folder" />
                  <sui-list-content>
                    <sui-list-header>default</sui-list-header>
                    <sui-list-description
                      >Default packaged theme</sui-list-description
                    >
                  </sui-list-content>
                </sui-list-item>
                <sui-list-item>
                  <sui-list-icon name="folder" />
                  <sui-list-content>
                    <sui-list-header>my_theme</sui-list-header>
                    <sui-list-description>
                      Packaged themes are also available in this folder
                    </sui-list-description>
                  </sui-list-content>
                </sui-list-item>
              </sui-list-list>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-list-icon name="file" />
            <sui-list-content>
              <sui-list-header>theme.config</sui-list-header>
              <sui-list-description
                >Config file for setting packaged themes</sui-list-description
              >
            </sui-list-content>
          </sui-list-item>
        </sui-list-list>
      </sui-list-content>
    </sui-list-item>
    <sui-list-item>
      <sui-list-icon name="folder" />
      <sui-list-content>
        <sui-list-header>dist</sui-list-header>
        <sui-list-description>Compiled CSS and JS files</sui-list-description>
        <sui-list-list>
          <sui-list-item>
            <sui-list-icon name="folder" />
            <sui-list-content>
              <sui-list-header>components</sui-list-header>
              <sui-list-description
                >Individual component CSS and JS</sui-list-description
              >
            </sui-list-content>
          </sui-list-item>
        </sui-list-list>
      </sui-list-content>
    </sui-list-item>
    <sui-list-item>
      <sui-list-icon name="file" />
      <sui-list-content>
        <sui-list-header>semantic.json</sui-list-header>
        <sui-list-description
          >Contains build settings for gulp</sui-list-description
        >
      </sui-list-content>
    </sui-list-item>
  </sui-list>
</template>

<script>
export default {
  name: 'ListShorthandExample',
};
</script>
