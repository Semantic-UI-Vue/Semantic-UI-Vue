# `Examples`

## `BreadcrumbExample`

##   `Types`

##     `Breadcrumb`

####       `should match snapshot`

```
"<div><div><div class=\"ui breadcrumb\"><a class=\"link section\">Home</a> <div class=\"divider\">/</div> <a class=\"link section\">Store</a> <div class=\"divider\">/</div> <div class=\"active section\">T-Shirt</div></div></div> <div class=\"ui breadcrumb\"><a class=\"link section\">Home</a> <div class=\"divider\">/</div> <a class=\"link section\">Store</a> <div class=\"divider\">/</div> <div class=\"active section\">T-Shirt</div></div></div>"
```

##   `Content`

##     `Divider`

####       `should match snapshot`

```
"<div><div class=\"ui breadcrumb\"><a class=\"link section\">Home</a> <div class=\"divider\">/</div> <a class=\"link section\">Registration</a> <div class=\"divider\">/</div> <div class=\"active section\">Personal Information</div></div></div>"
```

##     `Section`

####       `should match snapshot`

```
"<div><div class=\"ui breadcrumb\"><a class=\"link section\">Home</a> <div class=\"divider\">/</div> <div class=\"active section\">Search</div></div></div>"
```

##     `Link`

####       `should match snapshot`

```
"<div><div class=\"ui breadcrumb\"><a class=\"link section\">Home</a> <div class=\"divider\">/</div> <a class=\"link section\">Store</a> <i class=\"right chevron icon divider\"></i> <div class=\"active section\">
      Search for:
      <a href=\"javascript:void 0\">paper towels</a></div></div></div>"
```

## `FormExample`

##   `Types`

##     `Form`

####       `should match snapshot`

```
"<form class=\"ui form\"><div class=\"field\"><label>First Name</label> <input placeholder=\"First Name\"></div> <div class=\"field\"><label>Last Name</label> <input placeholder=\"Last Name\"></div> <div class=\"field\"><div class=\"ui checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>I agree to the Terms and Conditions</label></div></div> <button role=\"button\" class=\"ui button\" type=\"submit\">Submit</button></form>"
```

## `GridExample`

##   `Types`

##     `Grid`

####       `should match snapshot`

```
"<div class=\"ui grid\"><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div><div class=\"column\"></div></div>"
```

##     `Divided`

####       `should match snapshot`

```
"<div class=\"ui three column divided grid\"><div class=\"row\"><div class=\"column\"><docs-wireframe name=\"media-paragraph\"></docs-wireframe></div><div class=\"column\"><docs-wireframe name=\"media-paragraph\"></docs-wireframe></div><div class=\"column\"><docs-wireframe name=\"media-paragraph\"></docs-wireframe></div></div><div class=\"row\"><div class=\"column\"><docs-wireframe name=\"media-paragraph\"></docs-wireframe></div><div class=\"column\"><docs-wireframe name=\"media-paragraph\"></docs-wireframe></div><div class=\"column\"><docs-wireframe name=\"media-paragraph\"></docs-wireframe></div></div></div>"
```

##     `Vertically Divided`

####       `should match snapshot`

```
"<div class=\"ui vertically divided grid\"><div class=\"two column row\"><div class=\"column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div> <div class=\"column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div></div> <div class=\"three column row\"><div class=\"column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div> <div class=\"column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div> <div class=\"column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div></div></div>"
```

##     `Celled`

####       `should match snapshot`

```
"<div class=\"ui celled grid\"><div class=\"row\"><div class=\"three wide column\"><docs-wireframe name=\"image\"></docs-wireframe></div> <div class=\"thirteen wide column\"><docs-wireframe name=\"centered-paragraph\"></docs-wireframe></div></div> <div class=\"row\"><div class=\"three wide column\"><docs-wireframe name=\"image\"></docs-wireframe></div> <div class=\"ten wide column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div> <div class=\"three wide column\"><docs-wireframe name=\"image\"></docs-wireframe></div></div></div>"
```

##     `Internally Celled`

####       `should match snapshot`

```
"<div class=\"ui internally celled grid\"><div class=\"row\"><div class=\"three wide column\"><docs-wireframe name=\"image\"></docs-wireframe></div> <div class=\"ten wide column\"><docs-wireframe name=\"centered-paragraph\"></docs-wireframe></div> <div class=\"three wide column\"><docs-wireframe name=\"image\"></docs-wireframe></div></div> <div class=\"row\"><div class=\"three wide column\"><docs-wireframe name=\"image\"></docs-wireframe></div> <div class=\"ten wide column\"><docs-wireframe name=\"media-paragraph\"></docs-wireframe></div> <div class=\"three wide column\"><docs-wireframe name=\"image\"></docs-wireframe></div></div></div>"
```

##   `Content`

##     `Rows`

####       `should match snapshot`

```
"<div class=\"ui three column grid\"><div class=\"row\"><div class=\"column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div> <div class=\"column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div></div> <div class=\"row\"><div class=\"column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div> <div class=\"column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div> <div class=\"column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div></div></div>"
```

##     `Columns`

####       `should match snapshot`

```
"<div class=\"ui grid\"><div class=\"row\"><div class=\"eight wide column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div> <div class=\"eight wide column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div></div> <div class=\"row\"><div class=\"eight wide column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div> <div class=\"eight wide column\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div></div></div>"
```

##   `Variations`

##     `Stretched`

####       `should match snapshot`

```
"<div class=\"ui three column divided grid\"><div class=\"stretched row\"><div class=\"column\"><div class=\"ui segment\">1</div></div> <div class=\"column\"><div class=\"ui segment\">1</div> <div class=\"ui segment\">2</div></div> <div class=\"column\"><div class=\"ui segment\">1</div> <div class=\"ui segment\">2</div> <div class=\"ui segment\">3</div></div></div></div>"
```

## `MenuExample`

##   `Types`

##     `Menu`

####       `should match snapshot`

```
"<div class=\"ui three item menu\"><div class=\"item\">Editorials</div> <div class=\"item\">Reviews</div> <div class=\"active item\">Upcoming Events</div></div>"
```

##     `Secondary Menu`

####       `should match snapshot`

```
"<div class=\"ui secondary menu\"><a class=\"active link item\" name=\"Home\">Home</a> <div class=\"item\" name=\"Messages\">Messages</div> <div class=\"item\" name=\"Friends\">Friends</div></div>"
```

##     `Pointing`

####       `should match snapshot`

```
"<div><div class=\"ui pointing menu\"><a class=\"active item\">Home</a><a class=\"item\">Messages</a><a class=\"item\">Friends</a> <div class=\"right menu\"><div class=\"item\"><div class=\"ui transparent icon input\" placeholder=\"Search...\"><input placeholder=\"Search...\"><i class=\"search icon\"></i></div></div></div></div> <div class=\"ui segment\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div></div>"
```

##     `Tabular`

####       `should match snapshot`

```
"<div class=\"ui tabular menu\"><a class=\"active item\">Bio</a><a class=\"item\">Photos</a></div>"
```

##     `Text`

####       `should match snapshot`

```
"<div class=\"ui text menu\"><div class=\"header item\">Sort By</div> <a class=\"active item\">Closest</a><a class=\"item\">Most Comments</a><a class=\"item\">Most Popular</a></div>"
```

## `MessageExample`

##   `Types`

##     `Message`

####       `should match snapshot`

```
"<div><div class=\"ui message\"><div class=\"header\">Changes in Service</div> <p>
      We updated our privacy policy here to better service our customers.
      We recommend reviewing the changes.
    </p></div> <div class=\"ui message\"><div class=\"header\">Changes in Service</div>
      We updated our privacy policy here to better service our customers.
      We recommend reviewing the changes.
    </div></div>"
```

##     `List Message`

####       `should match snapshot`

```
"<div><div class=\"ui message\"><div class=\"header\">New Site Features</div> <ul class=\"list\"><li>
        You can now have cover images on blog pages
      </li> <li>
        Drafts will now auto-save while writing
      </li></ul></div> <div class=\"ui message\"><div class=\"header\">New Site Features</div><ul class=\"list\"><li>You can now have cover images on blog pages</li><li>Drafts will now auto-save while writing</li></ul></div></div>"
```

##     `Icon Message`

####       `should match snapshot`

```
"<div><div class=\"ui icon message\"><i class=\"inbox icon\"></i><div class=\"content\"><div class=\"header\">Have you heard about our mailing list?</div>Get the best news in your e-mail every day.</div></div> <div class=\"ui icon message\"><i class=\"icon\"></i><div class=\"content\"><i class=\"circle notched loading icon\"></i> <div class=\"content\"><div class=\"header\">Just one second</div>
      We are fetching that content for you.
    </div></div></div></div>"
```

##     `Dismissable Block`

####       `should match snapshot`

```
"<div><div class=\"ui message\" name=\"fade\"><i class=\"close icon\"></i><div class=\"header\">Welcome back!</div>This is a special notification which you can dismiss.</div> <!----></div>"
```

## `TableExample`

##   `Types`

##     `Table`

####       `should match snapshot`

```
"<table class=\"ui celled table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Header</th> <th class=\"\">Header</th> <th class=\"\">Header</th></tr></thead> <tbody><tr class=\"\"><td class=\"\"><div class=\"ui true ribbon label\">First</div></td> <td class=\"\">Cell</td> <td class=\"\">Cell</td></tr> <tr class=\"\"><td class=\"\">Cell</td> <td class=\"\">Cell</td> <td class=\"\">Cell</td></tr> <tr class=\"\"><td class=\"\">Cell</td> <td class=\"\">Cell</td> <td class=\"\">Cell</td></tr></tbody> <tfoot class=\"\"><tr class=\"\"><th class=\"\" colspan=\"3\"><div class=\"ui pagination menu right floated\"><a class=\"item\"><i class=\"icon\"></i><i class=\"left chevron icon\"></i></a> <a class=\"item\">1</a> <a class=\"item\">2</a> <a class=\"item\">3</a> <a class=\"item\">4</a> <a class=\"item\"><i class=\"icon\"></i><i class=\"right chevron icon\"></i></a></div></th></tr></tfoot></table>"
```

##     `Definition`

####       `should match snapshot`

```
"<table class=\"ui definition table\"><thead class=\"\"><tr class=\"\"><th class=\"\"></th> <th class=\"\">Arguments</th> <th class=\"\">Description</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">reset rating</td> <td class=\"\">None</td> <td class=\"\">Resets rating to default value</td></tr> <tr class=\"\"><td class=\"\">set rating</td> <td class=\"\">rating (integer)</td> <td class=\"\">Sets the current star rating to specified value</td></tr></tbody></table>"
```

##   `States`

##     `Positive / Negative`

####       `should match snapshot`

```
"<table class=\"ui celled table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">No Name Specified</td> <td class=\"\">Unknown</td> <td class=\"negative\">None</td></tr> <tr class=\"positive\"><td class=\"\">Jimmy</td> <td class=\"\"><i class=\"check icon\"></i>
        Approved
      </td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Unknown</td> <td class=\"positive\"><i class=\"close icon\"></i>
        Requires call
      </td></tr> <tr class=\"negative\"><td class=\"\">Jill</td> <td class=\"\">Unknown</td> <td class=\"\">None</td></tr></tbody></table>"
```

##     `Cells`

####       `should match snapshot`

```
"<div></div>"
```

##     `Error`

####       `should match snapshot`

```
"<table class=\"ui celled table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">No Name Specified</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr> <tr class=\"error\"><td class=\"\">Jimmy</td> <td class=\"\">Cannot pull data</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"error\"><i class=\"attention icon\"></i>
        Classified
      </td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr></tbody></table>"
```

##     `Warning`

####       `should match snapshot`

```
"<table class=\"ui celled table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">No Name Specified</td> <td class=\"\">Unknown</td> <td class=\"\">None</td></tr> <tr class=\"warning\"><td class=\"\">Jimmy</td> <td class=\"\"><i class=\"attention icon\"></i>
        Requires Action
      </td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Unknown</td> <td class=\"warning\"><i class=\"attention icon\"></i>
        Hostile
      </td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Unknown</td> <td class=\"\">None</td></tr></tbody></table>"
```

##     `Active`

####       `should match snapshot`

```
"<table class=\"ui celled table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"active\"><td class=\"\">John</td> <td class=\"\">Selected</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"active\">Jill</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr></tbody></table>"
```

##     `Disabled`

####       `should match snapshot`

```
"<table class=\"ui celled table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"disabled\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"\">John</td> <td class=\"\">Selected</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"disabled\">Jill</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr></tbody></table>"
```

##   `Variations`

##     `Single Line`

####       `should match snapshot`

```
"<table class=\"ui single line table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Registration Date</th> <th class=\"\">E-mail address</th> <th class=\"\">Premium Plan</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John Lilki</td> <td class=\"\">September 14, 2013</td> <td class=\"\">jhlilk22@yahoo.com</td> <td class=\"\">No</td></tr> <tr class=\"\"><td class=\"\">Jamie Harington</td> <td class=\"\">January 11, 2014</td> <td class=\"\">jamieharingonton@yahoo.com</td> <td class=\"\">Yes</td></tr> <tr class=\"\"><td class=\"\">Jill Lewis</td> <td class=\"\">May 11, 2014</td> <td class=\"\">jilsewris22@yahoo.com</td> <td class=\"\">Yes</td></tr></tbody></table>"
```

##     `Fixed`

####       `should match snapshot`

```
"<table class=\"ui fixed table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Description</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">
        John is an interesting boy but sometimes you don't really
        have enough room to describe everything you'd like
      </td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">
        Jamie is a kind girl but sometimes you don't really
        have enough room to describe everything you'd like
      </td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Denied</td> <td class=\"\">
        Jill is an alright girl but sometimes you don't really
        have enough room to describe everything you'd like
      </td></tr></tbody></table>"
```

##     `Stacking`

####       `should match snapshot`

```
"<div><table class=\"ui unstackable table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"right aligned\">Description</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"right aligned\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"right aligned\">Requires call</td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Denied</td> <td class=\"right aligned\">None</td></tr></tbody></table> <table class=\"ui tablet stackable table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"right aligned\">Description</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"right aligned\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"right aligned\">Requires call</td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Denied</td> <td class=\"right aligned\">None</td></tr></tbody></table></div>"
```

##     `Selectable Row`

####       `should match snapshot`

```
"<table class=\"ui celled selectable table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">No Action</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Denied</td> <td class=\"\">None</td></tr> <tr class=\"warning\"><td class=\"\">John</td> <td class=\"\">No Action</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"positive\">Approved</td> <td class=\"warning\">Requires call</td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"negative\">Denied</td> <td class=\"\">None</td></tr></tbody></table>"
```

##     `Selectable Cell`

####       `should match snapshot`

```
"<table class=\"ui celled table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Edit</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">No Action</td> <td class=\"selectable\"><a href=\"#\">Edit</a></td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"selectable\"><a href=\"#\">Edit</a></td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Denied</td> <td class=\"selectable\"><a href=\"#\">Edit</a></td></tr> <tr class=\"warning\"><td class=\"\">John</td> <td class=\"\">No Action</td> <td class=\"selectable\"><a href=\"#\">Requires change</a></td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"positive\">Approved</td> <td class=\"positive selectable\"><a href=\"#\">Approve</a></td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"negative\">Denied</td> <td class=\"negative selectable\"><a href=\"#\">Remove</a></td></tr></tbody></table>"
```

##     `Vertical Alignment`

####       `should match snapshot`

```
"<table class=\"ui striped table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"top aligned\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"top aligned\">
        Notes<br>
        1<br>
        2<br></td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"bottom aligned\">Approved</td> <td class=\"\">
        Notes<br>
        1<br>
        2<br></td></tr></tbody></table>"
```

##     `Text Alignment`

####       `should match snapshot`

```
"<table class=\"ui striped table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"right aligned\">Notes</th></tr></thead> <tbody><tr class=\"center aligned\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"right aligned\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"right aligned\">Requires call</td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Denied</td> <td class=\"right aligned\">None</td></tr></tbody></table>"
```

##     `Striped`

####       `should match snapshot`

```
"<table class=\"ui striped table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Date Joined</th> <th class=\"\">E-mail</th> <th class=\"\">Called</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John Lilki</td> <td class=\"\">September 14, 2013</td> <td class=\"\">jhlilk22@yahoo.com</td> <td class=\"\">No</td></tr> <tr class=\"\"><td class=\"\">Jamie Harington</td> <td class=\"\">January 11, 2014</td> <td class=\"\">jamieharingonton@yahoo.com</td> <td class=\"\">Yes</td></tr> <tr class=\"\"><td class=\"\">Jill Lewis</td> <td class=\"\">May 11, 2014</td> <td class=\"\">jilsewris22@yahoo.com</td> <td class=\"\">Yes</td></tr> <tr class=\"\"><td class=\"\">John Lilki</td> <td class=\"\">September 14, 2013</td> <td class=\"\">jhlilk22@yahoo.com</td> <td class=\"\">No</td></tr> <tr class=\"\"><td class=\"\">John Lilki</td> <td class=\"\">September 14, 2013</td> <td class=\"\">jhlilk22@yahoo.com</td> <td class=\"\">No</td></tr> <tr class=\"\"><td class=\"\">Jamie Harington</td> <td class=\"\">January 11, 2014</td> <td class=\"\">jamieharingonton@yahoo.com</td> <td class=\"\">Yes</td></tr> <tr class=\"\"><td class=\"\">Jill Lewis</td> <td class=\"\">May 11, 2014</td> <td class=\"\">jilsewris22@yahoo.com</td> <td class=\"\">Yes</td></tr> <tr class=\"\"><td class=\"\">John Lilki</td> <td class=\"\">September 14, 2013</td> <td class=\"\">jhlilk22@yahoo.com</td> <td class=\"\">No</td></tr></tbody></table>"
```

##     `Celled`

####       `should match snapshot`

```
"<table class=\"ui celled table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Denied</td> <td class=\"\">None</td></tr></tbody> <tfoot class=\"\"><th class=\"\">3 People</th> <th class=\"\">2 Approved</th> <th class=\"\"></th></tfoot></table>"
```

##     `Basic`

####       `should match snapshot`

```
"<table class=\"ui basic table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Denied</td> <td class=\"\">None</td></tr></tbody></table>"
```

##     `Collapsing Cell`

####       `should match snapshot`

```
"<table class=\"ui table\"><tbody><tr class=\"\"><td class=\"collapsing\"><i class=\"folder icon\"></i>
        node_modules
      </td> <td class=\"\">Initial commit</td> <td class=\"\">10 hours ago</td></tr> <tr class=\"\"><td class=\"\"><i class=\"folder icon\"></i>
        test
      </td> <td class=\"\">Initial commit</td> <td class=\"\">10 hours ago</td></tr> <tr class=\"\"><td class=\"\"><i class=\"folder icon\"></i>
        test
      </td> <td class=\"\">Initial commit</td> <td class=\"\">10 hours ago</td></tr></tbody></table>"
```

##     `Column Width`

####       `should match snapshot`

```
"<table class=\"ui table\"><thead class=\"\"><tr class=\"\"><th class=\"ten wide\">Name</th> <th class=\"six wide\">Status</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Denied</td></tr></tbody> <tfoot class=\"\"><th class=\"\">3 People</th> <th class=\"\">2 Approved</th></tfoot></table>"
```

##     `Column Count`

####       `should match snapshot`

```
"<table class=\"ui five column table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Age</th> <th class=\"\">Gender</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">22</td> <td class=\"\">Male</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">32</td> <td class=\"\">Male</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Denied</td> <td class=\"\">22</td> <td class=\"\">Female</td> <td class=\"\">None</td></tr></tbody> <tfoot class=\"\"><th class=\"\">3 People</th> <th class=\"\">2 Approved</th> <th class=\"\"></th> <th class=\"\"></th> <th class=\"\"></th></tfoot></table>"
```

##     `Collapsing`

####       `should match snapshot`

```
"<table class=\"ui collapsing table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">Selected</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"\">Jill</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr></tbody> <tfoot class=\"\"><th class=\"\">3 People</th> <th class=\"\">2 Approved</th> <th class=\"\"></th></tfoot></table>"
```

##     `Colored`

####       `should match snapshot`

```
"<div class=\"ui container\"><table class=\"ui red table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui orange table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui yellow table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui olive table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui green table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui teal table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui blue table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui violet table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui purple table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui pink table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui grey table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui black table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table></div>"
```

##     `Inverted`

####       `should match snapshot`

```
"<div class=\"ui container\"><table class=\"ui inverted table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted red table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted orange table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted yellow table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted olive table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted green table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted teal table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted blue table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted violet table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted purple table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted pink table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted grey table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table> <table class=\"ui inverted black table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Food</th> <th class=\"\">Calories</th> <th class=\"\">Protein</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">Apples</td> <td class=\"\">200</td> <td class=\"\">0g</td></tr> <tr class=\"\"><td class=\"\">Orange</td> <td class=\"\">310</td> <td class=\"\">0g</td></tr></tbody></table></div>"
```

##     `Full-Width Header / Footer`

####       `should match snapshot`

```
"<table class=\"ui celled compact definition table\"><thead class=\"full-width\"><tr class=\"\"><th class=\"\"></th> <th class=\"\">Name</th> <th class=\"\">Registration Date</th> <th class=\"\">E-mail address</th> <th class=\"\">Premium Plan</th></tr></thead> <tbody><tr class=\"\"><td class=\"collapsing\"><div class=\"ui fitted toggle checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label></label></div></td> <td class=\"\">John Lilki</td> <td class=\"\">September 14, 2013</td> <td class=\"\">jhlilk22@yahoo.com</td> <td class=\"\">No</td></tr> <tr class=\"\"><td class=\"collapsing\"><div class=\"ui fitted toggle checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label></label></div></td> <td class=\"\">Jamie Harington</td> <td class=\"\">January 11, 2014</td> <td class=\"\">jamieharingonton@yahoo.com</td> <td class=\"\">Yes</td></tr> <tr class=\"\"><td class=\"collapsing\"><div class=\"ui fitted toggle checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label></label></div></td> <td class=\"\">Jill Lewis</td> <td class=\"\">May 11, 2014</td> <td class=\"\">jilsewris22@yahoo.com</td> <td class=\"\">Yes</td></tr></tbody> <tfoot class=\"full-width\"><tr class=\"\"><th class=\"\"></th> <th class=\"\" colspan=\"4\"><button role=\"button\" class=\"ui right floated primary small button\" labeled=\"\"><i class=\"user icon\"></i> Add User
        </button> <button role=\"button\" class=\"ui small button\">
          Approve
        </button> <button role=\"button\" class=\"ui disabled small button\">
          Approve All
        </button></th></tr></tfoot></table>"
```

