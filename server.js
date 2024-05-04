// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Enable CORS
// app.use(cors());

// // Other server setup code...

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const app = express();

// Other middleware and route configurations...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});