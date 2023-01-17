let mas1 = [1,2,3,6,8,1,6,3,2,1,0,4];
let mas2 = ['one', 'two','three'];

function bubbleSort(mas1)
{
    for(let i = 0; i < mas1.length; i++)
    {
        for(let j = 0; j < mas1.length; j++)
        {
            if(mas1[j+1] < mas1[j])
            {
                let temp = mas1[j];
                mas1[j] = mas1[j+1];
                mas1[j+1] = temp;
            }
        }
    }
    return mas1;
}

let masSort = bubbleSort(mas1);
console.log(masSort);

for(let x = 0; x < mas2.length; x++)
{
  masSort.push(mas2[x]);
}

console.log(masSort);