##     `Padded`

####       `should match snapshot`

```
"<table class=\"ui padded table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">
        He is a very nice guy and I enjoyed talking to
        him on the telephone. I hope we get to talk again.
      </td></tr> <tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">
        Jamie was not interested in purchasing our product.
      </td></tr></tbody></table>"
```

##     `Compact`

####       `should match snapshot`

```
"<table class=\"ui compact table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr></tbody></table>"
```

##     `Size`

####       `should match snapshot`

```
"<table class=\"ui small table\"><thead class=\"\"><tr class=\"\"><th class=\"\">Name</th> <th class=\"\">Status</th> <th class=\"\">Notes</th></tr></thead> <tbody><tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr> <tr class=\"\"><td class=\"\">Jamie</td> <td class=\"\">Approved</td> <td class=\"\">Requires call</td></tr> <tr class=\"\"><td class=\"\">John</td> <td class=\"\">Approved</td> <td class=\"\">None</td></tr></tbody> <tfoot class=\"\"><th class=\"\">3 People</th> <th class=\"\">2 Approved</th> <th class=\"\"></th></tfoot></table>"
```

## `ButtonExample`

##   `Types`

##     `Button`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui button\">Click Here</button> <button role=\"button\" class=\"ui button\">Content as a prop</button> <div role=\"button\" class=\"ui button\">This is a div</div></div>"
```

##     `Emphasis`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui primary button\">Primary</button> <button role=\"button\" class=\"ui secondary button\">Secondary</button></div>"
```

##     `Animated`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui animated button\"><div class=\"visible content\">Next</div> <div class=\"hidden content\"><i class=\"right arrow icon\"></i></div></button> <button role=\"button\" class=\"ui vertical animated button\"><div class=\"hidden content\">Shop</div> <div class=\"visible content\"><i class=\"shop icon\"></i></div></button> <button role=\"button\" class=\"ui fade animated button\"><div class=\"visible content\">
      Sign-up for a Pro account
    </div> <div class=\"hidden content\">
      $12.99 a month
    </div></button></div>"
```

##     `Labeled`

####       `should match snapshot`

```
"<div><div class=\"ui labeled button\"><button role=\"button\" class=\"ui button\"><i class=\"heart icon\"></i>Like</button><a class=\"ui basic label\">2,048</a></div> <div class=\"ui left labeled button\"><a class=\"ui right pointing basic label\">
      2,048
    </a><button role=\"button\" class=\"ui button\"><i class=\"heart icon\"></i>Like</button></div> <div class=\"ui left labeled button\"><a class=\"ui basic label\">1,048</a><button role=\"button\" class=\"ui icon button\"><i class=\"fork icon\"></i></button></div></div>"
```

##     `Icon`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui icon button\"><i class=\"cloud icon\"></i></button></div>"
```

##     `LabeledIcon`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui icon left labeled button\"><i class=\"pause icon\"></i>Pause</button> <button role=\"button\" class=\"ui icon right labeled button\"><i class=\"right arrow icon\"></i>Next</button></div>"
```

##     `Basic`

####       `should match snapshot`

```
"<button role=\"button\" class=\"ui basic button\"><i class=\"user icon\"></i>Add Friend</button>"
```

##     `Inverted`

####       `should match snapshot`

```
"<div class=\"ui inverted segment\"><button role=\"button\" class=\"ui red inverted button\">Red</button> <button role=\"button\" class=\"ui orange inverted button\">Orange</button> <button role=\"button\" class=\"ui yellow inverted button\">Yellow</button> <button role=\"button\" class=\"ui olive inverted button\">Olive</button> <button role=\"button\" class=\"ui green inverted button\">Green</button> <button role=\"button\" class=\"ui teal inverted button\">Teal</button> <button role=\"button\" class=\"ui blue inverted button\">Blue</button> <button role=\"button\" class=\"ui violet inverted button\">Violet</button> <button role=\"button\" class=\"ui purple inverted button\">Purple</button> <button role=\"button\" class=\"ui pink inverted button\">Pink</button> <button role=\"button\" class=\"ui brown inverted button\">Brown</button> <button role=\"button\" class=\"ui grey inverted button\">Grey</button> <button role=\"button\" class=\"ui black inverted button\">Black</button></div>"
```

##   `Groups`

##     `Buttons`

####       `should match snapshot`

```
"<div class=\"ui buttons\"><button role=\"button\" class=\"ui button\">One</button> <button role=\"button\" class=\"ui button\">Two</button> <button role=\"button\" class=\"ui button\">Three</button></div>"
```

##     `IconButtons`

####       `should match snapshot`

```
"<div><div class=\"ui buttons\"><button role=\"button\" class=\"ui icon button\"><i class=\"align left icon\"></i></button> <button role=\"button\" class=\"ui icon button\"><i class=\"align center icon\"></i></button> <button role=\"button\" class=\"ui icon button\"><i class=\"align right icon\"></i></button> <button role=\"button\" class=\"ui icon button\"><i class=\"align justify icon\"></i></button></div> <div class=\"ui buttons\"><button role=\"button\" class=\"ui icon button\"><i class=\"bold icon\"></i></button> <button role=\"button\" class=\"ui icon button\"><i class=\"underline icon\"></i></button> <button role=\"button\" class=\"ui icon button\"><i class=\"text width icon\"></i></button></div></div>"
```

##   `Content`

##     `Conditional`

####       `should match snapshot`

```
"<div class=\"ui buttons\"><button role=\"button\" class=\"ui button\">Cancel</button> <div class=\"or\"></div> <button role=\"button\" class=\"ui positive button\">Save</button></div>"
```

##   `States`

##     `Active`

####       `should match snapshot`

```
"<button role=\"button\" class=\"ui active button\"><i class=\"user icon\"></i>Follow</button>"
```

##     `Disabled`

####       `should match snapshot`

```
"<button role=\"button\" class=\"ui disabled button\"><i class=\"user icon\"></i>Followed</button>"
```

##     `Loading`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui loading button\">Loading</button> <button role=\"button\" class=\"ui basic loading button\">Loading</button> <button role=\"button\" class=\"ui loading primary button\">Loading</button> <button role=\"button\" class=\"ui loading secondary button\">Loading</button></div>"
```

##   `Variations`

##     `Social`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui facebook button\"><i class=\"facebook icon\"></i>Facebook</button> <button role=\"button\" class=\"ui twitter button\"><i class=\"twitter icon\"></i>Twitter</button> <button role=\"button\" class=\"ui google button\"><i class=\"google icon\"></i>Google</button> <button role=\"button\" class=\"ui vk button\"><i class=\"vk icon\"></i>VK</button> <button role=\"button\" class=\"ui linkedin button\"><i class=\"linkedin icon\"></i>LinkedIn</button> <button role=\"button\" class=\"ui instagram button\"><i class=\"instagram icon\"></i>Instagram</button> <button role=\"button\" class=\"ui youtube button\"><i class=\"youtube icon\"></i>Youtube</button></div>"
```

##     `Size`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui mini button\">Mini</button> <button role=\"button\" class=\"ui tiny button\">Tiny</button> <button role=\"button\" class=\"ui small button\">Small</button> <button role=\"button\" class=\"ui medium button\">Medium</button> <button role=\"button\" class=\"ui large button\">Large</button> <button role=\"button\" class=\"ui big button\">Big</button> <button role=\"button\" class=\"ui huge button\">Huge</button> <button role=\"button\" class=\"ui massive button\">Massive</button></div>"
```

##     `Floated`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui left floated button\">Left floated</button> <button role=\"button\" class=\"ui right floated button\">Right floated</button></div>"
```

##     `Colored`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui red button\">Red</button> <button role=\"button\" class=\"ui orange button\">Orange</button> <button role=\"button\" class=\"ui yellow button\">Yellow</button> <button role=\"button\" class=\"ui olive button\">Olive</button> <button role=\"button\" class=\"ui green button\">Green</button> <button role=\"button\" class=\"ui teal button\">Teal</button> <button role=\"button\" class=\"ui blue button\">Blue</button> <button role=\"button\" class=\"ui violet button\">Violet</button> <button role=\"button\" class=\"ui purple button\">Purple</button> <button role=\"button\" class=\"ui pink button\">Pink</button> <button role=\"button\" class=\"ui brown button\">Brown</button> <button role=\"button\" class=\"ui grey button\">Grey</button> <button role=\"button\" class=\"ui black button\">Black</button></div>"
```

##     `Compact`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui compact button\">Hold</button> <button role=\"button\" class=\"ui compact icon button\"><i class=\"pause icon\"></i></button> <button role=\"button\" class=\"ui compact icon left labeled button\"><i class=\"pause icon\"></i>Pause</button></div>"
```

##     `Positive`

####       `should match snapshot`

```
"<button role=\"button\" class=\"ui positive button\">Positive Button</button>"
```

##     `Negative`

####       `should match snapshot`

```
"<button role=\"button\" class=\"ui negative button\">Negative Button</button>"
```

##     `Fluid`

####       `should match snapshot`

```
"<button role=\"button\" class=\"ui fluid button\">Fits container</button>"
```

##     `Circular`

####       `should match snapshot`

```
"<button role=\"button\" class=\"ui circular icon button\"><i class=\"settings icon\"></i></button>"
```

##     `CircularSocial`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui circular icon facebook button\"><i class=\"facebook icon\"></i></button> <button role=\"button\" class=\"ui circular icon twitter button\"><i class=\"twitter icon\"></i></button> <button role=\"button\" class=\"ui circular icon linkedin button\"><i class=\"linkedin icon\"></i></button> <button role=\"button\" class=\"ui circular icon google plus button\"><i class=\"google plus icon\"></i></button></div>"
```

##     `Vertically Attached`

####       `should match snapshot`

```
"<div><div role=\"button\" class=\"ui top attached button\">Top</div> <div class=\"ui attached segment\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div> <div role=\"button\" class=\"ui bottom attached button\">Bottom</div></div>"
```

##     `Horizontally Attached`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui left attached button\">Left</button> <button role=\"button\" class=\"ui right attached button\">Right</button></div>"
```

##   `Group Variations`

##     `Vertical Buttons`

####       `should match snapshot`

```
"<div class=\"ui vertical buttons\"><button role=\"button\" class=\"ui button\">Feed</button> <button role=\"button\" class=\"ui button\">Messages</button> <button role=\"button\" class=\"ui button\">Events</button> <button role=\"button\" class=\"ui button\">Photos</button></div>"
```

##     `Icon Buttons`

####       `should match snapshot`

```
"<div class=\"ui icon buttons\"><button role=\"button\" class=\"ui icon button\"><i class=\"play icon\"></i></button> <button role=\"button\" class=\"ui icon button\"><i class=\"pause icon\"></i></button> <button role=\"button\" class=\"ui icon button\"><i class=\"stop icon\"></i></button></div>"
```

##     `Labeled Icon Buttons`

####       `should match snapshot`

```
"<div class=\"ui vertical labeled icon buttons\"><button role=\"button\" class=\"ui icon left labeled button\"><i class=\"pause icon\"></i>Pause</button> <button role=\"button\" class=\"ui icon left labeled button\"><i class=\"play icon\"></i>Play</button> <button role=\"button\" class=\"ui icon left labeled button\"><i class=\"shuffle icon\"></i>Shuffle</button></div>"
```

##     `Mixed Group`

####       `should match snapshot`

```
"<div class=\"ui buttons\"><button role=\"button\" class=\"ui icon left labeled button\"><i class=\"left chevron icon\"></i>Back</button> <button role=\"button\" class=\"ui button\"><i class=\"stop icon\"></i>Stop</button> <button role=\"button\" class=\"ui icon right labeled button\"><i class=\"right chevron icon\"></i>Foward</button></div>"
```

##     `Equal Width`

####       `should match snapshot`

```
"<div><div class=\"ui five buttons\"><button role=\"button\" class=\"ui button\">Overview</button> <button role=\"button\" class=\"ui button\">Specs</button> <button role=\"button\" class=\"ui button\">Warranty</button> <button role=\"button\" class=\"ui button\">Reviews</button> <button role=\"button\" class=\"ui button\">Support</button></div> <div class=\"ui three buttons\"><button role=\"button\" class=\"ui button\">Overview</button> <button role=\"button\" class=\"ui button\">Specs</button> <button role=\"button\" class=\"ui button\">Support</button></div></div>"
```

##     `Colored Buttons`

####       `should match snapshot`

```
"<div class=\"ui blue buttons\"><button role=\"button\" class=\"ui button\">One</button> <button role=\"button\" class=\"ui button\">Two</button> <button role=\"button\" class=\"ui button\">Three</button></div>"
```

##     `Basic Buttons`

####       `should match snapshot`

```
"<div><div class=\"ui basic buttons\"><button role=\"button\" class=\"ui button\">One</button> <button role=\"button\" class=\"ui button\">Two</button> <button role=\"button\" class=\"ui button\">Three</button></div> <div class=\"ui divider\"></div> <div class=\"ui vertical basic buttons\"><button role=\"button\" class=\"ui button\">One</button> <button role=\"button\" class=\"ui button\">Two</button> <button role=\"button\" class=\"ui button\">Three</button></div></div>"
```

##     `Group Sizes`

####       `should match snapshot`

```
"<div><div class=\"ui large buttons\"><button role=\"button\" class=\"ui button\">One</button> <button role=\"button\" class=\"ui button\">Two</button> <button role=\"button\" class=\"ui button\">Three</button></div> <div class=\"ui divider\"></div> <div class=\"ui small icon buttons\"><button role=\"button\" class=\"ui icon button\"><i class=\"file icon\"></i></button> <button role=\"button\" class=\"ui icon button\"><i class=\"save icon\"></i></button> <button role=\"button\" class=\"ui icon button\"><i class=\"upload icon\"></i></button> <button role=\"button\" class=\"ui icon button\"><i class=\"download icon\"></i></button></div> <div class=\"ui divider\"></div> <div class=\"ui large buttons\"><button role=\"button\" class=\"ui button\">One</button> <div class=\"or\"></div> <button role=\"button\" class=\"ui button\">Two</button></div></div>"
```

## `ContainerExample`

##   `Types`

##     `Container`

####       `should match snapshot`

```
"<div class=\"ui container\">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
  ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
  quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
  Nullam dictum felis eu pede <a href=\"javascript:void 0\">link</a> mollis
  pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
  vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
  feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
  ullamcorper ultricies nisi.
</div>"
```

##     `Text Container`

####       `should match snapshot`

```
"<div class=\"ui text container\"><h2 class=\"ui header\">Header</h2> <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque penatibus
    et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
    quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
    dictum felis eu pede <a href=\"javascript:void 0\">link</a> mollis pretium.
    Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
    vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
    eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
    tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
    Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
    ultricies nisi.
  </p> <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque penatibus
    et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
    quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
    dictum felis eu pede <a href=\"javascript:void 0\">link</a> mollis pretium.
    Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
    vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
    eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
    tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
    Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
    ultricies nisi.
  </p></div>"
```

##   `Variations`

##     `Text Alignment`

####       `should match snapshot`

```
"<div><div class=\"ui left aligned container\">
    Left Aligned
  </div> <div class=\"ui center aligned container\">
    Center Aligned
  </div> <div class=\"ui right aligned container\">
    Right Aligned
  </div> <b>Justified</b> <div class=\"ui divider\"></div> <div class=\"ui justified aligned container\"><p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
      dictum felis eu pede <a href=\"javascript:void 0\">link</a> mollis pretium.
      Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
      vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
      eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
      tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
      Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
      ultricies nisi.
    </p> <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
      dictum felis eu pede <a href=\"javascript:void 0\">link</a> mollis pretium.
      Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
      vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
      eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
      tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
      Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
      ultricies nisi.
    </p></div></div>"
```

##     `Fluid`

####       `should match snapshot`

```
"<div class=\"ui fluid container\"><h2 class=\"ui header\">Dogs Roles with Humans</h2> <p>
    Domestic dogs inherited complex behaviors, such as bite inhibition, from
    their wolf ancestors, which would have been pack hunters with complex body
    language. These sophisticated forms of social cognition and communication
    may account for their trainability, playfulness, and ability to fit into
    human households and social situations, and these attributes have given
    dogs a relationship with humans that has enabled them to become one of the
    most successful species on the planet today.
  </p> <p>
    The dogs' value to early human hunter-gatherers led to them quickly
    becoming ubiquitous across world cultures. Dogs perform many roles for
    people, such as hunting, herding, pulling loads, protection, assisting
    police and military, companionship, and, more recently, aiding handicapped
    individuals. This impact on human society has given them the nickname
    \"man's best friend\" in the Western world. In some cultures, however,
    dogs are also a source of meat.
  </p></div>"
```

## `DividerExample`

##   `Types`

##     `Divider`

####       `should match snapshot`

```
"<div><docs-wireframe name=\"short-paragraph\"></docs-wireframe> <div class=\"ui divider\"></div> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></div>"
```

##     `Vertical Divider`

####       `should match snapshot`

```
"<div class=\"ui three column very relaxed grid\"><div class=\"column\"><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe></div> <div class=\"ui vertical divider\">and</div> <div class=\"column\"><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe></div> <div class=\"ui vertical divider\">or</div> <div class=\"column\"><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe></div></div>"
```

##     `Horizontal Divider`

####       `should match snapshot`

```
"<div class=\"ui center aligned basic segment\"><div class=\"ui left icon action input\"><i class=\"search icon\"></i> <input type=\"text\" placeholder=\"Order #\"> <div class=\"ui blue submit button\">Search</div></div> <div class=\"ui horizontal divider\">Or</div> <div class=\"ui teal labeled icon button\">
    Create New Order
    <i class=\"add icon\"></i></div></div>"
```

##   `Variations`

##     `Inverted`

####       `should match snapshot`

```
"<div class=\"ui inverted segment\"><p></p> <div class=\"ui inverted divider\"></div> <p></p> <h4 class=\"ui horizontal inverted divider\">
    Horizontal
  </h4></div>"
```

##     `Fitted`

####       `should match snapshot`

```
"<div class=\"ui segment\">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
  eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
  posuere a, pede.
  <div class=\"ui fitted divider\"></div>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
  eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
  posuere a, pede.
</div>"
```

##     `Hidden`

####       `should match snapshot`

```
"<div><h3 class=\"ui header\">Section One</h3> <div class=\"ui hidden divider\"></div> <h3 class=\"ui header\">Section Two</h3></div>"
```

##     `Section`

####       `should match snapshot`

```
"<div><h3 class=\"ui header\">Section One</h3> <div class=\"ui divider\" section=\"\"></div> <h3 class=\"ui header\">Section Two</h3></div>"
```

##     `Clearing`

####       `should match snapshot`

```
"<div class=\"ui segment\"><h2 class=\"ui right floated header\">Floated Content</h2> <div class=\"ui clearing divider\"></div> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></div>"
```

## `FlagExample`

##   `Definition`

##     `Flag`

####       `should match snapshot`

```
"<div><i class=\"flag ae\"></i> <i class=\"flag france\"></i> <i class=\"flag myanmar\"></i></div>"
```

## `HeaderExample`

##   `Types`

##     `Page Headers`

####       `should match snapshot`

```
"<div><div class=\"ui info message\">
    Page headings are sized using
    <a href=\"https://j.eremy.net/confused-about-rem-and-em/\"><code>rem</code></a>
    and are not affected by surrounding content size.
  </div> <h1 class=\"ui header\">First header</h1> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <h2 class=\"ui header\">Second header</h2> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <h3 class=\"ui header\">Third header</h3> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <h4 class=\"ui header\">Fourth header</h4> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <h5 class=\"ui header\">Fifth header</h5> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></div>"
```

##     `Content Headers`

####       `should match snapshot`

```
"<div class=\"ui vertical segment\"><div class=\"ui info message\">
    Content headings are sized using
    <a href=\"https://j.eremy.net/confused-about-rem-and-em/\"><code>em</code></a>
    and are based on the font-size of their container.
  </div> <div class=\"ui buttons\"><button role=\"button\" class=\"ui icon button\"><i class=\"plus icon\"></i></button> <button role=\"button\" class=\"ui icon button\"><i class=\"minus icon\"></i></button></div> <div style=\"font-size: 14px;\"><div class=\"ui huge header\">Huge header</div> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <div class=\"ui large header\">Large header</div> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <div class=\"ui medium header\">Medium header</div> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <div class=\"ui small header\">Small header</div> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <div class=\"ui tiny header\">Tiny header</div> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></div></div>"
```

##     `Icon Headers`

####       `should match snapshot`

```
"<h2 class=\"ui icon header\"><i class=\"settings icon\"></i>
  Account Settings
  <div class=\"sub header\">
    Manage your account settings and set e-mail preferences.
  </div></h2>"
```

##     `Sub Headers`

####       `should match snapshot`

```
"<div><div class=\"ui sub header\">Price</div> <span>$10.99</span></div>"
```

##   `Content`

##     `Image`

####       `should match snapshot`

```
"<h2 class=\"ui header\"><img src=\"static/images/avatar/large/patrick.png\" class=\"ui circular image\"> Patrick
</h2>"
```

##     `Icon`

####       `should match snapshot`

```
"<h2 class=\"ui header\"><i class=\"plug icon\"></i> <div class=\"content\">Uptime Guarantee</div></h2>"
```

##     `Subheader`

####       `should match snapshot`

```
"<h2 class=\"ui header\">
  Account Settings
  <div class=\"sub header\">
    Manage your account settings and set email preferences
  </div></h2>"
