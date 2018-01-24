describe("Factorial", function() {
	var testCases = [
		{
			n : 0,
			factorial : 1
		},
		{
			n : 1,
			factorial : 1
		},
		{
			n : 2,
			factorial : 2
		},
		{
			n : 3,
			factorial : 6
		},
		{
			n : 4,
			factorial : 24
		},
	];

	testCases.forEach(function(testCases){
		it("Should returns " + testCases.factorial + " when n = " + testCases.n, function() {
			var result = Util.factorial(testCases.n);
			expect(result).toEqual(testCases.factorial);
		});
	})
});

describe("Arrangement", function() {
  	var testCases = [
		{
			n : 20,
			r : 3,
			arrangement : 6840
		},
		{
			n : 10,
			r : 3,
			arrangement : 720
		},
	];

	testCases.forEach(function(testCases){
		it("Should returns " + testCases.arrangement + " when n = " + testCases.n + " and r = " + testCases.r, function() {
			var result = Util.arrangement(testCases.n,testCases.r);
			expect(result).toEqual(testCases.arrangement);
		});
	})
});

describe("Combinaison", function() {
  	var testCases = [
		{
			n : 20,
			r : 3,
			combination : 1140
		},
		{
			n : 10,
			r : 3,
			combination : 120
		},
	];

	testCases.forEach(function(testCases){
		it("Should returns " + testCases.combination + " when n = " + testCases.n + " and r = " + testCases.r, function() {
			var result = Util.combination(testCases.n,testCases.r);
			expect(result).toEqual(testCases.combination);
		});
	})
});

describe("isPrime", function() {
	var testCases = [
		{
			n : 2,
			isPrime : true
		},
		{
			n : 3,
			isPrime : true
		},
		{
			n : 23,
			isPrime : true
		},
		{
			n : 89,
			isPrime : true
		},
		{
			n : 4,
			isPrime : false
		},
	];

	testCases.forEach(function(testCases){
		it("Should returns " + testCases.isPrime + " when n = " + testCases.n, function() {
			var result = Util.isPrime(testCases.n);
			expect(result).toEqual(testCases.isPrime);
		});
	})
});


describe("isPrime", function() {
	var testCases = [
		{
			n : 0,
			isPrime : false
		},
		{
			n : 1,
			isPrime : false
		},
		{
			n : 2,
			isPrime : true
		},
		{
			n : 3,
			isPrime : true
		},
		{
			n : 4,
			isPrime : false
		},
		{
			n : 23,
			isPrime : true
		},
		{
			n : 89,
			isPrime : true
		},
	];

	testCases.forEach(function(testCases){
		it("Should returns " + testCases.isPrime + " when n = " + testCases.n, function() {
			var result = Util.isPrime(testCases.n);
			expect(result).toEqual(testCases.isPrime);
		});
	})
});


describe("sumPrime", function() {
	var testCases = [
		{
			n : 6,
			sumPrime : 10
		},
		{
			n : 8,
			sumPrime : 17
		},
	];

	testCases.forEach(function(testCases){
		it("Should returns " + testCases.sumPrime + " when n = " + testCases.n, function() {
			var result = Util.sumPrime(testCases.n);
			expect(result).toEqual(testCases.sumPrime);
		});
	})
});

describe("fizzBuzz", function() {
	var testCases = [
		{
			n : 15,
			fizzBuzz : [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
		},
	];

	testCases.forEach(function(testCases){
		it("Should returns " + testCases.fizzBuzz + " when n = " + testCases.n, function() {
			var result = Util.fizzBuzz(testCases.n);
			expect(result).toEqual(testCases.fizzBuzz);
		});
	})
});


describe("cipher", function() {
	var testCases = [
		{
			phrase : "Test Unitaire",
			cipher : "Uftu Vojubjsf"
		},
	];

	testCases.forEach(function(testCases){
		it("Should returns " + testCases.cipher + " when phrase = " + testCases.phrase, function() {
			var result = Util.cipher(testCases.phrase);
			expect(result).toEqual(testCases.cipher);
		});
	})
});
















