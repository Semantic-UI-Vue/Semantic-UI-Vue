<template lang="html">
  <div>
    <h5 is="sui-header" attached="top">
      Dogs
    </h5>
    <sui-segment attached>
      <p>Dogs are one type of animal</p>
    </sui-segment>
    <h5 is="sui-header" attached>
      Cats
    </h5>
    <sui-segment attached>
      <p>
        Cats are thought of as being related to dogs, but only humans think
        this.
      </p>
    </sui-segment>
    <h5 is="sui-header" attached>
      Lions
    </h5>
    <sui-segment attached>
      <p>Humans don't think of lions as being like cats, but they are.</p>
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'Attached2Example',
};
</script>
