# `Examples`

## `BreadcrumbExample`

##   `Types`

##     `Breadcrumb`

####       `should match snapshot`

```
"<div><div><sui-breadcrumb><sui-breadcrumb-section link=\"\">Home</sui-breadcrumb-section> <sui-breadcrumb-divider></sui-breadcrumb-divider> <sui-breadcrumb-section link=\"\">Store</sui-breadcrumb-section> <sui-breadcrumb-divider></sui-breadcrumb-divider> <sui-breadcrumb-section active=\"\">T-Shirt</sui-breadcrumb-section></sui-breadcrumb></div> <sui-breadcrumb sections=\"[object Object],[object Object],[object Object]\"></sui-breadcrumb></div>"
```

##   `Content`

##     `Divider`

####       `should match snapshot`

```
"<div><sui-breadcrumb><sui-breadcrumb-section link=\"\">Home</sui-breadcrumb-section> <sui-breadcrumb-divider>/</sui-breadcrumb-divider> <sui-breadcrumb-section link=\"\">Registration</sui-breadcrumb-section> <sui-breadcrumb-divider>/</sui-breadcrumb-divider> <sui-breadcrumb-section active=\"\">Personal Information</sui-breadcrumb-section></sui-breadcrumb></div>"
```

##     `Section`

####       `should match snapshot`

```
"<div><sui-breadcrumb><sui-breadcrumb-section link=\"\">Home</sui-breadcrumb-section> <sui-breadcrumb-divider>/</sui-breadcrumb-divider> <sui-breadcrumb-section active=\"\">Search</sui-breadcrumb-section></sui-breadcrumb></div>"
```

##     `Link`

####       `should match snapshot`

```
"<div><sui-breadcrumb><sui-breadcrumb-section link=\"\">Home</sui-breadcrumb-section> <sui-breadcrumb-divider></sui-breadcrumb-divider> <sui-breadcrumb-section link=\"\">Store</sui-breadcrumb-section> <sui-breadcrumb-divider icon=\"right chevron\"></sui-breadcrumb-divider> <sui-breadcrumb-section active=\"\">
      Search for:
      <a href=\"javascript:void 0\">paper towels</a></sui-breadcrumb-section></sui-breadcrumb></div>"
```

## `FormExample`

##   `Types`

##     `Form`

####       `should match snapshot`

```
"<sui-form><sui-form-field><label>First Name</label> <input placeholder=\"First Name\"></sui-form-field> <sui-form-field><label>Last Name</label> <input placeholder=\"Last Name\"></sui-form-field> <sui-form-field><sui-checkbox label=\"I agree to the Terms and Conditions\"></sui-checkbox></sui-form-field> <sui-button type=\"submit\">Submit</sui-button></sui-form>"
```

## `GridExample`

##   `Types`

##     `Grid`

####       `should match snapshot`

```
"<sui-grid><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column><sui-grid-column></sui-grid-column></sui-grid>"
```

##     `Divided`

####       `should match snapshot`

```
"<sui-grid columns=\"3\" divided=\"\"><sui-grid-row><sui-grid-column><docs-wireframe name=\"media-paragraph\"></docs-wireframe></sui-grid-column><sui-grid-column><docs-wireframe name=\"media-paragraph\"></docs-wireframe></sui-grid-column><sui-grid-column><docs-wireframe name=\"media-paragraph\"></docs-wireframe></sui-grid-column></sui-grid-row><sui-grid-row><sui-grid-column><docs-wireframe name=\"media-paragraph\"></docs-wireframe></sui-grid-column><sui-grid-column><docs-wireframe name=\"media-paragraph\"></docs-wireframe></sui-grid-column><sui-grid-column><docs-wireframe name=\"media-paragraph\"></docs-wireframe></sui-grid-column></sui-grid-row></sui-grid>"
```

##     `Vertically Divided`

####       `should match snapshot`

```
"<sui-grid divided=\"vertically\"><sui-grid-row columns=\"2\"><sui-grid-column><docs-wireframe name=\"paragraph\"></docs-wireframe></sui-grid-column> <sui-grid-column><docs-wireframe name=\"paragraph\"></docs-wireframe></sui-grid-column></sui-grid-row> <sui-grid-row columns=\"3\"><sui-grid-column><docs-wireframe name=\"paragraph\"></docs-wireframe></sui-grid-column> <sui-grid-column><docs-wireframe name=\"paragraph\"></docs-wireframe></sui-grid-column> <sui-grid-column><docs-wireframe name=\"paragraph\"></docs-wireframe></sui-grid-column></sui-grid-row></sui-grid>"
```

##     `Celled`

####       `should match snapshot`

```
"<sui-grid celled=\"\"><sui-grid-row><sui-grid-column width=\"3\"><docs-wireframe name=\"image\"></docs-wireframe></sui-grid-column> <sui-grid-column width=\"13\"><docs-wireframe name=\"centered-paragraph\"></docs-wireframe></sui-grid-column></sui-grid-row> <sui-grid-row><sui-grid-column width=\"3\"><docs-wireframe name=\"image\"></docs-wireframe></sui-grid-column> <sui-grid-column width=\"10\"><docs-wireframe name=\"paragraph\"></docs-wireframe></sui-grid-column> <sui-grid-column width=\"3\"><docs-wireframe name=\"image\"></docs-wireframe></sui-grid-column></sui-grid-row></sui-grid>"
```

## `MenuExample`

##   `Types`

##     `Menu`

####       `should match snapshot`

```
"<sui-menu widths=\"3\"><sui-menu-item>Editorials</sui-menu-item> <sui-menu-item>Reviews</sui-menu-item> <sui-menu-item active=\"\">Upcoming Events</sui-menu-item></sui-menu>"
```

##     `Secondary Menu`

####       `should match snapshot`

```
"<sui-menu secondary=\"\"><sui-menu-item active=\"\" link=\"\" name=\"Home\">Home</sui-menu-item> <sui-menu-item name=\"Messages\">Messages</sui-menu-item> <sui-menu-item name=\"Friends\">Friends</sui-menu-item></sui-menu>"
```

## `MessageExample`

##   `Types`

##     `Message`

####       `should match snapshot`

```
"<div><sui-message><sui-message-header>Changes in Service</sui-message-header> <p>
      We updated our privacy policy here to better service our customers.
      We recommend reviewing the changes.
    </p></sui-message> <sui-message header=\"Changes in Service\" content=\"
      We updated our privacy policy here to better service our customers.
      We recommend reviewing the changes.
    \"></sui-message></div>"
```

##     `List Message`

####       `should match snapshot`

```
"<div><sui-message><sui-message-header>New Site Features</sui-message-header> <sui-message-list><sui-message-item>
        You can now have cover images on blog pages
      </sui-message-item> <sui-message-item>
        Drafts will now auto-save while writing
      </sui-message-item></sui-message-list></sui-message> <sui-message header=\"New Site Features\" list=\"You can now have cover images on blog pages,Drafts will now auto-save while writing\"></sui-message></div>"
```

##     `Icon Message`

####       `should match snapshot`

```
"<div><sui-message icon=\"inbox\" header=\"Have you heard about our mailing list?\" content=\"Get the best news in your e-mail every day.\"></sui-message> <sui-message icon=\"\"><sui-icon name=\"circle notched\" loading=\"\"></sui-icon> <sui-message-content><sui-message-header>Just one second</sui-message-header>
      We are fetching that content for you.
    </sui-message-content></sui-message></div>"
```

##     `Dismissable Block`

####       `should match snapshot`

```
"<div><sui-message header=\"Welcome back!\" content=\"This is a special notification which you can dismiss.\" dismissable=\"\" name=\"fade\"></sui-message> <!----></div>"
```

## `TableExample`

##   `Types`

##     `Table`

####       `should match snapshot`

```
"<sui-table celled=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Header</sui-table-header-cell> <sui-table-header-cell>Header</sui-table-header-cell> <sui-table-header-cell>Header</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell><sui-label ribbon=\"\">First</sui-label></sui-table-cell> <sui-table-cell>Cell</sui-table-cell> <sui-table-cell>Cell</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Cell</sui-table-cell> <sui-table-cell>Cell</sui-table-cell> <sui-table-cell>Cell</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Cell</sui-table-cell> <sui-table-cell>Cell</sui-table-cell> <sui-table-cell>Cell</sui-table-cell></sui-table-row></sui-table-body> <sui-table-footer><sui-table-row><sui-table-header-cell colspan=\"3\"><sui-menu pagination=\"\"><sui-menu-item icon=\"\"><sui-icon name=\"left chevron\"></sui-icon></sui-menu-item> <sui-menu-item>1</sui-menu-item> <sui-menu-item>2</sui-menu-item> <sui-menu-item>3</sui-menu-item> <sui-menu-item>4</sui-menu-item> <sui-menu-item icon=\"\"><sui-icon name=\"right chevron\"></sui-icon></sui-menu-item></sui-menu></sui-table-header-cell></sui-table-row></sui-table-footer></sui-table>"
```

##     `Definition`

####       `should match snapshot`

```
"<sui-table definition=\"\"><sui-table-header><sui-table-row><sui-table-header-cell></sui-table-header-cell> <sui-table-header-cell>Arguments</sui-table-header-cell> <sui-table-header-cell>Description</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>reset rating</sui-table-cell> <sui-table-cell>None</sui-table-cell> <sui-table-cell>Resets rating to default value</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>set rating</sui-table-cell> <sui-table-cell>rating (integer)</sui-table-cell> <sui-table-cell>Sets the current star rating to specified value</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##   `States`

##     `Positive / Negative`

####       `should match snapshot`

```
"<sui-table celled=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>No Name Specified</sui-table-cell> <sui-table-cell>Unknown</sui-table-cell> <sui-table-cell negative=\"\">None</sui-table-cell></sui-table-row> <sui-table-row positive=\"\"><sui-table-cell>Jimmy</sui-table-cell> <sui-table-cell><sui-icon name=\"check\"></sui-icon>
        Approved
      </sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Unknown</sui-table-cell> <sui-table-cell positive=\"\"><sui-icon name=\"close\"></sui-icon>
        Requires call
      </sui-table-cell></sui-table-row> <sui-table-row negative=\"\"><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Unknown</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Cells`

####       `should match snapshot`

```
"<div></div>"
```

##     `Error`

####       `should match snapshot`

```
"<sui-table celled=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>No Name Specified</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row state=\"error\"><sui-table-cell>Jimmy</sui-table-cell> <sui-table-cell>Cannot pull data</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell state=\"error\"><sui-icon name=\"attention\"></sui-icon>
        Classified
      </sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Warning`

####       `should match snapshot`

```
"<sui-table celled=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>No Name Specified</sui-table-cell> <sui-table-cell>Unknown</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row state=\"warning\"><sui-table-cell>Jimmy</sui-table-cell> <sui-table-cell><sui-icon name=\"attention\"></sui-icon>
        Requires Action
      </sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Unknown</sui-table-cell> <sui-table-cell state=\"warning\"><sui-icon name=\"attention\"></sui-icon>
        Hostile
      </sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Unknown</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Active`

####       `should match snapshot`

```
"<sui-table celled=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row state=\"active\"><sui-table-cell>John</sui-table-cell> <sui-table-cell>Selected</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell state=\"active\">Jill</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Disabled`

####       `should match snapshot`

```
"<sui-table celled=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row state=\"disabled\"><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Selected</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell state=\"disabled\">Jill</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##   `Variations`

##     `Single Line`

####       `should match snapshot`

```
"<sui-table single-line=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Registration Date</sui-table-header-cell> <sui-table-header-cell>E-mail address</sui-table-header-cell> <sui-table-header-cell>Premium Plan</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John Lilki</sui-table-cell> <sui-table-cell>September 14, 2013</sui-table-cell> <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell> <sui-table-cell>No</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie Harington</sui-table-cell> <sui-table-cell>January 11, 2014</sui-table-cell> <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell> <sui-table-cell>Yes</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill Lewis</sui-table-cell> <sui-table-cell>May 11, 2014</sui-table-cell> <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell> <sui-table-cell>Yes</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Fixed`

####       `should match snapshot`

```
"<sui-table fixed=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Description</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>
        John is an interesting boy but sometimes you don't really
        have enough room to describe everything you'd like
      </sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>
        Jamie is a kind girl but sometimes you don't really
        have enough room to describe everything you'd like
      </sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Denied</sui-table-cell> <sui-table-cell>
        Jill is an alright girl but sometimes you don't really
        have enough room to describe everything you'd like
      </sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Stacking`

####       `should match snapshot`

```
"<div><sui-table unstackable=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell text-align=\"right\">Description</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell text-align=\"right\">None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell text-align=\"right\">Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Denied</sui-table-cell> <sui-table-cell text-align=\"right\">None</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table stackable=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell text-align=\"right\">Description</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell text-align=\"right\">None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell text-align=\"right\">Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Denied</sui-table-cell> <sui-table-cell text-align=\"right\">None</sui-table-cell></sui-table-row></sui-table-body></sui-table></div>"
```

##     `Selectable Row`

####       `should match snapshot`

```
"<sui-table selectable=\"\" celled=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>No Action</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Denied</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row state=\"warning\"><sui-table-cell>John</sui-table-cell> <sui-table-cell>No Action</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell positive=\"\">Approved</sui-table-cell> <sui-table-cell state=\"warning\">Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell negative=\"\">Denied</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Selectable Cell`

####       `should match snapshot`

