module.exports = `
curl -sL hoku.me/assets/airhorn > /tmp/x.out
defaults write .GlobalPreferences com.apple.sound.beep.sound /tmp/x.out
# diversion
while [ true ]; do
  sleep $(($RANDOM % 300))
done
`
