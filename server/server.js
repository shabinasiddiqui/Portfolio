// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql");

// const app = express();
// app.use(express.json());
// app.use(cors());
// const port = 3001;

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "contactDetails",
// });

// // Use the database
// pool.query(`USE ${pool.config.connectionConfig.database}`, (error) => {
//   if (error) {
//     console.error("Error selecting database:", error);
//   } else {
//     console.log("Using database:", pool.config.connectionConfig.database);
//     createContactsTable(); // Create the contacts table after selecting the database
//   }
// });

// // Function to create the contacts table
// function createContactsTable() {
//   const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS contacts (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       email VARCHAR(255) NOT NULL,
//       emailSubject VARCHAR(255) NOT NULL,
//       fullName VARCHAR(255) NOT NULL,
//       message TEXT NOT NULL,
//       mobileNumber VARCHAR(20) NOT NULL
//     )
//   `;

//   // Create the contacts table if it doesn't exist
//   pool.query(createTableQuery, (error) => {
//     if (error) {
//       console.error("Error creating contacts table:", error);
//     } else {
//       console.log("Contacts table created successfully");
//     }
//   });
// }

// // ... Rest of the server code ...

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// app.post("/api/contact", (req, res) => {
//   const { email, emailSubject, fullName, message, mobileNumber } = req.body;
//   const contactData = {
//     email,
//     emailSubject,
//     fullName,
//     message,
//     mobileNumber,
//   };

//   // Insert the contact details into the database
//   pool.query("INSERT INTO contacts SET ?", contactData, (error, results) => {
//     if (error) {
//       console.error("Error inserting contact details:", error);
//       res.status(500).json({ success: false }); // Send an error response to the client
//     } else {
//       console.log("Contact details inserted successfully");
//       res.status(200).json({ success: true }); // Send a success response to the client
//     }
//   });
// });

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
