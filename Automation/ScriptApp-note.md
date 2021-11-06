Apps Script is a tool developed by Google. It lets you use code to customize, extend and automate Google applications, like Gmail, Drive, Calendar, and more.

Apps Script is a tool developed by Google. It lets you use code to customize, extend and automate Google applications, like Gmail, Drive, Calendar, and more.

Apps Script also uses its own custom functions that connect with Google applications.

Each file in Drive has a unique id. The id is a string of characters and numbers, like this: 'a116da35'.

DriveApp.getFileById() takes this id and retrieves the matching file.

The .getName() method returns the name of the file.

.setName() sets the name of a file.

.makeCopy() creates a copy of a file. It returns a new file that has the same contents as the file it copied but a different id.

.getId() gets the id of a file.

If .makeCopy() is given a string as an argument, it will set the name of the copy to that string.

*****************************************************************************************
DocumentApp is like DriveApp, except it works with documents in Docs instead of files in Drive.

DocumentApp also allows you to access and modify the contents of documents, something you can't do with DriveApp.

For example, you can print and edit the text inside a document using DocumentApp.

DocumentApp.openById() is similar to DriveApp.getFileById(). It takes an id and gets the document with that id.

The .getName() method returns the name of the document file.

After opening a document with DocumentApp.openById(), retrieve the text of the document using .getText().

.replaceText() takes 2 arguments: a string to replace and a new string to put in its place.

Every occurrence of the string to replace is replaced with the new string.

let id = '1VFYFgTvngQzMgm-x1Kyejv1fiTWVTahG9G8x2a76sAM';

let doc = DocumentApp.openById(id);
let originalText = doc.getText();
console.log(originalText);

doc.replaceText('you', 'snakes');
let newText = doc.getText();
console.log(newText);

*****************************************************************************
In a spreadsheet, data is organized into horizontal rows and vertical columns, like this:

          A          B            C
  +--------------+-------+------------------+
1 |     Item     | Price |      Store       |
  +--------------+-------+------------------+
2 | Office Chair | $250  |  Cher's Chairs   |
  +--------------+-------+------------------+
3 |     Desk     | $400  |  Mable's Tables  |
  +--------------+-------+------------------+
4 |  Desk Lamp   |  $30  |  Gramp's Lamps   |
  +--------------+-------+------------------+
5 |     Sofa     | $600  | Grouch's Couches |
  +--------------+-------+------------------+
This spreadsheet has 5 rows and 3 columns.

Columns are ordered from left to right by the letters A - Z.

Rows are ordered by number, starting at 1.

Each cell in the sheet is named by its column letter and row number. For example:

    A     B    C
  +----+----+----+
1 | A1 | B1 | C1 |
  +----+----+----+
2 | A2 | B2 | C2 |
  +----+----+----+
3 | A3 | B3 | C3 |
  +----+----+----+

  A group of cells in a spreadsheet is called a "range". A range of cells is defined by first selecting a starting cell, followed by a colon : , and then an ending cell.

For example, the range A1:C2 selects the following cells from the spreadsheet above:

          
 +--------------+-------+------------------+
 |     Item     | Price |      Store       |
 +--------------+-------+------------------+
 | Office Chair | $250  |  Cher's Chairs   |
 +--------------+-------+------------------+

 When working with spreadsheet ranges in Apps Script, the data will be in the form of a nested array. For example, a range that selects the following cells:

        A           B              C
  +-------------+-------+----------------------+
1 | Flower Name | Price |       Store          |
  +-------------+-------+----------------------+
2 | Rose        | $2​.50 |      Roses R Us      |
  +-------------+-------+----------------------+
3 | Heather     | $1​.00 |      Flower City     |
  +-------------+-------+----------------------+
4 | Daisy       | $0​.25 |    Weeds of Leeds    |
  +-------------+-------+----------------------+
Is represented by the following nested array:

[
    ['Flower Name', 'Price', 'Store'],
    ['Rose', '$2​.50', 'Roses R Us'],
    ['Heather', '$1​.00', 'Flower City'],
    ['Daisy', '$0​.25', 'Weeds of Leeds']
]

Each item in the outer array is an array representing a row.

Each item in the inner array represents the cells in that row, ordered by column.

SpreadsheetApp.openById() use to access a spreadsheet.

let id = '1QE4pZs8efMoHKGOEHyXGT_nPZf1b_Sw7ssFCk2J2ueo';
let sheet =  SpreadsheetApp.openById(id);

.getRange().getValues() use to print some of spreadsheet's data.

let values = sheet.getRange('A1:c2').getValues();