```

##   `States`

##     `Disabled`

####       `should match snapshot`

```
"<h2 class=\"ui disabled header\">
  Disabled Header
</h2>"
```

##   `Variations`

##     `Dividing`

####       `should match snapshot`

```
"<h3 class=\"ui dividing header\">
  Dividing Header
</h3>"
```

##     `Block`

####       `should match snapshot`

```
"<h3 class=\"ui block header\">
  Block Header
</h3>"
```

##     `Attached`

####       `should match snapshot`

```
"<div><h2 class=\"ui top attached header\">
    Attached Header
  </h2> <div class=\"ui attached segment\">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  </div></div>"
```

##     `Floating`

####       `should match snapshot`

```
"<div class=\"ui clearing segment\"><h2 class=\"ui right floated header\">
    Float Right
  </h2> <h2 class=\"ui left floated header\">
    Float Left
  </h2></div>"
```

##     `Text Alignment`

####       `should match snapshot`

```
"<div class=\"ui segment\"><h3 class=\"ui right aligned header\">
    Float Right
  </h3> <h3 class=\"ui left aligned header\">
    Float Left
  </h3> <h3 class=\"ui justified aligned header\">
    This text takes up the full width of the container
  </h3> <h3 class=\"ui center aligned header\">
    Centered
  </h3></div>"
```

##     `Colored`

####       `should match snapshot`

```
"<div><h4 class=\"ui red header\">
    Red
  </h4> <h4 class=\"ui orange header\">
    Orange
  </h4> <h4 class=\"ui yellow header\">
    Yellow
  </h4> <h4 class=\"ui olive header\">
    Olive
  </h4> <h4 class=\"ui green header\">
    Green
  </h4> <h4 class=\"ui teal header\">
    Teal
  </h4> <h4 class=\"ui blue header\">
    Blue
  </h4> <h4 class=\"ui purple header\">
    Purple
  </h4> <h4 class=\"ui violet header\">
    Violet
  </h4> <h4 class=\"ui pink header\">
    Pink
  </h4> <h4 class=\"ui brown header\">
    Brown
  </h4> <h4 class=\"ui grey header\">
    Grey
  </h4></div>"
```

##     `Inverted`

####       `should match snapshot`

```
"<div class=\"ui inverted segment\"><h4 class=\"ui red header\">
    Red
  </h4> <h4 class=\"ui orange header\">
    Orange
  </h4> <h4 class=\"ui yellow header\">
    Yellow
  </h4> <h4 class=\"ui olive header\">
    Olive
  </h4> <h4 class=\"ui green header\">
    Green
  </h4> <h4 class=\"ui teal header\">
    Teal
  </h4> <h4 class=\"ui blue header\">
    Blue
  </h4> <h4 class=\"ui purple header\">
    Purple
  </h4> <h4 class=\"ui violet header\">
    Violet
  </h4> <h4 class=\"ui pink header\">
    Pink
  </h4> <h4 class=\"ui brown header\">
    Brown
  </h4> <h4 class=\"ui grey header\">
    Grey
  </h4></div>"
```

## `IconExample`

##   `States`

##     `Disabled`

####       `should match snapshot`

```
"<i class=\"users disabled icon\"></i>"
```

##     `Loading`

####       `should match snapshot`

```
"<div><i class=\"spinner loading icon\"></i> <i class=\"notched circle loading icon\"></i> <i class=\"asterisk loading icon\"></i></div>"
```

##   `Variations`

##     `Fitted`

####       `should match snapshot`

```
"<div>
  Tight spacing
  <i class=\"help fitted icon\"></i>
  Tight spacing
</div>"
```

##     `Size`

####       `should match snapshot`

```
"<div><i class=\"home mini icon\"></i> <i class=\"home tiny icon\"></i> <i class=\"home small icon\"></i> <i class=\"home small icon\"></i> <i class=\"home icon\"></i> <i class=\"home large icon\"></i> <i class=\"home big icon\"></i> <i class=\"home huge icon\"></i> <i class=\"home massive icon\"></i></div>"
```

## `ImageExample`

##   `Types`

##     `Image`

####       `should match snapshot`

```
"<img src=\"static/images/wireframes/image.png\" class=\"ui small image\">"
```

##     `Image Link`

####       `should match snapshot`

```
"<img src=\"static/images/wireframes/image-text.png\" class=\"ui small image\" href=\"https://procatinator.com/\" target=\"_blank\">"
```

##   `States`

##     `Hidden`

####       `should match snapshot`

```
"<img src=\"static/images/wireframes/image.png\" class=\"ui hidden image\">"
```

##     `Disabled`

####       `should match snapshot`

```
"<img src=\"static/images/wireframes/image.png\" class=\"ui medium image\" medium=\"\">"
```

##   `Variations`

##     `Avatar`

####       `should match snapshot`

```
"<div><img src=\"static/images/wireframes/square-image.png\" class=\"ui avatar image\"> <span>Username</span></div>"
```

##     `Bordered`

####       `should match snapshot`

```
"<img src=\"static/images/wireframes/white-image.png\" class=\"ui medium bordered image\">"
```

##     `Fluid`

####       `should match snapshot`

```
"<img src=\"static/images/wireframes/image.png\" class=\"ui image\" fluid=\"\">"
```

##     `Rounded`

####       `should match snapshot`

```
"<img src=\"static/images/wireframes/square-image.png\" class=\"ui medium rounded image\">"
```

##     `Circular`

####       `should match snapshot`

```
"<img src=\"static/images/wireframes/square-image.png\" class=\"ui medium circular image\">"
```

##     `Vertically Aligned`

####       `should match snapshot`

```
"<div><img src=\"static/images/wireframes/image.png\" class=\"ui tiny top aligned image\"> <span>Top Aligned</span> <div class=\"ui divider\"></div> <img src=\"static/images/wireframes/image.png\" class=\"ui tiny middle aligned image\"> <span>Middle Aligned</span> <div class=\"ui divider\"></div> <img src=\"static/images/wireframes/image.png\" class=\"ui tiny bottom aligned image\"> <span>Bottom Aligned</span></div>"
```

##     `Centered`

####       `should match snapshot`

```
"<div class=\"ui segment\"><img src=\"static/images/wireframes/image.png\" class=\"ui medium centered image\"> <p>
    Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
    est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
    ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
    ex natum rebum iisque.
  </p> <p>
    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
    nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
    fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
  </p> <img src=\"static/images/wireframes/image-text.png\" class=\"ui small centered image\"> <p>
    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
    adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
    utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
    convenire mnesarchum eu per, quas minimum postulant per id.
  </p></div>"
```

##     `Spaced`

####       `should match snapshot`

```
"<div><div class=\"ui segment\"><p>
      Te eum doming eirmod, nominati pertinacia <img src=\"static/images/wireframes/image.png\" class=\"ui mini spaced image\">
      argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu
      ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram,
      eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p></div> <p><img src=\"static/images/wireframes/image.png\" class=\"ui mini right spaced image\">Audiam quaerendum eu sea, pro omittam
    definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda
    ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum,
    vim vivendum maiestatis in.
  </p> <p>
    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
    adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
    utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
    convenire mnesarchum eu per, quas minimum postulant per id.
    <img src=\"static/images/wireframes/image.png\" class=\"ui mini left spaced image\"></p></div>"
```

##     `Floated`

####       `should match snapshot`

```
"<div class=\"ui segment\"><img src=\"static/images/wireframes/image-text.png\" class=\"ui small left floated image\"> <p>
    Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
    est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
    ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
    ex natum rebum iisque.
  </p> <img src=\"static/images/wireframes/image-text.png\" class=\"ui small right floated image\"> <p>
    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
    nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
    fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
  </p> <p>
    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
    adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
    utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
    convenire mnesarchum eu per, quas minimum postulant per id.
  </p></div>"
```

##     `Size`

####       `should match snapshot`

```
"<div><img src=\"static/images/wireframes/image.png\" class=\"ui mini image\"> <div class=\"ui hidden divider\"></div> <img src=\"static/images/wireframes/image.png\" class=\"ui tiny image\"> <div class=\"ui hidden divider\"></div> <img src=\"static/images/wireframes/image.png\" class=\"ui small image\"> <div class=\"ui hidden divider\"></div> <img src=\"static/images/wireframes/image.png\" class=\"ui medium image\"> <div class=\"ui hidden divider\"></div> <img src=\"static/images/wireframes/image.png\" class=\"ui large image\"> <div class=\"ui hidden divider\"></div> <img src=\"static/images/wireframes/image.png\" class=\"ui big image\"> <div class=\"ui hidden divider\"></div> <img src=\"static/images/wireframes/image.png\" class=\"ui huge image\"> <div class=\"ui hidden divider\"></div> <img src=\"static/images/wireframes/image.png\" class=\"ui massive image\"></div>"
```

##   `Groups`

##     `Size`

####       `should match snapshot`

```
"<div><div class=\"ui tiny images\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"ui hidden divider\"></div> <div class=\"ui small images\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div></div>"
```

## `InputExample`

##   `Types`

##     `Input`

####       `should match snapshot`

```
"<div class=\"ui input\" placeholder=\"Search...\"><input placeholder=\"Search...\"></div>"
```

##   `States`

##     `Focus`

####       `should match snapshot`

```
"<div class=\"ui focus input\" placeholder=\"Search...\"><input placeholder=\"Search...\"></div>"
```

##     `Loading`

####       `should match snapshot`

```
"<div class=\"ui loading icon input\" placeholder=\"Search...\"><input placeholder=\"Search...\"><i class=\"loading icon\"></i></div>"
```

##     `Disabled`

####       `should match snapshot`

```
"<div class=\"ui disabled icon input\" placeholder=\"Search...\"><input placeholder=\"Search...\"><i class=\"user icon\"></i></div>"
```

##   `Variations`

##     `Icon`

####       `should match snapshot`

```
"<div class=\"ui icon input\" placeholder=\"Search...\"><input placeholder=\"Search...\"><i class=\"search icon\"></i></div>"
```

## `LabelExample`

##   `Types`

##     `Label`

####       `should match snapshot`

```
"<div class=\"ui label\"><i class=\"mail icon\"></i> 23
</div>"
```

##     `Image`

####       `should match snapshot`

```
"<div><a class=\"ui image label\"><img src=\"static/images/avatar/small/joe.jpg\">
    Joe
  </a> <a class=\"ui image label\"><img src=\"static/images/avatar/small/elliot.jpg\">
    Elliot
  </a> <a class=\"ui image label\"><img src=\"static/images/avatar/small/stevie.jpg\">
    Stevie
  </a></div>"
```

##     `Pointing`

####       `should match snapshot`

```
"<form class=\"ui form\"><div class=\"field\"><input type=\"text\" placeholder=\"First name\"> <div class=\"ui pointing label\">Please enter a value</div></div> <div class=\"ui divider\"></div> <div class=\"field\"><div class=\"ui pointing below label\">Please enter a value</div> <input type=\"text\" placeholder=\"Last Name\"></div> <div class=\"ui divider\"></div> <div class=\"inline field\"><input type=\"text\" placeholder=\"Username\"> <div class=\"ui left pointing label\">That name is taken!</div></div> <div class=\"ui divider\"></div> <div class=\"inline field\"><div class=\"ui right pointing label\">Your password must be 6 characters or more</div> <input type=\"password\" placeholder=\"Password\"></div></form>"
```

##     `Corner`

####       `should match snapshot`

```
"<div class=\"ui grid\"><div class=\"six wide column\"><div class=\"ui image\"><div class=\"ui left corner label\"><i class=\"save icon\"></i></div><img src=\"static/images/wireframes/image.png\"></div></div> <div class=\"six wide column\"><div class=\"ui image\"><div class=\"ui right corner label\"><i class=\"cancel icon\"></i></div><img src=\"static/images/wireframes/image.png\"></div></div></div>"
```

##     `Tag`

####       `should match snapshot`

```
"<div><a class=\"ui true tag label\">
    New
  </a> <a class=\"ui red true tag label\">
    Upcoming
  </a> <a class=\"ui teal true tag label\">
    Featured
  </a></div>"
```

##     `Ribbon`

####       `should match snapshot`

```
"<div class=\"ui two column grid\"><div class=\"column\"><div class=\"ui raised segment\"><a class=\"ui red true ribbon label\">
        Overview
      </a> <span>Account Details</span> <docs-wireframe name=\"paragraph\"></docs-wireframe> <a class=\"ui blue true ribbon label\">
        Community
      </a> <span>User Reviews</span> <docs-wireframe name=\"paragraph\"></docs-wireframe></div></div> <div class=\"column\"><div class=\"ui segment\"><a class=\"ui orange right ribbon label\">
        Specs
      </a> <docs-wireframe name=\"paragraph\"></docs-wireframe> <a class=\"ui teal right ribbon label\">
        Reviews
      </a> <docs-wireframe name=\"paragraph\"></docs-wireframe></div></div></div>"
```

##     `Attached`

####       `should match snapshot`

```
"<div class=\"ui three column grid\"><div class=\"row\"><div class=\"column\"><div class=\"ui padded segment\"><div class=\"ui top attached label\">HTML</div> <docs-wireframe name=\"paragraph\"></docs-wireframe></div></div> <div class=\"column\"><div class=\"ui padded segment\"><div class=\"ui bottom attached label\">CSS</div> <docs-wireframe name=\"paragraph\"></docs-wireframe></div></div> <div class=\"column\"><div class=\"ui padded segment\"><div class=\"ui top right attached label\">Code</div> <docs-wireframe name=\"paragraph\"></docs-wireframe></div></div></div> <div class=\"row\"><div class=\"column\"><div class=\"ui padded segment\"><div class=\"ui top left attached label\">View</div> <docs-wireframe name=\"paragraph\"></docs-wireframe></div></div> <div class=\"column\"><div class=\"ui padded segment\"><div class=\"ui bottom left attached label\">User View</div> <docs-wireframe name=\"paragraph\"></docs-wireframe></div></div> <div class=\"column\"><div class=\"ui padded segment\"><div class=\"ui bottom right attached label\">Admin View</div> <docs-wireframe name=\"paragraph\"></docs-wireframe></div></div></div></div>"
```

##     `Horizontal`

####       `should match snapshot`

```
"<div role=\"list\" class=\"ui divided list\" selection=\"\"><div role=\"listitem\" class=\"item\"><div class=\"ui red label\" horizontal=\"\">
      Fruit
    </div>
    Kumquats
  </div> <div role=\"listitem\" class=\"item\"><div class=\"ui purple label\" horizontal=\"\">
      Candy
    </div>
    Ice Cream
  </div> <div role=\"listitem\" class=\"item\"><div class=\"ui red label\" horizontal=\"\">
      Fruit
    </div>
    Orange
  </div> <div role=\"listitem\" class=\"item\"><div class=\"ui label\" horizontal=\"\">Dog</div>
    Poodle
  </div></div>"
```

##     `Floating`

####       `should match snapshot`

```
"<div class=\"ui compact menu\"><a class=\"item\"><i class=\"mail icon\"></i> Messages
    <div class=\"ui red floating label\">
      22
    </div></a> <a class=\"item\"><i class=\"users icon\"></i> Friends
    <div class=\"ui teal floating label\">
      22
    </div></a></div>"
```

##   `Content`

##     `Detail`

####       `should match snapshot`

```
"<div class=\"ui label\">
  Dogs
  <div class=\"detail\">214</div></div>"
```

##     `Icon`

####       `should match snapshot`

```
"<div><a class=\"ui label\"><i class=\"mail icon\"></i>
    Mail
  </a> <a class=\"ui label\">
    Tag
    <i class=\"delete icon\"></i></a></div>"
```

##     `Image`

####       `should match snapshot`

```
"<div><a class=\"ui label\"><img src=\"static/images/avatar/small/elliot.jpg\" class=\"ui avatar right spaced image\">
    Elliot
  </a> <a class=\"ui label\"><img src=\"static/images/avatar/small/stevie.jpg\">
    Stevie
  </a></div>"
```

##     `Link`

####       `should match snapshot`

```
"<a class=\"ui label\"><i class=\"mail icon\"></i> 23
</a>"
```

##   `Variations`

##     `Circular`

####       `should match snapshot`

```
"<div><div class=\"ui red circular label\">
    2
  </div><div class=\"ui orange circular label\">
    2
  </div><div class=\"ui yellow circular label\">
    2
  </div><div class=\"ui olive circular label\">
    2
  </div><div class=\"ui green circular label\">
    2
  </div><div class=\"ui teal circular label\">
    2
  </div><div class=\"ui blue circular label\">
    2
  </div><div class=\"ui violet circular label\">
    2
  </div><div class=\"ui purple circular label\">
    2
  </div><div class=\"ui pink circular label\">
    2
  </div><div class=\"ui brown circular label\">
    2
  </div><div class=\"ui grey circular label\">
    2
  </div><div class=\"ui black circular label\">
    2
  </div></div>"
```

##     `Basic`

####       `should match snapshot`

```
"<div><a class=\"ui basic label\">
    Basic
  </a> <a class=\"ui pointing basic label\">
    Pointing
  </a> <a class=\"ui basic image label\"><img src=\"static/images/avatar/small/elliot.jpg\">
    Elliot
  </a> <a class=\"ui pointing red basic label\">
    Red Pointing
  </a> <a class=\"ui blue basic label\">
    Blue
  </a></div>"
```

##     `Colored`

####       `should match snapshot`

```
"<div><div class=\"ui red label\">
    red
  </div><div class=\"ui orange label\">
    orange
  </div><div class=\"ui yellow label\">
    yellow
  </div><div class=\"ui olive label\">
    olive
  </div><div class=\"ui green label\">
    green
  </div><div class=\"ui teal label\">
    teal
  </div><div class=\"ui blue label\">
    blue
  </div><div class=\"ui violet label\">
    violet
  </div><div class=\"ui purple label\">
    purple
  </div><div class=\"ui pink label\">
    pink
  </div><div class=\"ui brown label\">
    brown
  </div><div class=\"ui grey label\">
    grey
  </div><div class=\"ui black label\">
    black
  </div></div>"
```

##     `Size`

####       `should match snapshot`

```
"<div><div class=\"ui mini label\">
    mini
  </div><div class=\"ui tiny label\">
    tiny
  </div><div class=\"ui small label\">
    small
  </div><div class=\"ui medium label\">
    medium
  </div><div class=\"ui large label\">
    large
  </div><div class=\"ui big label\">
    big
  </div><div class=\"ui huge label\">
    huge
  </div><div class=\"ui massive label\">
    massive
  </div></div>"
```

## `ListExample`

##   `Types`

##     `List`

####       `should match snapshot`

```
"<div role=\"list\" class=\"ui list\"><div role=\"listitem\" class=\"item\">Apples</div> <div role=\"listitem\" class=\"item\">Pears</div> <div role=\"listitem\" class=\"item\">Oranges</div></div>"
```

##     `Bulleted`

####       `should match snapshot`

```
"<div role=\"list\" class=\"ui bulleted list\"><div role=\"listitem\" class=\"item\">Gaining Access</div> <div role=\"listitem\" class=\"item\">Inviting Friends</div> <div role=\"listitem\" class=\"item\">
    Benefits
    <div class=\"list\"><div role=\"listitem\" class=\"item\" href=\"#\">Link to somewhere</div> <div role=\"listitem\" class=\"item\">Rebates</div> <div role=\"listitem\" class=\"item\">Discounts</div></div></div> <div role=\"listitem\" class=\"item\">Warranty</div></div>"
```

##     `Ordered`

####       `should match snapshot`

```
"<div role=\"list\" class=\"ui ordered list\"><a role=\"listitem\" class=\"item\">Getting Started</a> <a role=\"listitem\" class=\"item\">Introduction</a> <a><a>Languages</a> <div class=\"list\"><a role=\"listitem\" class=\"item\">HTML</a> <a role=\"listitem\" class=\"item\">Javascript</a> <a role=\"listitem\" class=\"item\">CSS</a></div></a> <a role=\"listitem\" class=\"item\">Review</a></div>"
```

##     `Link`

####       `should match snapshot`

```
"<div role=\"list\" class=\"ui link list\"><div role=\"listitem\" class=\"item active\">Home</div> <a role=\"listitem\" class=\"item\">About</a> <a role=\"listitem\" class=\"item\">Jobs</a> <a role=\"listitem\" class=\"item\">Team</a></div>"
```

##   `Content`

##     `Item`

####       `should match snapshot`

```
"<div role=\"list\" class=\"ui list\"><div role=\"listitem\" class=\"item\">1</div> <div role=\"listitem\" class=\"item\">2</div> <div role=\"listitem\" class=\"item\">3</div></div>"
```

##     `Icon`

####       `should match snapshot`

```
"<div role=\"list\" class=\"ui list\"><a role=\"listitem\" class=\"item\"><i class=\"help icon\"></i> <div class=\"content\"><div class=\"header\">Floated Icon</div> <div class=\"description\">
        This text will always have a left margin to make sure it sits alongside your icon
      </div></div></a> <a role=\"listitem\" class=\"item\"><i class=\"right triangle icon\"></i> <div class=\"content\"><div class=\"header\">Icon Alignment</div> <div class=\"description\">
        Floated icons are by default top aligned. To have an icon top aligned try this example.
      </div></div></a> <div role=\"listitem\" class=\"item\"><i class=\"help icon\"></i>
    Inline Text
  </div></div>"
