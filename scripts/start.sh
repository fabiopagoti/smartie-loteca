eslint --format node_modules/eslint-summary/summary.js . 
eslint . -f node_modules/eslint-html-reporter/reporter.js -o scripts/start.html
open ./scripts/start.html
pm2-dev index.js