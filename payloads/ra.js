module.exports = `
# open random app (ra) in the background every minute
count="$(ls -l /Applications/ | wc -l)"
apps=( /Applications/* )
while [ true ]; do
  r=$RANDOM
  rand=$(($r % $count))
  echo $rand
  echo ${apps[rand]}
  sleep 60
done
`
