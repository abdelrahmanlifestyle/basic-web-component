
const fs = require('fs-extra');
const concat = require('concat');
// (async function build() {
concatenate = async () =>{
  const files = [
    './dist/basic-web-component/runtime.js',
    './dist/basic-web-component/polyfills.js',
    // './dist/basic-web-component/scripts.js',
    './dist/basic-web-component/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/basic-web-component.js');
  // await fs.copyFile('./dist/basic-web-component/styles.css', 'elements/styles.css')
  // await fs.copy('./dist/basic-web-component/assets/', 'elements/assets/' )

}
concatenate().then();
