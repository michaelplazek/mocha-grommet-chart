# Mocha Grommet Chart

This is a dynamic chart that plots the last 50 test results by percentage of failed/slow tests out of total tests.
Data is stored in local storage at the end of every run and retrieved at the start of each run.

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

Import module and use as reporter option in mocha config in your index.js
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
