# hbhelpers
【express】handlebars的helper

[TOC]

#### usage

```JavaScript
const express = require('express');
const tplHb = require('@npm-node/tplhb');
const hbHelpers = require('@npm-node/hbhelpers');

const app = express();

tplHb(app, {
    viewsPath: path.resolve(__dirname, 'views'),
    helpers: hbHelpers,
    partialsDirectoryName: 'partials',
    getTemplateFromCache: true
});
```

#### helpers that you can use

##### toLowerCase

```handlebars
{{toUpperCase 'A'}}

// output
a
```

##### toUpperCase

```handlebars
{{toLowerCase 'a'}}

// output
A
```

##### color

```handlebars
{{#color 'success'}}this is success color{{/color}}
{{#color 'warning'}}this is warning color{{/color}}
{{#color 'danger'}}this is daner color{{/color}}
{{#color 'info'}}this is info color{{/color}}

{{!-- with attributes --}}
{{#color 'success' class='success'}}{{/color}}

// output
<span  style="color: #67C23A">this is success color</span>
<span  style="color: #E6A23C">this is warning color</span>
<span  style="color: #F56C6C">this is daner color</span>
<span  style="color: #909399">this is info color</span>

<span class="success" style="color: #67C23A"></span>
```

