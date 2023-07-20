const express =require('express')
const app = express();



//app.use(checkJwt)
// req.isAuthenticated is provided from the auth router
app.get('/',(req, res) => {
  res.json("Hello World!!")

});

app.listen(4000, () => {
  console.log("Working");
});
