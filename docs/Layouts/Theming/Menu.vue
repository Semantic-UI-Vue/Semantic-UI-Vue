<template lang="html">
  <body>
    <div class="ui menu">
      <div class="header item">Brand</div>
      <a class="active item">Link</a>
      <a class="item">Link</a>
      <div class="ui dropdown item" tabindex="0">
        Dropdown
        <i class="dropdown icon"></i>
        <div class="menu" tabindex="-1">
          <div class="item">Action</div>
          <div class="item">Another Action</div>
          <div class="item">Something else here</div>
          <div class="divider"></div>
          <div class="item">Separated Link</div>
          <div class="divider"></div>
          <div class="item">One more separated link</div>
        </div>
      </div>
      <div class="right menu">
        <div class="item">
          <div class="ui action left icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="Search">
            <button class="ui button">Submit</button>
          </div>
        </div>
        <a class="item">Link</a>
      </div>
    </div>

    <div class="ui inverted menu">
      <div class="header item">Brand</div>
      <div class="active item">Link</div>
      <a class="item">Link</a>
      <div class="ui dropdown item" tabindex="0">
        Dropdown
        <i class="dropdown icon"></i>
        <div class="menu" tabindex="-1">
          <div class="item">Action</div>
          <div class="item">Another Action</div>
          <div class="item">Something else here</div>
          <div class="divider"></div>
          <div class="item">Separated Link</div>
          <div class="divider"></div>
          <div class="item">One more separated link</div>
        </div>
      </div>
      <div class="right menu">
        <div class="item">
          <div class="ui transparent inverted icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="Search">
          </div>
        </div>
        <a class="item">Link</a>
      </div>
    </div>

    <div class="ui secondary menu">
      <div class="active item">Link</div>
      <a class="item">Link</a>
      <div class="ui dropdown item" tabindex="0">
        Dropdown
        <i class="dropdown icon"></i>
        <div class="menu" tabindex="-1">
          <div class="item">Action</div>
          <div class="item">Another Action</div>
          <div class="item">Something else here</div>
          <div class="divider"></div>
          <div class="item">Separated Link</div>
          <div class="divider"></div>
          <div class="item">One more separated link</div>
        </div>
      </div>
      <div class="right menu">
        <div class="item">
          <div class="ui action left icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="Search">
            <button class="ui button">Submit</button>
          </div>
        </div>
        <div class="ui dropdown item" tabindex="0">
          Dropdown Left<i class="dropdown icon"></i>
          <div class="menu" tabindex="-1">
            <a class="item">Link</a>
            <a class="item">Link</a>
            <div class="divider"></div>
            <div class="header">Header</div>
            <div class="item">
              <i class="dropdown icon"></i>
              Sub Menu
              <div class="menu">
                <a class="item">Link</a>
                <div class="item">
                  <i class="dropdown icon"></i>
                  Sub Sub Menu
                  <div class="menu">
                    <a class="item">Link</a>
                    <a class="item">Link</a>
                  </div>
                </div>
                <a class="item">Link</a>
              </div>
            </div>
            <a class="item">Link</a>
          </div>
        </div>
        <a class="item">Link</a>
      </div>
    </div>

    <div class="ui three column doubling grid">
      <div class="column">
        <div class="ui secondary pointing menu">
          <div class="active item">Link</div>
          <a class="item">Link</a>
          <a class="item">Link</a>
        </div>
      </div>

      <div class="column">
        <div class="ui tabular menu">
          <div class="active item">Link</div>
          <a class="item">Link</a>
          <a class="item">Link</a>
        </div>
      </div>

      <div class="column">
        <div class="ui pointing menu">
          <div class="active item">Link</div>
          <a class="item">Link</a>
          <div class="right item">
            Right Text
          </div>
        </div>
      </div>
    </div>


    <div style="clear: both; display: block;"></div>
  </body>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
