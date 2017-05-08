var http = require('http'),
    browserify = require('browserify'),
    literalify = require('literalify'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server');

var App = require('./app').default;
// import App from './app';

http.createServer(function(req, res) {
  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html');
    var props = {
      items: [
        'Item 0',
        'Item 1'
      ]
    };
    var html = ReactDOMServer.renderToStaticMarkup(
      <html>
        <head>
          <link href="/style.css" rel="stylesheet" />
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html:
            ReactDOMServer.renderToString(<App items={props.items}/>)
          }} />

          Test in react.
          <script dangerouslySetInnerHTML={{__html:
            'var APP_PROPS = ' + JSON.stringify(props) + ';'
          }}/>
          <script src="https://s0.meituan.net/bs/?f=react:react.min.js@0.14.8;react-dom:react-dom.min.js@0.14.8;" />
          <script src="/bundle.js"/>
        </body>
      </html>
    );
    res.end(html);

  } else if (req.url == '/style.css') {
    const fs = require('fs');
    res.setHeader('Content-Type', 'text/css');
    const index = fs.readFileSync('../../lib/style.css')
    res.end(index);

  } else if (req.url == '/bundle.js') {
    res.setHeader('Content-Type', 'text/javascript');
    browserify()
      .add('./browser.js')
      .transform(literalify.configure({
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
      }))
      .bundle()
      .pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
}).listen(3001, function(err) {
  if (err) throw err;
  console.log('Listening on 3001...');
})
