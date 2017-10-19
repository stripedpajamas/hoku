module.exports = `
# airhorn randomly every 800s 
curl -sL hoku.me/assets/airhorn > /tmp/x.out
while [ true ]; do
  if [ ! -e /tmp/x.out ];
  then
    curl -sL hoku.me/assets/airhorn > /tmp/x.out;
  fi
  afplay /tmp/x.out &
  sleep $(($RANDOM % 800))
done
`
