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


