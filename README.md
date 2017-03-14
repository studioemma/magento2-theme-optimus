# MASE2 Optimus theme

## About and purpose

**Optimus** is a free and home-made Magento 2 theme, developed by [Studio Emma](http://www.studioemma.com) . Its purpose is providing a starting point for the development of our own client projects. It's a solid base to extend the Magento 2 Blank theme with functionality & styling without breaking future upgrades. It is continuously being worked on, both refined and expanded. All added changes and new features are extends; we try to stay away from overrides until there is absolutely no other way possible.

It comprises of the following:

* module-core (separate composer install) with several helper functions which can be of use throughout your own client theme.
* module-optimus (separate composer install) which stands in for our example content pages at [rooturl]/content. More on that later.
* theme-frontend-optimus (separate composer install) which is the actual front-end theme and works together with the two above.

Optimus works with Magento 2, starting from the initial 2.0.0 BETA all the way up to the current 2.1.2 release.

## Module-core
This module contains a lot of handy helper functions:

* getCurrentStore() : returns the current store
* getLocale() : returns the current locale
* getCurrentCategory() : returns the current category
* getParentCategory() : returns the parent category of the current category
* getCurrentProduct: returns the current product, if available
* getBackUrl() : returns the back url value when browsing products or categories
* isLoggedIn() : return boolean if user is or is not logged in
* getCurrentCustomer() : if logged in, returns current customer object
* getCurrentCustomerGroup() : if logged in, returns current customer group object

## Module-optimus
This module contains the necessary files in order to build the example content pages. After you installed Optimus, navigate to **[rooturl]/content**. These pages were setup to give you a visual overview of all of our content-related changes. This includes basic layout (titles, lists, quotes, ...), page/section layouts (grids, sections, structures ...), interaction elements (accordeons, FAQs, toggles, ...), reusable classes, specific contentblocks, images and videos, ...

## Theme-frontend-optimus
This module contains the front-end theme itself. We divide our work into two main sections:

* **Changes**: Extends the blank theme with changes to its functionality, styling and technologies according to our experience throughout the years.
* **New features**: Extends the blank theme with new features that are of interest to most our clients. These can easily activated/deactivated when needed.

### Technicalities

* The theme inherits from the Magento Blank theme.
* The theme itself is declared in theme.xml. This file is a necessity for all Magento 2 themes and contains information about inheritance.
* The composer.json file contains the dependency information required for this theme.

### Installation
The modules are intended to be installed using composer. If you do not have composer installed (check by entering the command "composer --help" into your terminal), please install it using the following commands:

```
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```

After installing composer, use the following commands to install Optimus to your Magento 2 installation:

```
composer require studioemma/magento2-theme-optimus
```

After installing "Studio Emma Mase 2 Optimus" theme, you can verify that the installation succeeded by going to the Magento 2 back-end and navigating to **Content -> Design -> Themes**. If it listed there, you should be happy.

Normally, this theme will never be set as a the main theme for a client, but to set this theme for development purposes on the storefront, go to: **Content -> Design -> Configuration** and set the Optimus theme on the Store View you wish to use. Do not forget to flush the cache afterwards.

### Using Optimus as the base theme for your own client theme
A client project will inherit from the Optimus theme. To do this, set the theme.xml of your own client's theme inside the client's package to inherit from Studioemma/optimus.

```
<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../lib/internal/Magento/Framework/Config/etc/theme.xsd">
    <title>Own client name - Own theme name</title>
    <parent>Studioemma/optimus</parent>
    <media>
        <preview_image>media/preview.jpg</preview_image>
    </media>
</theme>
```

Because of the Magento 2 inheritance system, we had to create an additional _**extend-custom.less** file per module. This means that all of your client theme, module-specific, styling should be added in this file!

An example. You want to edit the footer for your client theme:

* Add the "Magento_Theme" folder inside your app/design/frontend/ClientPackage/ClientTheme/ folder structure
* Add the web/css/source folder structure inside your newly created "Magento_Theme" folder
* Create the _extend-custom.less file inside the newly created "source" folder
* Make changes in this file
* Watch your Grunt process this file using the "grunt watch" command in the webroot of your box.
* Reload the front, your changes should be visible
* It is possible though that Grunt won't pick up your newly created file. In this case, simply stop watching and re-watch using, again, the "grunt watch" command. Re-save the file and Grunt should pick it up.

### Upgrading Magento 2
Normally, no problems should rise when upgrading Magento 2 to a new release. If they do, please let us know.

### Changes in Optimus extended from the Magento 2 Blank theme
As discussed, we divide Optimus specific work into two sections:

* **Changes**: Extends the blank theme with changes to its functionality, styling and technologies according to our experience throughout the years.
* **New features**: Extends the blank theme with new features that are of interest to most our clients. These can easily activated/deactivated when needed

#### Changes

* Removed breadcrumbs for screens smaller than 768px
* Added a mobile pager (< select >) on category pages instead of default pager for screens smaller than 768px
* Rearranged both the layered nav and sorting options on category pages for screens smaller than 768px. These are now placed in a readable manner above the category grid/list
* The grid on category pages falls back to one column for screens smaller than 480px
* Product actions (add to cart, add to wishlist, add to compare) have been added back to the category grid/list on screens smaller than 640px
* Changed required form elements's colour from red to the default text colour, removed right align of labels
* Removed all Paypal and other marketing callouts
* Changed the way the review action breaks down on category listview on screens smaller than 768px
* The wishlist in the left column has been rearranged so that the product image and product description are now placed below each other instead of the 50/50 column view
* Made several changes to account section to improve usability
* Page zoom has been added to touch devices
* Added a home link (text + icon) to the main navigation
* A toggle system has been introduced in the layered navigation. Every clicked <dt> will toggle its followed <dd>
* Adjusted the print stylesheet to focus on the real necessary content
* The empty state wishlist & compare blocks will not be shown if they have no items inside of them


#### New features

* Added our own grid system (called _colm.less) in both regular and mixin flavours
* The contact page now includes a static block with identifier "contact-us-info" for contact info. You have to create this static block in the back-end.
* Added all necessary favicons and touch icons to head
* Modernizr library has been added to default head for usage
* Added a whole bunch of show/hide classes based on viewport width. See /content/responsive
* Added a "Go to products" link on the cart page on screens smaller than 480px
* Hid the "Clear shopping cart" button on the cart page
* PDP + Cart page: Quantities from 1 to 5 are shown in a selectbox. If the user wants to add even more to his cart, he can select the "More" option in the selectbox. The selectbox will then be hidden and replaced by a regular textinput.
* Added social sharing options to PDP
* Adjusted the complete footer section through layout XML.
    * 4 columns:
        * Column 1: Sitemap (level 1 categories)
        * Column 2: Static block
        * Column 3: Static block
        * Column 4: Newsletter block and social sharing block
    * Full width payment icons
    * Full width copyright + address
* Made it possible to change the view of the additional product detail blocks on the PDP. The file _sections.less explains what you have to do to:
* have the desktop view display these blocks as an accordion instead of tabs
* have the desktop view display these blocks without any UI modification
* Header has a new top row of USPs, derived from static block "store-usp"
* Added a static block "product_info_stock" on the PDP next to the "Add to cart" action. You have to create this static block in the back-end.
* Added a count toggle for the layered navigation. A specific numbers of filter options is shown; others are hidden in order to not have huge lists of options. You can change the number of filter options in responsive.js.
* Added the language block to the footer on screens smaller than 768px
* Added a visual checkbox (not a functional one) system for the layered nav. This can be activated through layout XML.
* Added an SVG loading animation to the regular search in the header after submitting the search form
* Added the Font Awesome library
* The checkout success page now includes a static block with identifier "checkout-success". You have to create this static block.
* Added Flex Slider library. See /content/images
* Added possibility to make the header sticky. Edit the default.xml file in Magento_Theme/layout; see comments.
* Added a new layout handle: 1 column - wide. This will have your content expand to viewport edge. You can choose this layout when editing a page in the back-end. This new option will be selectable from the layout dropdown.
* Added own icon font library:

```
.myicon {
    font-family: 'optimus-icons';
    content: 'a';
}
```
![Markdown preferences pane](https://s10.postimg.org/6mbg4emg9/Screen_Shot_2016_05_31_at_10_13_06.png)
