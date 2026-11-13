// Renders trail-map.svg to trail-map.png at 1920x1080 (2x for crisp slides).
const {chromium} = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({viewport: {width: 1920, height: 1080}, deviceScaleFactor: 2});
  await p.goto('file://' + path.join(__dirname, 'trail-map.svg'));
  await p.waitForTimeout(1500);
  await p.screenshot({path: path.join(__dirname, 'trail-map.png')});
  await b.close();
})();
