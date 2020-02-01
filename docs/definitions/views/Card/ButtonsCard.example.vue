<template lang="html">
  <div>
    <sui-card-group :items-per-row="3">
      <sui-card>
        <sui-card-content>
          <sui-card-header>Elliot Fu</sui-card-header>
          <sui-card-meta>Friend</sui-card-meta>
          <sui-card-description>
            Elliot Fu is a film-maker from New York.
          </sui-card-description>
        </sui-card-content>
        <sui-button attached="bottom">
          <sui-icon name="add" /> Add Friend
        </sui-button>
      </sui-card>
      <sui-card>
        <sui-card-content>
          <sui-card-header>Veronika Ossi</sui-card-header>
          <sui-card-meta>Friend</sui-card-meta>
          <sui-card-description>
            Veronika Ossi is a set designer living in New York who enjoys
            kittens, music, and partying.
          </sui-card-description>
        </sui-card-content>
        <sui-button attached="bottom">
          <sui-icon name="add" /> Add Friend
        </sui-button>
      </sui-card>
      <sui-card>
        <sui-card-content>
          <sui-card-header>Jenny Hess</sui-card-header>
          <sui-card-meta>Friend</sui-card-meta>
          <sui-card-description>
            Jenny is a student studying Media Management at the New School
          </sui-card-description>
        </sui-card-content>
        <sui-button attached="bottom">
          <sui-icon name="add" /> Add Friend
        </sui-button>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonsCardExample',
};
</script>
