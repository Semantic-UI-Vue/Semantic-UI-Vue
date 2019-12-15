<template lang="html">
  <sui-table single-line>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Registration Date</sui-table-header-cell>
        <sui-table-header-cell>E-mail address</sui-table-header-cell>
        <sui-table-header-cell>Premium Plan</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John Lilki</sui-table-cell>
        <sui-table-cell>September 14, 2013</sui-table-cell>
        <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
        <sui-table-cell>No</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie Harington</sui-table-cell>
        <sui-table-cell>January 11, 2014</sui-table-cell>
        <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell>
        <sui-table-cell>Yes</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jill Lewis</sui-table-cell>
        <sui-table-cell>May 11, 2014</sui-table-cell>
        <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell>
        <sui-table-cell>Yes</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
export default {
  name: 'TableLineExample',
};
</script>
