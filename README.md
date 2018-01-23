### Developing on Sunshower Layout

1.  Install npm for your platform
2.  Install jspm globally `sudo npm install -g jspm`
3.  Install project `npm install && jspm install -y && typings install`
4.  JSPM-link the project over to the consuming project:
- Clone sunshower-layout to sunshower-layout (cloned directory named sunshower-layout)
- Clone/create your project that consumes sunshower-layout (e.g. sunshower-myplugin)
- From `sunshower-layout` run `gulp build` and then `jspm link github:sunshower-io/sunshower-layout`
- in your consuming project, run `jspm install --link github:sunshower-io/sunshower-layout@1.0.0`
- Make a change in sunshower-layout, then run `gulp build && jspm link github:sunshower-io/sunshower-layout -y` to update your consuming project


