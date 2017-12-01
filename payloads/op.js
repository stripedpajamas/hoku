module.exports = `
#!/bin/bash
sleep 600
for app in /Applications/*
do
  open "$app" &
done
`
