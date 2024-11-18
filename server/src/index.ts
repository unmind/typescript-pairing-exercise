import app from "./app";

const port = 9000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
