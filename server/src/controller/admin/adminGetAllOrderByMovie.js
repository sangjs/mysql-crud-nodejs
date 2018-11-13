const { pool } = require("../../mysql/connect");

exports.adminGetAllOrderByMovie = (req, res) => {
  if (req.user.role !== "admin")
    return res.send({
      message: "You do not have a permission. Please try login as Admin"
    });
  let id_movie = req.params.id_movie;
  let sql = `call admin_getAllOrderByMovie(${id_movie});
                select count (id_order) as n_order from reservation;`;
  try {
    pool.query(sql, (error, results, feilds) => {
      if (error) return res.status(400).send({ error });

      let order = results[0];
      let data = {
        n_order: results[2][0].n_order,
        instance: order.length,
        ratio_order: order.length / results[2][0].n_order,
        order: order
      };
      res.status(200).send(data);
    });
  } catch (error) {
    if (error) return res.status(400).send({ error });
  }
};