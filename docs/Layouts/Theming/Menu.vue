<template lang="html">
  <div>
    <div is="sui-menu">
      <div is="sui-menu-item" header>Brand</div>
      <a is="sui-menu-item" active>Link</a>
      <a is="sui-menu-item">Link</a>
      <sui-dropdown is="sui-menu-item" text="Dropdown">
        <div is="sui-dropdown-menu" tabindex="-1">
          <div is="sui-dropdown-item">Action</div>
          <div is="sui-dropdown-item">Another Action</div>
          <div is="sui-dropdown-item">Something else here</div>
          <div is="sui-dropdown-divider" />
          <div is="sui-dropdown-item">Separated Link</div>
          <div is="sui-dropdown-divider" />
          <div is="sui-dropdown-item">One more separated link</div>
        </div>
      </sui-dropdown>
      <div is="sui-menu-menu" position="right">
        <div is="sui-menu-item">
          <div
            type="text"
            placeholder="Submit"
            is="sui-input"
            action="Submit"
            icon="search"
            icon-position="left"
          />
        </div>
        <a is="sui-menu-item">Link</a>
      </div>
    </div>

    <div is="sui-menu" inverted>
      <div is="sui-menu-item" header>Brand</div>
      <a is="sui-menu-item" active>Link</a>
      <a is="sui-menu-item">Link</a>
      <sui-dropdown is="sui-menu-item" text="Dropdown">
        <div is="sui-dropdown-menu" tabindex="-1">
          <div is="sui-dropdown-item">Action</div>
          <div is="sui-dropdown-item">Another Action</div>
          <div is="sui-dropdown-item">Something else here</div>
          <div is="sui-dropdown-divider" />
          <div is="sui-dropdown-item">Separated Link</div>
          <div is="sui-dropdown-divider" />
          <div is="sui-dropdown-item">One more separated link</div>
        </div>
      </sui-dropdown>
      <div is="sui-menu-menu" position="right">
        <div is="sui-menu-item">
          <div
            type="text"
            placeholder="Submit"
            is="sui-input"
            icon="search"
            inverted
            transparent
          />
        </div>
        <a is="sui-menu-item">Link</a>
      </div>
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
      <div is="sui-menu-menu" class="right menu">
        <div is="sui-menu-item">
          <div
            placeholder="Search"
            is="sui-input"
            action="Submit"
            icon="search"
            icon-position="left"
          />
          <!-- <div class="ui dropdown item" tabindex="0">
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
          </div> -->
        </div>
        <a is="sui-menu-item">Link</a>
      </div>
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
          <div is="sui-menu-item" position="right">
            Right Text
          </div>
        </div>
      </div>
    </div>

    <div style="clear: both; display: block;"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.ui.menu:last-child {
  margin-bottom: 110px;
}

.ui.menu {
  margin: 3em 0em;
}
</style>