```

##     `Image`

####       `should match snapshot`

```
"<div role=\"list\" class=\"ui list\"><div role=\"listitem\" class=\"item\"><img src=\"static/images/avatar/small/rachel.png\" class=\"ui avatar image\"> <div class=\"content\"><a class=\"header\">Rachel</a> <div class=\"description\">
        Last seen watching
        <a><b>Arrested Development</b></a>
        just now.
      </div></div></div> <div role=\"listitem\" class=\"item\"><img src=\"static/images/avatar/small/lindsay.png\" class=\"ui avatar image\"> <div class=\"content\"><a class=\"header\">Lindsay</a> <div class=\"description\">
        Last seen watching
        <a><b>Bob's Burgers</b></a>
        10 hours ago.
      </div></div></div> <div role=\"listitem\" class=\"item\"><img src=\"static/images/avatar/small/matthew.png\" class=\"ui avatar image\"> <div class=\"content\"><a class=\"header\">Matthew</a> <div class=\"description\">
        Last seen watching
        <a><b>The Godfather Part 2</b></a>
        yesterday.
      </div></div></div> <div role=\"listitem\" class=\"item\"><img src=\"static/images/avatar/small/jenny.jpg\" class=\"ui avatar image\"> <div class=\"content\"><a class=\"header\">Jenny Hess</a> <div class=\"description\">
        Last seen watching
        <a><b>Twin Peaks</b></a>
        3 days ago.
      </div></div></div> <div role=\"listitem\" class=\"item\"><img src=\"static/images/avatar/small/veronika.jpg\" class=\"ui avatar image\"> <div class=\"content\"><a class=\"header\">Veronika Ossi</a> <div class=\"description\">Has not watched anything recently</div></div></div></div>"
```

##     `Link`

####       `should match snapshot`

```
"<div role=\"list\" class=\"ui list\"><a role=\"listitem\" class=\"item\">What is a FAQ?</a> <a role=\"listitem\" class=\"item\">Who is our user?</a> <a role=\"listitem\" class=\"item\">Where is our office located?</a></div>"
```

##     `Header`

####       `should match snapshot`

```
"<div role=\"list\" class=\"ui list\"><div role=\"listitem\" class=\"item\"><div class=\"header\">New York City</div>
    A lovely city
  </div> <div role=\"listitem\" class=\"item\"><div class=\"header\">Chicago</div>
    Also quite a lovely city
  </div> <div role=\"listitem\" class=\"item\"><div class=\"header\">Los Angeles</div>
    Sometimes can be a lovely city
  </div> <div role=\"listitem\" class=\"item\"><div class=\"header\">San Francisco</div>
    What a lovely city
  </div></div>"
```

##     `Description`

####       `should match snapshot`

```
"<div role=\"list\" class=\"ui list\"><div role=\"listitem\" class=\"item\"><i class=\"marker icon\"></i> <div class=\"content\"><a class=\"header\">Krowlewskie Jadlo</a> <div class=\"description\">
        An excellent polish restaurant, quick delivery and hearty, filling meals.
      </div></div></div> <div role=\"listitem\" class=\"item\"><i class=\"marker icon\"></i> <div class=\"content\"><a class=\"header\">Xian Famous Foods</a> <div class=\"description\">
        A taste of Shaanxi\"s delicious culinary traditions, with delights like spicy cold noodles
        and lamb burgers.
      </div></div></div> <div role=\"listitem\" class=\"item\"><i class=\"marker icon\"></i> <div class=\"content\"><a class=\"header\">Sapporo Haru</a> <div class=\"description\">
        Greenpoint\"s best choice for quick and delicious sushi.
      </div></div></div> <div role=\"listitem\" class=\"item\"><i class=\"marker icon\"></i> <div class=\"content\"><a class=\"header\">Enid\"s</a> <div class=\"description\">
        At night a bar, during the day a delicious brunch spot.
      </div></div></div></div>"
```

##   `Variations`

##     `Inverted`

####       `should match snapshot`

```
"<div class=\"ui inverted segment\"><div role=\"list\" class=\"ui divided relaxed inverted list\"><div role=\"listitem\" class=\"item\"><div class=\"content\"><div class=\"header\">Snickerdoodle</div>
        An excellent companion
      </div></div> <div role=\"listitem\" class=\"item\"><div class=\"content\"><div class=\"header\">Poodle</div>
        A poodle, its pretty basic
      </div></div> <div role=\"listitem\" class=\"item\"><div class=\"content\"><div class=\"header\">Paulo</div>
        He's also a dog
      </div></div></div></div>"
```

## `LoaderExample`

##   `Types`

##     `Loader`

####       `should match snapshot`

```
"<div><div class=\"ui info message\">
    Loaders are hidden unless has prop<code>active</code>
    or inside an <code>Dimmer active</code>.
  </div> <div class=\"ui segment\"><div class=\"ui active dimmer\"><div class=\"content\"><div class=\"center\"><div class=\"ui loader\"></div></div></div></div> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></div></div>"
```

##     `Text Loader`

####       `should match snapshot`

```
"<div class=\"ui segment\"><div class=\"ui active dimmer\"><div class=\"content\"><div class=\"center\"><div class=\"ui text loader\">Loading...</div></div></div></div> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></div>"
```

##   `States`

##     `Indeterminate`

####       `should match snapshot`

```
"<div class=\"ui segment\"><div class=\"ui active dimmer\"><div class=\"content\"><div class=\"center\"><div class=\"ui indeterminate text loader\">Preparing Files</div></div></div></div> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></div>"
```

## `RailExample`

##   `Types`

##     `Rail`

####       `should match snapshot`

```
"<div class=\"ui three column centered grid\"><div class=\"column\"><div class=\"ui segment\"><docs-wireframe name=\"paragraph\"></docs-wireframe> <docs-wireframe name=\"paragraph\"></docs-wireframe> <div class=\"ui left rail\"><div class=\"ui segment\">Left Rail Content</div></div> <div class=\"ui right rail\"><div class=\"ui segment\">Right Rail Content</div></div></div></div></div>"
```

##     `Internal`

####       `should match snapshot`

```
"<div class=\"container ui segment\"><div class=\"ui internal left rail\"><div class=\"ui segment\">Left Rail Content</div></div> <div class=\"ui internal right rail\"><div class=\"ui segment\">Right Rail Content</div></div></div>"
```

##     `Dividing`

####       `should match snapshot`

```
"<div class=\"ui three column centered grid\"><div class=\"column\"><div class=\"ui segment\"><docs-wireframe name=\"paragraph\"></docs-wireframe> <docs-wireframe name=\"paragraph\"></docs-wireframe> <div class=\"ui dividing left rail\"><div class=\"ui segment\">Left Rail Content</div></div> <div class=\"ui dividing right rail\"><div class=\"ui segment\">Right Rail Content</div></div></div></div></div>"
```

##   `Variations`

##     `Attached`

####       `should match snapshot`

```
"<div class=\"ui three column centered grid\"><div class=\"column\"><div class=\"ui segment\"><docs-wireframe name=\"paragraph\"></docs-wireframe> <docs-wireframe name=\"paragraph\"></docs-wireframe> <div class=\"ui attached left rail\"><div class=\"ui segment\">Left Rail Content</div></div> <div class=\"ui attached right rail\"><div class=\"ui segment\">Right Rail Content</div></div></div></div></div>"
```

## `RevealExample`

##   `Types`

##     `Fade`

####       `should match snapshot`

```
"<div class=\"ui fade reveal\"><div class=\"ui visible content\"><img src=\"static/images/wireframes/square-image.png\" class=\"ui small image\"></div> <div class=\"ui hidden content\"><img src=\"static/images/avatar/large/ade.jpg\" class=\"ui small image\"></div></div>"
```

##     `Move`

####       `should match snapshot`

```
"<div class=\"ui move reveal\"><div class=\"ui visible content\"><img src=\"static/images/wireframes/square-image.png\" class=\"ui small image\"></div> <div class=\"ui hidden content\"><img src=\"static/images/avatar/large/chris.jpg\" class=\"ui small image\"></div></div>"
```

##     `Rotate`

####       `should match snapshot`

```
"<div class=\"ui rotate reveal\"><div class=\"ui visible content\"><img src=\"static/images/wireframes/square-image.png\" class=\"ui small circular image\"></div> <div class=\"ui hidden content\"><img src=\"static/images/avatar/large/stevie.jpg\" class=\"ui small circular image\"></div></div>"
```

##   `Content`

##     `Visible content`

####       `should match snapshot`

```
"<div class=\"ui small fade reveal\"><div class=\"ui visible content\"><img src=\"static/images/avatar/large/ade.jpg\" class=\"ui small image\"></div> <div class=\"ui hidden content\"><img src=\"static/images/wireframes/square-image.png\" class=\"ui small image\"></div></div>"
```

##     `Hidden content`

####       `should match snapshot`

```
"<div class=\"ui small fade reveal\"><div class=\"ui visible content\"><img src=\"static/images/wireframes/square-image.png\" class=\"ui small image\"></div> <div class=\"ui hidden content\"><img src=\"static/images/avatar/large/ade.jpg\" class=\"ui small image\"></div></div>"
```

##   `Variations`

##     `Instant`

####       `should match snapshot`

```
"<div class=\"ui move instant reveal\"><div class=\"ui visible content\"><img src=\"static/images/wireframes/square-image.png\" class=\"ui small image\"></div> <div class=\"ui hidden content\"><img src=\"static/images/avatar/large/chris.jpg\" class=\"ui small image\"></div></div>"
```

##   `States`

##     `Active`

####       `should match snapshot`

```
"<div class=\"ui move active reveal\"><div class=\"ui visible content\"><img src=\"static/images/wireframes/square-image.png\" class=\"ui small image\"></div> <div class=\"ui hidden content\"><img src=\"static/images/avatar/large/nan.jpg\" class=\"ui small image\"></div></div>"
```

##     `Disabled`

####       `should match snapshot`

```
"<div class=\"ui move disabled reveal\"><div class=\"ui visible content\"><img src=\"static/images/wireframes/square-image.png\" class=\"ui small image\"></div> <div class=\"ui hidden content\"><img src=\"static/images/avatar/large/chris.jpg\" class=\"ui small image\"></div></div>"
```

## `SegmentExample`

##   `Types`

##     `Segment`

####       `should match snapshot`

```
"<div class=\"ui segment\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div>"
```

##     `Raised`

####       `should match snapshot`

```
"<div class=\"ui raised segment\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div>"
```

##     `Stacked`

####       `should match snapshot`

```
"<div class=\"ui stacked segment\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div>"
```

##     `Piled`

####       `should match snapshot`

```
"<div class=\"ui piled segment\"><docs-wireframe name=\"paragraph\"></docs-wireframe></div>"
```

##   `Groups`

##     `Segments`

####       `should match snapshot`

```
"<div class=\"ui segments\"><div class=\"ui segment\"><p>Top</p></div> <div class=\"ui segment\"><p>Middle</p></div> <div class=\"ui segment\"><p>Bottom</p></div></div>"
```

## `StepExample`

##   `Types`

##     `Step`

####       `should match snapshot`

```
"<div class=\"ui steps\"><div class=\"ui step\">Shipping</div></div>"
```

##   `Groups`

##     `Steps`

####       `should match snapshot`

```
"<div><div class=\"ui steps\"><div class=\"ui step\"><i class=\"truck icon\"></i> <div class=\"content\"><div class=\"title\">Shipping</div> <div class=\"description\">Choose your shipping options</div></div></div> <div class=\"ui active step\"><i class=\"payment icon\"></i> <div class=\"content\"><div class=\"title\">Billing</div><div class=\"description\">Enter billing information</div></div></div> <div class=\"ui disabled step\"><i class=\"info icon\"></i> <div class=\"content\" disabled=\"disabled\"><div class=\"title\">Confirm Order</div></div></div></div> <div class=\"ui steps\"><div class=\"ui step\"><i class=\"truck icon\"></i><div class=\"content\"><div class=\"title\">Shipping</div><div class=\"description\">Choose your shipping options</div></div></div><div class=\"ui active step\"><i class=\"payment icon\"></i><div class=\"content\"><div class=\"title\">Billing</div><div class=\"description\">Enter billing information</div></div></div><div class=\"ui disabled step\"><i class=\"info icon\"></i><div class=\"content\"><div class=\"title\">Confirm Order</div></div></div></div></div>"
```

##     `Ordered`

####       `should match snapshot`

```
"<div><div class=\"ui ordered steps\"><div class=\"ui completed step\"><div class=\"content\"><div class=\"title\">Shipping</div> <div class=\"description\">Choose your shipping options</div></div></div> <div class=\"ui completed step\"><div class=\"content\"><div class=\"title\">Billing</div><div class=\"description\">Enter billing information</div></div></div> <div class=\"ui active step\"><div class=\"content\"><div class=\"title\">Confirm Order</div><div class=\"description\">Verify order details</div></div></div></div></div>"
```

##     `Vertical`

####       `should match snapshot`

```
"<div><div class=\"ui vertical steps\"><div class=\"ui completed step\"><i class=\"truck icon\"></i> <div class=\"content\"><div class=\"title\">Shipping</div> <div class=\"description\">Choose your shipping options</div></div></div> <div class=\"ui completed step\"><i class=\"credit card icon\"></i><div class=\"content\"><div class=\"title\">Billing</div><div class=\"description\">Enter billing information</div></div></div> <div class=\"ui active step\"><i class=\"info icon\"></i><div class=\"content\"><div class=\"title\">Confirm Order</div><div class=\"description\">Verify order details</div></div></div></div></div>"
```

## `AccordionExample`

##   `Types`

##     `Accordion`

####       `should match snapshot`

```
"<div><div class=\"ui accordion\"><div class=\"title active\"><i class=\"dropdown icon\"></i>
      What is a dog?
    </div> <div class=\"content active\"><p>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
        be found as a welcome guest in many households across the world.
      </p></div> <div class=\"title\"><i class=\"dropdown icon\"></i>
      What kinds of dogs are there?
    </div> <div class=\"content\"><p>
        There are many breeds of dogs. Each breed varies in size and temperament. Owners often
        select a breed of dog that they find to be compatible with their own lifestyle and
        desires from a companion.
      </p></div> <div class=\"title\"><i class=\"dropdown icon\"></i>
      How do you acquire a dog?
    </div> <div class=\"content\"><p>
        Three common ways for a prospective owner to acquire a dog is from pet shops, private
        owners, or shelters.
      </p> <p>
        A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
        owner allows you to assess the pedigree and upbringing of your dog before choosing to
        take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
        who may not find one so readily.
      </p></div></div></div>"
```

##     `Styled`

####       `should match snapshot`

```
"<div><div class=\"ui styled accordion\"><div class=\"title active\"><i class=\"dropdown icon\"></i>
      What is a dog?
    </div> <div class=\"content active\"><p>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
        found as a welcome guest in many households across the world.
      </p></div> <div class=\"title\"><i class=\"dropdown icon\"></i>
      What kinds of dogs are there?
    </div> <div class=\"content\"><p>
        There are many breeds of dogs. Each breed varies in size and temperament. Owners often
        select a breed of dog that they find to be compatible with their own lifestyle and desires
        from a companion.
      </p></div> <div class=\"title\"><i class=\"dropdown icon\"></i>
      How do you acquire a dog?
    </div> <div class=\"content\"><p>
        Three common ways for a prospective owner to acquire a dog is from pet shops, private
        owners, or shelters.
      </p> <p>
        A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
        owner allows you to assess the pedigree and upbringing of your dog before choosing to take
        it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may
        not find one so readily.
      </p></div></div></div>"
```

##   `Variations`

##     `Inverted`

####       `should match snapshot`

```
"<div class=\"ui inverted segment\"><div class=\"ui inverted accordion\"><div class=\"title active\"><i class=\"dropdown icon\"></i>
      What is a dog?
    </div> <div class=\"content active\"><p>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
        found as a welcome guest in many households across the world.
      </p></div> <div class=\"title\"><i class=\"dropdown icon\"></i>
      What kinds of dogs are there?
    </div> <div class=\"content\"><p>
        There are many breeds of dogs. Each breed varies in size and temperament. Owners often
        select a breed of dog that they find to be compatible with their own lifestyle and desires
        from a companion.
      </p></div> <div class=\"title\"><i class=\"dropdown icon\"></i>
      How do you acquire a dog?
    </div> <div class=\"content\"><p>
        Three common ways for a prospective owner to acquire a dog is from pet shops, private
        owners, or shelters.
      </p> <p>
        A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
        owner allows you to assess the pedigree and upbringing of your dog before choosing to
        take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
        who may not find one so readily.
      </p></div></div></div>"
```

##   `Examples`

##     `Nested Accordions`

####       `should match snapshot`

```
"<div><div class=\"ui styled accordion\"><div class=\"title\">Level 1</div> <div class=\"content active\">
      Welcome to level 1
      <div class=\"ui styled accordion\"><div class=\"title\">Level 1A</div> <div class=\"content active\">
          Level 1A Contents
          <div class=\"ui styled accordion\"><div class=\"title\">Level 1A-A</div> <div class=\"content\">Level 1A-A Contents</div> <div class=\"title\">Level 1A-B</div> <div class=\"content\">Level 1A-B Contents</div></div></div> <div class=\"title\">Level 1B</div> <div class=\"content\">Level 1B Contents</div> <div class=\"title\">Level 1C</div> <div class=\"content\">Level 1C Contents</div></div></div> <div class=\"title\">Level 2</div> <div class=\"content\">
      Welcome to level 2
      <div class=\"ui styled accordion\"><div class=\"title\">Level 2A</div> <div class=\"content active\">
          Level 2A Contents
          <div class=\"ui styled accordion\"><div class=\"title\">Level 2A-A</div> <div class=\"content\">Level 2A-A Contents</div> <div class=\"title\">Level 2A-B</div> <div class=\"content\">Level 2A-B Contents</div></div></div> <div class=\"title\">Level 2B</div> <div class=\"content\">Level 2B Contents</div> <div class=\"title\">Level 2C</div> <div class=\"content\">Level 2C Contents</div></div></div></div></div>"
```

##     `Form Fields`

####       `should match snapshot`

```
"<div><div class=\"ui segment\"><form class=\"ui form\"><div class=\"field\"><label>First Name</label> <input placeholder=\"First Name\"></div> <div class=\"field\"><label>Last Name</label> <input placeholder=\"Last Name\"></div> <div class=\"field\"><div class=\"ui accordion\"><a class=\"title\"><i class=\"dropdown icon\"></i>
            Optional Details
          </a> <div class=\"content\"><label>Maiden Name</label> <input placeholder=\"Maiden Name\"></div></div></div> <button role=\"button\" class=\"ui button\" type=\"submit\">Submit</button></form></div></div>"
```

##     `Accordion Menus`

####       `should match snapshot`

```
"<div><div class=\"ui styled accordion ui vertical menu\" exclusive=\"\" styled=\"\"><div class=\"title active header\" active=\"\"><i class=\"dropdown icon\"></i>
      Size
    </div> <div class=\"content active\"><form class=\"ui form\"><div class=\"field\"><div class=\"ui checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>Small</label></div></div> <div class=\"field\"><div class=\"ui checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>Medium</label></div></div> <div class=\"field\"><div class=\"ui checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>Large</label></div></div> <div class=\"field\"><div class=\"ui checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>X-Large</label></div></div></form></div> <div class=\"title header\"><i class=\"dropdown icon\"></i>
      Colors
    </div> <div class=\"content\"><form class=\"ui form\"><div class=\"field\"><div class=\"ui checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>Red</label></div></div> <div class=\"field\"><div class=\"ui checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>Orange</label></div></div> <div class=\"field\"><div class=\"ui checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>Green</label></div></div> <div class=\"field\"><div class=\"ui checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>Blue</label></div></div></form></div></div></div>"
