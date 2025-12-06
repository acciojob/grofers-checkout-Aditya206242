const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price <td> elements
  const priceCells = document.querySelectorAll(".price");

  let total = 0;

  priceCells.forEach((cell) => {
    total += Number(cell.textContent); // Convert text to number
  });

  // Create a new table row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  // Make the cell span across both columns
  newCell.colSpan = 2;
  newCell.textContent = total;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
