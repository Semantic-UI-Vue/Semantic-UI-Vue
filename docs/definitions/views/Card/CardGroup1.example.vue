<template lang="html">
  <div>
    <sui-card-group :items-per-row="3">
      <sui-card>
        <sui-card-content>
          <sui-image
            src="static/images/avatar/small/elliot.jpg"
            class="right floated"
          />
          <sui-card-header>Elliot Fu</sui-card-header>
          <sui-card-meta>Friends of Veronika</sui-card-meta>
          <sui-card-description>
            Elliot requested permission to view your contact details
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-container text-align="center">
            <sui-button-group>
              <sui-button basic positive>Approve</sui-button>
              <sui-button basic negative>Decline</sui-button>
            </sui-button-group>
          </sui-container>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-card-content>
          <sui-image
            src="static/images/avatar/small/jenny.jpg"
            class="right floated"
          />
          <sui-card-header>Jenny Hess</sui-card-header>
          <sui-card-meta>New Member</sui-card-meta>
          <sui-card-description>
            Jenny wants to add you to the group <b>best friends</b>
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-container text-align="center">
            <sui-button-group>
              <sui-button basic positive>Approve</sui-button>
              <sui-button basic negative>Decline</sui-button>
            </sui-button-group>
          </sui-container>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'CardGroup1Example',
};
</script>