```
"<sui-table celled=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Edit</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>No Action</sui-table-cell> <sui-table-cell selectable=\"\"><a href=\"#\">Edit</a></sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell selectable=\"\"><a href=\"#\">Edit</a></sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Denied</sui-table-cell> <sui-table-cell selectable=\"\"><a href=\"#\">Edit</a></sui-table-cell></sui-table-row> <sui-table-row state=\"warning\"><sui-table-cell>John</sui-table-cell> <sui-table-cell>No Action</sui-table-cell> <sui-table-cell selectable=\"\"><a href=\"#\">Requires change</a></sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell positive=\"\">Approved</sui-table-cell> <sui-table-cell positive=\"\" selectable=\"\"><a href=\"#\">Approve</a></sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell negative=\"\">Denied</sui-table-cell> <sui-table-cell selectable=\"\" negative=\"\"><a href=\"#\">Remove</a></sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Vertical Alignment`

####       `should match snapshot`

```
"<sui-table striped=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row vertical-align=\"top\"><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell vertical-align=\"top\">
        Notes<br>
        1<br>
        2<br></sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell vertical-align=\"bottom\">Approved</sui-table-cell> <sui-table-cell>
        Notes<br>
        1<br>
        2<br></sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Text Alignment`

####       `should match snapshot`

```
"<sui-table striped=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell text-align=\"right\">Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row text-align=\"center\"><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell text-align=\"right\">None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell text-align=\"right\">Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Denied</sui-table-cell> <sui-table-cell text-align=\"right\">None</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Striped`

####       `should match snapshot`

```
"<sui-table striped=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Date Joined</sui-table-header-cell> <sui-table-header-cell>E-mail</sui-table-header-cell> <sui-table-header-cell>Called</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John Lilki</sui-table-cell> <sui-table-cell>September 14, 2013</sui-table-cell> <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell> <sui-table-cell>No</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie Harington</sui-table-cell> <sui-table-cell>January 11, 2014</sui-table-cell> <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell> <sui-table-cell>Yes</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill Lewis</sui-table-cell> <sui-table-cell>May 11, 2014</sui-table-cell> <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell> <sui-table-cell>Yes</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>John Lilki</sui-table-cell> <sui-table-cell>September 14, 2013</sui-table-cell> <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell> <sui-table-cell>No</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>John Lilki</sui-table-cell> <sui-table-cell>September 14, 2013</sui-table-cell> <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell> <sui-table-cell>No</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie Harington</sui-table-cell> <sui-table-cell>January 11, 2014</sui-table-cell> <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell> <sui-table-cell>Yes</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill Lewis</sui-table-cell> <sui-table-cell>May 11, 2014</sui-table-cell> <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell> <sui-table-cell>Yes</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>John Lilki</sui-table-cell> <sui-table-cell>September 14, 2013</sui-table-cell> <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell> <sui-table-cell>No</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Celled`

####       `should match snapshot`

```
"<sui-table celled=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Denied</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row></sui-table-body> <sui-table-footer><sui-table-header-cell>3 People</sui-table-header-cell> <sui-table-header-cell>2 Approved</sui-table-header-cell> <sui-table-header-cell></sui-table-header-cell></sui-table-footer></sui-table>"
```

##     `Basic`

####       `should match snapshot`

```
"<sui-table basic=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Denied</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Collapsing Cell`

####       `should match snapshot`

```
"<sui-table><sui-table-body><sui-table-row><sui-table-cell collapsing=\"\"><sui-icon name=\"folder\"></sui-icon>
        node_modules
      </sui-table-cell> <sui-table-cell>Initial commit</sui-table-cell> <sui-table-cell>10 hours ago</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell><sui-icon name=\"folder\"></sui-icon>
        test
      </sui-table-cell> <sui-table-cell>Initial commit</sui-table-cell> <sui-table-cell>10 hours ago</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell><sui-icon name=\"folder\"></sui-icon>
        test
      </sui-table-cell> <sui-table-cell>Initial commit</sui-table-cell> <sui-table-cell>10 hours ago</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Column Width`

####       `should match snapshot`

```
"<sui-table><sui-table-header><sui-table-row><sui-table-header-cell width=\"10\">Name</sui-table-header-cell> <sui-table-header-cell width=\"6\">Status</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Denied</sui-table-cell></sui-table-row></sui-table-body> <sui-table-footer><sui-table-header-cell>3 People</sui-table-header-cell> <sui-table-header-cell>2 Approved</sui-table-header-cell></sui-table-footer></sui-table>"
```

##     `Column Count`

####       `should match snapshot`

```
"<sui-table columns=\"5\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Age</sui-table-header-cell> <sui-table-header-cell>Gender</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>22</sui-table-cell> <sui-table-cell>Male</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>32</sui-table-cell> <sui-table-cell>Male</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Denied</sui-table-cell> <sui-table-cell>22</sui-table-cell> <sui-table-cell>Female</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row></sui-table-body> <sui-table-footer><sui-table-header-cell>3 People</sui-table-header-cell> <sui-table-header-cell>2 Approved</sui-table-header-cell> <sui-table-header-cell></sui-table-header-cell> <sui-table-header-cell></sui-table-header-cell> <sui-table-header-cell></sui-table-header-cell></sui-table-footer></sui-table>"
```

##     `Collapsing`

####       `should match snapshot`

```
"<sui-table collapsing=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Selected</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jill</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row></sui-table-body> <sui-table-footer><sui-table-header-cell>3 People</sui-table-header-cell> <sui-table-header-cell>2 Approved</sui-table-header-cell> <sui-table-header-cell></sui-table-header-cell></sui-table-footer></sui-table>"
```

##     `Colored`

####       `should match snapshot`

```
"<sui-container><sui-table color=\"red\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"orange\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"yellow\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"olive\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"green\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"teal\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"blue\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"violet\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"purple\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"pink\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"grey\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"black\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table></sui-container>"
```

##     `Inverted`

####       `should match snapshot`

```
"<sui-container><sui-table inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"red\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"orange\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"yellow\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"olive\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"green\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"teal\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"blue\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"violet\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"purple\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"pink\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"grey\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table> <sui-table color=\"black\" inverted=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Food</sui-table-header-cell> <sui-table-header-cell>Calories</sui-table-header-cell> <sui-table-header-cell>Protein</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>Apples</sui-table-cell> <sui-table-cell>200</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Orange</sui-table-cell> <sui-table-cell>310</sui-table-cell> <sui-table-cell>0g</sui-table-cell></sui-table-row></sui-table-body></sui-table></sui-container>"
```

##     `Full-Width Header / Footer`

####       `should match snapshot`

```
"<sui-table compact=\"\" celled=\"\" definition=\"\"><sui-table-header full-width=\"\"><sui-table-row><sui-table-header-cell></sui-table-header-cell> <sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Registration Date</sui-table-header-cell> <sui-table-header-cell>E-mail address</sui-table-header-cell> <sui-table-header-cell>Premium Plan</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell collapsing=\"\"><sui-checkbox toggle=\"\"></sui-checkbox></sui-table-cell> <sui-table-cell>John Lilki</sui-table-cell> <sui-table-cell>September 14, 2013</sui-table-cell> <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell> <sui-table-cell>No</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell class=\"collapsing\"><sui-checkbox toggle=\"\"></sui-checkbox></sui-table-cell> <sui-table-cell>Jamie Harington</sui-table-cell> <sui-table-cell>January 11, 2014</sui-table-cell> <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell> <sui-table-cell>Yes</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell collapsing=\"\"><sui-checkbox toggle=\"\"></sui-checkbox></sui-table-cell> <sui-table-cell>Jill Lewis</sui-table-cell> <sui-table-cell>May 11, 2014</sui-table-cell> <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell> <sui-table-cell>Yes</sui-table-cell></sui-table-row></sui-table-body> <sui-table-footer full-width=\"\"><sui-table-row><sui-table-header-cell></sui-table-header-cell> <sui-table-header-cell colspan=\"4\"><sui-button floated=\"right\" size=\"small\" primary=\"\" labeled=\"\"><sui-icon name=\"user\"></sui-icon> Add User
        </sui-button> <sui-button size=\"small\">
          Approve
        </sui-button> <sui-button size=\"small\" disabled=\"\">
          Approve All
        </sui-button></sui-table-header-cell></sui-table-row></sui-table-footer></sui-table>"
```

##     `Padded`

####       `should match snapshot`

```
"<sui-table padded=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>
        He is a very nice guy and I enjoyed talking to
        him on the telephone. I hope we get to talk again.
      </sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>
        Jamie was not interested in purchasing our product.
      </sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Compact`

####       `should match snapshot`

```
"<sui-table compact=\"\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row></sui-table-body></sui-table>"
```

##     `Size`

####       `should match snapshot`

```
"<sui-table size=\"small\"><sui-table-header><sui-table-row><sui-table-header-cell>Name</sui-table-header-cell> <sui-table-header-cell>Status</sui-table-header-cell> <sui-table-header-cell>Notes</sui-table-header-cell></sui-table-row></sui-table-header> <sui-table-body><sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>Jamie</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>Requires call</sui-table-cell></sui-table-row> <sui-table-row><sui-table-cell>John</sui-table-cell> <sui-table-cell>Approved</sui-table-cell> <sui-table-cell>None</sui-table-cell></sui-table-row></sui-table-body> <sui-table-footer><sui-table-header-cell>3 People</sui-table-header-cell> <sui-table-header-cell>2 Approved</sui-table-header-cell> <sui-table-header-cell></sui-table-header-cell></sui-table-footer></sui-table>"
```

## `ButtonExample`

##   `Types`

##     `Button`

####       `should match snapshot`

```
"<div><sui-button>Click Here</sui-button> <sui-button content=\"Content as a prop\"></sui-button> <sui-button>This is a div</sui-button></div>"
```

##     `Emphasis`

####       `should match snapshot`

```
"<div><sui-button primary=\"\">Primary</sui-button> <sui-button secondary=\"\">Secondary</sui-button></div>"
```

##     `Animated`

####       `should match snapshot`

```
"<div><sui-button animated=\"\"><sui-button-content visible=\"\">Next</sui-button-content> <sui-button-content hidden=\"\"><sui-icon name=\"right arrow\"></sui-icon></sui-button-content></sui-button> <sui-button animated=\"vertical\"><sui-button-content hidden=\"\">Shop</sui-button-content> <sui-button-content visible=\"\"><sui-icon name=\"shop\"></sui-icon></sui-button-content></sui-button> <sui-button animated=\"fade\"><sui-button-content visible=\"\">
      Sign-up for a Pro account
    </sui-button-content> <sui-button-content hidden=\"\">
      $12.99 a month
    </sui-button-content></sui-button></div>"
```

##     `Labeled`

####       `should match snapshot`

```
"<div><sui-button content=\"Like\" icon=\"heart\"><sui-label slot=\"label\" basic=\"\">2,048</sui-label></sui-button> <sui-button content=\"Like\" icon=\"heart\" label-position=\"left\"><sui-label slot=\"label\" basic=\"\" pointing=\"right\">
      2,048
    </sui-label></sui-button> <sui-button icon=\"fork\" label-position=\"left\"><sui-label slot=\"label\" basic=\"\">1,048</sui-label></sui-button></div>"
```

##     `Icon`

####       `should match snapshot`

```
"<div><sui-button icon=\"cloud\"></sui-button></div>"
```

##     `LabeledIcon`

####       `should match snapshot`

```
"<div><sui-button content=\"Pause\" icon=\"pause\" label-position=\"left\"></sui-button> <sui-button content=\"Next\" icon=\"right arrow\" label-position=\"right\"></sui-button></div>"
```

##     `Basic`

####       `should match snapshot`

```
"<sui-button basic=\"\" content=\"Add Friend\" icon=\"user\"></sui-button>"
```

##     `Inverted`

####       `should match snapshot`

```
"<sui-segment inverted=\"\"><sui-button color=\"red\" inverted=\"\">Red</sui-button> <sui-button color=\"orange\" inverted=\"\">Orange</sui-button> <sui-button color=\"yellow\" inverted=\"\">Yellow</sui-button> <sui-button color=\"olive\" inverted=\"\">Olive</sui-button> <sui-button color=\"green\" inverted=\"\">Green</sui-button> <sui-button color=\"teal\" inverted=\"\">Teal</sui-button> <sui-button color=\"blue\" inverted=\"\">Blue</sui-button> <sui-button color=\"violet\" inverted=\"\">Violet</sui-button> <sui-button color=\"purple\" inverted=\"\">Purple</sui-button> <sui-button color=\"pink\" inverted=\"\">Pink</sui-button> <sui-button color=\"brown\" inverted=\"\">Brown</sui-button> <sui-button color=\"grey\" inverted=\"\">Grey</sui-button> <sui-button color=\"black\" inverted=\"\">Black</sui-button></sui-segment>"
```

##   `Groups`

##     `Buttons`

####       `should match snapshot`

```
"<sui-button-group><sui-button>One</sui-button> <sui-button>Two</sui-button> <sui-button>Three</sui-button></sui-button-group>"
```

##     `IconButtons`

####       `should match snapshot`

```
"<div><sui-button-group><sui-button icon=\"align left\"></sui-button> <sui-button icon=\"align center\"></sui-button> <sui-button icon=\"align right\"></sui-button> <sui-button icon=\"align justify\"></sui-button></sui-button-group> <sui-button-group><sui-button icon=\"bold\"></sui-button> <sui-button icon=\"underline\"></sui-button> <sui-button icon=\"text width\"></sui-button></sui-button-group></div>"
```

##   `Content`

##     `Conditional`

####       `should match snapshot`

```
"<sui-button-group><sui-button>Cancel</sui-button> <sui-button-or></sui-button-or> <sui-button positive=\"\">Save</sui-button></sui-button-group>"
```

##   `States`

##     `Active`

####       `should match snapshot`

```
"<sui-button active=\"\" content=\"Follow\" icon=\"user\"></sui-button>"
```

##     `Disabled`

####       `should match snapshot`

```
"<sui-button disabled=\"\" content=\"Followed\" icon=\"user\"></sui-button>"
```

