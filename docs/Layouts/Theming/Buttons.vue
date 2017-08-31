<template lang="html">
  <div>
    <div class="ui stackable equal width grid">
      <div class="column">
        <button is="sui-button">Default</button>
        <button is="sui-button" primary>Primary</button>
        <button is="sui-button" secondary>Secondary</button>
        <button is="sui-button" basic>Basic</button>
        <button is="sui-button" compact>
          Compact
        </button>

        <div is="sui-divider" />
        <button is="sui-button" icon="heart" />
        <button is="sui-button" icon="heart" content="Labeled" label-position="left" />
        <button is="sui-button" icon="heart" content="Labeled" label-position="right" />

        <div is="sui-divider" />

        <div is="sui-button-group">
          <button is="sui-button">Combo</button>
          <!-- <div class="ui floating dropdown icon button" tabindex="0">
            <i class="dropdown icon"></i>
            <div class="menu" tabindex="-1">
              <div class="item">Choice 1</div>
              <div class="item">Choice 2</div>
              <div class="item">Choice 3</div>
            </div>
          </div> -->
        </div>

        <!-- <div class="ui floating search dropdown button">
          <input class="search" autocomplete="off" tabindex="0"><span class="text">Search Dropdown</span>
          <div class="menu" tabindex="-1">
            <div class="item">Arabic</div>
            <div class="item">Chinese</div>
            <div class="item">Danish</div>
            <div class="item">Dutch</div>
            <div class="item">English</div>
            <div class="item">French</div>
            <div class="item">German</div>
            <div class="item">Greek</div>
            <div class="item">Hungarian</div>
            <div class="item">Italian</div>
            <div class="item">Japanese</div>
            <div class="item">Korean</div>
            <div class="item">Lithuanian</div>
            <div class="item">Persian</div>
            <div class="item">Polish</div>
            <div class="item">Portuguese</div>
            <div class="item">Russian</div>
            <div class="item">Spanish</div>
            <div class="item">Swedish</div>
            <div class="item">Turkish</div>
            <div class="item">Vietnamese</div>
          </div>
        </div> -->

        <div is="sui-divider" />

        <!-- <div class="ui animated button" tabindex="0">
          <div class="visible content">Horizontal</div>
          <div class="hidden content">
            Hidden
          </div>
        </div>
        <div class="ui vertical animated button" tabindex="0">
          <div class="visible content">Vertical</div>
          <div class="hidden content">
            Hidden
          </div>
        </div>
        <div class="ui animated fade button" tabindex="0">
          <div class="visible content">Fade In</div>
          <div class="hidden content">
            Hidden
          </div>
        </div> -->

        <div is="sui-divider" />

        <button is="sui-button" disabled>Disabled</button>
        <button is="sui-button" loading>Loading</button>

        <div is="sui-divider" />

        <div class="ui buttons">
          <button is="sui-button">1</button>
          <button is="sui-button">2</button>
          <button is="sui-button">3</button>
        </div>

        <div class="ui icon buttons">
          <button is="sui-button" icon="align left" />
          <button is="sui-button" icon="align center" />
          <button is="sui-button" icon="align right" />
          <button is="sui-button" icon="align justify" />
        </div>

        <div is="sui-button-group">
          <button is="sui-button">1</button>
          <div is="sui-button-or"></div>
          <button is="sui-button">2</button>
        </div>

        <div is="sui-divider" />

        <!-- <div class="ui two top attached buttons">
          <div class="ui button">One</div>
          <div class="ui button">Two</div>
        </div>
        <div class="ui attached segment">
          <img src="../assets/images/wireframe/paragraph.png" class="ui wireframe image">
        </div>
        <div class="ui two bottom attached buttons">
          <div class="ui button">One</div>
          <div class="ui button">Two</div>
        </div> -->

      </div>
      <div class="column">
        <button is="sui-button" mini>Mini</button>
        <button is="sui-button" tiny>Tiny</button>
        <button is="sui-button" small>Small</button>
        <button is="sui-button" large>Large</button>
        <button is="sui-button" big>Big</button>
        <button is="sui-button" huge>Huge</button>
        <button is="sui-button" massive>Massive</button>
        <div is="sui-divider" />
        <div class="spaced">
          <button is="sui-button" color="yellow">Yellow</button>
          <button is="sui-button" color="orange">Orange</button>
          <button is="sui-button" color="green">Green</button>
          <button is="sui-button" color="teal">Teal</button>
          <button is="sui-button" color="blue">Blue</button>
          <button is="sui-button" color="purple">Purple</button>
          <button is="sui-button" color="pink">Pink</button>
          <button is="sui-button" color="red">Red</button>
          <button is="sui-button" color="black">Black</button>
        </div>


        <div is="sui-divider" />

        <div is="sui-segment" inverted>
          <button is="sui-button" inverted>Inverted</button>
          <button is="sui-button" inverted color="basic">Basic</button>
          <button is="sui-button" inverted color="blue">Colored</button>
          <button is="sui-button" inverted color="blue" basic>Basic Colored</button>
        </div>

      </div>
    </div>


    <div style="clear: both; display: block;"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
