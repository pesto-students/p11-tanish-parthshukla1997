// Put your solution here

let nums = [4, 2, 8];

function divideArray(nums) {
  const even = [];
  const odd = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      odd.push(nums[i]);
    } else {
      even.push(nums[i]);
    }
  }

  if(odd.length == 0)
  {
    console.log("None");
  }
  else{
    console.log("Odd Number: ", odd);
  }
  console.log("Even Number: ", even);
  console.log("Odd Number: ", odd);
}

