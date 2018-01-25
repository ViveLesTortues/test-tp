Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
	return this.end >= interval.end && this.start <= interval.start; 
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {
	if(!this.overlaps(interval)) {
		if(this.start < interval.start) {
			return [this, interval];	
		}
		return [interval, this];
	}
	if(this.start < interval.start) {
		st = this.start;
	} else {
		st = interval.start;
	}
	if(this.end < interval.end) {
		en = interval.end;
	} else {
		en = this.end;
	}
	return new Interval(st, en);
	
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
	if(!this.overlaps(interval)) {
		return null;
	}
	if(this.start < interval.start) {
		st = interval.start;
	} else {
		st = this.start;
	}
	if(this.end > interval.end) {
		en = interval.end;
	} else {
		en = this.end;
	}
	return new Interval(st, en);
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {

};



