/* eslint-disable indent,comma-dangle */
/**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
  entry: {
    main: [
      'prestakit/dist/js/prestashop-ui-kit.js',
      'jquery-ui-dist/jquery-ui.js',
      'bootstrap-tokenfield/dist/bootstrap-tokenfield.js',
      'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js',
      'jwerty/jwerty.js',
      'magnific-popup/dist/jquery.magnific-popup.js',
      'dropzone/dist/dropzone.js',
      'typeahead.js/dist/typeahead.jquery.js',
      'typeahead.js/dist/bloodhound.min.js',
      // 'bootstrap-slider/dist/bootstrap-slider.js',
      'sprintf-js/src/sprintf.js',
      './js/theme.js',
    ],
    catalog: './js/app/pages/catalog',
    // stock: './js/app/pages/stock',
    // translations: './js/app/pages/translations',
    // logs: './js/pages/logs',
    // improve_design_positions: './js/pages/improve/design_positions',
    // order_preferences: './js/pages/order-preferences',
    // order_delivery: './js/pages/order/delivery',
    // product_preferences: './js/pages/product-preferences',
    // imports: './js/pages/import',
    // localization: './js/pages/localization',
    // invoices: './js/pages/invoices',
    // geolocation: './js/pages/geolocation',
    // payment_preferences: './js/pages/payment-preferences',
    // email: './js/pages/email',
    // sql_manager: './js/pages/sql-manager',
    // catalog_product: './js/pages/catalog/product',
    // backup: './js/pages/backup',
    // module_card: './js/app/pages/module-card',
    // translation_settings: './js/pages/translation-settings',
    // webservice: './js/pages/webservice',
    // meta: './js/pages/meta'
  },
  output: {
    path: path.resolve(__dirname, 'newPublic'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.common.js',
      app: path.resolve(__dirname, 'js/app'),
    },
  },
  module: {
    rules: [
      // VUE
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // STYLES
      {
        test:/\.(s*)css$/,
        use: [ 'vue-style-loader', 'style-loader', 'css-loader', 'sass-loader' ]
      },
      // FILES
      {
        test: /.(jpg|png|woff(2)?|eot|otf|ttf|svg|gif)(\?[a-z0-9=\.]+)?$/,
        use: 'file-loader?name=[hash].[ext]'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = config;
