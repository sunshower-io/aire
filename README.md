### Developing on Aire

1.  Install npm for your platform
2.  Install jspm globally `sudo npm install -g jspm`
3.  Install project `npm install && jspm install -y && typings install`
4.  JSPM-link the project over to the consuming project:
- Clone aire to aire (cloned directory named aire)
- Clone/create your project that consumes aire (e.g. sunshower-myplugin)
- From `aire` run `gulp build` and then `jspm link github:sunshower-io/aire`
- in your consuming project, run `jspm install --link github:sunshower-io/aire@1.0.0`
- Make a change in aire, then run `gulp build && jspm link github:sunshower-io/aire -y` to update your consuming project