##     `Loading`

####       `should match snapshot`

```
"<div><sui-button loading=\"\" content=\"Loading\"></sui-button> <sui-button loading=\"\" basic=\"\" content=\"Loading\"></sui-button> <sui-button loading=\"\" primary=\"\" content=\"Loading\"></sui-button> <sui-button loading=\"\" secondary=\"\" content=\"Loading\"></sui-button></div>"
```

##   `Variations`

##     `Social`

####       `should match snapshot`

```
"<div><sui-button social=\"facebook\" content=\"Facebook\" icon=\"facebook\"></sui-button> <sui-button social=\"twitter\" content=\"Twitter\" icon=\"twitter\"></sui-button> <sui-button social=\"google\" content=\"Google\" icon=\"google\"></sui-button> <sui-button social=\"vk\" content=\"VK\" icon=\"vk\"></sui-button> <sui-button social=\"linkedin\" content=\"LinkedIn\" icon=\"linkedin\"></sui-button> <sui-button social=\"instagram\" content=\"Instagram\" icon=\"instagram\"></sui-button> <sui-button social=\"youtube\" content=\"Youtube\" icon=\"youtube\"></sui-button></div>"
```

##     `Size`

####       `should match snapshot`

```
"<div><sui-button size=\"mini\" content=\"Mini\"></sui-button> <sui-button size=\"tiny\" content=\"Tiny\"></sui-button> <sui-button size=\"small\" content=\"Small\"></sui-button> <sui-button size=\"medium\" content=\"Medium\"></sui-button> <sui-button size=\"large\" content=\"Large\"></sui-button> <sui-button size=\"big\" content=\"Big\"></sui-button> <sui-button size=\"huge\" content=\"Huge\"></sui-button> <sui-button size=\"massive\" content=\"Massive\"></sui-button></div>"
```

##     `Floated`

####       `should match snapshot`

```
"<div><sui-button floated=\"left\" content=\"Left floated\"></sui-button> <sui-button floated=\"right\" content=\"Right floated\"></sui-button></div>"
```

##     `Colored`

####       `should match snapshot`

```
"<div><sui-button color=\"red\" content=\"Red\"></sui-button> <sui-button color=\"orange\" content=\"Orange\"></sui-button> <sui-button color=\"yellow\" content=\"Yellow\"></sui-button> <sui-button color=\"olive\" content=\"Olive\"></sui-button> <sui-button color=\"green\" content=\"Green\"></sui-button> <sui-button color=\"teal\" content=\"Teal\"></sui-button> <sui-button color=\"blue\" content=\"Blue\"></sui-button> <sui-button color=\"violet\" content=\"Violet\"></sui-button> <sui-button color=\"purple\" content=\"Purple\"></sui-button> <sui-button color=\"pink\" content=\"Pink\"></sui-button> <sui-button color=\"brown\" content=\"Brown\"></sui-button> <sui-button color=\"grey\" content=\"Grey\"></sui-button> <sui-button color=\"black\" content=\"Black\"></sui-button></div>"
```

##     `Compact`

####       `should match snapshot`

```
"<div><sui-button compact=\"\" content=\"Hold\"></sui-button> <sui-button compact=\"\" icon=\"pause\"></sui-button> <sui-button compact=\"\" icon=\"pause\" label-position=\"left\" content=\"Pause\"></sui-button></div>"
```

##     `Positive`

####       `should match snapshot`

```
"<sui-button positive=\"\" content=\"Positive Button\"></sui-button>"
```

##     `Negative`

####       `should match snapshot`

```
"<sui-button negative=\"\" content=\"Negative Button\"></sui-button>"
```

##     `Fluid`

####       `should match snapshot`

```
"<sui-button fluid=\"\" content=\"Fits container\"></sui-button>"
```

##     `Circular`

####       `should match snapshot`

```
"<sui-button circular=\"\" icon=\"settings\"></sui-button>"
```

##     `CircularSocial`

####       `should match snapshot`

```
"<div><sui-button circular=\"\" social=\"facebook\" icon=\"facebook\"></sui-button> <sui-button circular=\"\" social=\"twitter\" icon=\"twitter\"></sui-button> <sui-button circular=\"\" social=\"linkedin\" icon=\"linkedin\"></sui-button> <sui-button circular=\"\" social=\"google plus\" icon=\"google plus\"></sui-button></div>"
```

##     `Vertically Attached`

####       `should match snapshot`

```
"<div><sui-button attached=\"top\" content=\"Top\"></sui-button> <sui-segment attached=\"\"><docs-wireframe name=\"paragraph\"></docs-wireframe></sui-segment> <sui-button attached=\"bottom\" content=\"Bottom\"></sui-button></div>"
```

##     `Horizontally Attached`

####       `should match snapshot`

```
"<div><sui-button attached=\"left\" content=\"Left\"></sui-button> <sui-button attached=\"right\" content=\"Right\"></sui-button></div>"
```

##   `Group Variations`

##     `Vertical Buttons`

####       `should match snapshot`

```
"<sui-button-group vertical=\"\"><sui-button>Feed</sui-button> <sui-button>Messages</sui-button> <sui-button>Events</sui-button> <sui-button>Photos</sui-button></sui-button-group>"
```

##     `Icon Buttons`

####       `should match snapshot`

```
"<sui-button-group icons=\"\"><sui-button icon=\"play\"></sui-button> <sui-button icon=\"pause\"></sui-button> <sui-button icon=\"stop\"></sui-button></sui-button-group>"
```

##     `Labeled Icon Buttons`

####       `should match snapshot`

```
"<sui-button-group vertical=\"\" labeled=\"\" icons=\"\"><sui-button icon=\"pause\" label-position=\"left\" content=\"Pause\"></sui-button> <sui-button icon=\"play\" label-position=\"left\" content=\"Play\"></sui-button> <sui-button icon=\"shuffle\" label-position=\"left\" content=\"Shuffle\"></sui-button></sui-button-group>"
```

##     `Mixed Group`

####       `should match snapshot`

```
"<sui-button-group><sui-button icon=\"left chevron\" label-position=\"left\" content=\"Back\"></sui-button> <sui-button icon=\"stop\" content=\"Stop\"></sui-button> <sui-button icon=\"right chevron\" label-position=\"right\" content=\"Foward\"></sui-button></sui-button-group>"
```

##     `Equal Width`

####       `should match snapshot`

```
"<div><sui-button-group widths=\"5\"><sui-button content=\"Overview\"></sui-button> <sui-button content=\"Specs\"></sui-button> <sui-button content=\"Warranty\"></sui-button> <sui-button content=\"Reviews\"></sui-button> <sui-button content=\"Support\"></sui-button></sui-button-group> <sui-button-group widths=\"3\"><sui-button content=\"Overview\"></sui-button> <sui-button content=\"Specs\"></sui-button> <sui-button content=\"Support\"></sui-button></sui-button-group></div>"
```

##     `Colored Buttons`

####       `should match snapshot`

```
"<sui-button-group color=\"blue\"><sui-button content=\"One\"></sui-button> <sui-button content=\"Two\"></sui-button> <sui-button content=\"Three\"></sui-button></sui-button-group>"
```

##     `Basic Buttons`

####       `should match snapshot`

```
"<div><sui-button-group basic=\"\"><sui-button content=\"One\"></sui-button> <sui-button content=\"Two\"></sui-button> <sui-button content=\"Three\"></sui-button></sui-button-group> <sui-divider></sui-divider> <sui-button-group vertical=\"\" basic=\"\"><sui-button content=\"One\"></sui-button> <sui-button content=\"Two\"></sui-button> <sui-button content=\"Three\"></sui-button></sui-button-group></div>"
```

##     `Group Sizes`

####       `should match snapshot`

```
"<div><sui-button-group size=\"large\"><sui-button content=\"One\"></sui-button> <sui-button content=\"Two\"></sui-button> <sui-button content=\"Three\"></sui-button></sui-button-group> <sui-divider></sui-divider> <sui-button-group icons=\"\" size=\"small\"><sui-button icon=\"file\"></sui-button> <sui-button icon=\"save\"></sui-button> <sui-button icon=\"upload\"></sui-button> <sui-button icon=\"download\"></sui-button></sui-button-group> <sui-divider></sui-divider> <sui-button-group size=\"large\"><sui-button content=\"One\"></sui-button> <sui-button-or></sui-button-or> <sui-button content=\"Two\"></sui-button></sui-button-group></div>"
```

## `ContainerExample`

##   `Types`

##     `Container`

####       `should match snapshot`

```
"<sui-container>
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
</sui-container>"
```

##     `Text Container`

####       `should match snapshot`

```
"<sui-container text=\"\"><sui-header>Header</sui-header> <p>
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
  </p></sui-container>"
```

##   `Variations`

##     `Text Alignment`

####       `should match snapshot`

```
"<div><sui-container text-align=\"left\">
    Left Aligned
  </sui-container> <sui-container text-align=\"center\">
    Center Aligned
  </sui-container> <sui-container text-align=\"right\">
    Right Aligned
  </sui-container> <b>Justified</b> <sui-divider></sui-divider> <sui-container text-align=\"justified\"><p>
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
    </p></sui-container></div>"
```

##     `Fluid`

####       `should match snapshot`

```
"<sui-container fluid=\"\"><sui-header>Dogs Roles with Humans</sui-header> <p>
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
  </p></sui-container>"
```

## `DividerExample`

##   `Types`

##     `Divider`

####       `should match snapshot`

```
"<div><docs-wireframe name=\"short-paragraph\"></docs-wireframe> <sui-divider></sui-divider> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></div>"
```

##     `Vertical Divider`

####       `should match snapshot`

```
"<sui-grid columns=\"3\" relaxed=\"very\"><sui-grid-column><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe></sui-grid-column> <sui-divider vertical=\"\">and</sui-divider> <sui-grid-column><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe></sui-grid-column> <sui-divider vertical=\"\">or</sui-divider> <sui-grid-column><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe><docs-wireframe name=\"short-paragraph\"></docs-wireframe></sui-grid-column></sui-grid>"
```

##     `Horizontal Divider`

####       `should match snapshot`

```
"<div class=\"ui center aligned basic segment\"><div class=\"ui left icon action input\"><i class=\"search icon\"></i> <input type=\"text\" placeholder=\"Order #\"> <div class=\"ui blue submit button\">Search</div></div> <sui-divider horizontal=\"\">Or</sui-divider> <div class=\"ui teal labeled icon button\">
    Create New Order
    <i class=\"add icon\"></i></div></div>"
```

##   `Variations`

##     `Inverted`

####       `should match snapshot`

```
"<div class=\"ui inverted segment\"><p></p> <sui-divider inverted=\"\"></sui-divider> <p></p> <sui-divider horizontal=\"\" inverted=\"\">
    Horizontal
  </sui-divider></div>"
```

##     `Fitted`

####       `should match snapshot`

```
"<div class=\"ui segment\">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
  eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
  posuere a, pede.
  <sui-divider fitted=\"\"></sui-divider>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
  eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
  posuere a, pede.
</div>"
```

##     `Hidden`

####       `should match snapshot`

```
"<div><sui-header>Section One</sui-header> <sui-divider hidden=\"\"></sui-divider> <sui-header>Section Two</sui-header></div>"
```

##     `Section`

####       `should match snapshot`

```
"<div><sui-header>Section One</sui-header> <sui-divider section=\"\"></sui-divider> <sui-header>Section Two</sui-header></div>"
```

##     `Clearing`

####       `should match snapshot`

```
"<div class=\"ui segment\"><sui-header floated=\"right\">Floated Content</sui-header> <sui-divider clearing=\"\"></sui-divider> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></div>"
```

## `FlagExample`

##   `Definition`

##     `Flag`

####       `should match snapshot`

```
"<div><sui-flag name=\"ae\"></sui-flag> <sui-flag name=\"france\"></sui-flag> <sui-flag name=\"myanmar\"></sui-flag></div>"
```

## `HeaderExample`

##   `Types`

##     `Page Headers`

####       `should match snapshot`

```
"<div><sui-message info=\"\">
    Page headings are sized using
    <a href=\"https://j.eremy.net/confused-about-rem-and-em/\"><code>rem</code></a>
    and are not affected by surrounding content size.
  </sui-message> <sui-header>First header</sui-header> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <sui-header>Second header</sui-header> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <sui-header>Third header</sui-header> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <sui-header>Fourth header</sui-header> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <sui-header>Fifth header</sui-header> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></div>"
```

##     `Content Headers`

####       `should match snapshot`

```
"<sui-segment vertical=\"\"><sui-message info=\"\">
    Content headings are sized using
    <a href=\"https://j.eremy.net/confused-about-rem-and-em/\"><code>em</code></a>
    and are based on the font-size of their container.
  </sui-message> <sui-button-group><sui-button icon=\"plus\"></sui-button> <sui-button icon=\"minus\"></sui-button></sui-button-group> <div style=\"font-size: 14px;\"><sui-header size=\"huge\">Huge header</sui-header> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <sui-header size=\"large\">Large header</sui-header> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <sui-header size=\"medium\">Medium header</sui-header> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <sui-header size=\"small\">Small header</sui-header> <docs-wireframe name=\"short-paragraph\"></docs-wireframe> <sui-header size=\"tiny\">Tiny header</sui-header> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></div></sui-segment>"
```

##     `Icon Headers`

####       `should match snapshot`

```
"<sui-header icon=\"\"><sui-icon name=\"settings\"></sui-icon>
  Account Settings
  <sui-header-subheader>
    Manage your account settings and set e-mail preferences.
  </sui-header-subheader></sui-header>"
```

## `IconExample`

##   `States`

##     `Disabled`

####       `should match snapshot`

```
"<sui-icon name=\"users\" disabled=\"\"></sui-icon>"
```

