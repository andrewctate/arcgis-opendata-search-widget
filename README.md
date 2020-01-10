# Opendata Search Widget
Adds an ArcGIS Opendata search bar to any website.

## Use
Include the following script tag your web page:

```html
<script async src="/bundle.js"></script>
```

Then, include the following where you want the search bar to show up.
```html
  <div data-widget-host="habitat" class="preview">
    <script type="text/props">
      {
        "placeholder": "Search",
        "baseUrl": "https://your-opendata-base-url"
      }
    </script>
  </div>
```

## Develop

`npm run dev` will start a development server

Preact docs: https://preactjs.com/guide/v10/api-reference
Habitat is the magic sauce: https://github.com/zouhir/preact-habitat