```

## `CheckboxExample`

##   `Types`

##     `Checkbox Basic`

####       `should match snapshot`

```
"<div><div class=\"ui checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>checkbox</label></div></div>"
```

##     `Checkbox Disabled`

####       `should match snapshot`

```
"<div><div class=\"ui disabled checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" disabled=\"disabled\" class=\"hidden\"><label>checkbox</label></div></div>"
```

##     `Radio`

####       `should match snapshot`

```
"<div><div class=\"ui radio checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"radio\" class=\"hidden\"><label>Radio choice</label></div></div>"
```

##     `Checkbox with two way binding`

####       `should match snapshot`

```
"<div><div class=\"ui checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>checkbox</label></div> <div><strong>value: </strong> true</div></div>"
```

##     `Toggle style input`

####       `should match snapshot`

```
"<div><div class=\"ui toggle checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" class=\"hidden\"><label>toggle</label></div></div>"
```

##     `Toggle style input disabled`

####       `should match snapshot`

```
"<div><div class=\"ui toggle disabled checkbox\"><input readonly=\"readonly\" tabindex=\"0\" type=\"checkbox\" disabled=\"disabled\" class=\"hidden\"><label>toggle</label></div></div>"
```

## `DimmerExample`

##   `Types`

##     `Dimmer`

####       `should match snapshot`

```
"<div class=\"dimmer-wrapper\"><img src=\"/static/images/logo.png\"> <div class=\"ui active dimmer\"><div class=\"content\"><div class=\"center\"></div></div></div></div>"
```

##     `Dimmer Inverted`

####       `should match snapshot`

```
"<div><img src=\"/static/images/logo.png\"> <div class=\"ui active inverted dimmer\"><div class=\"content\"><div class=\"center\"></div></div></div></div>"
```

## `DropdownExample`

##   `Types`

##     `Dropdown`

####       `should match snapshot`

```
"<div role=\"listbox\" tabindex=\"0\" class=\"ui dropdown\"><div role=\"alert\" aria-live=\"polite\" class=\"text\">File</div><i aria-hidden=\"true\" class=\"dropdown icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\">New</div> <div role=\"option\" class=\"item\">Open... <span class=\"description\">ctrl + o</span></div> <div role=\"option\" class=\"item\">Save as... <span class=\"description\">ctrl + s</span></div> <div role=\"option\" class=\"item\">Rename <span class=\"description\">ctrl + r</span></div> <div role=\"option\" class=\"item\">Make a copy</div> <div role=\"option\" class=\"item\"><i class=\"folder icon\"></i>Move to folder</div> <div role=\"option\" class=\"item\"><i class=\"trash icon\"></i>Move to trash</div> <div role=\"option\" class=\"divider\"></div> <div role=\"option\" class=\"item\">Download as...</div></div></div>"
```

##     `Selection`

####       `should match snapshot`

```
"<div role=\"listbox\" tabindex=\"0\" class=\"ui selection dropdown\"><div role=\"alert\" aria-live=\"polite\" class=\"default text\">Gender</div><i aria-hidden=\"true\" class=\"dropdown icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\">Male</div><div role=\"option\" class=\"item\">Female</div></div></div>"
```

##     `Search Selection`

####       `should match snapshot`

```
"<div role=\"listbox\" tabindex=\"0\" class=\"ui fluid selection search dropdown\"><input type=\"text\" aria-autocomplete=\"list\" autocomplete=\"off\" tabindex=\"0\" class=\"search\"><div role=\"alert\" aria-live=\"polite\" class=\"default text\">Select Country</div><i aria-hidden=\"true\" class=\"dropdown icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\"><i class=\"flag af\"></i>Afghanistan</div><div role=\"option\" class=\"item\"><i class=\"flag ax\"></i>Aland Islands</div><div role=\"option\" class=\"item\"><i class=\"flag al\"></i>Albania</div><div role=\"option\" class=\"item\"><i class=\"flag dz\"></i>Algeria</div><div role=\"option\" class=\"item\"><i class=\"flag as\"></i>American Samoa</div><div role=\"option\" class=\"item\"><i class=\"flag ad\"></i>Andorra</div><div role=\"option\" class=\"item\"><i class=\"flag ao\"></i>Angola</div><div role=\"option\" class=\"item\"><i class=\"flag ai\"></i>Anguilla</div><div role=\"option\" class=\"item\"><i class=\"flag ag\"></i>Antigua</div><div role=\"option\" class=\"item\"><i class=\"flag ar\"></i>Argentina</div><div role=\"option\" class=\"item\"><i class=\"flag am\"></i>Armenia</div><div role=\"option\" class=\"item\"><i class=\"flag aw\"></i>Aruba</div><div role=\"option\" class=\"item\"><i class=\"flag au\"></i>Australia</div><div role=\"option\" class=\"item\"><i class=\"flag at\"></i>Austria</div><div role=\"option\" class=\"item\"><i class=\"flag az\"></i>Azerbaijan</div><div role=\"option\" class=\"item\"><i class=\"flag bs\"></i>Bahamas</div><div role=\"option\" class=\"item\"><i class=\"flag bh\"></i>Bahrain</div><div role=\"option\" class=\"item\"><i class=\"flag bd\"></i>Bangladesh</div><div role=\"option\" class=\"item\"><i class=\"flag bb\"></i>Barbados</div><div role=\"option\" class=\"item\"><i class=\"flag by\"></i>Belarus</div><div role=\"option\" class=\"item\"><i class=\"flag be\"></i>Belgium</div><div role=\"option\" class=\"item\"><i class=\"flag bz\"></i>Belize</div><div role=\"option\" class=\"item\"><i class=\"flag bj\"></i>Benin</div><div role=\"option\" class=\"item\"><i class=\"flag bm\"></i>Bermuda</div><div role=\"option\" class=\"item\"><i class=\"flag bt\"></i>Bhutan</div><div role=\"option\" class=\"item\"><i class=\"flag bo\"></i>Bolivia</div><div role=\"option\" class=\"item\"><i class=\"flag ba\"></i>Bosnia</div><div role=\"option\" class=\"item\"><i class=\"flag bw\"></i>Botswana</div><div role=\"option\" class=\"item\"><i class=\"flag bv\"></i>Bouvet Island</div><div role=\"option\" class=\"item\"><i class=\"flag br\"></i>Brazil</div><div role=\"option\" class=\"item\"><i class=\"flag vg\"></i>British Virgin Islands</div><div role=\"option\" class=\"item\"><i class=\"flag bn\"></i>Brunei</div><div role=\"option\" class=\"item\"><i class=\"flag bg\"></i>Bulgaria</div><div role=\"option\" class=\"item\"><i class=\"flag bf\"></i>Burkina Faso</div><div role=\"option\" class=\"item\"><i class=\"flag bi\"></i>Burundi</div><div role=\"option\" class=\"item\"><i class=\"flag tc\"></i>Caicos Islands</div><div role=\"option\" class=\"item\"><i class=\"flag kh\"></i>Cambodia</div><div role=\"option\" class=\"item\"><i class=\"flag cm\"></i>Cameroon</div><div role=\"option\" class=\"item\"><i class=\"flag ca\"></i>Canada</div><div role=\"option\" class=\"item\"><i class=\"flag cv\"></i>Cape Verde</div><div role=\"option\" class=\"item\"><i class=\"flag ky\"></i>Cayman Islands</div><div role=\"option\" class=\"item\"><i class=\"flag cf\"></i>Central African Republic</div><div role=\"option\" class=\"item\"><i class=\"flag td\"></i>Chad</div><div role=\"option\" class=\"item\"><i class=\"flag cl\"></i>Chile</div><div role=\"option\" class=\"item\"><i class=\"flag cn\"></i>China</div><div role=\"option\" class=\"item\"><i class=\"flag cx\"></i>Christmas Island</div><div role=\"option\" class=\"item\"><i class=\"flag cc\"></i>Cocos Islands</div><div role=\"option\" class=\"item\"><i class=\"flag co\"></i>Colombia</div><div role=\"option\" class=\"item\"><i class=\"flag km\"></i>Comoros</div><div role=\"option\" class=\"item\"><i class=\"flag cg\"></i>Congo Brazzaville</div><div role=\"option\" class=\"item\"><i class=\"flag cd\"></i>Congo</div><div role=\"option\" class=\"item\"><i class=\"flag ck\"></i>Cook Islands</div><div role=\"option\" class=\"item\"><i class=\"flag cr\"></i>Costa Rica</div><div role=\"option\" class=\"item\"><i class=\"flag ci\"></i>Cote Divoire</div><div role=\"option\" class=\"item\"><i class=\"flag hr\"></i>Croatia</div><div role=\"option\" class=\"item\"><i class=\"flag cu\"></i>Cuba</div><div role=\"option\" class=\"item\"><i class=\"flag cy\"></i>Cyprus</div><div role=\"option\" class=\"item\"><i class=\"flag cz\"></i>Czech Republic</div><div role=\"option\" class=\"item\"><i class=\"flag dk\"></i>Denmark</div><div role=\"option\" class=\"item\"><i class=\"flag dj\"></i>Djibouti</div><div role=\"option\" class=\"item\"><i class=\"flag dm\"></i>Dominica</div><div role=\"option\" class=\"item\"><i class=\"flag do\"></i>Dominican Republic</div><div role=\"option\" class=\"item\"><i class=\"flag ec\"></i>Ecuador</div><div role=\"option\" class=\"item\"><i class=\"flag eg\"></i>Egypt</div><div role=\"option\" class=\"item\"><i class=\"flag sv\"></i>El Salvador</div><div role=\"option\" class=\"item\"><i class=\"flag gb\"></i>England</div><div role=\"option\" class=\"item\"><i class=\"flag gq\"></i>Equatorial Guinea</div><div role=\"option\" class=\"item\"><i class=\"flag er\"></i>Eritrea</div><div role=\"option\" class=\"item\"><i class=\"flag ee\"></i>Estonia</div><div role=\"option\" class=\"item\"><i class=\"flag et\"></i>Ethiopia</div><div role=\"option\" class=\"item\"><i class=\"flag eu\"></i>European Union</div><div role=\"option\" class=\"item\"><i class=\"flag fk\"></i>Falkland Islands</div><div role=\"option\" class=\"item\"><i class=\"flag fo\"></i>Faroe Islands</div><div role=\"option\" class=\"item\"><i class=\"flag fj\"></i>Fiji</div><div role=\"option\" class=\"item\"><i class=\"flag fi\"></i>Finland</div><div role=\"option\" class=\"item\"><i class=\"flag fr\"></i>France</div><div role=\"option\" class=\"item\"><i class=\"flag gf\"></i>French Guiana</div><div role=\"option\" class=\"item\"><i class=\"flag pf\"></i>French Polynesia</div><div role=\"option\" class=\"item\"><i class=\"flag tf\"></i>French Territories</div><div role=\"option\" class=\"item\"><i class=\"flag ga\"></i>Gabon</div><div role=\"option\" class=\"item\"><i class=\"flag gm\"></i>Gambia</div><div role=\"option\" class=\"item\"><i class=\"flag ge\"></i>Georgia</div><div role=\"option\" class=\"item\"><i class=\"flag de\"></i>Germany</div><div role=\"option\" class=\"item\"><i class=\"flag gh\"></i>Ghana</div><div role=\"option\" class=\"item\"><i class=\"flag gi\"></i>Gibraltar</div><div role=\"option\" class=\"item\"><i class=\"flag gr\"></i>Greece</div><div role=\"option\" class=\"item\"><i class=\"flag gl\"></i>Greenland</div><div role=\"option\" class=\"item\"><i class=\"flag gd\"></i>Grenada</div><div role=\"option\" class=\"item\"><i class=\"flag gp\"></i>Guadeloupe</div><div role=\"option\" class=\"item\"><i class=\"flag gu\"></i>Guam</div><div role=\"option\" class=\"item\"><i class=\"flag gt\"></i>Guatemala</div><div role=\"option\" class=\"item\"><i class=\"flag gw\"></i>Guinea-Bissau</div><div role=\"option\" class=\"item\"><i class=\"flag gn\"></i>Guinea</div><div role=\"option\" class=\"item\"><i class=\"flag gy\"></i>Guyana</div><div role=\"option\" class=\"item\"><i class=\"flag ht\"></i>Haiti</div><div role=\"option\" class=\"item\"><i class=\"flag hm\"></i>Heard Island</div><div role=\"option\" class=\"item\"><i class=\"flag hn\"></i>Honduras</div><div role=\"option\" class=\"item\"><i class=\"flag hk\"></i>Hong Kong</div><div role=\"option\" class=\"item\"><i class=\"flag hu\"></i>Hungary</div><div role=\"option\" class=\"item\"><i class=\"flag is\"></i>Iceland</div><div role=\"option\" class=\"item\"><i class=\"flag in\"></i>India</div><div role=\"option\" class=\"item\"><i class=\"flag io\"></i>Indian Ocean Territory</div><div role=\"option\" class=\"item\"><i class=\"flag id\"></i>Indonesia</div><div role=\"option\" class=\"item\"><i class=\"flag ir\"></i>Iran</div><div role=\"option\" class=\"item\"><i class=\"flag iq\"></i>Iraq</div><div role=\"option\" class=\"item\"><i class=\"flag ie\"></i>Ireland</div><div role=\"option\" class=\"item\"><i class=\"flag il\"></i>Israel</div><div role=\"option\" class=\"item\"><i class=\"flag it\"></i>Italy</div><div role=\"option\" class=\"item\"><i class=\"flag jm\"></i>Jamaica</div><div role=\"option\" class=\"item\"><i class=\"flag jp\"></i>Japan</div><div role=\"option\" class=\"item\"><i class=\"flag jo\"></i>Jordan</div><div role=\"option\" class=\"item\"><i class=\"flag kz\"></i>Kazakhstan</div><div role=\"option\" class=\"item\"><i class=\"flag ke\"></i>Kenya</div><div role=\"option\" class=\"item\"><i class=\"flag ki\"></i>Kiribati</div><div role=\"option\" class=\"item\"><i class=\"flag kw\"></i>Kuwait</div><div role=\"option\" class=\"item\"><i class=\"flag kg\"></i>Kyrgyzstan</div><div role=\"option\" class=\"item\"><i class=\"flag la\"></i>Laos</div><div role=\"option\" class=\"item\"><i class=\"flag lv\"></i>Latvia</div><div role=\"option\" class=\"item\"><i class=\"flag lb\"></i>Lebanon</div><div role=\"option\" class=\"item\"><i class=\"flag ls\"></i>Lesotho</div><div role=\"option\" class=\"item\"><i class=\"flag lr\"></i>Liberia</div><div role=\"option\" class=\"item\"><i class=\"flag ly\"></i>Libya</div><div role=\"option\" class=\"item\"><i class=\"flag li\"></i>Liechtenstein</div><div role=\"option\" class=\"item\"><i class=\"flag lt\"></i>Lithuania</div><div role=\"option\" class=\"item\"><i class=\"flag lu\"></i>Luxembourg</div><div role=\"option\" class=\"item\"><i class=\"flag mo\"></i>Macau</div><div role=\"option\" class=\"item\"><i class=\"flag mk\"></i>Macedonia</div><div role=\"option\" class=\"item\"><i class=\"flag mg\"></i>Madagascar</div><div role=\"option\" class=\"item\"><i class=\"flag mw\"></i>Malawi</div><div role=\"option\" class=\"item\"><i class=\"flag my\"></i>Malaysia</div><div role=\"option\" class=\"item\"><i class=\"flag mv\"></i>Maldives</div><div role=\"option\" class=\"item\"><i class=\"flag ml\"></i>Mali</div><div role=\"option\" class=\"item\"><i class=\"flag mt\"></i>Malta</div><div role=\"option\" class=\"item\"><i class=\"flag mh\"></i>Marshall Islands</div><div role=\"option\" class=\"item\"><i class=\"flag mq\"></i>Martinique</div><div role=\"option\" class=\"item\"><i class=\"flag mr\"></i>Mauritania</div><div role=\"option\" class=\"item\"><i class=\"flag mu\"></i>Mauritius</div><div role=\"option\" class=\"item\"><i class=\"flag yt\"></i>Mayotte</div><div role=\"option\" class=\"item\"><i class=\"flag mx\"></i>Mexico</div><div role=\"option\" class=\"item\"><i class=\"flag fm\"></i>Micronesia</div><div role=\"option\" class=\"item\"><i class=\"flag md\"></i>Moldova</div><div role=\"option\" class=\"item\"><i class=\"flag mc\"></i>Monaco</div><div role=\"option\" class=\"item\"><i class=\"flag mn\"></i>Mongolia</div><div role=\"option\" class=\"item\"><i class=\"flag me\"></i>Montenegro</div><div role=\"option\" class=\"item\"><i class=\"flag ms\"></i>Montserrat</div><div role=\"option\" class=\"item\"><i class=\"flag ma\"></i>Morocco</div><div role=\"option\" class=\"item\"><i class=\"flag mz\"></i>Mozambique</div><div role=\"option\" class=\"item\"><i class=\"flag na\"></i>Namibia</div><div role=\"option\" class=\"item\"><i class=\"flag nr\"></i>Nauru</div><div role=\"option\" class=\"item\"><i class=\"flag np\"></i>Nepal</div><div role=\"option\" class=\"item\"><i class=\"flag an\"></i>Netherlands Antilles</div><div role=\"option\" class=\"item\"><i class=\"flag nl\"></i>Netherlands</div><div role=\"option\" class=\"item\"><i class=\"flag nc\"></i>New Caledonia</div><div role=\"option\" class=\"item\"><i class=\"flag pg\"></i>New Guinea</div><div role=\"option\" class=\"item\"><i class=\"flag nz\"></i>New Zealand</div><div role=\"option\" class=\"item\"><i class=\"flag ni\"></i>Nicaragua</div><div role=\"option\" class=\"item\"><i class=\"flag ne\"></i>Niger</div><div role=\"option\" class=\"item\"><i class=\"flag ng\"></i>Nigeria</div><div role=\"option\" class=\"item\"><i class=\"flag nu\"></i>Niue</div><div role=\"option\" class=\"item\"><i class=\"flag nf\"></i>Norfolk Island</div><div role=\"option\" class=\"item\"><i class=\"flag kp\"></i>North Korea</div><div role=\"option\" class=\"item\"><i class=\"flag mp\"></i>Northern Mariana Islands</div><div role=\"option\" class=\"item\"><i class=\"flag no\"></i>Norway</div><div role=\"option\" class=\"item\"><i class=\"flag om\"></i>Oman</div><div role=\"option\" class=\"item\"><i class=\"flag pk\"></i>Pakistan</div><div role=\"option\" class=\"item\"><i class=\"flag pw\"></i>Palau</div><div role=\"option\" class=\"item\"><i class=\"flag ps\"></i>Palestine</div><div role=\"option\" class=\"item\"><i class=\"flag pa\"></i>Panama</div><div role=\"option\" class=\"item\"><i class=\"flag py\"></i>Paraguay</div><div role=\"option\" class=\"item\"><i class=\"flag pe\"></i>Peru</div><div role=\"option\" class=\"item\"><i class=\"flag ph\"></i>Philippines</div><div role=\"option\" class=\"item\"><i class=\"flag pn\"></i>Pitcairn Islands</div><div role=\"option\" class=\"item\"><i class=\"flag pl\"></i>Poland</div><div role=\"option\" class=\"item\"><i class=\"flag pt\"></i>Portugal</div><div role=\"option\" class=\"item\"><i class=\"flag pr\"></i>Puerto Rico</div><div role=\"option\" class=\"item\"><i class=\"flag qa\"></i>Qatar</div><div role=\"option\" class=\"item\"><i class=\"flag re\"></i>Reunion</div><div role=\"option\" class=\"item\"><i class=\"flag ro\"></i>Romania</div><div role=\"option\" class=\"item\"><i class=\"flag ru\"></i>Russia</div><div role=\"option\" class=\"item\"><i class=\"flag rw\"></i>Rwanda</div><div role=\"option\" class=\"item\"><i class=\"flag sh\"></i>Saint Helena</div><div role=\"option\" class=\"item\"><i class=\"flag kn\"></i>Saint Kitts and Nevis</div><div role=\"option\" class=\"item\"><i class=\"flag lc\"></i>Saint Lucia</div><div role=\"option\" class=\"item\"><i class=\"flag pm\"></i>Saint Pierre</div><div role=\"option\" class=\"item\"><i class=\"flag vc\"></i>Saint Vincent</div><div role=\"option\" class=\"item\"><i class=\"flag ws\"></i>Samoa</div><div role=\"option\" class=\"item\"><i class=\"flag sm\"></i>San Marino</div><div role=\"option\" class=\"item\"><i class=\"flag gs\"></i>Sandwich Islands</div><div role=\"option\" class=\"item\"><i class=\"flag st\"></i>Sao Tome</div><div role=\"option\" class=\"item\"><i class=\"flag sa\"></i>Saudi Arabia</div><div role=\"option\" class=\"item\"><i class=\"flag sn\"></i>Senegal</div><div role=\"option\" class=\"item\"><i class=\"flag cs\"></i>Serbia</div><div role=\"option\" class=\"item\"><i class=\"flag rs\"></i>Serbia</div><div role=\"option\" class=\"item\"><i class=\"flag sc\"></i>Seychelles</div><div role=\"option\" class=\"item\"><i class=\"flag sl\"></i>Sierra Leone</div><div role=\"option\" class=\"item\"><i class=\"flag sg\"></i>Singapore</div><div role=\"option\" class=\"item\"><i class=\"flag sk\"></i>Slovakia</div><div role=\"option\" class=\"item\"><i class=\"flag si\"></i>Slovenia</div><div role=\"option\" class=\"item\"><i class=\"flag sb\"></i>Solomon Islands</div><div role=\"option\" class=\"item\"><i class=\"flag so\"></i>Somalia</div><div role=\"option\" class=\"item\"><i class=\"flag za\"></i>South Africa</div><div role=\"option\" class=\"item\"><i class=\"flag kr\"></i>South Korea</div><div role=\"option\" class=\"item\"><i class=\"flag es\"></i>Spain</div><div role=\"option\" class=\"item\"><i class=\"flag lk\"></i>Sri Lanka</div><div role=\"option\" class=\"item\"><i class=\"flag sd\"></i>Sudan</div><div role=\"option\" class=\"item\"><i class=\"flag sr\"></i>Suriname</div><div role=\"option\" class=\"item\"><i class=\"flag sj\"></i>Svalbard</div><div role=\"option\" class=\"item\"><i class=\"flag sz\"></i>Swaziland</div><div role=\"option\" class=\"item\"><i class=\"flag se\"></i>Sweden</div><div role=\"option\" class=\"item\"><i class=\"flag ch\"></i>Switzerland</div><div role=\"option\" class=\"item\"><i class=\"flag sy\"></i>Syria</div><div role=\"option\" class=\"item\"><i class=\"flag tw\"></i>Taiwan</div><div role=\"option\" class=\"item\"><i class=\"flag tj\"></i>Tajikistan</div><div role=\"option\" class=\"item\"><i class=\"flag tz\"></i>Tanzania</div><div role=\"option\" class=\"item\"><i class=\"flag th\"></i>Thailand</div><div role=\"option\" class=\"item\"><i class=\"flag tl\"></i>Timorleste</div><div role=\"option\" class=\"item\"><i class=\"flag tg\"></i>Togo</div><div role=\"option\" class=\"item\"><i class=\"flag tk\"></i>Tokelau</div><div role=\"option\" class=\"item\"><i class=\"flag to\"></i>Tonga</div><div role=\"option\" class=\"item\"><i class=\"flag tt\"></i>Trinidad</div><div role=\"option\" class=\"item\"><i class=\"flag tn\"></i>Tunisia</div><div role=\"option\" class=\"item\"><i class=\"flag tr\"></i>Turkey</div><div role=\"option\" class=\"item\"><i class=\"flag tm\"></i>Turkmenistan</div><div role=\"option\" class=\"item\"><i class=\"flag tv\"></i>Tuvalu</div><div role=\"option\" class=\"item\"><i class=\"flag ug\"></i>Uganda</div><div role=\"option\" class=\"item\"><i class=\"flag ua\"></i>Ukraine</div><div role=\"option\" class=\"item\"><i class=\"flag ae\"></i>United Arab Emirates</div><div role=\"option\" class=\"item\"><i class=\"flag us\"></i>United States</div><div role=\"option\" class=\"item\"><i class=\"flag uy\"></i>Uruguay</div><div role=\"option\" class=\"item\"><i class=\"flag um\"></i>Us Minor Islands</div><div role=\"option\" class=\"item\"><i class=\"flag vi\"></i>Us Virgin Islands</div><div role=\"option\" class=\"item\"><i class=\"flag uz\"></i>Uzbekistan</div><div role=\"option\" class=\"item\"><i class=\"flag vu\"></i>Vanuatu</div><div role=\"option\" class=\"item\"><i class=\"flag va\"></i>Vatican City</div><div role=\"option\" class=\"item\"><i class=\"flag ve\"></i>Venezuela</div><div role=\"option\" class=\"item\"><i class=\"flag vn\"></i>Vietnam</div><div role=\"option\" class=\"item\"><i class=\"flag wf\"></i>Wallis and Futuna</div><div role=\"option\" class=\"item\"><i class=\"flag eh\"></i>Western Sahara</div><div role=\"option\" class=\"item\"><i class=\"flag ye\"></i>Yemen</div><div role=\"option\" class=\"item\"><i class=\"flag zm\"></i>Zambia</div><div role=\"option\" class=\"item\"><i class=\"flag zw\"></i>Zimbabwe</div></div></div>"
```

##     `Multiple Selection`

####       `should match snapshot`

```
"<div role=\"listbox\" tabindex=\"0\" class=\"ui fluid multiple selection dropdown\"><div role=\"alert\" aria-live=\"polite\" class=\"default text\">Skills</div><i aria-hidden=\"true\" class=\"dropdown icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\">Angular</div><div role=\"option\" class=\"item\">CSS</div><div role=\"option\" class=\"item\">Graphic Design</div><div role=\"option\" class=\"item\">Ember</div><div role=\"option\" class=\"item\">HTML</div><div role=\"option\" class=\"item\">Information Architecture</div><div role=\"option\" class=\"item\">Javascript</div><div role=\"option\" class=\"item\">Mechanical Engineering</div><div role=\"option\" class=\"item\">Meteor</div><div role=\"option\" class=\"item\">NodeJS</div><div role=\"option\" class=\"item\">Plumbing</div><div role=\"option\" class=\"item\">Python</div><div role=\"option\" class=\"item\">Rails</div><div role=\"option\" class=\"item\">React</div><div role=\"option\" class=\"item\">Kitchen Repair</div><div role=\"option\" class=\"item\">Ruby</div><div role=\"option\" class=\"item\">UI Design</div><div role=\"option\" class=\"item\">User Experience</div></div></div>"
```

##     `Multiple Search Selection`

####       `should match snapshot`

```
"<div role=\"listbox\" tabindex=\"0\" class=\"ui fluid multiple selection search dropdown\"><input type=\"text\" aria-autocomplete=\"list\" autocomplete=\"off\" tabindex=\"0\" class=\"search\"><div role=\"alert\" aria-live=\"polite\" class=\"default text\">Skills</div><i aria-hidden=\"true\" class=\"dropdown icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\">Alabama</div><div role=\"option\" class=\"item\">Alaska</div><div role=\"option\" class=\"item\">Arizona</div><div role=\"option\" class=\"item\">Arkansas</div><div role=\"option\" class=\"item\">California</div><div role=\"option\" class=\"item\">Colorado</div><div role=\"option\" class=\"item\">Connecticut</div><div role=\"option\" class=\"item\">Delaware</div><div role=\"option\" class=\"item\">District Of Columbia</div><div role=\"option\" class=\"item\">Florida</div><div role=\"option\" class=\"item\">Georgia</div><div role=\"option\" class=\"item\">Hawaii</div><div role=\"option\" class=\"item\">Idaho</div><div role=\"option\" class=\"item\">Illinois</div><div role=\"option\" class=\"item\">Indiana</div><div role=\"option\" class=\"item\">Iowa</div><div role=\"option\" class=\"item\">Kansas</div><div role=\"option\" class=\"item\">Kentucky</div><div role=\"option\" class=\"item\">Louisiana</div><div role=\"option\" class=\"item\">Maine</div><div role=\"option\" class=\"item\">Maryland</div><div role=\"option\" class=\"item\">Massachusetts</div><div role=\"option\" class=\"item\">Michigan</div><div role=\"option\" class=\"item\">Minnesota</div><div role=\"option\" class=\"item\">Mississippi</div><div role=\"option\" class=\"item\">Missouri</div><div role=\"option\" class=\"item\">Montana</div><div role=\"option\" class=\"item\">Nebraska</div><div role=\"option\" class=\"item\">Nevada</div><div role=\"option\" class=\"item\">New Hampshire</div><div role=\"option\" class=\"item\">New Jersey</div><div role=\"option\" class=\"item\">New Mexico</div><div role=\"option\" class=\"item\">New York</div><div role=\"option\" class=\"item\">North Carolina</div><div role=\"option\" class=\"item\">North Dakota</div><div role=\"option\" class=\"item\">Ohio</div><div role=\"option\" class=\"item\">Oklahoma</div><div role=\"option\" class=\"item\">Oregon</div><div role=\"option\" class=\"item\">Pennsylvania</div><div role=\"option\" class=\"item\">Rhode Island</div><div role=\"option\" class=\"item\">South Carolina</div><div role=\"option\" class=\"item\">South Dakota</div><div role=\"option\" class=\"item\">Tennessee</div><div role=\"option\" class=\"item\">Texas</div><div role=\"option\" class=\"item\">Utah</div><div role=\"option\" class=\"item\">Vermont</div><div role=\"option\" class=\"item\">Virginia</div><div role=\"option\" class=\"item\">Washington</div><div role=\"option\" class=\"item\">West Virginia</div><div role=\"option\" class=\"item\">Wisconsin</div><div role=\"option\" class=\"item\">Wyoming</div></div></div>"
```

##     `Multiple Search Selection With Additions`

####       `should match snapshot`

```
"<div role=\"listbox\" tabindex=\"0\" class=\"ui fluid multiple selection search dropdown\"><input type=\"text\" aria-autocomplete=\"list\" autocomplete=\"off\" tabindex=\"0\" class=\"search\"><div role=\"alert\" aria-live=\"polite\" class=\"default text\">Skills</div><i aria-hidden=\"true\" class=\"dropdown icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\">Angular</div><div role=\"option\" class=\"item\">CSS</div><div role=\"option\" class=\"item\">Graphic Design</div><div role=\"option\" class=\"item\">Ember</div><div role=\"option\" class=\"item\">HTML</div><div role=\"option\" class=\"item\">Information Architecture</div><div role=\"option\" class=\"item\">Javascript</div><div role=\"option\" class=\"item\">Mechanical Engineering</div><div role=\"option\" class=\"item\">Meteor</div><div role=\"option\" class=\"item\">NodeJS</div><div role=\"option\" class=\"item\">Plumbing</div><div role=\"option\" class=\"item\">Python</div><div role=\"option\" class=\"item\">Rails</div><div role=\"option\" class=\"item\">React</div><div role=\"option\" class=\"item\">Kitchen Repair</div><div role=\"option\" class=\"item\">Ruby</div><div role=\"option\" class=\"item\">UI Design</div><div role=\"option\" class=\"item\">User Experience</div></div></div>"
```

##     `Search Dropdown`

####       `should match snapshot`

```
"<div id=\"app\"><button role=\"listbox\" tabindex=\"0\" class=\"icon ui button floating labeled search dropdown\"><input type=\"text\" aria-autocomplete=\"list\" autocomplete=\"off\" tabindex=\"0\" class=\"search\"><div role=\"alert\" aria-live=\"polite\" class=\"text\">Select Language</div><i aria-hidden=\"true\" class=\"world icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\">Arabic</div><div role=\"option\" class=\"item\">Chinese</div><div role=\"option\" class=\"item\">Danish</div><div role=\"option\" class=\"item\">Dutch</div><div role=\"option\" class=\"item\">English</div><div role=\"option\" class=\"item\">French</div><div role=\"option\" class=\"item\">German</div><div role=\"option\" class=\"item\">Greek</div><div role=\"option\" class=\"item\">Hungarian</div><div role=\"option\" class=\"item\">Italian</div><div role=\"option\" class=\"item\">Japanese</div><div role=\"option\" class=\"item\">Korean</div><div role=\"option\" class=\"item\">Lithuanian</div><div role=\"option\" class=\"item\">Persian</div><div role=\"option\" class=\"item\">Polish</div><div role=\"option\" class=\"item\">Portuguese</div><div role=\"option\" class=\"item\">Russian</div><div role=\"option\" class=\"item\">Spanish</div><div role=\"option\" class=\"item\">Swedish</div><div role=\"option\" class=\"item\">Turkish</div><div role=\"option\" class=\"item\">Vietnamese</div></div></button></div>"
```

##     `Loading`

####       `should match snapshot`

```
"<div role=\"listbox\" tabindex=\"0\" class=\"ui loading selection search dropdown\"><input type=\"text\" aria-autocomplete=\"list\" autocomplete=\"off\" tabindex=\"0\" class=\"search\"><div role=\"alert\" aria-live=\"polite\" class=\"default text\">State</div><i aria-hidden=\"true\" class=\"dropdown icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\">Alabama</div><div role=\"option\" class=\"item\">Alaska</div><div role=\"option\" class=\"item\">Arizona</div><div role=\"option\" class=\"item\">Arkansas</div><div role=\"option\" class=\"item\">California</div><div role=\"option\" class=\"item\">Colorado</div><div role=\"option\" class=\"item\">Connecticut</div><div role=\"option\" class=\"item\">Delaware</div><div role=\"option\" class=\"item\">District Of Columbia</div><div role=\"option\" class=\"item\">Florida</div><div role=\"option\" class=\"item\">Georgia</div><div role=\"option\" class=\"item\">Hawaii</div><div role=\"option\" class=\"item\">Idaho</div><div role=\"option\" class=\"item\">Illinois</div><div role=\"option\" class=\"item\">Indiana</div><div role=\"option\" class=\"item\">Iowa</div><div role=\"option\" class=\"item\">Kansas</div><div role=\"option\" class=\"item\">Kentucky</div><div role=\"option\" class=\"item\">Louisiana</div><div role=\"option\" class=\"item\">Maine</div><div role=\"option\" class=\"item\">Maryland</div><div role=\"option\" class=\"item\">Massachusetts</div><div role=\"option\" class=\"item\">Michigan</div><div role=\"option\" class=\"item\">Minnesota</div><div role=\"option\" class=\"item\">Mississippi</div><div role=\"option\" class=\"item\">Missouri</div><div role=\"option\" class=\"item\">Montana</div><div role=\"option\" class=\"item\">Nebraska</div><div role=\"option\" class=\"item\">Nevada</div><div role=\"option\" class=\"item\">New Hampshire</div><div role=\"option\" class=\"item\">New Jersey</div><div role=\"option\" class=\"item\">New Mexico</div><div role=\"option\" class=\"item\">New York</div><div role=\"option\" class=\"item\">North Carolina</div><div role=\"option\" class=\"item\">North Dakota</div><div role=\"option\" class=\"item\">Ohio</div><div role=\"option\" class=\"item\">Oklahoma</div><div role=\"option\" class=\"item\">Oregon</div><div role=\"option\" class=\"item\">Pennsylvania</div><div role=\"option\" class=\"item\">Rhode Island</div><div role=\"option\" class=\"item\">South Carolina</div><div role=\"option\" class=\"item\">South Dakota</div><div role=\"option\" class=\"item\">Tennessee</div><div role=\"option\" class=\"item\">Texas</div><div role=\"option\" class=\"item\">Utah</div><div role=\"option\" class=\"item\">Vermont</div><div role=\"option\" class=\"item\">Virginia</div><div role=\"option\" class=\"item\">Washington</div><div role=\"option\" class=\"item\">West Virginia</div><div role=\"option\" class=\"item\">Wisconsin</div><div role=\"option\" class=\"item\">Wyoming</div></div></div>"
```

##     `Button`

####       `should match snapshot`

```
"<div id=\"app\"><button role=\"listbox\" tabindex=\"0\" class=\"labeled
    icon ui button dropdown\"><div role=\"alert\" aria-live=\"polite\" class=\"text\">File</div><i aria-hidden=\"true\" class=\"file icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\">New</div> <div role=\"option\" class=\"item\">Open... <span class=\"description\">ctrl + o</span></div> <div role=\"option\" class=\"item\">Save as... <span class=\"description\">ctrl + s</span></div> <div role=\"option\" class=\"item\">Rename <span class=\"description\">ctrl + r</span></div> <div role=\"option\" class=\"item\">Make a copy</div> <div role=\"option\" class=\"item\"><i class=\"folder icon\"></i>Move to folder</div> <div role=\"option\" class=\"item\"><i class=\"trash icon\"></i>Move to trash</div> <div role=\"option\" class=\"divider\"></div> <div role=\"option\" class=\"item\">Download as...</div></div></button></div>"
