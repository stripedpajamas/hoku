module.exports = `
# plays the error sound sometime between 0 and 30s
while [ true ]; do
  afplay /System/Library/Sounds/Funk.aiff &
  sleep $(($RANDOM % 30))
done
`;

