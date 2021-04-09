# CPSC 2600 final project
Student Name: Adrian To

## Passage Chronicle
Recently I've been planning a Dungeons & Dragon campaign that I will be running for my friends,
and I thought it would be neat to have worldbuilding in the form of various newspaper articles
detailing their adventures. This here is what I came up with for the project, a website that
displays all their articles and their basic character info here. Another great thing with using
Dungeons and Dragons as the topic, Wizards of the Coast (D&D parent company) allows all 
fan content to use their own assets, as long as the final product is free. There also must be a 
disclaimer stating this is not official WoTC content as well.

For the website, there are two different kinds of data you can submit to the MongoDB collection:
characters and articles. For the characters data type, I just receive basic information about
each D&D character - Their name, backstory, and basic stats. The character data type also
contains an array of articles data types, to indicate which character wrote which article.
There is also a form to submit new articles as any of the characters.

### Persisting Issues
- I've kept trying to fix the key error issue for my various pages, but it keeps returning the
same error in the console, and I'm not sure how else to fix it at the moment.
- Still having issues with getting my mobile layout where I want it to be.

### To run the project
- npm install
- npm run dev
- npm run watch

### Additional Node Modules Installed
- react-router-dom
- Clarity Core
- react-icons
- url-loader
- file-loader
- assert

### Artwork Sources
- https://dnd.wizards.com/articles/features/character-portraits

### Legal/Copyright
- https://company.wizards.com/en/legal/fancontentpolicy

### Additional Resources for Code/Styling
- https://www.w3schools.com/howto/howto_js_sticky_header.asp
- React Website Responsive Tutorial: https://www.youtube.com/watch?v=3nLTB_E6XAM
- React Sidebar Navigation Tutorial: https://www.youtube.com/watch?v=CXa0f4-dWi4