```

##     `Pointing`

####       `should match snapshot`

```
"<div id=\"app\"><button role=\"listbox\" tabindex=\"0\" class=\"ui button dropdown\"><div role=\"alert\" aria-live=\"polite\" class=\"text\">Options</div><i aria-hidden=\"true\" class=\"dropdown icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\">Settings</div> <div role=\"option\" class=\"item\">Manage apps</div> <div role=\"option\" class=\"item\">Help</div></div></button></div>"
```

##     `Floating`

####       `should match snapshot`

```
"<div id=\"app\"><button role=\"listbox\" tabindex=\"0\" class=\"teal ui button floating dropdown\"><div role=\"alert\" aria-live=\"polite\" class=\"text\">Save</div><i aria-hidden=\"true\" class=\"dropdown icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\"><i class=\"edit icon\"></i>Edit Post</div> <div role=\"option\" class=\"item\"><i class=\"delete icon\"></i>Remove Post</div> <div role=\"option\" class=\"item\"><i class=\"hide icon\"></i>Hide Post</div></div></button></div>"
```

##   `Usage`

##     `Dropdown opening direction`

####       `should match snapshot`

```
"<div id=\"app\"><div role=\"listbox\" tabindex=\"0\" class=\"ui upward dropdown\"><div role=\"alert\" aria-live=\"polite\" class=\"text\">File</div><i aria-hidden=\"true\" class=\"dropdown icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\">New</div> <div role=\"option\" class=\"item\">Open... <span class=\"description\">ctrl + o</span></div> <div role=\"option\" class=\"item\">Save as... <span class=\"description\">ctrl + s</span></div> <div role=\"option\" class=\"item\">Rename <span class=\"description\">ctrl + r</span></div> <div role=\"option\" class=\"item\">Make a copy</div> <div role=\"option\" class=\"item\"><i class=\"folder icon\"></i>Move to folder</div> <div role=\"option\" class=\"item\"><i class=\"trash icon\"></i>Move to trash</div> <div role=\"option\" class=\"divider\"></div> <div role=\"option\" class=\"item\">Download as...</div></div></div></div>"
```

##     `Maximum Selections`

####       `should match snapshot`

```
"<div role=\"listbox\" tabindex=\"0\" class=\"ui fluid multiple selection dropdown\"><div role=\"alert\" aria-live=\"polite\" class=\"default text\">Skills</div><i aria-hidden=\"true\" class=\"dropdown icon\"></i><span class=\"sizer\"></span><div tabindex=\"-1\" class=\"menu transition\"><div role=\"option\" class=\"item\">Angular</div><div role=\"option\" class=\"item\">CSS</div><div role=\"option\" class=\"item\">Graphic Design</div><div role=\"option\" class=\"item\">Ember</div><div role=\"option\" class=\"item\">HTML</div><div role=\"option\" class=\"item\">Information Architecture</div><div role=\"option\" class=\"item\">Javascript</div><div role=\"option\" class=\"item\">Mechanical Engineering</div><div role=\"option\" class=\"item\">Meteor</div><div role=\"option\" class=\"item\">NodeJS</div><div role=\"option\" class=\"item\">Plumbing</div><div role=\"option\" class=\"item\">Python</div><div role=\"option\" class=\"item\">Rails</div><div role=\"option\" class=\"item\">React</div><div role=\"option\" class=\"item\">Kitchen Repair</div><div role=\"option\" class=\"item\">Ruby</div><div role=\"option\" class=\"item\">UI Design</div><div role=\"option\" class=\"item\">User Experience</div></div></div>"
```

## `EmbedExample`

##   `Types`

##     `YouTube`

####       `should match snapshot`

```
"<div class=\"ui embed\"><i class=\"video play icon\"></i><img src=\"static/images/extras/image-16by9.png\" class=\"placeholder\"></div>"
```

##     `Vimeo`

####       `should match snapshot`

```
"<div class=\"ui embed\"><i class=\"video play icon\"></i><img src=\"static/images/extras/vimeo-example.jpg\" class=\"placeholder\"></div>"
```

##     `Custom Content`

####       `should match snapshot`

```
"<div class=\"ui embed\"><i class=\"right circle arrow icon\"></i><img src=\"static/images/extras/image-16by9.png\" class=\"placeholder\"></div>"
```

##   `States`

##     `Active`

####       `should match snapshot`

```
"<div><div class=\"ui embed\"><i class=\"arrow circle down icon\"></i><img src=\"static/images/extras/image-16by9.png\" class=\"placeholder\"></div> <div class=\"ui hidden divider\"></div> <button role=\"button\" class=\"ui icon left labeled button\"><i class=\"bomb icon\"></i>Activate</button></div>"
```

##   `Variations`

##     `Aspect Ratio`

####       `should match snapshot`

```
"<div class=\"ui 4:3 embed\"><i class=\"video play icon\"></i><img src=\"static/images/extras/image-4by3.jpg\" class=\"placeholder\"></div>"
```

##   `Usage`

##     `Source settings`

####       `should match snapshot`

```
"<div class=\"ui embed\"><i class=\"video play icon\"></i><img src=\"static/images/extras/image-16by9.png\" class=\"placeholder\"></div>"
```

##     `Iframe`

####       `should match snapshot`

```
"<div class=\"ui embed\"><i class=\"video play icon\"></i><img src=\"static/images/extras/image-16by9.png\" class=\"placeholder\"></div>"
```

## `ModalExample`

##   `Types`

##     `Modal`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui button\">Show Modal</button> <div class=\"ui dimmer modals page transition\" style=\"display: none !important; animation-duration: 500ms;\"><div class=\"ui standard modal transition\" style=\"display: none !important; animation-duration: 500ms;\"><div class=\"header\">Select a Photo</div> <div class=\"content image\"><div class=\"ui medium image\"><img src=\"static/images/avatar/large/rachel.png\"></div> <div class=\"description\"><div class=\"ui header\">Default Profile Image</div> <p>We've found the following gravatar image associated with your e-mail address.</p> <p>Is it okay to use this photo?</p></div></div> <div class=\"actions\"><button role=\"button\" class=\"ui positive button\">
        OK
      </button></div></div></div></div>"
```

##   `Variations`

##     `Scrolling Content`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui button\">Show Modal</button> <div class=\"ui dimmer modals page transition\" style=\"display: none !important; animation-duration: 500ms;\"><div class=\"ui standard modal transition\" style=\"display: none !important; animation-duration: 500ms;\"><div class=\"header\">Select a Photo</div> <div class=\"content image scrolling\"><div class=\"ui medium image\"><img src=\"static/images/avatar/large/rachel.png\"></div> <div class=\"description\"><div class=\"ui header\">Default Profile Image</div> <docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe></div></div> <div class=\"actions\"><button role=\"button\" class=\"ui positive button\">
        OK
      </button></div></div></div></div>"
```

## `PopupExample`

##   `Types`

##     `Popup`

####       `should match snapshot`

```
"<div><div class=\"ui warning message\">
      Popup relies on Vue Portal to be installed and globally added to you application.
      For Popup to correctly work, install
      <a href=\"https://linusborg.github.io/portal-vue\" target=\"_blank\">Portal Vue</a>

      and write:

      <pre>// index.js
import Vue from 'vue';
import PortalVue from 'portal-vue';
// ...
Vue.use(PortalVue);
      </pre>

      Also, make sure to add <code>&lt;portal-target name=\"semantic-ui-vue\"&gt;</code> at the
      root level of your app.
    </div> <!--fragment tail--><button role=\"button\" class=\"ui icon button\"><i class=\"add icon\"></i></button></div>"
