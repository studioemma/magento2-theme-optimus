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

## Setting up a box for developing for the Optimus theme itself

If you like to develop for the optimus itself and install the Optimus theme on a Magento box. You need to do the following.

Make a folder for the project

    mkdir optimus
    cd optimus

Create 2 folders (one for vagrant and one for the web root)

    mkdir vagrant
    mkdir wwwroot

Clone the SE vagrant box for Magento into the vagrant folder

    git clone ssh://git@stash.studioemma.com:7999/mag2/vagrant-magento2.git vagrant/

Clone the master-se branch from the SE Magento2 repo into the wwwroot folder

    git clone -b master-se ssh://git@stash.studioemma.com:7999/mag2/magento2.git wwwroot/

*It is best not to push anything to these repos.*

Inside the vagrant folder configure the yaml file to your network needs

    cd vagrant
    cp config.yml.example config.yml
    vim config.yml

Then start the box

    vagrant up

Let's go back the Magento webroot

    cd ../wwwroot

Edit the composer.json to add Optimus theme, Optimus module and Core module

For an example see [http://stash.studioemma.com/projects/MAG2LIB/repos/libeco/commits/1f81fe563f71fbbbbe5d9ea75e4c0959651bc389#composer.json](this commit)

Add to `repositories`

        ,
        {
            "type" : "vcs",
            "url"  : "ssh://git@stash.studioemma.com:7999/mase2/theme-optimus.git"
        },
        {
            "type" : "vcs",
            "url"  : "ssh://git@stash.studioemma.com:7999/mase2/module-optimus.git"
        },
        {
            "type" : "vcs",
            "url"  : "ssh://git@stash.studioemma.com:7999/mase2/module-core.git"
        }

Add to `require`

        ,
        "studioemma/theme-frontend-optimus": "dev-master",
        "studioemma/module-optimus": "dev-master",
        "studioemma/module-core": "dev-master"

Also edit the build.xml file at this point. Ask Quinten to send the file to you, because it contains passwords.

Another file we should edit in the webroot is `dev/tools/grunt/configs/themes.js`

Add the following

    ,
    optimus: {
        area: 'frontend',
        name: 'Studioemma/optimus',
        locale: 'nl_NL',
        files: [
            'css/optimus-m',
            'css/optimus-l',
            'css/styles-m',
            'css/styles-l',
            'css/print',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    }

Copy your private and public key to your webroot.

    cp ~/.ssh/id_rsa ./
    cp ~/.ssh/id_rsa.pub ./

Go back to your vagrant folder and ssh into the box.

    cd ../vagrant
    vagrant ssh

Make sure you are in the webroot:

    w

Move the public and private keys

    mv id_rsa ~/.ssh/id_rsa
    mv id_rsa.pub ~/.ssh/id_rsa.pub

Install the composer packages

    composer install

Now we need the build.xml

Now we need to install grunt

    ant local-install-grunt

Next install Magento

    ant install

Clear the var cache

    ant clean-var

Clear the static files

    ant clean-static

Source the theme

    ant source-theme

Watch the files

    grunt watch

Now edit a .less file on your local machine, grunt will run and then *surf to the site.*

Keep editing the .less files in vendor/studioemma/theme-frontend-optimus and commit and push them from there.

If you want the changes to be refelected on another site that uses Optimus. You need to go to that site and run:

    composer require studioemma/theme-frontend-optimus:dev-master

The composer.lock file will be changed for that project and you wil need to commit that.

## Contact


[http://www.studioemma.com](Studio Emma)

Follow [@Studioemma](https://twitter.com/studioemma) on Twitter.

