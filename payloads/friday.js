module.exports = `
# play friday every friday
curl -sL hoku.me/assets/friday > /tmp/friday.out
while [ true ]; do
  if [ ! -e /tmp/friday.out ];
  then
    curl -sL hoku.me/assets/friday > /tmp/friday.out;
  fi
  # get the current date
  tmpDate="${date}";
  # string parse the first argument of the date
  tmpDay="$( echo $tmpDate | head -n1 | awk '{print $1;}')";
  # if the day is friday, play friday!
  if [ "$tmpDay" == "Sat" ]; then
    afplay /tmp/friday.out;
  fi
  sleep 86400;
done
`
