<template>
  <div>
    <div is="sui-divider" horizontal>
      <h4 is="sui-header">
        <i class="tag icon"></i>
        Description
      </h4>
    </div>

    <p>
      Doggie treats are good for all times of the year. Proven to be eaten by
      99.9% of all dogs worldwide.
    </p>

    <div is="sui-divider" horizontal>
      <h4 is="sui-header">
        <i class="bar chart icon"></i>
        Specifications
      </h4>
    </div>

    <table class="ui definition table">
      <tbody>
        <tr>
          <td class="two wide column">Size</td>
          <td>1" x 2"</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>6 ounces</td>
        </tr>
        <tr>
          <td>Color</td>
          <td>Yellowish</td>
        </tr>
        <tr>
          <td>Odor</td>
          <td>Not Much Usually</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HorizontalDivider2Example',
};
</script>
