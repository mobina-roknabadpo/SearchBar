import axios from "axios";

const getData = async (type = "all", page = 1, query) => {
  try {
    const { data } = await axios.get(
      `https://www.namava.ir/api/v3.0/search/advance?type=${type}&count=20&page=${page}&query=${query}`
    );
    console.log("data", data.result?.result_items[0]);

    if (data.result.result_items[0]?.groups?.Media) {
      const { items, total } = data.result.result_items[0]?.groups?.Media;
      return {
        items: items
          ? items.map((item) => ({
              id: item.id,
              name: item.name,
              imageURL: item.image_url,
              url: item.url,
            }))
          : [],
        total,
      };
    }
    return { items: [], total: 0 };
  } catch (error) {
    console.log(error);
    return { items: [], total: 0 };
  }
};
export default getData;
