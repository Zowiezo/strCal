let calculator = (function() {

    function add(numberString) {
        if (numberString === '') {
            return 0;
        }
        let delimiter = getDelimiter(numberString)
        let formattedInput = formatInput(numberString)
        return calculateSum(getNumbers(formattedInput, delimiter))
    };

    function formatInput(input) {
        let delimiterRegExp = /^(\/\/.*\n)/
        let matches = delimiterRegExp.exec(input)
        if (matches && matches.length > 0) {
            return input.replace(delimiterRegExp, '')
        };
        return input;
    };

    function getDelimiter(input) {
        let delimiters = []
        let multipleDelimiterRegexp = /(?:^\/\/)?\[([^\[\]]+)\]\n?/g
        let matches = multipleDelimiterRegexp.exec(input)
        while (matches !== null) {
            delimiters.push(matches[1])
            matches = multipleDelimiterRegexp.exec(input)
        };
        if (delimiters.length > 0) {
            return new RegExp('[' + delimiters.join('') + ']')
        };
        matches = /^\/\/(.*)\n/.exec(input)
        if (matches && matches[1]) {
            return matches[1]
        };
        return /[\n,]/;
    };

    function getNumbers(string, delimiter) {
        return string.split(delimiter)
            .filter(n => n !== '')
            .map(n => parseInt(n))
    };

    function calculateSum(numbers) {
        let negatives = [];
        let finalSum = numbers.reduce((sum, n) => {
            if (n > 1000) {
                return 0;
            }

            if (n < 0) {
                negatives.push(n);
                return 0;
            }
            return sum + n;
        }, 0);

        if (negatives.length > 0) {
            return "negative numbers not allowed"
        };
        return finalSum;
    };

    return {
        add
    };

}());
