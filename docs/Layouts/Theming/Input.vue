<template lang="html">
  <body>

<div class="ui two column stackable grid">
  <div class="column">

    <div class="ui action left icon input">
      <i class="search icon"></i>
      <input type="text" placeholder="Search...">
      <div class="ui teal button">Search</div>
    </div>

    <div class="ui divider"></div>
    <div class="ui input error">
      <input placeholder="Search..." type="text">
    </div>
    <div class="ui divider"></div>

    <div class="ui right labeled input">
      <input placeholder="Placeholder" type="text">
      <div class="ui dropdown label" tabindex="0">
        <div class="text">Dropdown</div>
        <i class="dropdown icon"></i>
        <div class="menu" tabindex="-1">
          <div class="item">Choice 1</div>
          <div class="item">Choice 2</div>
          <div class="item">Choice 3</div>
        </div>
      </div>
    </div>
    <div class="ui divider"></div>

    <div class="ui transparent icon input">
      <input placeholder="Search..." type="text">
      <i class="search icon"></i>
    </div>
    <div class="ui transparent left icon input">
      <input placeholder="Search..." type="text">
      <i class="search icon"></i>
    </div>
    <div class="ui divider"></div>
    <div class="ui left icon input loading">
      <input placeholder="Loading..." type="text">
      <i class="search icon"></i>
    </div>

    <div class="ui icon input loading">
      <input placeholder="Loading..." type="text">
      <i class="search icon"></i>
    </div>

  </div>
  <div class="column">
    <div class="ui right labeled left icon input">
      <i class="tags icon"></i>
      <input placeholder="Enter tags" type="text">
      <a class="ui tag label">
        Add Tag
      </a>
    </div>
    <div class="ui divider"></div>
    <div class="ui labeled input">
      <a class="ui label">
        Label
      </a>
      <input type="text" placeholder="Placeholder...">
    </div>
    <div class="ui divider"></div>
    <div class="ui right labeled input">
      <input type="text" placeholder="Placeholder...">
      <a class="ui label">
        Label
      </a>
    </div>
    <div class="ui divider"></div>
    <div class="ui labeled icon input">
      <div class="ui label">
        http://
      </div>
      <input type="text" placeholder="domain.com">
      <i class="add circle link icon"></i>
    </div>
    <div class="ui right action input">
      <input type="text" placeholder="domain.com">
      <div class="ui teal button">
        <i class="add icon"></i>
        Add
      </div>
    </div>
    <div class="ui divider"></div>
    <div class="ui corner labeled input">
      <input type="text" placeholder="Required Field">
      <div class="ui corner label">
        <i class="asterisk icon"></i>
      </div>
    </div>

  </div>
</div>


<div style="clear: both; display: block;"></div></body>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
