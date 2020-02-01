<template lang="html">
  <div>
    <sui-card-group :items-per-row="3">
      <sui-card>
        <sui-image src="static/images/avatar/large/matthew.png" />
        <sui-card-content>
          <sui-card-header>Matt Giampietro</sui-card-header>
          <sui-card-meta>Friends</sui-card-meta>
          <sui-card-description>
            Matthew is an interior designer living in New York.
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="user" /> 75 Friends
          <span slot="right">Joined in 2013</span>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/molly.png" />
        <sui-card-content>
          <sui-card-header>Molly</sui-card-header>
          <sui-card-meta>Coworker</sui-card-meta>
          <sui-card-description>
            Molly is a personal assistant living in Paris.
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="user" /> 35 Friends
          <span slot="right">Joined in 2011</span>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/elyse.png" />
        <sui-card-content>
          <sui-card-header>Elyse</sui-card-header>
          <sui-card-meta>Coworker</sui-card-meta>
          <sui-card-description>
            Elyse is a copywriter working in New York.
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="user" /> 151 Friends
          <span slot="right">Joined in 2014</span>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'Card1Example',
};
</script>
