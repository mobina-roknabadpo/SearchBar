import axios from "axios";

export const getDetial = async (id) => {
  try {
    const { data } = await axios.get(
      `https://www.namava.ir/api/v1.0/medias/${id}/brief-preview`
    );
    if (data.result) {
      return data.result;
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
    return {};
  }
};
