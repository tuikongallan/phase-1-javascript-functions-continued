// If no argument is passed, this function resorts to the default argument passed in the parameter. The $ concatenation makes this possible.

function saturdayFun (activity1 = 'roller-skate') {
    return `This Saturday, I want to ${activity1}!`
};

saturdayFun();

// Implement a function expression 

let mondayWork = function(monActivity= 'go to the office') {
    return `This Monday, I will ${monActivity}.`
};
mondayWork();

// Implement a function called wrapAdjective:

function wrapAdjective (hashTag = '#'){
    return function (adjective='100% a dedicated programmer') {
        return `You are ${hashTag}${adjective}${hashTag}!`
    }
}
wrapAdjective()()