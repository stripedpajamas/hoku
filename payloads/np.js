module.exports = `
# open notepad randomly every 800s and say "gotcha"
echo "" > /tmp/gotcha.txt;
while [ true ]; do
  if [ ! -e /tmp/gotcha.txt ];
  then
    echo "" > /tmp/gotcha.txt;
  fi
  open /tmp/gotcha.txt &
  say "gotcha" &
  sleep $(($RANDOM % 800))
done
`