Util = {};

/**
 * Calcule la factorielle d'un nombre n. Exp : 5! = 5 * 4 * 3 * 2 * 1
 * @param {number} n
 * @returns {number}
 */
Util.factorial = function(n) {
	if (0 == n ) {
		return 1;
	}
	return n * Util.factorial(n - 1);
};

/**
 * Calcule la disposition ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.arrangement(n, r) = n! / (n - r)!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.arrangement = function(n, r) {
	return Util.factorial(n) / Util.factorial(n - r);
};

/**
 * Calcule la disposition non ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.combination(n, r) = n! / (n - r)!r!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.combination = function(n, r) {
	return Util.factorial(n) / (Util.factorial(n - r) * Util.factorial(r));
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
	if(n == 0 || n ==1)
		return false;
	for (var i = 2; i < n; i++) 
		if (n % i == 0)
			return false;
	return true; 
};


/**
 * Additionne l'ensemble des nombres de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
	var sum = 0;
	for (var i = 0; i <= n; i++) 
		if (Util.isPrime(i))
			sum = sum + i;
	return sum; 
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
	var tab = [];
	for(var i = 1;i<=n;i++){
		if(i % 3 == 0 && i % 5 == 0)
			tab.push("FizzBuzz");
		else if (i % 3 == 0)
			tab.push("Fizz");
		else if (i % 5 == 0)
			tab.push("Buzz");
		else
			tab.push(i);
	}
	return tab;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function(phrase) {
	var response = "";
	for(var i = 0; i < phrase.length ; i++) {
		//var tmp1 = phrase[i].charCodeAt(0);
		//var tmp2 = tmp1 + 1;
		//var tmp = String.fromCharCode(phrase.charCodeAt[i]+1);
		var tmp = phrase.charCodeAt(i);
		var tmp2 = tmp + 1;
		if('z' == phrase[i]) {
			tmp2 = 'a'.charCodeAt(0);
		} else if ('Z' == phrase[i]) {
			tmp2 = 'A'.charCodeAt(0);
		} else if (' ' == phrase[i]) {
			tmp2 = ' '.charCodeAt(0);
		}

		response += String.fromCharCode(tmp2);
	}
	return response;
};
