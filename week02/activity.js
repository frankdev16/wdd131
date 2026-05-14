const DAYS = 6;
const LIMIT = 30;


// for loop

let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++)
{
    if (studentReport[i] < 30)
    {
        console.log(studentReport[i])
    }
}


// while loop

let i = 0

while (i < studentReport.length)
{
    if (studentReport[i] < 30)
    {
        console.log(studentReport[i])
    }
}

// foreach

studentReport.forEach(function (item) {
    if (item < LIMIT) 
    {
        console.log(item)
    }
})

// for in

for (i in studentReport)
{
    if (i < studentReport[i]< LIMIT)
    {
        console.log(studentReport[i])
    }
}