```

##     `Titled`

####       `should match snapshot`

```
"<div><!--fragment tail--><img src=\"static/images/avatar/small/elliot.jpg\" class=\"ui avatar image\"><!--fragment tail--><img src=\"static/images/avatar/small/stevie.jpg\" class=\"ui avatar image\"><!--fragment tail--><img src=\"static/images/avatar/small/matt.jpg\" class=\"ui avatar image\"></div>"
```

##     `Html`

####       `should match snapshot`

```
"<div class=\"v-fragment\"></div>"
```

##   `Variations`

##     `Basic`

####       `should match snapshot`

```
"<div class=\"v-fragment\"></div>"
```

##     `Width`

####       `should match snapshot`

```
"<div><!--fragment tail--><i class=\"heart circular icon\"></i> <!--fragment tail--><i class=\"heart circular icon\"></i> <!--fragment tail--><i class=\"heart circular icon\"></i></div>"
```

##     `Size`

####       `should match snapshot`

```
"<div><!--fragment tail--><i class=\"heart circular icon\"></i> <!--fragment tail--><i class=\"heart circular icon\"></i> <!--fragment tail--><i class=\"heart circular icon\"></i> <!--fragment tail--><i class=\"heart circular icon\"></i> <!--fragment tail--><i class=\"heart circular icon\"></i></div>"
```

##     `Flowing`

####       `should match snapshot`

```
"<div class=\"v-fragment\" hoverable=\"\"></div>"
```

##     `Inverted`

####       `should match snapshot`

```
"<div><!--fragment tail--><button role=\"button\" class=\"ui icon button\"><i class=\"add icon\"></i></button> <!--fragment tail--><i class=\"heart circular icon\"></i></div>"
```

##     `Position`

####       `should match snapshot`

```
"<div class=\"ui three column grid\" style=\"width: 600px;\"><div class=\"row\"><div class=\"column\"><!--fragment tail--><i class=\"red heart large circular icon\"></i></div> <div class=\"center aligned column\"><!--fragment tail--><i class=\"red heart large circular icon\"></i></div> <div class=\"right aligned column\"><!--fragment tail--><i class=\"red heart large circular icon\"></i></div></div> <div class=\"row\"><div class=\"left floated column\"><!--fragment tail--><i class=\"red heart large circular icon\"></i></div> <div class=\"right floated right aligned column\"><!--fragment tail--><i class=\"red heart large circular icon\"></i></div></div> <div class=\"row\"><div class=\"column\"><!--fragment tail--><i class=\"red heart large circular icon\"></i></div> <div class=\"center aligned column\"><!--fragment tail--><i class=\"red heart large circular icon\"></i></div> <div class=\"right aligned column\"><!--fragment tail--><i class=\"red heart large circular icon\"></i></div></div></div>"
```

## `ProgressExample`

##   `Types`

##     `Standard`

####       `should match snapshot`

```
"<div><div data-percent=\"10\" class=\"ui progress\"><div class=\"bar\" style=\"width: 10%; transition-duration: 300ms;\"></div><div class=\"label\">Uploading Files</div></div> <button role=\"button\" class=\"ui button\">-</button> <button role=\"button\" class=\"ui button\">+</button></div>"
```

##     `Indicating`

####       `should match snapshot`

```
"<div><div data-percent=\"43\" class=\"ui progress active indicating\"><div class=\"bar\" style=\"width: 43%; transition-duration: 300ms;\"></div><div class=\"label\">43% Funded</div></div> <button role=\"button\" class=\"ui button\">-</button> <button role=\"button\" class=\"ui button\">+</button></div>"
```

##   `Content`

##     `Bar`

####       `should match snapshot`

```
"<div><div data-percent=\"89\" class=\"ui progress\"><div class=\"bar\" style=\"width: 89%; transition-duration: 300ms;\"></div></div></div>"
```

##     `Progress`

####       `should match snapshot`

```
"<div><div data-percent=\"17\" class=\"ui progress\"><div class=\"bar\" style=\"width: 17%; transition-duration: 300ms;\"><div class=\"progress\"> 17% </div></div></div> <button role=\"button\" class=\"ui button\">-</button> <button role=\"button\" class=\"ui button\">+</button></div>"
```

##     `Label`

####       `should match snapshot`

```
"<div><div data-percent=\"63\" class=\"ui progress\"><div class=\"bar\" style=\"width: 63%; transition-duration: 300ms;\"><div class=\"progress\"> 63% </div></div><div class=\"label\">Uploading Files</div></div></div>"
```

##   `States`

##     `Active`

####       `should match snapshot`

```
"<div><div data-percent=\"50\" class=\"ui progress active\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div></div>"
```

##     `Success`

####       `should match snapshot`

```
"<div><div data-percent=\"100\" class=\"ui progress success\"><div class=\"bar\" style=\"width: 100%; transition-duration: 300ms;\"><div class=\"progress\"> 100% </div></div><div class=\"label\">Everything worked, your file is all ready.</div></div></div>"
```

##     `Warning`

####       `should match snapshot`

```
"<div><div data-percent=\"100\" class=\"ui progress warning\"><div class=\"bar\" style=\"width: 100%; transition-duration: 300ms;\"><div class=\"progress\"> 100% </div></div><div class=\"label\">Your file didn't meet the minimum resolution requirements.</div></div></div>"
```

##     `Error`

####       `should match snapshot`

```
"<div><div data-percent=\"100\" class=\"ui progress error\"><div class=\"bar\" style=\"width: 100%; transition-duration: 300ms;\"><div class=\"progress\"> 100% </div></div><div class=\"label\">There was an error.</div></div></div>"
```

##     `Disabled`

####       `should match snapshot`

```
"<div><div data-percent=\"50\" class=\"ui progress disabled\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div></div>"
```

##   `Variations`

##     `Inverted`

####       `should match snapshot`

```
"<div><div class=\"ui inverted segment\"><div data-percent=\"50\" class=\"ui progress red inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress orange inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress yellow inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress olive inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress green inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress teal inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress blue inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress violet inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress purple inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress pink inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress brown inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress grey inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div> <div data-percent=\"50\" class=\"ui progress black inverted\"><div class=\"bar\" style=\"width: 50%; transition-duration: 300ms;\"></div></div></div></div>"
```

##     `Attached`

####       `should match snapshot`

```
"<div><div class=\"ui segment\"><div data-percent=\"43\" class=\"ui progress top attached\"><div class=\"bar\" style=\"width: 43%; transition-duration: 300ms;\"></div><div class=\"label\">43% Funded</div></div> <div data-percent=\"43\" class=\"ui progress green bottom attached\"><div class=\"bar\" style=\"width: 43%; transition-duration: 300ms;\"></div><div class=\"label\">43% Funded</div></div></div> <button role=\"button\" class=\"ui button\">-</button> <button role=\"button\" class=\"ui button\">+</button></div>"
```

## `RatingExample`

##   `Types`

##     `Rating`

####       `should match snapshot`

```
"<div><div role=\"radiogroup\" class=\"ui rating\"><i aria-checked=\"true\" aria-posinset=\"1\" aria-setsize=\"5\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"false\" aria-posinset=\"2\" aria-setsize=\"5\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i><i aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"5\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i><i aria-checked=\"false\" aria-posinset=\"4\" aria-setsize=\"5\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i><i aria-checked=\"false\" aria-posinset=\"5\" aria-setsize=\"5\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i></div></div>"
```

##     `onRate Callback`

####       `should match snapshot`

```
"<div><div role=\"radiogroup\" class=\"ui rating\"><i aria-checked=\"true\" aria-posinset=\"1\" aria-setsize=\"5\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"false\" aria-posinset=\"2\" aria-setsize=\"5\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i><i aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"5\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i><i aria-checked=\"false\" aria-posinset=\"4\" aria-setsize=\"5\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i><i aria-checked=\"false\" aria-posinset=\"5\" aria-setsize=\"5\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i></div> <pre>{}</pre></div>"
```

## `TabExample`

##   `Types`

##     `Basic`

####       `should match snapshot`

```
"<div><div><div class=\"ui true attached tabular menu\"></div><!----> <!----> <!----></div></div>"
```

##     `Pointing Menu`

####       `should match snapshot`

```
"<div><div><div class=\"ui pointing menu\"></div><!----> <!----> <!----></div></div>"
```

##     `Secondary Menu`

####       `should match snapshot`

```
"<div><div><div class=\"ui secondary menu\"></div><!----> <!----> <!----></div></div>"
```

##     `Text Menu`

####       `should match snapshot`

```
"<div><div><div class=\"ui text menu\"></div><!----> <!----> <!----></div></div>"
```

##   `States`

##     `Loading`

####       `should match snapshot`

```
"<div><div><div class=\"ui true attached tabular menu\"></div><!----> <!----> <!----></div></div>"
```

##     `Disabled`

####       `should match snapshot`

```
"<div><button role=\"button\" class=\"ui button\">Toggle Disabled Tab</button> <div class=\"ui hidden divider\"></div> <div><div class=\"ui true attached tabular menu\"></div><!----> <!----> <!----></div></div>"
```

##   `Menu Variations`

##     `Attached`

####       `should match snapshot`

```
"<div><div><!----> <!----> <!----><div class=\"ui bottom attached menu\"></div></div></div>"
```

##     `Not Tabular`

####       `should match snapshot`

```
"<div><div><div class=\"ui menu\"></div><!----> <!----> <!----></div></div>"
```

##     `Borderless`

####       `should match snapshot`

```
"<div><div><div class=\"ui borderless menu\"></div><!----> <!----> <!----></div></div>"
```

##     `Colored`

####       `should match snapshot`

```
"<div><select><option value=\"red\">
      red
    </option><option value=\"orange\">
      orange
    </option><option value=\"yellow\">
      yellow
    </option><option value=\"green\">
      green
    </option><option value=\"blue\">
      blue
    </option><option value=\"purple\">
      purple
    </option></select> <div class=\"ui hidden divider\"></div> <div><div class=\"ui blue menu\"></div><!----> <!----> <!----></div></div>"
```

##     `Vertical Tabular`

####       `should match snapshot`

```
"<div><div><div class=\"ui grid\"><div class=\"row\"><div class=\"four wide column\"><div class=\"ui vertical fluid tabular menu\"></div></div><div class=\"twelve wide column stretched\"><!----> <!----> <!----></div></div></div></div></div>"
```

##     `Menu Position`

####       `should match snapshot`

```
"<div><div><div class=\"ui grid\"><div class=\"row\"><div class=\"twelve wide column stretched\"><!----> <!----> <!----></div><div class=\"four wide column\"><div class=\"ui vertical fluid menu\"></div></div></div></div></div></div>"
```

##   `Usage`

##     `Active Index`

####       `should match snapshot`

```
"<div><p>Active Index 1</p> <input type=\"range\" max=\"2\"> <div class=\"ui hidden divider\"></div> <div><div class=\"ui true attached tabular menu\"></div><!----> <!----> <!----></div></div>"
```

##     `Default Active Index`

####       `should match snapshot`

```
"<div><div><div class=\"ui true attached tabular menu\"></div><!----> <!----> <!----></div></div>"
```

##     `On Tab Change`

####       `should match snapshot`

```
"<div><p>
    Control active pane from outside,
    <a href=\"#\">Circle</a>,
    <a href=\"#\">Box</a>,
    <a href=\"#\">Triangle</a>,
  </p> <div class=\"ui hidden divider\"></div> <table class=\"ui very compact fixed table\"><tbody><tr class=\"\"><td class=\"\">Index</td> <td class=\"\"></td></tr> <tr class=\"\"><td class=\"\">Label</td> <td class=\"\"></td></tr> <tr class=\"\"><td class=\"\">Clicked on the Tab Pane</td> <td class=\"\"><code></code></td></tr></tbody></table> <div class=\"ui hidden divider\"></div> <div><div class=\"ui true attached tabular menu\"></div><!----> <!----> <!----></div></div>"
```

##     `Adding Icons and Labels`

####       `should match snapshot`

```
"<div><div><div class=\"ui true attached tabular menu\"></div><!----> <!----> <!----></div></div>"
```

## `CardExample`

##   `Types`

##     `Card`

####       `should match snapshot`

```
"<div><div class=\"ui card\"><img src=\"static/images/avatar/large/kristy.png\" class=\"ui image\"> <div class=\"content\"><div class=\"header\">Kristy</div> <div class=\"meta\">Joined in 2013</div> <div class=\"description\">Kristy is an art director living in New York.</div></div> <div class=\"extra content\"><i class=\"user icon\"></i>
      22 Friends</div></div></div>"
```

##     `Cards`

####       `should match snapshot`

```
"<div><div class=\"ui three cards\"><div class=\"ui card\"><div class=\"content\"><img src=\"static/images/avatar/small/elliot.jpg\" class=\"right floated ui image\"> <div class=\"header\">Elliot Fu</div> <div class=\"meta\">Friends of Veronika</div> <div class=\"description\">
          Elliot requested permission to view your contact details
        </div></div> <div class=\"extra content\"><div class=\"ui center aligned container\"><div class=\"ui buttons\"><button role=\"button\" class=\"ui basic positive button\">Approve</button> <button role=\"button\" class=\"ui basic negative button\">Decline</button></div></div></div></div> <div class=\"ui card\"><div class=\"content\"><img src=\"static/images/avatar/small/jenny.jpg\" class=\"right floated ui image\"> <div class=\"header\">Jenny Hess</div> <div class=\"meta\">New Member</div> <div class=\"description\">
          Jenny wants to add you to the group <b>best friends</b></div></div> <div class=\"extra content\"><div class=\"ui center aligned container\"><div class=\"ui buttons\"><button role=\"button\" class=\"ui basic positive button\">Approve</button> <button role=\"button\" class=\"ui basic negative button\">Decline</button></div></div></div></div></div></div>"
```

##   `Content`

##     `Content Block`

####       `should match snapshot`

```
"<div><div class=\"ui card\"><div class=\"content\"><div class=\"header\">
        Project Timeline
      </div></div> <div class=\"content\"><div class=\"ui tiny header\">ACTIVITY</div> <div class=\"ui small feed\"><div class=\"event\"><div class=\"content\"><div class=\"summary\"><a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
            </div></div></div> <div class=\"event\"><div class=\"content\"><div class=\"summary\"><a>Stevie Feliciano</a> was added as an <a>Administrator</a></div></div></div> <div class=\"event\"><div class=\"content\"><div class=\"summary\"><a>Helen Troy</a> added two pictures
            </div></div></div></div></div> <div class=\"extra content\"><button role=\"button\" class=\"ui button\">Join Project</button></div></div></div>"
```

##     `Image`

####       `should match snapshot`

```
"<div><div class=\"ui card\"><div class=\"ui move reveal\"><div class=\"ui visible content\"><img src=\"static/images/avatar/large/jenny.jpg\" class=\"ui image\"></div> <div class=\"ui hidden content\"><img src=\"static/images/avatar/large/elliot.jpg\" class=\"ui image\"></div></div> <div class=\"content\"><div class=\"header\">Team Fu &amp; Hess</div> <div class=\"meta\">Create in Sep 2014</div></div> <div class=\"extra content\"><i class=\"users icon\"></i>
      2 Members</div></div></div>"
```

##     `Header`

####       `should match snapshot`

```
"<div><div class=\"ui three cards\"><div class=\"ui card\"><div class=\"content\"><div class=\"header\">Elliot Fu</div> <div class=\"meta\">Friend</div> <div class=\"description\">Elliot Fu is a film-maker from New York.</div></div></div> <div class=\"ui card\"><div class=\"content\"><div class=\"header\">Veronika Ossi</div> <div class=\"meta\">Friend</div> <div class=\"description\">
          Veronika Ossi is a set designer living in New York
          who enjoys kittens, music, and partying.
        </div></div></div> <div class=\"ui card\"><div class=\"content\"><div class=\"header\">Jenny Hess</div> <div class=\"meta\">Friend</div> <div class=\"description\">
          Jenny is a student studying Media Management at the New School
        </div></div></div></div></div>"
```

##     `Metadata`

####       `should match snapshot`

```
"<div><div class=\"ui card\"><div class=\"content\"><div class=\"header\">Cute Dog</div> <div class=\"meta\"><span>2 days ago</span> <a>Animals</a></div> <img src=\"static/images/wireframes/paragraph.png\" class=\"ui image\"></div></div></div>"
```

##     `Link`

####       `should match snapshot`

```
"<div><div class=\"ui card\"><a href=\"#\"><img src=\"static/images/avatar/large/steve.jpg\" class=\"ui image\"></a> <div class=\"content\"><div class=\"header\"><a>Steve Jobes</a></div> <div class=\"meta\"><a>Last Seen 2 days ago</a></div></div></div></div>"
```

##     `Buttons`

####       `should match snapshot`

```
"<div><div class=\"ui three cards\"><div class=\"ui card\"><div class=\"content\"><div class=\"header\">Elliot Fu</div> <div class=\"meta\">Friend</div> <div class=\"description\">
          Elliot Fu is a film-maker from New York.
        </div></div> <button role=\"button\" class=\"ui bottom attached button\"><i class=\"add icon\"></i> Add Friend
      </button></div> <div class=\"ui card\"><div class=\"content\"><div class=\"header\">Veronika Ossi</div> <div class=\"meta\">Friend</div> <div class=\"description\">
          Veronika Ossi is a set designer living in New York
          who enjoys kittens, music, and partying.
        </div></div> <button role=\"button\" class=\"ui bottom attached button\"><i class=\"add icon\"></i> Add Friend
      </button></div> <div class=\"ui card\"><div class=\"content\"><div class=\"header\">Jenny Hess</div> <div class=\"meta\">Friend</div> <div class=\"description\">
          Jenny is a student studying Media Management at the New School
        </div></div> <button role=\"button\" class=\"ui bottom attached button\"><i class=\"add icon\"></i> Add Friend
      </button></div></div></div>"
```

##     `Approval`

####       `should match snapshot`

```
"<div><div class=\"ui card\"><div class=\"content\"><div class=\"header\">Cute Dog
        <i class=\"right floated like small icon\"></i> <i class=\"right floated star small icon\"></i></div> <img src=\"static/images/wireframes/paragraph.png\" class=\"ui image\"></div> <div class=\"extra content\"><span><i class=\"heart icon\"></i> Like
      </span> <div class=\"right floated\"><span><i class=\"star icon\"></i> Favorite
      </span></div></div></div></div>"
```

##     `Description`

####       `should match snapshot`

```
"<div><div class=\"ui card\"><div class=\"content\"><div class=\"header\">Cute Dog</div> <div class=\"meta\">2 days ago</div> <div class=\"description\"><p>
          Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their
          adorable faces, others for their tiny stature, and even others for their massive size.
        </p> <p>Many people also have their own barometers for what makes a cute dog.</p></div></div></div></div>"
```

##     `Extra Content`

####       `should match snapshot`

```
"<div><div class=\"ui card\"><div class=\"content\"><div class=\"header\">Cute Dog</div> <div class=\"meta\">2 days ago</div> <div class=\"description\"><p>
          Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their
          adorable faces, others for their tiny stature, and even others for their massive size.
        </p> <p>Many people also have their own barometers for what makes a cute dog.</p></div></div> <div class=\"extra content\"><i class=\"check icon\"></i> 121 Votes
    </div></div></div>"
```

##   `Variations`

##     `Fluid Card`

####       `should match snapshot`

```
"<div><div class=\"ui three column grid\"><div class=\"column\"><div class=\"fluid ui card\"><img src=\"static/images/avatar/large/daniel.jpg\" class=\"ui image\"> <div class=\"content\"><div class=\"header\">Daniel Louise</div></div></div></div> <div class=\"column\"><div class=\"fluid ui card\"><img src=\"static/images/avatar/large/helen.jpg\" class=\"ui image\"> <div class=\"content\"><div class=\"header\">Helen Troy</div></div></div></div> <div class=\"column\"><div class=\"fluid ui card\"><img src=\"static/images/avatar/large/elliot.jpg\" class=\"ui image\"> <div class=\"content\"><div class=\"header\">Elliot Fu</div></div></div></div></div></div>"
```

##     `Centered Card`

####       `should match snapshot`

```
"<div><div class=\"centered ui card\"><img src=\"static/images/avatar/large/elyse.png\" class=\"ui image\"> <div class=\"content\"><div class=\"header\">Elyse</div></div></div></div>"
```

##     `Raised Card`

####       `should match snapshot`

```
"<div><div class=\"raised ui card\"><div class=\"content\"><div class=\"header\">Cute Dog</div> <div class=\"meta\">Animals</div> <img src=\"/static/images/wireframes/paragraph.png\" class=\"ui image\"></div> <div class=\"extra content\"><div class=\"right floated\"><span><img src=\"/static/images/avatar/small/matt.jpg\" class=\"ui mini circular image\"> Matt
      </span></div></div></div></div>"
```

##     `Link Card`

####       `should match snapshot`

```
"<div><a><div class=\"ui card\"><div class=\"content\"><div class=\"header\">Cute Dog</div> <div class=\"meta\">Animals</div> <img src=\"/static/images/wireframes/paragraph.png\" class=\"ui image\"></div> <div class=\"extra content\"><div class=\"right floated\"><span><img src=\"/static/images/avatar/small/matt.jpg\" class=\"ui mini circular image\"> Matt
      </span></div></div></div></a></div>"
```

##     `Floated Content`

####       `should match snapshot`

```
"<div><div class=\"raised ui card\"><div class=\"content\"><div class=\"header\">Cute Dog</div> <div class=\"meta\">Animals
        <span class=\"right floated\">2 days ago</span></div> <img src=\"/static/images/wireframes/paragraph.png\" class=\"ui image\"></div> <div class=\"extra content\"><div class=\"right floated\"><span><img src=\"/static/images/avatar/small/matt.jpg\" class=\"ui mini circular image\"> Matt
      </span></div></div></div></div>"
```

##     `Text Alignment`

####       `should match snapshot`

```
"<div><div class=\"raised ui card\"><div class=\"content\"><div class=\"header\">Cute Dog</div> <div class=\"meta\">Animals
        <span class=\"right floated\">2 days ago</span></div> <img src=\"/static/images/wireframes/paragraph.png\" class=\"ui image\"></div> <div class=\"extra content\"><div class=\"right floated\"><span><img src=\"/static/images/avatar/small/matt.jpg\" class=\"ui mini circular image\"> Matt
      </span></div></div></div></div>"
```

##     `Colored`

####       `should match snapshot`

```
"<div><div class=\"ui four cards\"><div class=\"red ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"orange ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"yellow ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"olive ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"green ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"teal ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"blue ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"violet ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"purple ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"pink ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"brown ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"grey ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div> <div class=\"black ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"></div></div></div>"
```

##     `Column Count`

####       `should match snapshot`

```
"<div><div class=\"ui four cards\"><div class=\"ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <div class=\"extra content\">
        Rating: <div role=\"radiogroup\" class=\"ui star rating\"><i aria-checked=\"true\" aria-posinset=\"1\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"3\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"4\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i></div></div></div> <div class=\"ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <div class=\"extra content\">
        Rating: <div role=\"radiogroup\" class=\"ui star rating\"><i aria-checked=\"true\" aria-posinset=\"1\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i><i aria-checked=\"false\" aria-posinset=\"4\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i></div></div></div> <div class=\"ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <div class=\"extra content\">
        Rating: <div role=\"radiogroup\" class=\"ui star rating\"><i aria-checked=\"true\" aria-posinset=\"1\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"3\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"false\" aria-posinset=\"4\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i></div></div></div> <div class=\"ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <div class=\"extra content\">
        Rating: <div role=\"radiogroup\" class=\"ui star rating\"><i aria-checked=\"true\" aria-posinset=\"1\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"3\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"4\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i></div></div></div> <div class=\"ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <div class=\"extra content\">
        Rating: <div role=\"radiogroup\" class=\"ui star rating\"><i aria-checked=\"true\" aria-posinset=\"1\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"3\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"false\" aria-posinset=\"4\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i></div></div></div> <div class=\"ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <div class=\"extra content\">
        Rating: <div role=\"radiogroup\" class=\"ui star rating\"><i aria-checked=\"true\" aria-posinset=\"1\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"3\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"false\" aria-posinset=\"4\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"icon\"></i></div></div></div> <div class=\"ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <div class=\"extra content\">
        Rating: <div role=\"radiogroup\" class=\"ui star rating\"><i aria-checked=\"true\" aria-posinset=\"1\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"3\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"4\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i></div></div></div> <div class=\"ui card\"><img src=\"static/images/wireframes/image.png\" class=\"ui image\"> <div class=\"extra content\">
        Rating: <div role=\"radiogroup\" class=\"ui star rating\"><i aria-checked=\"true\" aria-posinset=\"1\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"3\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i><i aria-checked=\"true\" aria-posinset=\"4\" aria-setsize=\"4\" tabindex=\"0\" role=\"radio\" class=\"active icon\"></i></div></div></div></div></div>"
