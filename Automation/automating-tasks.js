/**
We'll use Apps Script to create a function that automates a tedious task.

The function will automate the process of creating contracts, but can be adapted for 
other uses.

What if you had to create a lot of contracts? Each contract is almost identical, minus 
its filename and a few key terms.

You could create the first contract. Then, to make the next contract, you could copy the 
first one, change its name, and update its key terms.

You'd then repeat that process until you finished every contract.

That's a lot of repetition! What about using Apps Script to do it another way?

You'll write a function that uses DriveApp, DocumentApp, and SpreadsheetApp to automate 
the process.

To work, the function will need 2 files.

First, a contract document in Docs, where each key term is placeholder text. 
For example:

This agreement certifies that CLIENT will pay $FEE for SERVICE.

Second, a spreadsheet in Sheets that stores the values of the key terms for every contract. 
For example:

           A          B             C
  +---------------+-------+--------------------+
1 |     Client    |  Fee  |       Service      |
  +---------------+-------+--------------------+
2 |     Saanvi    |  275  |    Tree Pruning    |
  +---------------+-------+--------------------+
3 |     Clara     |  50   |       Mowing       |
  +---------------+-------+--------------------+
4 |     Ayako     |  150  |    Leaf Removal    |
  +---------------+-------+--------------------+
5 |      Nia      |  300  |  Landscape Design  | 
  +---------------+-------+--------------------+

To create the contracts, the function will loop through a range on the spreadsheet.

For each row in that range, it will create and name a new a copy of the contract. Then, 
it will open the copy and replace its placeholder text with text from the spreadsheet.

For example, if the range included the first row in the spreadsheet above, it would create this file:

This agreement certifies that Saanvi will pay $275 for True Pruning.

In the end, the function will output as many files as there are rows in the range.

For example, using the range 'A2:C3' from the spreadsheet above would create 2 files, while 'A2:C5' would create 4 files.

 */

let contractId = '226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0';
 
//create a copy of a contract document from Docs, rename the copy, and returns its id.
function makeCopy(id, name) {
    let file = DriveApp.getFileById(id);
    let copy = file.makeCopy(name);
    return copy.getId();
}

console.log(makeCopy(contractId, 'Copy of the contract'));