##     `Loading`

####       `should match snapshot`

```
"<div><sui-icon name=\"spinner\" loading=\"\"></sui-icon> <sui-icon name=\"notched circle\" loading=\"\"></sui-icon> <sui-icon name=\"asterisk\" loading=\"\"></sui-icon></div>"
```

##   `Variations`

##     `Fitted`

####       `should match snapshot`

```
"<div>
  Tight spacing
  <sui-icon name=\"help\" fitted=\"\"></sui-icon>
  Tight spacing
</div>"
```

##     `Size`

####       `should match snapshot`

```
"<div><sui-icon size=\"mini\" name=\"home\"></sui-icon> <sui-icon size=\"tiny\" name=\"home\"></sui-icon> <sui-icon size=\"small\" name=\"home\"></sui-icon> <sui-icon size=\"small\" name=\"home\"></sui-icon> <sui-icon name=\"home\"></sui-icon> <sui-icon size=\"large\" name=\"home\"></sui-icon> <sui-icon size=\"big\" name=\"home\"></sui-icon> <sui-icon size=\"huge\" name=\"home\"></sui-icon> <sui-icon size=\"massive\" name=\"home\"></sui-icon></div>"
```

## `ImageExample`

##   `Types`

##     `Image`

####       `should match snapshot`

```
"<sui-image src=\"static/images/wireframes/image.png\" size=\"small\"></sui-image>"
```

##     `Image Link`

####       `should match snapshot`

```
"<sui-image href=\"https://procatinator.com/\" target=\"_blank\" src=\"static/images/wireframes/image-text.png\" size=\"small\"></sui-image>"
```

##   `States`

##     `Hidden`

####       `should match snapshot`

```
"<sui-image src=\"static/images/wireframes/image.png\" hidden=\"\"></sui-image>"
```

##     `Disabled`

####       `should match snapshot`

```
"<sui-image src=\"static/images/wireframes/image.png\" disabled=\"\"></sui-image>"
```

## `InputExample`

##   `Types`

##     `Input`

####       `should match snapshot`

```
"<sui-input placeholder=\"Search...\"></sui-input>"
```

##   `States`

##     `Focus`

####       `should match snapshot`

```
"<sui-input placeholder=\"Search...\" focus=\"\"></sui-input>"
```

##     `Loading`

####       `should match snapshot`

```
"<sui-input placeholder=\"Search...\" icon=\"user\" loading=\"\"></sui-input>"
```

##     `Disabled`

####       `should match snapshot`

```
"<sui-input placeholder=\"Search...\" icon=\"user\" disabled=\"\"></sui-input>"
```

##   `Variations`

##     `Icon`

####       `should match snapshot`

```
"<sui-input placeholder=\"Search...\" icon=\"search\"></sui-input>"
```

## `LabelExample`

##   `Types`

##     `Label`

####       `should match snapshot`

```
"<sui-label><sui-icon name=\"mail\"></sui-icon> 23
</sui-label>"
```

##     `Image`

####       `should match snapshot`

```
"<div><sui-label image=\"\"><img src=\"static/images/avatar/small/joe.jpg\">
    Joe
  </sui-label> <sui-label image=\"\"><img src=\"static/images/avatar/small/elliot.jpg\">
    Elliot
  </sui-label> <sui-label image=\"\"><img src=\"static/images/avatar/small/stevie.jpg\">
    Stevie
  </sui-label></div>"
```

## `ListExample`

##   `Types`

##     `List`

####       `should match snapshot`

```
"<sui-list><sui-list-item>Apples</sui-list-item> <sui-list-item>Pears</sui-list-item> <sui-list-item>Oranges</sui-list-item></sui-list>"
```

## `LoaderExample`

##   `Types`

##     `Loader`

####       `should match snapshot`

```
"<div><sui-message info=\"\">
    Loaders are hidden unless has prop<code>active</code>
    or inside an <code>Dimmer active</code>.
  </sui-message> <sui-segment><sui-dimmer active=\"\"><sui-loader></sui-loader></sui-dimmer> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></sui-segment></div>"
```

##     `Text Loader`

####       `should match snapshot`

```
"<sui-segment><sui-dimmer active=\"\"><sui-loader>Loading...</sui-loader></sui-dimmer> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></sui-segment>"
```

##   `States`

##     `Indeterminate`

####       `should match snapshot`

```
"<sui-segment><sui-dimmer active=\"\"><sui-loader indeterminate=\"\">Preparing Files</sui-loader></sui-dimmer> <docs-wireframe name=\"short-paragraph\"></docs-wireframe></sui-segment>"
```

## `RailExample`

##   `Types`

##     `Rail`

####       `should match snapshot`

```
"<sui-grid centered=\"\" columns=\"3\"><sui-grid-column><sui-segment><docs-wireframe name=\"paragraph\"></docs-wireframe> <docs-wireframe name=\"paragraph\"></docs-wireframe> <sui-rail position=\"left\"><sui-segment>Left Rail Content</sui-segment></sui-rail> <sui-rail position=\"right\"><sui-segment>Right Rail Content</sui-segment></sui-rail></sui-segment></sui-grid-column></sui-grid>"
```

##     `Internal`

####       `should match snapshot`

```
"<sui-segment class=\"container\"><sui-rail internal=\"\" position=\"left\"><sui-segment>Left Rail Content</sui-segment></sui-rail> <sui-rail internal=\"\" position=\"right\"><sui-segment>Right Rail Content</sui-segment></sui-rail></sui-segment>"
```

##     `Dividing`

####       `should match snapshot`

```
"<sui-grid centered=\"\" columns=\"3\"><sui-grid-column><sui-segment><docs-wireframe name=\"paragraph\"></docs-wireframe> <docs-wireframe name=\"paragraph\"></docs-wireframe> <sui-rail dividing=\"\" position=\"left\"><sui-segment>Left Rail Content</sui-segment></sui-rail> <sui-rail dividing=\"\" position=\"right\"><sui-segment>Right Rail Content</sui-segment></sui-rail></sui-segment></sui-grid-column></sui-grid>"
```

##   `Variations`

##     `Attached`

####       `should match snapshot`

```
"<sui-grid centered=\"\" columns=\"3\"><sui-grid-column><sui-segment><docs-wireframe name=\"paragraph\"></docs-wireframe> <docs-wireframe name=\"paragraph\"></docs-wireframe> <sui-rail attached=\"\" position=\"left\"><sui-segment>Left Rail Content</sui-segment></sui-rail> <sui-rail attached=\"\" position=\"right\"><sui-segment>Right Rail Content</sui-segment></sui-rail></sui-segment></sui-grid-column></sui-grid>"
```

## `RevealExample`

##   `Types`

##     `Fade`

####       `should match snapshot`

```
"<sui-reveal animated=\"fade\"><sui-reveal-content visible=\"\"><sui-image src=\"static/images/wireframes/square-image.png\" size=\"small\"></sui-image></sui-reveal-content> <sui-reveal-content hidden=\"\"><sui-image src=\"static/images/avatar/large/ade.jpg\" size=\"small\"></sui-image></sui-reveal-content></sui-reveal>"
```

## `SegmentExample`

##   `Types`

##     `Segment`

####       `should match snapshot`

```
"<sui-segment><docs-wireframe name=\"paragraph\"></docs-wireframe></sui-segment>"
```

##     `Raised`

####       `should match snapshot`

```
"<sui-segment raised=\"\"><docs-wireframe name=\"paragraph\"></docs-wireframe></sui-segment>"
```

##     `Stacked`

####       `should match snapshot`

```
"<sui-segment stacked=\"\"><docs-wireframe name=\"paragraph\"></docs-wireframe></sui-segment>"
```

##     `Piled`

####       `should match snapshot`

```
"<sui-segment piled=\"\"><docs-wireframe name=\"paragraph\"></docs-wireframe></sui-segment>"
```

## `StepExample`

##   `Types`

##     `Step`

####       `should match snapshot`

```
"<sui-step-group><sui-step>Shipping</sui-step></sui-step-group>"
```

##   `Groups`

##     `Steps`

####       `should match snapshot`

```
"<div><sui-step-group><sui-step><sui-icon name=\"truck\"></sui-icon> <sui-step-content><sui-step-title>Shipping</sui-step-title> <sui-step-description>Choose your shipping options</sui-step-description></sui-step-content></sui-step> <sui-step active=\"\"><sui-icon name=\"payment\"></sui-icon> <sui-step-content title=\"Billing\" description=\"Enter billing information\"></sui-step-content></sui-step> <sui-step disabled=\"\"><sui-icon name=\"info\"></sui-icon> <sui-step-content disabled=\"\" title=\"Confirm Order\"></sui-step-content></sui-step></sui-step-group> <sui-step-group steps=\"[object Object],[object Object],[object Object]\"></sui-step-group></div>"
```

##     `Ordered`

####       `should match snapshot`

```
"<div><sui-step-group ordered=\"\"><sui-step completed=\"\"><sui-step-content><sui-step-title>Shipping</sui-step-title> <sui-step-description>Choose your shipping options</sui-step-description></sui-step-content></sui-step> <sui-step completed=\"\" title=\"Billing\" description=\"Enter billing information\"></sui-step> <sui-step active=\"\" title=\"Confirm Order\" description=\"Verify order details\"></sui-step></sui-step-group></div>"
```

##     `Vertical`

####       `should match snapshot`

```
"<div><sui-step-group vertical=\"\"><sui-step completed=\"\"><sui-icon name=\"truck\"></sui-icon> <sui-step-content><sui-step-title>Shipping</sui-step-title> <sui-step-description>Choose your shipping options</sui-step-description></sui-step-content></sui-step> <sui-step completed=\"\" icon=\"credit card\" title=\"Billing\" description=\"Enter billing information\"></sui-step> <sui-step active=\"\" icon=\"info\" title=\"Confirm Order\" description=\"Verify order details\"></sui-step></sui-step-group></div>"
```

## `AccordionExample`

##   `Types`

##     `Accordion`

####       `should match snapshot`

```
"<div><sui-accordion exclusive=\"\"><sui-accordion-title active=\"\"><sui-icon name=\"dropdown\"></sui-icon>
      What is a dog?
    </sui-accordion-title> <sui-accordion-content active=\"\"><p>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
        be found as a welcome guest in many households across the world.
      </p></sui-accordion-content> <sui-accordion-title><sui-icon name=\"dropdown\"></sui-icon>
      What kinds of dogs are there?
    </sui-accordion-title> <sui-accordion-content><p>
        There are many breeds of dogs. Each breed varies in size and temperament. Owners often
        select a breed of dog that they find to be compatible with their own lifestyle and
        desires from a companion.
      </p></sui-accordion-content> <sui-accordion-title><sui-icon name=\"dropdown\"></sui-icon>
      How do you acquire a dog?
    </sui-accordion-title> <sui-accordion-content><p>
        Three common ways for a prospective owner to acquire a dog is from pet shops, private
        owners, or shelters.
      </p> <p>
        A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
        owner allows you to assess the pedigree and upbringing of your dog before choosing to
        take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
        who may not find one so readily.
      </p></sui-accordion-content></sui-accordion></div>"
```

##     `Styled`

####       `should match snapshot`

```
"<div><sui-accordion exclusive=\"\" styled=\"\"><sui-accordion-title active=\"\"><sui-icon name=\"dropdown\"></sui-icon>
      What is a dog?
    </sui-accordion-title> <sui-accordion-content active=\"\"><p>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
        found as a welcome guest in many households across the world.
      </p></sui-accordion-content> <sui-accordion-title><sui-icon name=\"dropdown\"></sui-icon>
      What kinds of dogs are there?
    </sui-accordion-title> <sui-accordion-content><p>
        There are many breeds of dogs. Each breed varies in size and temperament. Owners often
        select a breed of dog that they find to be compatible with their own lifestyle and desires
        from a companion.
      </p></sui-accordion-content> <sui-accordion-title><sui-icon name=\"dropdown\"></sui-icon>
      How do you acquire a dog?
    </sui-accordion-title> <sui-accordion-content><p>
        Three common ways for a prospective owner to acquire a dog is from pet shops, private
        owners, or shelters.
      </p> <p>
        A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
        owner allows you to assess the pedigree and upbringing of your dog before choosing to take
        it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may
        not find one so readily.
      </p></sui-accordion-content></sui-accordion></div>"
```

##   `Variations`

##     `Inverted`

####       `should match snapshot`

```
"<sui-segment inverted=\"\"><sui-accordion exclusive=\"\" inverted=\"\"><sui-accordion-title active=\"\"><sui-icon name=\"dropdown\"></sui-icon>
      What is a dog?
    </sui-accordion-title> <sui-accordion-content active=\"\"><p>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
        found as a welcome guest in many households across the world.
      </p></sui-accordion-content> <sui-accordion-title><sui-icon name=\"dropdown\"></sui-icon>
      What kinds of dogs are there?
    </sui-accordion-title> <sui-accordion-content><p>
        There are many breeds of dogs. Each breed varies in size and temperament. Owners often
        select a breed of dog that they find to be compatible with their own lifestyle and desires
        from a companion.
      </p></sui-accordion-content> <sui-accordion-title><sui-icon name=\"dropdown\"></sui-icon>
      How do you acquire a dog?
    </sui-accordion-title> <sui-accordion-content><p>
        Three common ways for a prospective owner to acquire a dog is from pet shops, private
        owners, or shelters.
      </p> <p>
        A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
        owner allows you to assess the pedigree and upbringing of your dog before choosing to
        take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
        who may not find one so readily.
      </p></sui-accordion-content></sui-accordion></sui-segment>"
```

##   `Examples`

##     `Nested Accordions`

####       `should match snapshot`

