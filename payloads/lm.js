module.exports = `
curl -sL hoku.me/assets/lawnmower > /tmp/x.png
#curl -sL localhost:3000/assets/lawnmower > /tmp/x.png
#osascript -e 'tell application "Finder" to set desktop picture to POSIX file "/tmp/x.png"'
sqlite3 ~/Library/Application\\ Support/Dock/desktoppicture.db "update data set value = '/tmp/x.png'";
 killall Dock;
`
