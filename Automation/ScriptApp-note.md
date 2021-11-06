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



