module.exports = `
# airhorn randomly every half hour
curl -sL hoku.me/assets/airhorn > /tmp/x.out
# curl -sL localhost:3000/assets/airhorn > /tmp/x.out
while [ true ]; do
  afplay /tmp/x.out &
  sleep $(($RANDOM % 1800))
done
`
