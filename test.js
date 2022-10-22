rating = 1.5;
let starArray = [];

for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
        starArray.push('solid');
        continue;
    }
    else {
        if ((i == parseInt(rating + 1)) && ((i - rating) != 0)) {
            if (Number.isInteger(rating)) {
                starArray.push('outline');
                continue;
            }
            else {
                starArray.push('half');
                continue;
            }
        }
        else {
            starArray.push('outline');
            continue;
        }
    }
}

console.log(starArray);



/*
1) Declare an array.
2) Run loop for 5 times. 
3) If the rating is greater than i

rating: 2.5

Loop: 1 
if(rating is greater than i) push solid, continue

Loop: 2
if(rating is greater than i) push solid, continue

Loop: 3
if(rating is greater than i) push solid, continue, 
else: Check (rating - i). If zero, push outline, else push half star

Loop: 4
push outline

Loop: 5
push outline



*/


