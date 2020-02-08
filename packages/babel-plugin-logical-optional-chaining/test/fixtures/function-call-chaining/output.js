(testFunction && typeof testFunction === "function") && testFunction('arg');
((testObj || {}).method && typeof (testObj || {}).method === "function") && (testObj || {}).method('arg');
(((testObj || {}).childProp1 || {}).method && typeof ((testObj || {}).childProp1 || {}).method === "function") && ((testObj || {}).childProp1 || {}).method('arg1', 'arg2');
((testArray || [])[0] && typeof (testArray || [])[0] === "function") && (testArray || [])[0]('arg');
(((testArray || [])[0] || {}).testMethod && typeof ((testArray || [])[0] || {}).testMethod === "function") && ((testArray || [])[0] || {}).testMethod('arg1', 'arg2');