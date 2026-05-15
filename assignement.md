Grade Calculator Assignment: Render Results
| Implement renderCalculator() Function

Your Task
Complete the renderCalculator() function to display grade calculation results on the webpage. Three helper functions are already written—you must use them to update the DOM and show results to users.

What You're Given (Complete Helper Functions)
These functions are already written and ready to use:

Function	Returns	Example
calculateWeightedAverage(subjects)	Average grade as %	82.5
calculateGPA(average)	GPA on 4.0 scale	3.2
getGradeLetter(grade)	Grade object with letter	{letter: "B", color: "..."}
Requirements
Your renderCalculator() function must:

✓ Calculate results using the three helper functions
✓ Update 4 display cards (average, GPA, grade letter, total credits)
✓ Animate the progress bar smoothly
✓ Build the results table with all subject rows
✓ Run automatically when the page loads
✓ Have no console errors
Step-by-Step Implementation
STEP 1: Calculate the Values
Get the four key values needed for display:

function renderCalculator() {
  const average = calculateWeightedAverage(subjects);
  const gpa = calculateGPA(average);
  const grade = getGradeLetter(parseFloat(average));
  const credits = subjects.reduce((sum, s) => sum + s.credits, 0);
}
** Tip:** The reduce() method loops through subjects and adds up all credits. It's the same pattern used in calculateWeightedAverage().

STEP 2: Update the Display Cards
Select the four card elements and update their text:

  const avgEl = document.getElementById("avg-display");
  const gpaEl = document.getElementById("gpa-display");
  const grEl = document.getElementById("grade-display");
  const crEl = document.getElementById("credits-display");

  if (avgEl) avgEl.textContent = average + "%";
  if (gpaEl) gpaEl.textContent = gpa.toFixed(1);
  if (grEl) grEl.textContent = grade.letter;
  if (crEl) crEl.textContent = credits;
** Important:** Always check if (element) before using it. If the HTML doesn't exist, your code won't crash.

STEP 3: Animate the Progress Bar
Animate the progress bar with a smooth fill effect:

  const bar = document.getElementById("progress-bar");
  if (bar) {
    setTimeout(function() {
      bar.style.width = average + "%";
    }, 200);
  }
** Why 200ms delay?** It lets CSS transitions animate smoothly. Try it without the delay—it won't look as polished!

STEP 4: Build the Results Table
Create table rows for each subject dynamically:

  const tbody = document.getElementById("calculator-body");
  if (tbody) {
    tbody.innerHTML = "";  // Clear old rows
    subjects.forEach(s => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td style="padding: 12px;">${s.name}</td>
        <td style="padding: 12px;">${s.grade}%</td>
        <td style="padding: 12px;">${s.credits}</td>
        <td style="padding: 12px;">${(s.grade * s.credits).toFixed(0)}</td>
      `;
      tbody.appendChild(row);
    });
  }
** Key points:**

forEach() loops through each subject
Template literals (`) let you insert values with ${}
Always clear old HTML first with tbody.innerHTML = ""
STEP 5: Run on Page Load
Make the function run automatically when the page loads:

document.addEventListener("DOMContentLoaded", renderCalculator);
Key DOM Methods You'll Use
Method	Purpose	Example
document.getElementById(id)	Find an HTML element by ID	document.getElementById("avg-display")
element.textContent	Set or read element's text (safe)	el.textContent = "85%"
element.style.property	Change CSS styles from JavaScript	bar.style.width = "85%"
array.forEach(callback)	Loop through each array item	subjects.forEach(s => { ... })
document.createElement(tag)	Create a new HTML element	document.createElement("tr")
parent.appendChild(child)	Add an element to the DOM	tbody.appendChild(row)
setTimeout(callback, ms)	Run code after a delay	setTimeout(() => {...}, 200)
Common Mistakes to Avoid
Mistake	Problem	Fix
Missing if (element) check	Code crashes if element doesn't exist	Always check before using: if (el) { ... }
Using ' or " instead of `	Template literals won't work, ${} shows as text	Use backticks: `text ${value}`
Not clearing tbody.innerHTML	Old table rows stay when reloading	Add tbody.innerHTML = "" first
Forgetting parseFloat() on average	Grade lookup fails with string value	Use: getGradeLetter(parseFloat(average))
Using .innerHTML for plain text	Security risk (HTML injection)	Use .textContent instead
Calling function before DOMContentLoaded	Elements don't exist yet	Use document.addEventListener("DOMContentLoaded", ...)
Testing Checklist
Follow these steps to test your work:

Open in browser: Load calculator.html
Check console: Press F12 → Console tab → No errors should appear
Average display: Verify the % shows correctly (e.g., "82.5%")
GPA display: Check format is X.X (e.g., "3.2")
Grade letter: Should show A, B, C, D, or F
Total credits: Should show the sum of all subject credits
Progress bar: Watch it smoothly fill on page load
Table: Verify all 4 subjects appear with correct calculations
Test reload: Edit data.js values and reload—everything should update
