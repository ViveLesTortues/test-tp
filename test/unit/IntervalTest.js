describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});

describe("Interval - includes", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(15, 16),
        new Interval(10, 20)

    ].forEach(function (interval) {
        it("should includes " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 12),
		new Interval(17, 22),
		new Interval(8, 9),
        new Interval(21, 22),
		new Interval(8, 21)

    ].forEach(function (interval) {
        it("should not includes " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });
});


describe("Interval - union", function () {
    testedInterval = new Interval(10, 20);

    [
		{request :new Interval(8, 12), expected : new Interval(8,20)},
		{request :new Interval(8, 9), expected : [new Interval(8,9), new Interval(10, 20)]},
		{request :new Interval(21, 22), expected : [new Interval(10,20), new Interval(21,22)]},
		{request :new Interval(8, 21), expected : new Interval(8,21)},
		{request :new Interval(15, 16), expected : new Interval(10,20)},
		{request :new Interval(10, 20), expected : new Interval(10,20)}

    ].forEach(function (interval) {
        it("union " + testedInterval.toString() + " and " + interval.request.toString(), function () {
            expect(testedInterval.union(interval.request)).toEqual(interval.expected);
        });
    });
});

describe("Interval - intersection", function () {
    testedInterval = new Interval(10, 20);

    [
		{request :new Interval(8, 12), expected : new Interval(10,12)},
		{request :new Interval(8, 9), expected : null},
		{request :new Interval(21, 22), expected : null},
		{request :new Interval(8, 21), expected : new Interval(10,20)},
		{request :new Interval(15, 16), expected : new Interval(15,16)},
		{request :new Interval(10, 20), expected : new Interval(10,20)}

    ].forEach(function (interval) {
        it("intersection" + testedInterval.toString() + " and " + interval.request.toString(), function () {
            expect(testedInterval.intersection(interval.request)).toEqual(interval.expected);
        });
    });
});

