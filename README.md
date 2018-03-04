Hello!

To run this locally:
1) cd to where package.json is
2) npm install
3) npm start
4) go to http://localhost:4200/

This was written in Angular 5

Application structure explained: 
In the home component, it contains both the header (where Add Note button lives) and the notes view comp (which 
displays all of the user's notes created so far). The header component is a dumb component which only lets the notes 
view component know that the user has chose to wanting to add a note. Then the notes view comp would then trigger 
to open the Add Note modal/comp. When the user opts to edit a note, the same Add Note comp would display but only in 
edit mode. 

The state is being persisted in the Notes Container object. If I had more time, I would implement an actual Redux store 
for persisting the state as I anticipate the features would get more complicated. For now, the notes are being stored 
in an object with the key value pair being the note id and the note object itself. This makes adding, deleting, and 
editing a note a constant time operation. 

Thank you so much for your time! This was an interesting little exercise :)    
  