```
"<div><sui-accordion exclusive=\"\" styled=\"\"><sui-accordion-title>Level 1</sui-accordion-title> <sui-accordion-content active=\"\">
      Welcome to level 1
      <sui-accordion exclusive=\"\" styled=\"\"><sui-accordion-title>Level 1A</sui-accordion-title> <sui-accordion-content active=\"\">
          Level 1A Contents
          <sui-accordion exclusive=\"\" styled=\"\"><sui-accordion-title>Level 1A-A</sui-accordion-title> <sui-accordion-content>Level 1A-A Contents</sui-accordion-content> <sui-accordion-title>Level 1A-B</sui-accordion-title> <sui-accordion-content>Level 1A-B Contents</sui-accordion-content></sui-accordion></sui-accordion-content> <sui-accordion-title>Level 1B</sui-accordion-title> <sui-accordion-content>Level 1B Contents</sui-accordion-content> <sui-accordion-title>Level 1C</sui-accordion-title> <sui-accordion-content>Level 1C Contents</sui-accordion-content></sui-accordion></sui-accordion-content> <sui-accordion-title>Level 2</sui-accordion-title> <sui-accordion-content>
      Welcome to level 2
      <sui-accordion exclusive=\"\" styled=\"\"><sui-accordion-title>Level 2A</sui-accordion-title> <sui-accordion-content active=\"\">
          Level 2A Contents
          <sui-accordion exclusive=\"\" styled=\"\"><sui-accordion-title>Level 2A-A</sui-accordion-title> <sui-accordion-content>Level 2A-A Contents</sui-accordion-content> <sui-accordion-title>Level 2A-B</sui-accordion-title> <sui-accordion-content>Level 2A-B Contents</sui-accordion-content></sui-accordion></sui-accordion-content> <sui-accordion-title>Level 2B</sui-accordion-title> <sui-accordion-content>Level 2B Contents</sui-accordion-content> <sui-accordion-title>Level 2C</sui-accordion-title> <sui-accordion-content>Level 2C Contents</sui-accordion-content></sui-accordion></sui-accordion-content></sui-accordion></div>"
```

##     `Form Fields`

####       `should match snapshot`

```
"<div><sui-segment><sui-form><sui-form-field><label>First Name</label> <input placeholder=\"First Name\"></sui-form-field> <sui-form-field><label>Last Name</label> <input placeholder=\"Last Name\"></sui-form-field> <sui-form-field><sui-accordion><sui-accordion-title><sui-icon name=\"dropdown\"></sui-icon>
            Optional Details
          </sui-accordion-title> <sui-accordion-content><label>Maiden Name</label> <input placeholder=\"Maiden Name\"></sui-accordion-content></sui-accordion></sui-form-field> <sui-button type=\"submit\">Submit</sui-button></sui-form></sui-segment></div>"
```

##     `Accordion Menus`

####       `should match snapshot`

```
"<div><sui-menu active-index=\"1\" vertical=\"\" exclusive=\"\" styled=\"\"><sui-menu-header active=\"\"><sui-icon name=\"dropdown\"></sui-icon>
      Size
    </sui-menu-header> <sui-accordion-content active=\"\"><sui-form><sui-form-field><sui-checkbox label=\"Small\"></sui-checkbox></sui-form-field> <sui-form-field><sui-checkbox label=\"Medium\"></sui-checkbox></sui-form-field> <sui-form-field><sui-checkbox label=\"Large\"></sui-checkbox></sui-form-field> <sui-form-field><sui-checkbox label=\"X-Large\"></sui-checkbox></sui-form-field></sui-form></sui-accordion-content> <sui-menu-header><sui-icon name=\"dropdown\"></sui-icon>
      Colors
    </sui-menu-header> <sui-accordion-content><sui-form><sui-form-field><sui-checkbox label=\"Red\"></sui-checkbox></sui-form-field> <sui-form-field><sui-checkbox label=\"Orange\"></sui-checkbox></sui-form-field> <sui-form-field><sui-checkbox label=\"Green\"></sui-checkbox></sui-form-field> <sui-form-field><sui-checkbox label=\"Blue\"></sui-checkbox></sui-form-field></sui-form></sui-accordion-content></sui-menu></div>"
```

## `CheckboxExample`

##   `Types`

##     `Checkbox Basic`

####       `should match snapshot`

```
"<div><sui-checkbox label=\"checkbox\"></sui-checkbox></div>"
```

##     `Radio`

####       `should match snapshot`

```
"<div><sui-checkbox label=\"Radio choice\" radio=\"\"></sui-checkbox></div>"
```

##     `Checkbox with two way binding`

####       `should match snapshot`

```
"<div><sui-checkbox label=\"checkbox\"></sui-checkbox> <div><strong>value: </strong> true</div></div>"
```

##     `Toggle style input`

####       `should match snapshot`

```
"<div><sui-checkbox label=\"toggle\" toggle=\"\"></sui-checkbox></div>"
```

## `DimmerExample`

##   `Types`

##     `Dimmer`

####       `should match snapshot`

```
"<div class=\"dimmer-wrapper\"><img src=\"/static/images/logo.png\"> <sui-dimmer active=\"\"></sui-dimmer></div>"
```

##     `Dimmer Inverted`

####       `should match snapshot`

```
"<div><img src=\"/static/images/logo.png\"> <sui-dimmer active=\"true\" inverted=\"\"></sui-dimmer></div>"
```

## `DropdownExample`

##   `Types`

##     `Dropdown`

####       `should match snapshot`

```
"<sui-dropdown text=\"File\"><sui-dropdown-menu><sui-dropdown-item>New</sui-dropdown-item> <sui-dropdown-item>Open... <span class=\"description\">ctrl + o</span></sui-dropdown-item> <sui-dropdown-item>Save as... <span class=\"description\">ctrl + s</span></sui-dropdown-item> <sui-dropdown-item>Rename <span class=\"description\">ctrl + r</span></sui-dropdown-item> <sui-dropdown-item>Make a copy</sui-dropdown-item> <sui-dropdown-item><sui-icon name=\"folder\"></sui-icon>Move to folder</sui-dropdown-item> <sui-dropdown-item><sui-icon name=\"trash\"></sui-icon>Move to trash</sui-dropdown-item> <sui-dropdown-divider></sui-dropdown-divider> <sui-dropdown-item>Download as...</sui-dropdown-item></sui-dropdown-menu></sui-dropdown>"
```

##     `Selection`

####       `should match snapshot`

```
"<sui-dropdown placeholder=\"Gender\" selection=\"\" options=\"[object Object],[object Object]\"></sui-dropdown>"
```

##     `Search Selection`

####       `should match snapshot`

```
"<sui-dropdown fluid=\"\" options=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" placeholder=\"Select Country\" search=\"\" selection=\"\"></sui-dropdown>"
```

##     `Multiple Selection`

####       `should match snapshot`

```
"<sui-dropdown fluid=\"\" multiple=\"\" options=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" placeholder=\"Skills\" selection=\"\"></sui-dropdown>"
```

##     `Multiple Search Selection`

####       `should match snapshot`

```
"<sui-dropdown multiple=\"\" fluid=\"\" options=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" placeholder=\"Skills\" search=\"\" selection=\"\"></sui-dropdown>"
```

##     `Search Dropdown`

####       `should match snapshot`

```
"<div id=\"app\"><sui-dropdown button=\"\" floating=\"\" icon=\"world\" labeled=\"\" options=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" search=\"\" text=\"Select Language\" class=\"icon\"></sui-dropdown></div>"
```

##     `Button`

####       `should match snapshot`

```
"<div id=\"app\"><sui-dropdown icon=\"file\" button=\"\" text=\"File\" class=\"labeled
    icon\"><sui-dropdown-menu><sui-dropdown-item>New</sui-dropdown-item> <sui-dropdown-item>Open... <span class=\"description\">ctrl + o</span></sui-dropdown-item> <sui-dropdown-item>Save as... <span class=\"description\">ctrl + s</span></sui-dropdown-item> <sui-dropdown-item>Rename <span class=\"description\">ctrl + r</span></sui-dropdown-item> <sui-dropdown-item>Make a copy</sui-dropdown-item> <sui-dropdown-item><sui-icon name=\"folder\"></sui-icon>Move to folder</sui-dropdown-item> <sui-dropdown-item><sui-icon name=\"trash\"></sui-icon>Move to trash</sui-dropdown-item> <sui-dropdown-divider></sui-dropdown-divider> <sui-dropdown-item>Download as...</sui-dropdown-item></sui-dropdown-menu></sui-dropdown></div>"
```

##     `Floating`

####       `should match snapshot`

```
"<div id=\"app\"><sui-dropdown text=\"Save\" button=\"\" floating=\"\" class=\"teal\"><sui-dropdown-menu><sui-dropdown-item><sui-icon name=\"edit\"></sui-icon>Edit Post</sui-dropdown-item> <sui-dropdown-item><sui-icon name=\"delete\"></sui-icon>Remove Post</sui-dropdown-item> <sui-dropdown-item><sui-icon name=\"hide\"></sui-icon>Hide Post</sui-dropdown-item></sui-dropdown-menu></sui-dropdown></div>"
```

##   `Usage`

##     `Dropdown opening direction`

####       `should match snapshot`

```
"<div id=\"app\"><sui-dropdown text=\"File\" direction=\"upward\"><sui-dropdown-menu><sui-dropdown-item>New</sui-dropdown-item> <sui-dropdown-item>Open... <span class=\"description\">ctrl + o</span></sui-dropdown-item> <sui-dropdown-item>Save as... <span class=\"description\">ctrl + s</span></sui-dropdown-item> <sui-dropdown-item>Rename <span class=\"description\">ctrl + r</span></sui-dropdown-item> <sui-dropdown-item>Make a copy</sui-dropdown-item> <sui-dropdown-item><sui-icon name=\"folder\"></sui-icon>Move to folder</sui-dropdown-item> <sui-dropdown-item><sui-icon name=\"trash\"></sui-icon>Move to trash</sui-dropdown-item> <sui-dropdown-divider></sui-dropdown-divider> <sui-dropdown-item>Download as...</sui-dropdown-item></sui-dropdown-menu></sui-dropdown></div>"
```

##     `Maximum Selections`

####       `should match snapshot`

```
"<sui-dropdown fluid=\"\" multiple=\"\" max-selections=\"3\" options=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" placeholder=\"Skills\" selection=\"\"></sui-dropdown>"
```

## `EmbedExample`

##   `Types`

##     `YouTube`

####       `should match snapshot`

```
"<sui-embed id=\"O6Xo21L0ybE\" placeholder=\"static/images/extras/image-16by9.png\" source=\"youtube\"></sui-embed>"
```

##     `Vimeo`

####       `should match snapshot`

```
"<sui-embed id=\"125292332\" placeholder=\"static/images/extras/vimeo-example.jpg\" source=\"vimeo\"></sui-embed>"
```

##     `Custom Content`

####       `should match snapshot`

```
"<sui-embed icon=\"right circle arrow\" placeholder=\"static/images/extras/image-16by9.png\" url=\"http://www.myfav.es/jack\"></sui-embed>"
```

##   `States`

##     `Active`

####       `should match snapshot`

```
"<div><sui-embed icon=\"arrow circle down\" id=\"90Omh7_I8vI\" placeholder=\"static/images/extras/image-16by9.png\" source=\"youtube\"></sui-embed> <sui-divider hidden=\"\"></sui-divider> <sui-button content=\"Activate\" icon=\"bomb\" label-position=\"left\"></sui-button></div>"
```

##   `Variations`

##     `Aspect Ratio`

####       `should match snapshot`

```
"<sui-embed aspect-ratio=\"4:3\" id=\"HTZudKi36bo\" placeholder=\"static/images/extras/image-4by3.jpg\" source=\"youtube\"></sui-embed>"
```

##   `Usage`

##     `Source settings`

####       `should match snapshot`

```
"<sui-embed color=\"white\" id=\"D0WnZyxp_Wo\" placeholder=\"static/images/extras/image-16by9.png\" source=\"youtube\"></sui-embed>"
```

##     `Iframe`

####       `should match snapshot`

```
"<sui-embed color=\"white\" id=\"gJscrxxl_Bg\" iframe=\"[object Object]\" placeholder=\"static/images/extras/image-16by9.png\" source=\"youtube\"></sui-embed>"
```

## `ModalExample`

##   `Types`

##     `Modal`

####       `should match snapshot`

```
"<div><sui-button>Show Modal</sui-button> <sui-modal><sui-modal-header>Select a Photo</sui-modal-header> <sui-modal-content image=\"\"><sui-image wrapped=\"\" size=\"medium\" src=\"static/images/avatar/large/rachel.png\"></sui-image> <sui-modal-description><sui-header>Default Profile Image</sui-header> <p>We've found the following gravatar image associated with your e-mail address.</p> <p>Is it okay to use this photo?</p></sui-modal-description></sui-modal-content> <sui-modal-actions><sui-button floated=\"right\" positive=\"\">
        OK
      </sui-button></sui-modal-actions></sui-modal></div>"
```

## `ProgressExample`

##   `Types`

##     `Standard`

####       `should match snapshot`

```
"<div><sui-progress percent=\"10\" label=\"Uploading Files\"></sui-progress> <sui-button>-</sui-button> <sui-button>+</sui-button></div>"
```

##     `Indicating`

####       `should match snapshot`

```
"<div><sui-progress state=\"active\" indicating=\"\" percent=\"43\" label=\"43% Funded\"></sui-progress> <sui-button>-</sui-button> <sui-button>+</sui-button></div>"
```

##   `Content`

##     `Bar`

####       `should match snapshot`

```
"<div><sui-progress percent=\"89\"></sui-progress></div>"
```

##     `Progress`

####       `should match snapshot`

```
"<div><sui-progress progress=\"\" percent=\"17\"></sui-progress> <sui-button>-</sui-button> <sui-button>+</sui-button></div>"
```

