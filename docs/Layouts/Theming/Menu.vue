<template lang="html">
  <div>
    <div is="sui-menu">
      <div is="sui-menu-item" header>Brand</div>
      <a is="sui-menu-item" active>Link</a>
      <a is="sui-menu-item">Link</a>
      <!-- <div class="ui dropdown item" tabindex="0">
        Dropdown
        <i class="dropdown icon"></i>
        <div is="sui-menu-menu" tabindex="-1">
          <div is="sui-menu-item">Action</div>
          <div is="sui-menu-item">Another Action</div>
          <div is="sui-menu-item">Something else here</div>
          <div is="sui-menu-divider"></div>
          <div is="sui-menu-item">Separated Link</div>
          <div is="sui-menu-divider"></div>
          <div is="sui-menu-item">One more separated link</div>
        </div>
      </div> -->
      <!-- <div is="sui-menu" class="right menu">
        <div class="item">
          <div class="ui action left icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="Search">
            <button class="ui button">Submit</button>
          </div>
        </div>
        <a class="item">Link</a>
      </div> -->
    </div>

    <div is="sui-menu" inverted>
      <div is="sui-menu-item" header>Brand</div>
      <div is="sui-menu-item" active>Link</div>
      <a is="sui-menu-item">Link</a>
      <!-- <div class="ui dropdown item" tabindex="0">
        Dropdown
        <i class="dropdown icon"></i>
        <div is="sui-menu" class="menu" tabindex="-1">
          <div class="item">Action</div>
          <div class="item">Another Action</div>
          <div class="item">Something else here</div>
          <div class="divider"></div>
          <div class="item">Separated Link</div>
          <div class="divider"></div>
          <div class="item">One more separated link</div>
        </div>
      </div> -->
      <!-- <div is="sui-menu-menu" class="right menu">
        <div class="item">
          <div class="ui transparent inverted icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="Search">
          </div>
        </div>
        <a class="item">Link</a>
      </div> -->
    </div>

    <div is="sui-menu" secondary>
      <div is="sui-menu-item" active>Link</div>
      <a is="sui-menu-item">Link</a>
      <!-- <div class="ui dropdown item" tabindex="0">
        Dropdown
        <i class="dropdown icon"></i>
        <div is="sui-menu" class="menu" tabindex="-1">
          <div class="item">Action</div>
          <div class="item">Another Action</div>
          <div class="item">Something else here</div>
          <div class="divider"></div>
          <div class="item">Separated Link</div>
          <div class="divider"></div>
          <div class="item">One more separated link</div>
        </div>
      </div> -->
      <!-- <div is="sui-menu-menu" class="right menu">
        <div class="item">
          <div class="ui action left icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="Search">
            <button class="ui button">Submit</button>
          </div>
        </div>
        <div class="ui dropdown item" tabindex="0">
          Dropdown Left<i class="dropdown icon"></i>
          <div is="sui-menu" class="menu" tabindex="-1">
            <a class="item">Link</a>
            <a class="item">Link</a>
            <div class="divider"></div>
            <div class="header">Header</div>
            <div class="item">
              <i class="dropdown icon"></i>
              Sub Menu
              <div is="sui-menu" class="menu">
                <a class="item">Link</a>
                <div class="item">
                  <i class="dropdown icon"></i>
                  Sub Sub Menu
                  <div is="sui-menu" class="menu">
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
      </div> -->
    </div>

    <div is="sui-grid" :columns="3" doubling>
      <div is="sui-grid-column">
        <div is="sui-menu" secondary pointing>
          <div is="sui-menu-item" active>Link</div>
          <a is="sui-menu-item">Link</a>
          <a is="sui-menu-item">Link</a>
        </div>
      </div>

      <div is="sui-grid-column">
        <div is="sui-menu" tabular>
          <div is="sui-menu-item" active>Link</div>
          <a is="sui-menu-item">Link</a>
          <a is="sui-menu-item">Link</a>
        </div>
      </div>

      <div is="sui-grid-column">
        <div is="sui-menu" pointing>
          <div is="sui-menu-item" active>Link</div>
          <a is="sui-menu-item">Link</a>
          <!-- <div class="right item">
            Right Text
          </div> -->
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
