module.exports = `
#curl -sL hoku.me/assets/lawnmower > /tmp/x.png
curl -sL localhost:3000/assets/lawnmower > /tmp/x.png
osascript -e 'tell application "Finder" to set desktop picture to POSIX file "/tmp/x.png"'
`