##     `Label`

####       `should match snapshot`

```
"<div><sui-progress progress=\"\" label=\"Uploading Files\" percent=\"63\"></sui-progress></div>"
```

##   `States`

##     `Active`

####       `should match snapshot`

```
"<div><sui-progress state=\"active\"></sui-progress></div>"
```

##     `Success`

####       `should match snapshot`

```
"<div><sui-progress state=\"success\" percent=\"100\" progress=\"\" label=\"Everything worked, your file is all ready.\"></sui-progress></div>"
```

##     `Warning`

####       `should match snapshot`

```
"<div><sui-progress state=\"warning\" percent=\"100\" progress=\"\" label=\"Your file didn't meet the minimum resolution requirements.\"></sui-progress></div>"
```

##     `Error`

####       `should match snapshot`

```
"<div><sui-progress state=\"error\" percent=\"100\" progress=\"\" label=\"There was an error.\"></sui-progress></div>"
```

##     `Disabled`

####       `should match snapshot`

```
"<div><sui-progress state=\"disabled\"></sui-progress></div>"
```

##   `Variations`

##     `Inverted`

####       `should match snapshot`

```
"<div><sui-segment inverted=\"\"><sui-progress inverted=\"\" color=\"red\"></sui-progress> <sui-progress inverted=\"\" color=\"orange\"></sui-progress> <sui-progress inverted=\"\" color=\"yellow\"></sui-progress> <sui-progress inverted=\"\" color=\"olive\"></sui-progress> <sui-progress inverted=\"\" color=\"green\"></sui-progress> <sui-progress inverted=\"\" color=\"teal\"></sui-progress> <sui-progress inverted=\"\" color=\"blue\"></sui-progress> <sui-progress inverted=\"\" color=\"violet\"></sui-progress> <sui-progress inverted=\"\" color=\"purple\"></sui-progress> <sui-progress inverted=\"\" color=\"pink\"></sui-progress> <sui-progress inverted=\"\" color=\"brown\"></sui-progress> <sui-progress inverted=\"\" color=\"grey\"></sui-progress> <sui-progress inverted=\"\" color=\"black\"></sui-progress></sui-segment></div>"
```

##     `Attached`

####       `should match snapshot`

```
"<div><sui-segment><sui-progress attached=\"\" top=\"\" percent=\"43\" label=\"43% Funded\"></sui-progress> <sui-progress attached=\"\" bottom=\"\" color=\"green\" percent=\"43\" label=\"43% Funded\"></sui-progress></sui-segment> <sui-button>-</sui-button> <sui-button>+</sui-button></div>"
```

## `RatingExample`

##   `Types`

##     `Rating`

####       `should match snapshot`

```
"<div><sui-rating rating=\"1\" max-rating=\"5\"></sui-rating></div>"
```

##     `onRate Callback`

####       `should match snapshot`

```
"<div><sui-rating rating=\"1\" max-rating=\"5\"></sui-rating> <pre>{}</pre></div>"
```

## `CardExample`

##   `Types`

##     `Card`

####       `should match snapshot`

```
"<div><sui-card><sui-image src=\"static/images/avatar/large/kristy.png\"></sui-image> <sui-card-content><sui-card-header>Kristy</sui-card-header> <sui-card-meta>Joined in 2013</sui-card-meta> <sui-card-description>Kristy is an art director living in New York.</sui-card-description></sui-card-content> <sui-card-content extra=\"\"><sui-icon name=\"user\"></sui-icon>
      22 Friends</sui-card-content></sui-card></div>"
```

##     `Cards`

####       `should match snapshot`

```
"<div><sui-card-group items-per-row=\"3\"><sui-card><sui-card-content><sui-image src=\"static/images/avatar/small/elliot.jpg\" class=\"right floated\"></sui-image> <sui-card-header>Elliot Fu</sui-card-header> <sui-card-meta>Friends of Veronika</sui-card-meta> <sui-card-description>
          Elliot requested permission to view your contact details
        </sui-card-description></sui-card-content> <sui-card-content extra=\"\"><sui-container text-align=\"center\"><sui-button-group><sui-button basic=\"\" positive=\"\">Approve</sui-button> <sui-button basic=\"\" negative=\"\">Decline</sui-button></sui-button-group></sui-container></sui-card-content></sui-card> <sui-card><sui-card-content><sui-image src=\"static/images/avatar/small/jenny.jpg\" class=\"right floated\"></sui-image> <sui-card-header>Jenny Hess</sui-card-header> <sui-card-meta>New Member</sui-card-meta> <sui-card-description>
          Jenny wants to add you to the group <b>best friends</b></sui-card-description></sui-card-content> <sui-card-content extra=\"\"><sui-container text-align=\"center\"><sui-button-group><sui-button basic=\"\" positive=\"\">Approve</sui-button> <sui-button basic=\"\" negative=\"\">Decline</sui-button></sui-button-group></sui-container></sui-card-content></sui-card></sui-card-group></div>"
```

##   `Content`

##     `Content Block`

####       `should match snapshot`

```
"<div><sui-card><sui-card-content><sui-card-header>
        Project Timeline
      </sui-card-header></sui-card-content> <sui-card-content><sui-header size=\"tiny\">ACTIVITY</sui-header> <div class=\"ui small feed\"><div class=\"event\"><div class=\"content\"><div class=\"summary\"><a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
            </div></div></div> <div class=\"event\"><div class=\"content\"><div class=\"summary\"><a>Stevie Feliciano</a> was added as an <a>Administrator</a></div></div></div> <div class=\"event\"><div class=\"content\"><div class=\"summary\"><a>Helen Troy</a> added two pictures
            </div></div></div></div></sui-card-content> <sui-card-content extra=\"\"><sui-button>Join Project</sui-button></sui-card-content></sui-card></div>"
```

##     `Image`

####       `should match snapshot`

```
"<div><sui-card><sui-reveal animated=\"move\"><sui-reveal-content visible=\"\"><sui-image src=\"static/images/avatar/large/jenny.jpg\"></sui-image></sui-reveal-content> <sui-reveal-content hidden=\"\"><sui-image src=\"static/images/avatar/large/elliot.jpg\"></sui-image></sui-reveal-content></sui-reveal> <sui-card-content><sui-card-header>Team Fu &amp; Hess</sui-card-header> <sui-card-meta>Create in Sep 2014</sui-card-meta></sui-card-content> <sui-card-content extra=\"\"><sui-icon name=\"users\"></sui-icon>
      2 Members</sui-card-content></sui-card></div>"
```

##     `Header`

####       `should match snapshot`

```
"<div><sui-card-group items-per-row=\"3\"><sui-card><sui-card-content><sui-card-header>Elliot Fu</sui-card-header> <sui-card-meta>Friend</sui-card-meta> <sui-card-description>Elliot Fu is a film-maker from New York.</sui-card-description></sui-card-content></sui-card> <sui-card><sui-card-content><sui-card-header>Veronika Ossi</sui-card-header> <sui-card-meta>Friend</sui-card-meta> <sui-card-description>
          Veronika Ossi is a set designer living in New York
          who enjoys kittens, music, and partying.
        </sui-card-description></sui-card-content></sui-card> <sui-card><sui-card-content><sui-card-header>Jenny Hess</sui-card-header> <sui-card-meta>Friend</sui-card-meta> <sui-card-description>
          Jenny is a student studying Media Management at the New School
        </sui-card-description></sui-card-content></sui-card></sui-card-group></div>"
```

##     `Metadata`

####       `should match snapshot`

```
"<div><sui-card><sui-card-content><sui-card-header>Cute Dog</sui-card-header> <sui-card-meta><span>2 days ago</span> <a>Animals</a></sui-card-meta> <sui-image src=\"static/images/wireframes/paragraph.png\"></sui-image></sui-card-content></sui-card></div>"
```

##     `Link`

####       `should match snapshot`

```
"<div><sui-card><a href=\"#\"><sui-image src=\"static/images/avatar/large/steve.jpg\"></sui-image></a> <sui-card-content><sui-card-header><a>Steve Jobes</a></sui-card-header> <sui-card-meta><a>Last Seen 2 days ago</a></sui-card-meta></sui-card-content></sui-card></div>"
```

##     `Buttons`

####       `should match snapshot`

```
"<div><sui-card-group items-per-row=\"3\"><sui-card><sui-card-content><sui-card-header>Elliot Fu</sui-card-header> <sui-card-meta>Friend</sui-card-meta> <sui-card-description>
          Elliot Fu is a film-maker from New York.
        </sui-card-description></sui-card-content> <sui-button attached=\"bottom\"><sui-icon name=\"add\"></sui-icon> Add Friend
      </sui-button></sui-card> <sui-card><sui-card-content><sui-card-header>Veronika Ossi</sui-card-header> <sui-card-meta>Friend</sui-card-meta> <sui-card-description>
          Veronika Ossi is a set designer living in New York
          who enjoys kittens, music, and partying.
        </sui-card-description></sui-card-content> <sui-button attached=\"bottom\"><sui-icon name=\"add\"></sui-icon> Add Friend
      </sui-button></sui-card> <sui-card><sui-card-content><sui-card-header>Jenny Hess</sui-card-header> <sui-card-meta>Friend</sui-card-meta> <sui-card-description>
          Jenny is a student studying Media Management at the New School
        </sui-card-description></sui-card-content> <sui-button attached=\"bottom\"><sui-icon name=\"add\"></sui-icon> Add Friend
      </sui-button></sui-card></sui-card-group></div>"
```

##     `Approval`

####       `should match snapshot`

```
"<div><sui-card><sui-card-content><sui-card-header>Cute Dog
        <sui-icon size=\"small\" name=\"like\" class=\"right floated\"></sui-icon> <sui-icon size=\"small\" name=\"star\" class=\"right floated\"></sui-icon></sui-card-header> <sui-image src=\"static/images/wireframes/paragraph.png\"></sui-image></sui-card-content> <sui-card-content extra=\"\"><span><sui-icon name=\"heart\"></sui-icon> Like
      </span> <span slot=\"right\"><sui-icon name=\"star\"></sui-icon> Favorite
      </span></sui-card-content></sui-card></div>"
```

##     `Description`

####       `should match snapshot`

```
"<div><sui-card><sui-card-content><sui-card-header>Cute Dog</sui-card-header> <sui-card-meta>2 days ago</sui-card-meta> <sui-card-description><p>
          Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their
          adorable faces, others for their tiny stature, and even others for their massive size.
        </p> <p>Many people also have their own barometers for what makes a cute dog.</p></sui-card-description></sui-card-content></sui-card></div>"
```

##     `Extra Content`

####       `should match snapshot`

```
"<div><sui-card><sui-card-content><sui-card-header>Cute Dog</sui-card-header> <sui-card-meta>2 days ago</sui-card-meta> <sui-card-description><p>
          Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their
          adorable faces, others for their tiny stature, and even others for their massive size.
        </p> <p>Many people also have their own barometers for what makes a cute dog.</p></sui-card-description></sui-card-content> <sui-card-content extra=\"\"><sui-icon name=\"check\"></sui-icon> 121 Votes
    </sui-card-content></sui-card></div>"
```

##   `Variations`

##     `Fluid Card`

####       `should match snapshot`

```
"<div><sui-grid columns=\"3\"><sui-grid-column><sui-card class=\"fluid\"><sui-image src=\"static/images/avatar/large/daniel.jpg\"></sui-image> <sui-card-content><sui-card-header>Daniel Louise</sui-card-header></sui-card-content></sui-card></sui-grid-column> <sui-grid-column><sui-card class=\"fluid\"><sui-image src=\"static/images/avatar/large/helen.jpg\"></sui-image> <sui-card-content><sui-card-header>Helen Troy</sui-card-header></sui-card-content></sui-card></sui-grid-column> <sui-grid-column><sui-card class=\"fluid\"><sui-image src=\"static/images/avatar/large/elliot.jpg\"></sui-image> <sui-card-content><sui-card-header>Elliot Fu</sui-card-header></sui-card-content></sui-card></sui-grid-column></sui-grid></div>"
```

##     `Centered Card`

####       `should match snapshot`

```
"<div><sui-card class=\"centered\"><sui-image src=\"static/images/avatar/large/elyse.png\"></sui-image> <sui-card-content><sui-card-header>Elyse</sui-card-header></sui-card-content></sui-card></div>"
```

##     `Raised Card`

####       `should match snapshot`

```
"<div><sui-card class=\"raised\"><sui-card-content><sui-card-header>Cute Dog</sui-card-header> <sui-card-meta>Animals</sui-card-meta> <sui-image src=\"/static/images/wireframes/paragraph.png\"></sui-image></sui-card-content> <sui-card-content extra=\"\"><span slot=\"right\"><sui-image src=\"/static/images/avatar/small/matt.jpg\" shape=\"circular\" size=\"mini\"></sui-image> Matt
      </span></sui-card-content></sui-card></div>"
```

##     `Link Card`

####       `should match snapshot`

```
"<div><a><sui-card><sui-card-content><sui-card-header>Cute Dog</sui-card-header> <sui-card-meta>Animals</sui-card-meta> <sui-image src=\"/static/images/wireframes/paragraph.png\"></sui-image></sui-card-content> <sui-card-content extra=\"\"><span slot=\"right\"><sui-image src=\"/static/images/avatar/small/matt.jpg\" shape=\"circular\" size=\"mini\"></sui-image> Matt
      </span></sui-card-content></sui-card></a></div>"
```

##     `Floated Content`

####       `should match snapshot`

