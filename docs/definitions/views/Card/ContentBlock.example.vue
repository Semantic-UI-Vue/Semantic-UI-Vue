<template lang="html">
  <div>
    <sui-card>
      <sui-card-content>
        <sui-card-header>
          Project Timeline
        </sui-card-header>
      </sui-card-content>
      <sui-card-content>
        <sui-header size="tiny">ACTIVITY</sui-header>
        <!--
          sui-feed is not available yet, therefore base semantic ui has been substituted for now
        -->
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary"><a>Helen Troy</a> added two pictures</div>
            </div>
          </div>
        </div>
        <!-- end of base semantic ui, to be updated in the future with sui-feed -->
      </sui-card-content>
      <sui-card-content extra>
        <sui-button>Join Project</sui-button>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'ContentBlockExample',
};
</script>
