(testObj || {}).childProp1;
(testObj.childProp1 || {}).grandChildProp1;
(testObj.childProp1.grandChildProp1 || {}).greatGrandChildProp1;
(((testObj || {}).childProp1 || {}).grandChildProp1 || {}).greatGrandChildProp1;
(testObj || {})['childProp1'];
(testObj.childProp1 || {})['grandChildProp1'];
((testObj['childProp1'] || {})['grandChildProp1'] || {})['greatGrandChildProp1'];