```

##     `Stackable`

####       `should match snapshot`

```
"<div><div class=\"ui three stackable cards\"><div class=\"ui card\"><img src=\"static/images/avatar/large/elliot.jpg\" class=\"ui image\"></div> <div class=\"ui card\"><img src=\"static/images/avatar/large/helen.jpg\" class=\"ui image\"></div> <div class=\"ui card\"><img src=\"static/images/avatar/large/jenny.jpg\" class=\"ui image\"></div> <div class=\"ui card\"><img src=\"static/images/avatar/large/veronika.jpg\" class=\"ui image\"></div> <div class=\"ui card\"><img src=\"static/images/avatar/large/stevie.jpg\" class=\"ui image\"></div> <div class=\"ui card\"><img src=\"static/images/avatar/large/steve.jpg\" class=\"ui image\"></div></div></div>"
```

##     `Doubling`

####       `should match snapshot`

```
"<div><div class=\"doubling ui six cards\"><div class=\"ui card\"><img src=\"static/images/avatar/large/elliot.jpg\" class=\"ui image\"></div> <div class=\"ui card\"><img src=\"static/images/avatar/large/helen.jpg\" class=\"ui image\"></div> <div class=\"ui card\"><img src=\"static/images/avatar/large/jenny.jpg\" class=\"ui image\"></div> <div class=\"ui card\"><img src=\"static/images/avatar/large/veronika.jpg\" class=\"ui image\"></div> <div class=\"ui card\"><img src=\"static/images/avatar/large/stevie.jpg\" class=\"ui image\"></div> <div class=\"ui card\"><img src=\"static/images/avatar/large/steve.jpg\" class=\"ui image\"></div></div></div>"
```

## `CommentExample`

##   `Types`

##     `Comments`

####       `should match snapshot`

```
"<div class=\"ui comments\"><h3 class=\"ui dividing header\">Comments</h3> <div class=\"ui comment\"><div class=\"avatar\"><img src=\"static/images/avatar/small/matt.jpg\"></div> <div class=\"content\"><a class=\"author\">Matt</a> <div class=\"metadata\"><div>Today at 5:42PM</div></div> <div class=\"text\">How artistic!</div> <div class=\"actions\"><a>Reply</a></div></div></div> <div class=\"ui comment\"><div class=\"avatar\"><img src=\"static/images/avatar/small/elliot.jpg\"></div> <div class=\"content\"><a class=\"author\">Elliot Fu</a> <div class=\"metadata\"><div>Yesterday at 12:30AM</div></div> <div class=\"text\"><p>This has been very useful for my research. Thanks as well!</p></div> <div class=\"actions\"><a>Reply</a></div></div> <div class=\"ui comments\"><div class=\"ui comment\"><div class=\"avatar\"><img src=\"static/images/avatar/small/jenny.jpg\"></div> <div class=\"content\"><a class=\"author\">Jenny Hess</a> <div class=\"metadata\"><div>Just now</div></div> <div class=\"text\">
            Elliot you are always so right :)
          </div> <div class=\"actions\"><a>Reply</a></div></div></div></div></div> <div class=\"ui comment\"><div class=\"avatar\"><img src=\"static/images/avatar/small/joe.jpg\"></div> <div class=\"content\"><a class=\"author\">Joe Henderson</a> <div class=\"metadata\"><div>5 days ago</div></div> <div class=\"text\">
        Dude, this is awesome. Thanks so much
      </div> <div class=\"actions\"><a>Reply</a></div></div></div> <form reply=\"\"><form-text-area></form-text-area> <button role=\"button\" class=\"ui icon left labeled primary button\"><i class=\"edit icon\"></i>Add
      Reply</button></form></div>"
```

## `FeedExample`

##   `Types`

##     `Feed`

####       `should match snapshot`

```
"<div class=\"ui feed\"><div class=\"event\"><div class=\"label\"><img src=\"static/images/avatar/small/elliot.jpg\"></div> <div class=\"content\"><div class=\"summary\"><a class=\"user\">Elliot Fu</a> added you as a friend
        <div class=\"date\">1 Hour Ago</div></div> <div class=\"meta\"><a class=\"like\"><i class=\"like icon\"></i>
          4 Likes
        </a></div></div></div> <div class=\"event\"><div class=\"label\"><img src=\"static/images/avatar/small/helen.jpg\" class=\"ui image\"></div> <div class=\"content\"><div class=\"summary\"><a>Helen Troy</a> added <a>2 new illustrations</a> <div class=\"date\">4 days ago</div></div> <div class=\"images extra\"><a><img src=\"static/images/wireframes/image.png\"></a> <a><img src=\"static/images/wireframes/image.png\"></a></div> <div class=\"meta\"><a class=\"like\"><i class=\"like icon\"></i>
          1 Like
        </a></div></div></div> <div class=\"event\"><div class=\"label\"><img src=\"static/images/avatar/small/jenny.jpg\" class=\"ui image\"></div> <div class=\"content\"><div class=\"summary\"><a class=\"user\">Jenny Hess</a> add you as a friend<div class=\"date\">2 Days Ago</div></div> <div class=\"meta\"><a class=\"like\"><i class=\"like icon\"></i>
          8 Likes
        </a></div></div></div> <div class=\"event\"><div class=\"label\"><img src=\"static/images/avatar/small/joe.jpg\" class=\"ui image\"></div> <div class=\"content\"><div class=\"summary\"><a>Joe Henderson</a> posted on his page
        <div class=\"date\">3 days ago</div></div> <div class=\"text extra\">
        Ours is a life of constant reruns. We're always circling back to where we'd we started,
        then starting all over again. Even if we don't run extra laps that day, we surely will
        come back for more of the same another day soon.
      </div> <div class=\"meta\"><a class=\"like\"><i class=\"like icon\"></i>
          5 Likes
        </a></div></div></div> <div class=\"event\"><div class=\"label\"><img src=\"static/images/avatar/small/justen.jpg\" class=\"ui image\"></div> <div class=\"content\"><div class=\"summary\"><a>Justen Kitsune</a> added <a>2 new photos</a> of you
        <div class=\"date\">4 days ago</div></div> <div class=\"images extra\"><a><img src=\"static/images/wireframes/image.png\"></a> <a><img src=\"static/images/wireframes/image.png\"></a></div> <div class=\"meta\"><a class=\"like\"><i class=\"like icon\"></i>
          41 Likes
        </a></div></div></div></div>"
```

##   `Content`

##     `Image Label`

####       `should match snapshot`

```
"<div class=\"ui feed\"><div class=\"event\"><div class=\"label\"><img src=\"static/images/avatar/small/elliot.jpg\" class=\"ui image\"></div> <div class=\"content\">
      You added Elliot Fu to the group <a>Coworkers</a></div></div></div>"
```

##     `Icon Label`

####       `should match snapshot`

```
"<div class=\"ui feed\"><div class=\"event\"><div class=\"label\"><i class=\"pencil icon\"></i></div> <div class=\"content\"><div class=\"date\">Today</div> <div class=\"summary\">
        You posted on your friend <a>Stevie Feliciano's</a> wall.
      </div></div></div></div>"
```

##     `Content Date`

####       `should match snapshot`

```
"<div class=\"ui feed\"><div class=\"event\"><div class=\"label\"><img src=\"static/images/avatar/small/jenny.jpg\" class=\"ui image\"></div> <div class=\"content\"><div class=\"date\">3 days ago</div> <div class=\"summary\">
        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
      </div></div></div></div>"
```

##     `Summary Date`

####       `should match snapshot`

```
"<div class=\"ui feed\"><div class=\"event\"><div class=\"label\"><img src=\"static/images/avatar/small/jenny.jpg\" class=\"ui image\"></div> <div class=\"content\"><div class=\"summary\">
        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
        <div class=\"date\">3 days ago</div></div></div></div></div>"
```

##     `Extra Images`

####       `should match snapshot`

```
"<div class=\"ui feed\"><div class=\"event\"><div class=\"label\"><img src=\"static/images/avatar/small/helen.jpg\" class=\"ui image\"></div> <div class=\"content\"><div class=\"date\">3 days ago</div> <div class=\"summary\"><a>Helen Troy</a> added 2 photos
      </div> <div class=\"images extra\"><a><img src=\"static/images/wireframes/image.png\"></a> <a><img src=\"static/images/wireframes/image.png\"></a></div></div></div></div>"
```

##     `Extra Text`

####       `should match snapshot`

```
"<div class=\"ui feed\"><div class=\"event\"><div class=\"label\"><img src=\"static/images/avatar/small/laura.jpg\" class=\"ui image\"></div> <div class=\"content\"><div class=\"date\">3 days ago</div> <div class=\"summary\"><a>Laura Faucet</a> created a post
      </div> <div class=\"text extra\">
        Have you seen what's going on in Israel? Can you believe it.
      </div></div></div></div>"
```

##   `Variations`

##     `Size`

####       `should match snapshot`

```
"<div class=\"ui small feed\"><h4 class=\"ui header\">Followers Activity</h4> <div class=\"event\"><div class=\"content\"><div class=\"summary\"><a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
      </div></div></div> <div class=\"event\"><div class=\"content\"><div class=\"summary\"><a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
      </div></div></div> <div class=\"event\"><div class=\"content\"><div class=\"summary\"><a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
      </div></div></div> <div class=\"event\"><div class=\"content\"><div class=\"summary\"><a>Christian Rocha</a> signed up for the site.
      </div></div></div></div>"
```

## `ItemExample`

##   `Types`

##     `Items`

####       `should match snapshot`

```
"<div class=\"ui items\"><div class=\"item\"><div class=\"image\"><img src=\"static/images/wireframes/image.png\"></div> <div class=\"content\"><div class=\"header\">Header</div> <div class=\"meta\"><span>Description</span></div> <div class=\"description\"><p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p></div> <div class=\"extra\">
        Additional Details
      </div></div></div> <div class=\"item\"><div class=\"image\"><img src=\"static/images/wireframes/image.png\"></div> <div class=\"content\"><div class=\"header\">Header</div> <div class=\"meta\"><span>Description</span></div> <div class=\"description\"><p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p></div> <div class=\"extra\">
        Additional Details
      </div></div></div></div>"
```

##   `Content`

##     `Image`

####       `should match snapshot`

```
"<div class=\"ui divided items\"><div class=\"item\"><div class=\"image\"><img src=\"static/images/wireframes/image.png\"></div></div> <div class=\"item\"><div class=\"image\"><img src=\"static/images/wireframes/image.png\"></div></div> <div class=\"item\"><div class=\"image\"><img src=\"static/images/wireframes/image.png\"></div></div></div>"
```

##     `Content`

####       `should match snapshot`

```
"<div class=\"ui divided items\"><div class=\"item\"><div class=\"ui tiny image\"><img src=\"static/images/wireframes/image.png\"></div> <div class=\"middle aligned content\">Content A</div></div> <div class=\"item\"><div class=\"ui tiny image\"><img src=\"static/images/wireframes/image.png\"></div> <div class=\"middle aligned content\">Content B</div></div> <div class=\"item\"><div class=\"ui tiny image\"><img src=\"static/images/wireframes/image.png\"></div> <div class=\"middle aligned content\">Content C</div></div></div>"
```

##     `Header`

####       `should match snapshot`

```
"<div class=\"ui divided items\"><div class=\"item\"><div class=\"ui tiny image\"><img src=\"static/images/wireframes/image.png\"></div> <div class=\"middle aligned content\"><a href=\"javascript:void(0)\" class=\"header\">12 Years a Slave</a></div></div> <div class=\"item\"><div class=\"ui tiny image\"><img src=\"static/images/wireframes/image.png\"></div> <div class=\"middle aligned content\"><a href=\"javascript:void(0)\" class=\"header\">My Neighbor Totoro</a></div></div> <div class=\"item\"><div class=\"ui tiny image\"><img src=\"static/images/wireframes/image.png\"></div> <div class=\"middle aligned content\"><a href=\"javascript:void(0)\" class=\"header\">Watchmen</a></div></div></div>"
```

##     `Metadata`

####       `should match snapshot`

```
"<div class=\"ui divided items\"><div class=\"item\"><div class=\"ui small image\"><img src=\"static/images/wireframes/image.png\"></div> <div class=\"content\"><div class=\"header\">Arrowhead Valley Camp</div> <div class=\"meta\"><span class=\"price\">$1200</span> <span class=\"stay\">1 Month</span></div> <div class=\"description\"><p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p></div></div></div> <div class=\"item\"><div class=\"ui small image\"><img src=\"static/images/wireframes/image.png\"></div> <div class=\"content\"><div class=\"header\">Buck's Homebrew Stayaway</div> <div class=\"meta\"><span class=\"price\">$1000</span> <span class=\"stay\">2 Weeks</span></div> <div class=\"description\"><p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p></div></div></div> <div class=\"item\"><div class=\"ui small image\"><img src=\"static/images/wireframes/image.png\"></div> <div class=\"content\"><div class=\"header\">Astrology Camp</div> <div class=\"meta\"><span class=\"price\">$1600</span> <span class=\"stay\">6 Weeks</span></div> <div class=\"description\"><p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p></div></div></div></div>"
```

## `StatisticExample`

##   `Types`

##     `Statistic`

####       `should match snapshot`

```
"<div><div class=\"single-example\"><div class=\"ui statistic\"><div class=\"value\">5,550</div> <div class=\"label\">Downloads</div></div></div> <div class=\"single-example\"><div class=\"ui statistic\"><div class=\"label\">Downloads</div> <div class=\"value\">5,550</div></div></div></div>"
```

##     `Statistic Group`

####       `should match snapshot`

```
"<div class=\"ui statistics\"><div class=\"statistic\" in-group=\"\"><div class=\"value\">22</div> <div class=\"label\">Faves</div></div> <div class=\"statistic\" in-group=\"\"><div class=\"value\">31,200</div> <div class=\"label\">Views</div></div> <div class=\"statistic\" in-group=\"\"><div class=\"value\">22</div> <div class=\"label\">Members</div></div></div>"
```

##   `Content`

##     `Value`

####       `should match snapshot`

```
"<div class=\"ui statistics\"><div class=\"statistic\" in-group=\"\"><div class=\"value\">
      22
    </div> <div class=\"label\">
      Saves
    </div></div> <div class=\"statistic\" in-group=\"\"><div class=\"text value\">
      Three<br>
      Thousand
    </div> <div class=\"label\">
      Signups
    </div></div> <div class=\"statistic\" in-group=\"\"><div class=\"value\"><i class=\"plane icon\"></i> 5
    </div> <div class=\"label\">
      Flights
    </div></div> <div class=\"statistic\" in-group=\"\"><div class=\"value\"><img src=\"static/images/avatar/small/joe.jpg\" class=\"ui circular inline image\">
      42
    </div> <div class=\"label\">
      Team Members
    </div></div></div>"
```

##     `Label`

####       `should match snapshot`

```
"<div class=\"ui statistic\"><div class=\"value\">2,204</div> <div class=\"label\">Views</div></div>"
```

##   `Variations`

##     `Horizontal Statistic`

####       `should match snapshot`

```
"<div><div class=\"single-example\"><div class=\"ui statistic horizontal\"><div class=\"value\">2,204</div> <div class=\"label\">Views</div></div></div> <div class=\"single-example\"><div class=\"ui statistics horizontal\"><div class=\"statistic\" in-group=\"\"><div class=\"value\">22</div> <div class=\"label\">Faves</div></div> <div class=\"statistic\" in-group=\"\"><div class=\"value\">31,200</div> <div class=\"label\">Views</div></div> <div class=\"statistic\" in-group=\"\"><div class=\"value\">22</div> <div class=\"label\">Members</div></div></div></div></div>"
```

##     `Colored`

####       `should match snapshot`

```
"<div class=\"ui statistics\"><div class=\"statistic red\" in-group=\"\"><div class=\"value\">
      27
    </div> <div class=\"label\">
      Red
    </div></div> <div class=\"statistic orange\" in-group=\"\"><div class=\"value\">
      8
    </div> <div class=\"label\">
      Orange
    </div></div> <div class=\"statistic yellow\" in-group=\"\"><div class=\"value\">
      28
    </div> <div class=\"label\">
      Yellow
    </div></div> <div class=\"statistic olive\" in-group=\"\"><div class=\"value\">
      7
    </div> <div class=\"label\">
      Olive
    </div></div> <div class=\"statistic green\" in-group=\"\"><div class=\"value\">
      14
    </div> <div class=\"label\">
      Green
    </div></div> <div class=\"statistic teal\" in-group=\"\"><div class=\"value\">
      82
    </div> <div class=\"label\">
      Teal
    </div></div> <div class=\"statistic blue\" in-group=\"\"><div class=\"value\">
      1
    </div> <div class=\"label\">
      Blue
    </div></div> <div class=\"statistic violet\" in-group=\"\"><div class=\"value\">
      22
    </div> <div class=\"label\">
      Violet
    </div></div> <div class=\"statistic purple\" in-group=\"\"><div class=\"value\">
      23
    </div> <div class=\"label\">
      Purple
    </div></div> <div class=\"statistic pink\" in-group=\"\"><div class=\"value\">
      15
    </div> <div class=\"label\">
      Pink
    </div></div> <div class=\"statistic brown\" in-group=\"\"><div class=\"value\">
      36
    </div> <div class=\"label\">
      Brown
    </div></div> <div class=\"statistic grey\" in-group=\"\"><div class=\"value\">
      49
    </div> <div class=\"label\">
      Grey
    </div></div></div>"
```

##     `Inverted`

####       `should match snapshot`

```
"<div class=\"ui inverted segment\"><div class=\"ui statistics\"><div class=\"statistic inverted\"><div class=\"value\">
        54
      </div> <div class=\"label\">
        Inverted
      </div></div> <div class=\"statistic red inverted\"><div class=\"value\">
        27
      </div> <div class=\"label\">
        Red
      </div></div> <div class=\"statistic orange inverted\"><div class=\"value\">
        8
      </div> <div class=\"label\">
        Orange
      </div></div> <div class=\"statistic yellow inverted\"><div class=\"value\">
        28
      </div> <div class=\"label\">
        Yellow
      </div></div> <div class=\"statistic olive inverted\"><div class=\"value\">
        7
      </div> <div class=\"label\">
        Olive
      </div></div> <div class=\"statistic green inverted\"><div class=\"value\">
        14
      </div> <div class=\"label\">
        Green
      </div></div> <div class=\"statistic teal inverted\"><div class=\"value\">
        82
      </div> <div class=\"label\">
        Teal
      </div></div> <div class=\"statistic blue inverted\"><div class=\"value\">
        1
      </div> <div class=\"label\">
        Blue
      </div></div> <div class=\"statistic violet inverted\"><div class=\"value\">
        22
      </div> <div class=\"label\">
        Violet
      </div></div> <div class=\"statistic purple inverted\"><div class=\"value\">
        23
      </div> <div class=\"label\">
        Purple
      </div></div> <div class=\"statistic pink inverted\"><div class=\"value\">
        15
      </div> <div class=\"label\">
        Pink
      </div></div> <div class=\"statistic brown inverted\"><div class=\"value\">
        36
      </div> <div class=\"label\">
        Brown
      </div></div> <div class=\"statistic grey inverted\"><div class=\"value\">
        49
      </div> <div class=\"label\">
        Grey
      </div></div></div></div>"
```

##     `Evenly Divided`

####       `should match snapshot`

```
"<div class=\"four ui statistics\"><div class=\"statistic\" in-group=\"\"><div class=\"value\">
      22
    </div> <div class=\"label\">
      Saves
    </div></div> <div class=\"statistic\" in-group=\"\"><div class=\"text value\">
      Three<br>
      Thousand
    </div> <div class=\"label\">
      Signups
    </div></div> <div class=\"statistic\" in-group=\"\"><div class=\"value\"><i class=\"plane icon\"></i> 5
    </div> <div class=\"label\">
      Flights
    </div></div> <div class=\"statistic\" in-group=\"\"><div class=\"value\"><img src=\"static/images/avatar/small/joe.jpg\" class=\"ui circular inline image\">
      42
    </div> <div class=\"label\">
      Team Members
    </div></div></div>"
```

##     `Floated`

####       `should match snapshot`

```
"<div class=\"ui segment\"><div class=\"ui statistic right floated\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <p>
    Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
    est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
    ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
    ex natum rebum iisque.
  </p> <p>
    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
    nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
    fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
  </p> <div class=\"ui statistic left floated\"><div class=\"value\">
      2,204
    </div> <div class=\"label label\">
      Views
    </div></div> <p>
    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
    adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
    utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
    convenire mnesarchum eu per, quas minimum postulant per id.
  </p> <p>
    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
    nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
    fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
  </p></div>"
```

##     `Size`

####       `should match snapshot`

```
"<div><div class=\"ui statistic mini horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <div class=\"ui statistic tiny horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <div class=\"ui statistic small horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <div class=\"ui statistic horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <div class=\"ui statistic large horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <div class=\"ui statistic huge horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <div class=\"ui divider\"></div> <div class=\"ui statistic mini horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <div class=\"ui divider\"></div> <div class=\"ui statistic tiny horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <div class=\"ui divider\"></div> <div class=\"ui statistic small horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <div class=\"ui divider\"></div> <div class=\"ui statistic horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <div class=\"ui divider\"></div> <div class=\"ui statistic large horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div> <div class=\"ui divider\"></div> <div class=\"ui statistic huge horizontal\"><div class=\"value\">
      2,204
    </div> <div class=\"label\">
      Views
    </div></div></div>"
```

