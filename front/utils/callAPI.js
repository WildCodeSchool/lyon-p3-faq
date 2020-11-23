import axios from "axios";

class Fetch {
  static async fetchData(url) {
    return await axios
      .get(url)
      .then((res) => ({
        error: false,
        users: res.data,
      }))
      .catch(() => ({
        error: true,
        users: null,
      }));
  }
}
module.exports = Fetch;
