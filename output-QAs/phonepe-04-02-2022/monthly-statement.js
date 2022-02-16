/*
In the phonepe application, we need to create one page where we can show the users the money spent by them in the various categories during that particular year. For the same, you are provided an array of objects containing details of transaction. Each object will have category, amount and date of transaction - 
  {
	  type: 'grocery',
    amount: 600,
    date: '05-21-2021'
  }

For simplicity, you can assume following : 
  1. The type will be string.
  2. The date will be in format MM-DD-YYYY
  3. The amount is in rupees of type number
  
  
Create a function getTransactions which will take 2 input params - 
  1. transactions (array of objects)
  2. year (Year can be provided as string or number type. You need to handle both)
  
and return the output (aggregated all the expenses in object by month for that particular year)
  Note: 
    1. The output is an object where key is the month in 3 char format(e.g. if date='04-04-2021', month='apr') and value is an object containing aggregated expenses        for each category. Each object should also contain total expenditure for that month with key as *total*. You can use the monthMapper function to get mapping        of month number to string.
    2. The amount should be in the number format

Sample Input 1. 
  [
	{
  	type: 'grocery',
    amount: 600,
    date: '05-21-2021'
  },
	{
  	type: 'bill',
    amount: 500,
    date: '04-21-2021'
  },
  {
  	type: 'medical',
    amount: 400,
    date: '05-21-2021'
  },
  {
  	type: 'grocery',
    amount: 300,
    date: '04-21-2021'
  },
  {
  	type: 'food',
    amount: 200,
    date: '04-21-2021'
  },
  {
  	type: 'food',
    amount: 100,
    date: '04-21-2021'
  },
	{
  	type: 'grocery',
    amount: 400,
    date: '12-21-2020'
  }
]

Input Year=2021

Output: 
{
	apr: {
			food: 300, //total expense of food
      grocery: 300,
      bill: 500,
      total: 1100 //total expense for the april month
  },
  may: {
  		medical: 400,
      grocery: 600,
      total: 1000
      }
}

Sample Input 2: 
  [
	{
  	type: 'grocery',
    amount: 100,
    date: '05-21-2020'
  },
	{
  	type: 'bill',
    amount: 500,
    date: '04-21-2021'
  },
  {
  	type: 'medical',
    amount: 400,
    date: '05-21-2020'
  },
  {
  	type: 'grocery',
    amount: 300,
    date: '04-21-2021'
  }
]

Sample Output 2:
  {
  may: {
  		grocery: 100,
      medical: 400,
      total: 500
      }
}

export function monthMapper(){
	return {
  	0: 'jan',
    1: 'feb',
    2: 'mar',
    3: 'apr',
    4: 'may',
    5: 'jun',
    6: 'jul',
    7: 'aug',
    8: 'sep',
    9: 'oct',
    10: 'nov',
    11: 'dec'
  }
}
  
*/

