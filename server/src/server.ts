import express from 'express';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3000;  // Use Heroku's dynamic port or default to 3000 for local development

// Update this if your build directory location changes
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.send('Hello, Portfolio Backend!');
});

// Serve the React application on all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
