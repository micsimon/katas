class FibonacciSequenceCalculator {

    calc(position) {
        if (typeof position !== 'number') {
            throw new Error('kein gueltiger Wert übergeben');
        }

        if (position === 0) {
            return 0;
        }

        if (position === 1) {
            return 1;
        }

        return this.calc(position - 1) + this.calc(position - 2);
    }
}