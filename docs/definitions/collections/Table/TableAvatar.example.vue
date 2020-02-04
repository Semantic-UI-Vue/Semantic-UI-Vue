<template lang="html">
  <sui-table basic="very" celled collapsing>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Employee</sui-table-header-cell>
        <sui-table-header-cell>Correct Guesses</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>

    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>
          <h4 is="sui-header" image>
            <sui-image
              src="static/images/avatar/small/lena.png"
              shape="rounded"
              size="mini"
            />
            <sui-header-content>
              Lena
              <sui-header-subheader>Human Resources</sui-header-subheader>
            </sui-header-content>
          </h4>
        </sui-table-cell>
        <sui-table-cell>
          22
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <h4 is="sui-header" image>
            <sui-image
              src="static/images/avatar/small/matthew.png"
              shape="rounded"
              size="mini"
            />
            <sui-header-content>
              Matthew
              <sui-header-subheader>Fabric Design</sui-header-subheader>
            </sui-header-content>
          </h4>
        </sui-table-cell>
        <sui-table-cell>
          15
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <h4 is="sui-header" image>
            <sui-image
              src="static/images/avatar/small/lindsay.png"
              shape="rounded"
              size="mini"
            />
            <sui-header-content>
              Lindsay
              <sui-header-subheader>Entertainment</sui-header-subheader>
            </sui-header-content>
          </h4>
        </sui-table-cell>
        <sui-table-cell>
          12
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <h4 is="sui-header" image>
            <sui-image
              src="static/images/avatar/small/mark.png"
              shape="rounded"
              size="mini"
            />
            <sui-header-content>
              Mark
              <sui-header-subheader>Executive</sui-header-subheader>
            </sui-header-content>
          </h4>
        </sui-table-cell>
        <sui-table-cell>
          11
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
export default {
  name: 'TableAvatarExample',
};
</script>