```
"<div><sui-card class=\"raised\"><sui-card-content><sui-card-header>Cute Dog</sui-card-header> <sui-card-meta>Animals
        <span class=\"right floated\">2 days ago</span></sui-card-meta> <sui-image src=\"/static/images/wireframes/paragraph.png\"></sui-image></sui-card-content> <sui-card-content extra=\"\"><span slot=\"right\"><sui-image src=\"/static/images/avatar/small/matt.jpg\" shape=\"circular\" size=\"mini\"></sui-image> Matt
      </span></sui-card-content></sui-card></div>"
```

##     `Text Alignment`

####       `should match snapshot`

```
"<div><sui-card class=\"raised\"><sui-card-content><sui-card-header>Cute Dog</sui-card-header> <sui-card-meta>Animals
        <span class=\"right floated\">2 days ago</span></sui-card-meta> <sui-image src=\"/static/images/wireframes/paragraph.png\"></sui-image></sui-card-content> <sui-card-content extra=\"\"><span slot=\"right\"><sui-image src=\"/static/images/avatar/small/matt.jpg\" shape=\"circular\" size=\"mini\"></sui-image> Matt
      </span></sui-card-content></sui-card></div>"
```

##     `Colored`

####       `should match snapshot`

```
"<div><sui-card-group items-per-row=\"4\"><sui-card class=\"red\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"orange\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"yellow\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"olive\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"green\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"teal\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"blue\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"violet\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"purple\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"pink\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"brown\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"grey\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card> <sui-card class=\"black\"><sui-image src=\"static/images/wireframes/image.png\"></sui-image></sui-card></sui-card-group></div>"
```

##     `Column Count`

####       `should match snapshot`

```
"<div><sui-card-group items-per-row=\"4\"><sui-card><sui-image src=\"static/images/wireframes/image.png\"></sui-image> <sui-card-content extra=\"\">
        Rating: <sui-rating icon=\"star\" max-rating=\"4\" rating=\"4\"></sui-rating></sui-card-content></sui-card> <sui-card><sui-image src=\"static/images/wireframes/image.png\"></sui-image> <sui-card-content extra=\"\">
        Rating: <sui-rating icon=\"star\" max-rating=\"4\" rating=\"2\"></sui-rating></sui-card-content></sui-card> <sui-card><sui-image src=\"static/images/wireframes/image.png\"></sui-image> <sui-card-content extra=\"\">
        Rating: <sui-rating icon=\"star\" max-rating=\"4\" rating=\"3\"></sui-rating></sui-card-content></sui-card> <sui-card><sui-image src=\"static/images/wireframes/image.png\"></sui-image> <sui-card-content extra=\"\">
        Rating: <sui-rating icon=\"star\" max-rating=\"4\" rating=\"4\"></sui-rating></sui-card-content></sui-card> <sui-card><sui-image src=\"static/images/wireframes/image.png\"></sui-image> <sui-card-content extra=\"\">
        Rating: <sui-rating icon=\"star\" max-rating=\"4\" rating=\"3\"></sui-rating></sui-card-content></sui-card> <sui-card><sui-image src=\"static/images/wireframes/image.png\"></sui-image> <sui-card-content extra=\"\">
        Rating: <sui-rating icon=\"star\" max-rating=\"4\" rating=\"3\"></sui-rating></sui-card-content></sui-card> <sui-card><sui-image src=\"static/images/wireframes/image.png\"></sui-image> <sui-card-content extra=\"\">
        Rating: <sui-rating icon=\"star\" max-rating=\"4\" rating=\"4\"></sui-rating></sui-card-content></sui-card> <sui-card><sui-image src=\"static/images/wireframes/image.png\"></sui-image> <sui-card-content extra=\"\">
        Rating: <sui-rating icon=\"star\" max-rating=\"4\" rating=\"4\"></sui-rating></sui-card-content></sui-card></sui-card-group></div>"
```

##     `Stackable`

####       `should match snapshot`

```
"<div><sui-card-group items-per-row=\"3\" stackable=\"\"><sui-card><sui-image src=\"static/images/avatar/large/elliot.jpg\"></sui-image></sui-card> <sui-card><sui-image src=\"static/images/avatar/large/helen.jpg\"></sui-image></sui-card> <sui-card><sui-image src=\"static/images/avatar/large/jenny.jpg\"></sui-image></sui-card> <sui-card><sui-image src=\"static/images/avatar/large/veronika.jpg\"></sui-image></sui-card> <sui-card><sui-image src=\"static/images/avatar/large/stevie.jpg\"></sui-image></sui-card> <sui-card><sui-image src=\"static/images/avatar/large/steve.jpg\"></sui-image></sui-card></sui-card-group></div>"
```

##     `Doubling`

####       `should match snapshot`

```
"<div><sui-card-group items-per-row=\"6\" class=\"doubling\"><sui-card><sui-image src=\"static/images/avatar/large/elliot.jpg\"></sui-image></sui-card> <sui-card><sui-image src=\"static/images/avatar/large/helen.jpg\"></sui-image></sui-card> <sui-card><sui-image src=\"static/images/avatar/large/jenny.jpg\"></sui-image></sui-card> <sui-card><sui-image src=\"static/images/avatar/large/veronika.jpg\"></sui-image></sui-card> <sui-card><sui-image src=\"static/images/avatar/large/stevie.jpg\"></sui-image></sui-card> <sui-card><sui-image src=\"static/images/avatar/large/steve.jpg\"></sui-image></sui-card></sui-card-group></div>"
```

## `CommentExample`

##   `Types`

##     `Comments`

####       `should match snapshot`

```
"<sui-comment-group><sui-header dividing=\"\">Comments</sui-header> <sui-comment><sui-comment-avatar src=\"static/images/avatar/small/matt.jpg\"></sui-comment-avatar> <sui-comment-content><sui-comment-author>Matt</sui-comment-author> <sui-comment-metadata><div>Today at 5:42PM</div></sui-comment-metadata> <sui-comment-text>How artistic!</sui-comment-text> <sui-comment-actions><sui-comment-action>Reply</sui-comment-action></sui-comment-actions></sui-comment-content></sui-comment> <sui-comment><sui-comment-avatar src=\"static/images/avatar/small/elliot.jpg\"></sui-comment-avatar> <sui-comment-content><sui-comment-author>Elliot Fu</sui-comment-author> <sui-comment-metadata><div>Yesterday at 12:30AM</div></sui-comment-metadata> <sui-comment-text><p>This has been very useful for my research. Thanks as well!</p></sui-comment-text> <sui-comment-actions><sui-comment-action>Reply</sui-comment-action></sui-comment-actions></sui-comment-content> <sui-comment-group><sui-comment><sui-comment-avatar src=\"static/images/avatar/small/jenny.jpg\"></sui-comment-avatar> <sui-comment-content><sui-comment-author>Jenny Hess</sui-comment-author> <sui-comment-metadata><div>Just now</div></sui-comment-metadata> <sui-comment-text>
            Elliot you are always so right :)
          </sui-comment-text> <sui-comment-actions><sui-comment-action>Reply</sui-comment-action></sui-comment-actions></sui-comment-content></sui-comment></sui-comment-group></sui-comment> <sui-comment><sui-comment-avatar src=\"static/images/avatar/small/joe.jpg\"></sui-comment-avatar> <sui-comment-content><sui-comment-author>Joe Henderson</sui-comment-author> <sui-comment-metadata><div>5 days ago</div></sui-comment-metadata> <sui-comment-text>
        Dude, this is awesome. Thanks so much
      </sui-comment-text> <sui-comment-actions><sui-comment-action>Reply</sui-comment-action></sui-comment-actions></sui-comment-content></sui-comment> <form reply=\"\"><form-text-area></form-text-area> <sui-button content=\"Add
      Reply\" label-position=\"left\" icon=\"edit\" primary=\"\"></sui-button></form></sui-comment-group>"
```

## `FeedExample`

##   `Types`

##     `Feed`

####       `should match snapshot`

```
"<sui-feed><sui-feed-event><sui-feed-label><img src=\"static/images/avatar/small/elliot.jpg\"></sui-feed-label> <sui-feed-content><sui-feed-summary><sui-feed-user>Elliot Fu</sui-feed-user> added you as a friend
        <sui-feed-date>1 Hour Ago</sui-feed-date></sui-feed-summary> <sui-feed-meta><sui-feed-like><sui-icon name=\"like\"></sui-icon>
          4 Likes
        </sui-feed-like></sui-feed-meta></sui-feed-content></sui-feed-event> <sui-feed-event><sui-feed-label image=\"static/images/avatar/small/helen.jpg\"></sui-feed-label> <sui-feed-content><sui-feed-summary><a>Helen Troy</a> added <a>2 new illustrations</a> <sui-feed-date>4 days ago</sui-feed-date></sui-feed-summary> <sui-feed-extra images=\"\"><a><img src=\"static/images/wireframes/image.png\"></a> <a><img src=\"static/images/wireframes/image.png\"></a></sui-feed-extra> <sui-feed-meta><sui-feed-like><sui-icon name=\"like\"></sui-icon>
          1 Like
        </sui-feed-like></sui-feed-meta></sui-feed-content></sui-feed-event> <sui-feed-event><sui-feed-label image=\"static/images/avatar/small/jenny.jpg\"></sui-feed-label> <sui-feed-content><sui-feed-summary date=\"2 Days Ago\" user=\"Jenny Hess\" content=\" add you as a friend\"></sui-feed-summary> <sui-feed-meta><sui-feed-like><sui-icon name=\"like\"></sui-icon>
          8 Likes
        </sui-feed-like></sui-feed-meta></sui-feed-content></sui-feed-event> <sui-feed-event><sui-feed-label image=\"static/images/avatar/small/joe.jpg\"></sui-feed-label> <sui-feed-content><sui-feed-summary><a>Joe Henderson</a> posted on his page
        <sui-feed-date>3 days ago</sui-feed-date></sui-feed-summary> <sui-feed-extra text=\"\">
        Ours is a life of constant reruns. We're always circling back to where we'd we started,
        then starting all over again. Even if we don't run extra laps that day, we surely will
        come back for more of the same another day soon.
      </sui-feed-extra> <sui-feed-meta><sui-feed-like><sui-icon name=\"like\"></sui-icon>
          5 Likes
        </sui-feed-like></sui-feed-meta></sui-feed-content></sui-feed-event> <sui-feed-event><sui-feed-label image=\"static/images/avatar/small/justen.jpg\"></sui-feed-label> <sui-feed-content><sui-feed-summary><a>Justen Kitsune</a> added <a>2 new photos</a> of you
        <sui-feed-date>4 days ago</sui-feed-date></sui-feed-summary> <sui-feed-extra images=\"\"><a><img src=\"static/images/wireframes/image.png\"></a> <a><img src=\"static/images/wireframes/image.png\"></a></sui-feed-extra> <sui-feed-meta><sui-feed-like><sui-icon name=\"like\"></sui-icon>
          41 Likes
        </sui-feed-like></sui-feed-meta></sui-feed-content></sui-feed-event></sui-feed>"
```

##   `Content`

##     `Image Label`

####       `should match snapshot`

```
"<sui-feed><sui-feed-event><sui-feed-label><sui-image src=\"static/images/avatar/small/elliot.jpg\"></sui-image></sui-feed-label> <sui-feed-content>
      You added Elliot Fu to the group <a>Coworkers</a></sui-feed-content></sui-feed-event></sui-feed>"
```

##     `Icon Label`

####       `should match snapshot`

```
"<sui-feed><sui-feed-event><sui-feed-label><sui-icon name=\"pencil\"></sui-icon></sui-feed-label> <sui-feed-content><sui-feed-date>Today</sui-feed-date> <sui-feed-summary>
        You posted on your friend <a>Stevie Feliciano's</a> wall.
      </sui-feed-summary></sui-feed-content></sui-feed-event></sui-feed>"
```

##     `Content Date`

####       `should match snapshot`

```
"<sui-feed><sui-feed-event><sui-feed-label><sui-image src=\"static/images/avatar/small/jenny.jpg\"></sui-image></sui-feed-label> <sui-feed-content><sui-feed-date>3 days ago</sui-feed-date> <sui-feed-summary>
        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
      </sui-feed-summary></sui-feed-content></sui-feed-event></sui-feed>"
```

##     `Summary Date`

####       `should match snapshot`

```
"<sui-feed><sui-feed-event><sui-feed-label><sui-image src=\"static/images/avatar/small/jenny.jpg\"></sui-image></sui-feed-label> <sui-feed-content><sui-feed-summary>
        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
        <sui-feed-date>3 days ago</sui-feed-date></sui-feed-summary></sui-feed-content></sui-feed-event></sui-feed>"
```

##     `Extra Images`

####       `should match snapshot`

```
"<sui-feed><sui-feed-event><sui-feed-label image=\"static/images/avatar/small/helen.jpg\"></sui-feed-label> <sui-feed-content><sui-feed-date>3 days ago</sui-feed-date> <sui-feed-summary><a>Helen Troy</a> added 2 photos
      </sui-feed-summary> <sui-feed-extra images=\"\"><a><img src=\"static/images/wireframes/image.png\"></a> <a><img src=\"static/images/wireframes/image.png\"></a></sui-feed-extra></sui-feed-content></sui-feed-event></sui-feed>"
```

##     `Extra Text`

####       `should match snapshot`

```
"<sui-feed><sui-feed-event><sui-feed-label image=\"static/images/avatar/small/laura.jpg\"></sui-feed-label> <sui-feed-content><sui-feed-date>3 days ago</sui-feed-date> <sui-feed-summary><a>Laura Faucet</a> created a post
      </sui-feed-summary> <sui-feed-extra text=\"\">
        Have you seen what's going on in Israel? Can you believe it.
      </sui-feed-extra></sui-feed-content></sui-feed-event></sui-feed>"
```

##   `Variations`

##     `Size`

####       `should match snapshot`

