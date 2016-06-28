var expect = chai.expect;

describe('FibonacciSequenceCalculator', ()=> {

    var underTest;
    var actual;
    var position;

    beforeEach(()=> {
        underTest = new FibonacciSequenceCalculator();
    });

    describe('Excpetion Handling', () => {

        [
            null,
            undefined,
            'test',
            [1, 2, 3],
            {name: 'Hans'}
        ].forEach(checkTestCase);

        function checkTestCase(testCase) {
            it('calc() wirft fuer "' + testCase + '" eine Exception', ()=> {
                position = testCase;

                expect(()=> {
                    execute()
                }, 'muss eine Exception werden').to.throw(Error, 'kein gueltiger Wert übergeben')
            });
        }

    });

    describe('ok', () => {

        [
            {value: 0, expected: 0},
            {value: 1, expected: 1},
            {value: 2, expected: 1},
            {value: 3, expected: 2},
            {value: 4, expected: 3},
            {value: 5, expected: 5},
            {value: 10, expected: 55},
            {value: 100, expected: 354224848179261915075}
        ].forEach(checkTestCase);

        function checkTestCase(testCase) {

            it('calc() gibt für den Wert "' + testCase.value + '" das Ergebnis "' + testCase.expected + '" zurück', () => {
                position = testCase.value;

                execute();

                expect(actual, 'muss dem Wert "' + testCase.expected + '" entsprechen').to.be.equal(testCase.expected);
            });
        }

    });

    function execute() {
        actual = underTest.calc(position);
    }

});