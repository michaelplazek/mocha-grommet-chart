# Mocha Grommet Chart

This is a dynamic chart that plots the last 50 test results, which are stored in local storage

## Screenshot

![Mocha Chart](http://i.imgur.com/8TRZZaF.png)

## To run 
```
npm install mocha-grommet-chart
```

Add div to html page where you want chart to render
```
<div id='chart'></div>
```

Import module and use as reporter option in mocha config
```
import mochaChart from 'mocha-grommet-chart';

import { Mocha } from 'mocha/mocha.js';

mocha.setup({
  ui: 'bdd',
  slow: 1500,
  timeout: 10000,
  reporter: mochaChart
});

// place tests here
require('./index.test.js');


mocha.run();
```

Then run 
```
npm start
```