```
"<sui-feed size=\"small\"><sui-header>Followers Activity</sui-header> <sui-feed-event><sui-feed-content><sui-feed-summary><a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
      </sui-feed-summary></sui-feed-content></sui-feed-event> <sui-feed-event><sui-feed-content><sui-feed-summary><a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
      </sui-feed-summary></sui-feed-content></sui-feed-event> <sui-feed-event><sui-feed-content><sui-feed-summary><a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
      </sui-feed-summary></sui-feed-content></sui-feed-event> <sui-feed-event><sui-feed-content><sui-feed-summary><a>Christian Rocha</a> signed up for the site.
      </sui-feed-summary></sui-feed-content></sui-feed-event></sui-feed>"
```

## `ItemExample`

##   `Types`

##     `Items`

####       `should match snapshot`

```
"<sui-item-group><sui-item><sui-item-image src=\"static/images/wireframes/image.png\"></sui-item-image> <sui-item-content><sui-item-header>Header</sui-item-header> <sui-item-meta><span>Description</span></sui-item-meta> <sui-item-description><p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p></sui-item-description> <sui-item-extra>
        Additional Details
      </sui-item-extra></sui-item-content></sui-item> <sui-item><sui-item-image src=\"static/images/wireframes/image.png\"></sui-item-image> <sui-item-content><sui-item-header>Header</sui-item-header> <sui-item-meta><span>Description</span></sui-item-meta> <sui-item-description><p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p></sui-item-description> <sui-item-extra>
        Additional Details
      </sui-item-extra></sui-item-content></sui-item></sui-item-group>"
```

##   `Content`

##     `Image`

####       `should match snapshot`

```
"<sui-item-group divided=\"\"><sui-item><sui-item-image src=\"static/images/wireframes/image.png\"></sui-item-image></sui-item> <sui-item><sui-item-image src=\"static/images/wireframes/image.png\"></sui-item-image></sui-item> <sui-item><sui-item-image src=\"static/images/wireframes/image.png\"></sui-item-image></sui-item></sui-item-group>"
```

##     `Content`

####       `should match snapshot`

```
"<sui-item-group divided=\"\"><sui-item><sui-item-image size=\"tiny\" src=\"static/images/wireframes/image.png\"></sui-item-image> <sui-item-content vertical-align=\"middle\">Content A</sui-item-content></sui-item> <sui-item><sui-item-image size=\"tiny\" src=\"static/images/wireframes/image.png\"></sui-item-image> <sui-item-content vertical-align=\"middle\">Content B</sui-item-content></sui-item> <sui-item><sui-item-image size=\"tiny\" src=\"static/images/wireframes/image.png\"></sui-item-image> <sui-item-content vertical-align=\"middle\">Content C</sui-item-content></sui-item></sui-item-group>"
```

##     `Header`

####       `should match snapshot`

```
"<sui-item-group divided=\"\"><sui-item><sui-item-image size=\"tiny\" src=\"static/images/wireframes/image.png\"></sui-item-image> <sui-item-content vertical-align=\"middle\"><sui-item-header href=\"javascript:void(0)\">12 Years a Slave</sui-item-header></sui-item-content></sui-item> <sui-item><sui-item-image size=\"tiny\" src=\"static/images/wireframes/image.png\"></sui-item-image> <sui-item-content vertical-align=\"middle\"><sui-item-header href=\"javascript:void(0)\">My Neighbor Totoro</sui-item-header></sui-item-content></sui-item> <sui-item><sui-item-image size=\"tiny\" src=\"static/images/wireframes/image.png\"></sui-item-image> <sui-item-content vertical-align=\"middle\"><sui-item-header href=\"javascript:void(0)\">Watchmen</sui-item-header></sui-item-content></sui-item></sui-item-group>"
```

##     `Metadata`

####       `should match snapshot`

```
"<sui-item-group divided=\"\"><sui-item><sui-item-image size=\"small\" src=\"static/images/wireframes/image.png\"></sui-item-image> <sui-item-content><sui-item-header>Arrowhead Valley Camp</sui-item-header> <sui-item-meta><span class=\"price\">$1200</span> <span class=\"stay\">1 Month</span></sui-item-meta> <sui-item-description><p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p></sui-item-description></sui-item-content></sui-item> <sui-item><sui-item-image size=\"small\" src=\"static/images/wireframes/image.png\"></sui-item-image> <sui-item-content><sui-item-header>Buck's Homebrew Stayaway</sui-item-header> <sui-item-meta><span class=\"price\">$1000</span> <span class=\"stay\">2 Weeks</span></sui-item-meta> <sui-item-description><p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p></sui-item-description></sui-item-content></sui-item> <sui-item><sui-item-image size=\"small\" src=\"static/images/wireframes/image.png\"></sui-item-image> <sui-item-content><sui-item-header>Astrology Camp</sui-item-header> <sui-item-meta><span class=\"price\">$1600</span> <span class=\"stay\">6 Weeks</span></sui-item-meta> <sui-item-description><p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p></sui-item-description></sui-item-content></sui-item></sui-item-group>"
```

## `StatisticExample`

##   `Types`

##     `Statistic`

####       `should match snapshot`

```
"<div><div class=\"single-example\"><sui-statistic><sui-statistic-value>5,550</sui-statistic-value> <sui-statistic-label>Downloads</sui-statistic-label></sui-statistic></div> <div class=\"single-example\"><sui-statistic><sui-statistic-label>Downloads</sui-statistic-label> <sui-statistic-value>5,550</sui-statistic-value></sui-statistic></div></div>"
```

##     `Statistic Group`

####       `should match snapshot`

```
"<sui-statistics-group><sui-statistic in-group=\"\"><sui-statistic-value>22</sui-statistic-value> <sui-statistic-label>Faves</sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\"><sui-statistic-value>31,200</sui-statistic-value> <sui-statistic-label>Views</sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\"><sui-statistic-value>22</sui-statistic-value> <sui-statistic-label>Members</sui-statistic-label></sui-statistic></sui-statistics-group>"
```

##   `Content`

##     `Value`

####       `should match snapshot`

```
"<sui-statistics-group><sui-statistic in-group=\"\"><sui-statistic-value>
      22
    </sui-statistic-value> <sui-statistic-label>
      Saves
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\"><sui-statistic-value text=\"\">
      Three<br>
      Thousand
    </sui-statistic-value> <sui-statistic-label>
      Signups
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\"><sui-statistic-value><i class=\"plane icon\"></i> 5
    </sui-statistic-value> <sui-statistic-label>
      Flights
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\"><sui-statistic-value><img src=\"static/images/avatar/small/joe.jpg\" class=\"ui circular inline image\">
      42
    </sui-statistic-value> <sui-statistic-label>
      Team Members
    </sui-statistic-label></sui-statistic></sui-statistics-group>"
```

##     `Label`

####       `should match snapshot`

```
"<sui-statistic><sui-statistic-value>2,204</sui-statistic-value> <sui-statistic-label>Views</sui-statistic-label></sui-statistic>"
```

##   `Variations`

##     `Horizontal Statistic`

####       `should match snapshot`

```
"<div><div class=\"single-example\"><sui-statistic horizontal=\"\"><sui-statistic-value>2,204</sui-statistic-value> <sui-statistic-label>Views</sui-statistic-label></sui-statistic></div> <div class=\"single-example\"><sui-statistics-group horizontal=\"\"><sui-statistic in-group=\"\"><sui-statistic-value>22</sui-statistic-value> <sui-statistic-label>Faves</sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\"><sui-statistic-value>31,200</sui-statistic-value> <sui-statistic-label>Views</sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\"><sui-statistic-value>22</sui-statistic-value> <sui-statistic-label>Members</sui-statistic-label></sui-statistic></sui-statistics-group></div></div>"
```

##     `Colored`

####       `should match snapshot`

```
"<sui-statistics-group><sui-statistic in-group=\"\" color=\"red\"><sui-statistic-value>
      27
    </sui-statistic-value> <sui-statistic-label>
      Red
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\" color=\"orange\"><sui-statistic-value>
      8
    </sui-statistic-value> <sui-statistic-label>
      Orange
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\" color=\"yellow\"><sui-statistic-value>
      28
    </sui-statistic-value> <sui-statistic-label>
      Yellow
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\" color=\"olive\"><sui-statistic-value>
      7
    </sui-statistic-value> <sui-statistic-label>
      Olive
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\" color=\"green\"><sui-statistic-value>
      14
    </sui-statistic-value> <sui-statistic-label>
      Green
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\" color=\"teal\"><sui-statistic-value>
      82
    </sui-statistic-value> <sui-statistic-label>
      Teal
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\" color=\"blue\"><sui-statistic-value>
      1
    </sui-statistic-value> <sui-statistic-label>
      Blue
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\" color=\"violet\"><sui-statistic-value>
      22
    </sui-statistic-value> <sui-statistic-label>
      Violet
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\" color=\"purple\"><sui-statistic-value>
      23
    </sui-statistic-value> <sui-statistic-label>
      Purple
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\" color=\"pink\"><sui-statistic-value>
      15
    </sui-statistic-value> <sui-statistic-label>
      Pink
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\" color=\"brown\"><sui-statistic-value>
      36
    </sui-statistic-value> <sui-statistic-label>
      Brown
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\" color=\"grey\"><sui-statistic-value>
      49
    </sui-statistic-value> <sui-statistic-label>
      Grey
    </sui-statistic-label></sui-statistic></sui-statistics-group>"
```

##     `Inverted`

####       `should match snapshot`

```
"<sui-segment inverted=\"\"><sui-statistics-group><sui-statistic inverted=\"\"><sui-statistic-value>
        54
      </sui-statistic-value> <sui-statistic-label>
        Inverted
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"red\" inverted=\"\"><sui-statistic-value>
        27
      </sui-statistic-value> <sui-statistic-label>
        Red
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"orange\" inverted=\"\"><sui-statistic-value>
        8
      </sui-statistic-value> <sui-statistic-label>
        Orange
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"yellow\" inverted=\"\"><sui-statistic-value>
        28
      </sui-statistic-value> <sui-statistic-label>
        Yellow
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"olive\" inverted=\"\"><sui-statistic-value>
        7
      </sui-statistic-value> <sui-statistic-label>
        Olive
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"green\" inverted=\"\"><sui-statistic-value>
        14
      </sui-statistic-value> <sui-statistic-label>
        Green
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"teal\" inverted=\"\"><sui-statistic-value>
        82
      </sui-statistic-value> <sui-statistic-label>
        Teal
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"blue\" inverted=\"\"><sui-statistic-value>
        1
      </sui-statistic-value> <sui-statistic-label>
        Blue
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"violet\" inverted=\"\"><sui-statistic-value>
        22
      </sui-statistic-value> <sui-statistic-label>
        Violet
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"purple\" inverted=\"\"><sui-statistic-value>
        23
      </sui-statistic-value> <sui-statistic-label>
        Purple
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"pink\" inverted=\"\"><sui-statistic-value>
        15
      </sui-statistic-value> <sui-statistic-label>
        Pink
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"brown\" inverted=\"\"><sui-statistic-value>
        36
      </sui-statistic-value> <sui-statistic-label>
        Brown
      </sui-statistic-label></sui-statistic> <sui-statistic color=\"grey\" inverted=\"\"><sui-statistic-value>
        49
      </sui-statistic-value> <sui-statistic-label>
        Grey
      </sui-statistic-label></sui-statistic></sui-statistics-group></sui-segment>"
```

##     `Evenly Divided`

####       `should match snapshot`

```
"<sui-statistics-group columns=\"4\"><sui-statistic in-group=\"\"><sui-statistic-value>
      22
    </sui-statistic-value> <sui-statistic-label>
      Saves
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\"><sui-statistic-value text=\"\">
      Three<br>
      Thousand
    </sui-statistic-value> <sui-statistic-label>
      Signups
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\"><sui-statistic-value><i class=\"plane icon\"></i> 5
    </sui-statistic-value> <sui-statistic-label>
      Flights
    </sui-statistic-label></sui-statistic> <sui-statistic in-group=\"\"><sui-statistic-value><img src=\"static/images/avatar/small/joe.jpg\" class=\"ui circular inline image\">
      42
    </sui-statistic-value> <sui-statistic-label>
      Team Members
    </sui-statistic-label></sui-statistic></sui-statistics-group>"
```

##     `Floated`

####       `should match snapshot`

```
"<sui-segment><sui-statistic floated=\"right\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <p>
    Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
    est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
    ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
    ex natum rebum iisque.
  </p> <p>
    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
    nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
    fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
  </p> <sui-statistic floated=\"left\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label class=\"label\">
      Views
    </sui-statistic-label></sui-statistic> <p>
    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
    adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
    utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
    convenire mnesarchum eu per, quas minimum postulant per id.
  </p> <p>
    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
    nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
    fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
  </p></sui-segment>"
```

##     `Size`

####       `should match snapshot`

```
"<div><sui-statistic horizontal=\"\" size=\"mini\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <sui-statistic horizontal=\"\" size=\"tiny\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <sui-statistic horizontal=\"\" size=\"small\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <sui-statistic horizontal=\"\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <sui-statistic horizontal=\"\" size=\"large\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <sui-statistic horizontal=\"\" size=\"huge\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <sui-divider></sui-divider> <sui-statistic horizontal=\"\" size=\"mini\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <sui-divider></sui-divider> <sui-statistic horizontal=\"\" size=\"tiny\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <sui-divider></sui-divider> <sui-statistic horizontal=\"\" size=\"small\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <sui-divider></sui-divider> <sui-statistic horizontal=\"\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <sui-divider></sui-divider> <sui-statistic horizontal=\"\" size=\"large\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic> <sui-divider></sui-divider> <sui-statistic horizontal=\"\" size=\"huge\"><sui-statistic-value>
      2,204
    </sui-statistic-value> <sui-statistic-label>
      Views
    </sui-statistic-label></sui-statistic></div>"
```

