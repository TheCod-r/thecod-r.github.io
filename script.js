const $ = q => document.querySelector(q);
const projects = [["Christmas-Challenge", "Christmas Challenge 🌲"], ["RCGG", "Random Chess Game Generator ♟️"], ["Old-Word-Finder", "Word Finder [OLD] 📻"], ["Word-Finder", "Word Finder [NEW] 🔍"]];
projects.forEach(project => $("#projects").innerHTML += `<li><a href="\\${project[0]}\\">${project[1]}</a></li>`);
