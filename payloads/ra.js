module.exports = `
# open random app (ra) in the background every minute
path="/Applications/*"
count="$(ls -l $path | wc -l)"
files=($path)
while [ true ]; do
  r=$RANDOM
  rand=$(($r % $count))
  open -j "${files[rand]}" &
  sleep 60
done
`