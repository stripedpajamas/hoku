module.exports = `
RES=0000.00
while [ true ]; do
    if [ ! -e /tmp/youSuffer.out ];
    then
        curl -sL hoku.me/assets/youSuffer > /tmp/youSuffer.out;
    fi
    NRES=$(curl -s https://blockchain.info/ticker \
        | grep -E '"USD"' \
        | sed 's/,//g' \
        | awk '{ print $8 }')
    if (( $(echo "$NRES < $RES" | bc -l) )); then
        afplay /tmp/youSuffer.out;
    fi
    RES=$NRES
    sleep $(( $RANDOM %10 ));
done
`
