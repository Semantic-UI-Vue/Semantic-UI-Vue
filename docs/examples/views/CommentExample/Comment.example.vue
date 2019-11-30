<template lang="html">
  <sui-comment-group>
    <h3 is="sui-header" dividing>Comments</h3>

    <sui-comment>
      <sui-comment-avatar src="static/images/avatar/small/matt.jpg" />
      <sui-comment-content>
        <a is="sui-comment-author">Matt</a>
        <sui-comment-metadata>
          <div>Today at 5:42PM</div>
        </sui-comment-metadata>
        <sui-comment-text>How artistic!</sui-comment-text>
        <sui-comment-actions>
          <sui-comment-action>Reply</sui-comment-action>
        </sui-comment-actions>
      </sui-comment-content>
    </sui-comment>

    <sui-comment>
      <sui-comment-avatar src="static/images/avatar/small/elliot.jpg" />
      <sui-comment-content>
        <a is="sui-comment-author">Elliot Fu</a>
        <sui-comment-metadata>
          <div>Yesterday at 12:30AM</div>
        </sui-comment-metadata>
        <sui-comment-text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </sui-comment-text>
        <sui-comment-actions>
          <sui-comment-action>Reply</sui-comment-action>
        </sui-comment-actions>
      </sui-comment-content>
      <sui-comment-group>
        <sui-comment>
          <sui-comment-avatar src="static/images/avatar/small/jenny.jpg" />
          <sui-comment-content>
            <a is="sui-comment-author">Jenny Hess</a>
            <sui-comment-metadata>
              <div>Just now</div>
            </sui-comment-metadata>
            <sui-comment-text>
              Elliot you are always so right :)
            </sui-comment-text>
            <sui-comment-actions>
              <sui-comment-action>Reply</sui-comment-action>
            </sui-comment-actions>
          </sui-comment-content>
        </sui-comment>
      </sui-comment-group>
    </sui-comment>

    <sui-comment>
      <sui-comment-avatar src="static/images/avatar/small/joe.jpg" />
      <sui-comment-content>
        <a is="sui-comment-author">Joe Henderson</a>
        <sui-comment-metadata>
          <div>5 days ago</div>
        </sui-comment-metadata>
        <sui-comment-text>
          Dude, this is awesome. Thanks so much
        </sui-comment-text>
        <sui-comment-actions>
          <sui-comment-action>Reply</sui-comment-action>
        </sui-comment-actions>
      </sui-comment-content>
    </sui-comment>

    <form reply>
      <sui-button
        content="Add Reply"
        label-position="left"
        icon="edit"
        primary
      />
    </form>
  </sui-comment-group>
</template>

<script>
export default {
  name: 'CommentExample',
};
</script>
