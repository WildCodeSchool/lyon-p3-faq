const routerResponse = (req,res,err,result) => {

  if (err) {

    res.status(500).send(err);
  } else {
    res.send(results);
  }

}

module.exports = routerResponse;
