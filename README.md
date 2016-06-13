# metricapp-client
Project for course Software Systems and Internet Services Engineering 2016

## Requirements
First, you need NPM and Ruby (both ruby and ruby-dev) installed on your system.

Install globally Bower, Gulp, Pug, Sass, Compass and Pug, running:

	sudo npm install -g bower gulp pug
	sudo gem install sass compass

Finally, install locally node modules and Bower components, running the following from within the project folder (i.e., where the files *package.json* and *bower.json* are placed):

	npm install
	bower install

Now you are ready!

## Develop
Launch the live server, running:

	gulp live

The server will be running at *localhost:8090*.
Gulp will be watching your file, thus you just need to save your changes and refresh the page!

## Build
Completely build the app, running:

	gulp build

You will find everything built up inside the *dist* folder.

You can also build part of app separately.

To build views, run:
	gulp build-views

To build scripts, run:
	gulp build-scripts

To build styles, run:
	gulp build-styles

To build images, run:
	gulp build-images

## Run
Launch the app locally, running:

	gulp connect

Then visit *localhost:8090* to view the app.

Stop the local execution of the app, running:

	gulp disconnect

or simply stopping the gulp connect command from the terminal (i.e., CTRL+C).

## Common difficulties

If you have problems with compass installation like:

	ERROR:  Error installing compass:
		ERROR: Failed to build gem native extension.

			/usr/bin/ruby1.9.1 extconf.rb
	/usr/lib/ruby/1.9.1/rubygems/custom_require.rb:36:in `require': cannot load such file -- mkmf (LoadError)
		from /usr/lib/ruby/1.9.1/rubygems/custom_require.rb:36:in `require'
		from extconf.rb:4:in `<main>'

	Gem files will remain installed in /var/lib/gems/1.9.1/gems/ffi-1.9.10 for inspection


you have to install *ruby dev*, running:

	sudo apt-get install ruby-dev

If you have problems with jshint installation like:

 	throw err;
	Error: Cannot find module 'jshint/src/cli'

you have to install *jshint* manually, running:
	sudo npm install -g jshint
