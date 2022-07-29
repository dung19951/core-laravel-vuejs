const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.js('resources/js/app.js', 'public/js')
 .sass('resources/sass/app.scss', 'public/css')
 .vue()
 .postCss('resources/css/app.css', 'public/css', [
     //
 ]);
mix.copy('node_modules/@coreui/coreui/dist/js/coreui.bundle.min.js', 'public/js');

mix.styles([
    // 'public/css/vendor/normalize.css',
    // 'public/css/vendor/videojs.css'
], 'public/css/all.css');

