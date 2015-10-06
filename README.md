# Studio Emma Mase 2 Optimus

Custom theme for **Magento 2**, shorthand **Optimus**.

## Motivation

This theme extends the default Magento 2 blank theme and it's purpose is to refine & add extra features that we consistently use in client work. Optimus is continuosly refined & expanded to provide us with a strong starting point for new Magento 2 projects.

## Technical feature

* This theme inherits from the Magento/blank theme.
* The theme is declared in [theme.xml](theme.xml). The theme.xml file also contains information about the inheritance relationship and the location for a theme preview image [preview.jpg](media/preview.jpg) (not applicable since there is no styling).
* The [composer.json](composer.json) file contains the dependency information required for this theme, which is defined under "require". The installation path of this theme is defined under "extra".

## Requirements

Current version requires 1.0.0 beta of Magento 2, develop branch. The master branch is **NOT supported** because of changes to LESS mixins, PHP & XML


## Installation

This extension is intended to be installed using composer. After installing "Studio Emma Mase 2 Optimus" theme, you can verify that it is installed by going to the backend:

Content -> Design -> Themes

On that page check that the theme "Studio Emma Mase 2 Optimus" shows up in the list to confirm that it is installed correctly. The theme preview file is not really applicable because no extra styling has been done.

Normally, this theme will never be set as a theme for a client, but to set this theme for development purposes on the storefront, go to:

Stores -> Configuration -> Design ->  Design Theme

Select "Studio Emma Mase 2 Optimus" from the drop-down list and save the configuration. Go to frontend after flushing the page cache as prompted.  

## Using Optimus for client themes

A client project will inherit from the Optimus theme. To do this, set the theme.xml of the client's theme inside the client's package to inherit Studioemma/optimus. 

```
<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../lib/internal/Magento/Framework/Config/etc/theme.xsd">
    <title>Client name - Theme name</title>
    <parent>Studioemma/optimus</parent>
    <media>
        <preview_image>media/preview.jpg</preview_image>
    </media>
</theme>
```

## Contact


[http://www.studioemma.com](Studio Emma)

Follow [@Studioemma](https://twitter.com/studioemma) on Twitter.

