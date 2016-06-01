np# metricapp-client
Project for course Software Systems and Internet Services Engineering 2016

## Requirements
First, you need NPM installed on your system.

Install globally Bower, Gulp, Pug, Sass, Compass and Pug, running:

>$> sudo npm install -g bower

>$> sudo npm install -g gulp

>$> sudo npm install -g pug

>$> sudo gem install sass

>$> sudo gem install compass

	{
	if you have problems with compass installation like:
		ERROR:  Error installing compass:
			ERROR: Failed to build gem native extension.

		        /usr/bin/ruby1.9.1 extconf.rb
		/usr/lib/ruby/1.9.1/rubygems/custom_require.rb:36:in `require': cannot load such file -- mkmf (LoadError)
			from /usr/lib/ruby/1.9.1/rubygems/custom_require.rb:36:in `require'
			from extconf.rb:4:in `<main>'
		
		Gem files will remain installed in /var/lib/gems/1.9.1/gems/ffi-1.9.10 for inspection


	you have to install ruby dev, try sudo apt-get install ruby-dev
	}

Finally, install locally node modules and Bower components, running the following from within the project folder (i.e., where the files *package.json* and *bower.json* are placed):

>$> npm install

>$> bower install

Now you are ready!

## Build
Completely build the app, running:

>$> gulp

You will find everything built up inside the dist folder.
