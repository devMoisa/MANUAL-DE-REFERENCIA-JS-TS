// Constants can't be used to increment new values.

// Rule 1: variable++ is the same that variable = variable + 1

// Rule 2: when we use ++ after the variable,
// the logic to add new value will be applyed in the end of lecture.

let pos_counter = 1;
pos_counter++; // (Pós) 2
pos_counter++; // (Pós) 3
pos_counter++; // (Pós) 4
console.log("pos_counter: ", pos_counter); // 4

let pos_counter_POC = 1;
console.log(pos_counter_POC++); // 1 (Cuz, he first execute the console.log and then concat the new value)
console.log("poc_pos_counter:", pos_counter_POC); // 2 (Here the new value already has added);
// Rule 3: when we use ++ before the variable,
// the logic of add new value will be added on the start of lecture.

let pre_counter = 1;
++pre_counter; // (Pré) 2
++pre_counter; // (Pré) 3
++pre_counter; // (Pré) 4
console.log("pre_counter: ", pre_counter); // 4

let pre_counter_POC = 1;
console.log("pre_counter_POC:", ++pre_counter_POC); // 2 (Cuz, here he first add the value and then execute the log)
