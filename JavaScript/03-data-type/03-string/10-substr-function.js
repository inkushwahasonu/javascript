// substr() function

// str.substr(from, number-of-char)



let str = "stringify";
console.log(str.substr(2, 4));   // ring ,     from the 2nd position get 4 characters
console.log(str.substr(-4, 2));  // gi ,       from the -4th position get 2 characters






/**
 
    method	                                 selects…                                  	negatives
slice(start, end)	            from start to end (not including end)	            allows negatives
substring(start, end)       	between start and end	                            negative values mean 0
substr(start, length)	        from start get length characters                 	allows negative start

 */