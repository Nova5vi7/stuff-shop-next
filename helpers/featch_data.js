import axios from "axios";
import { PRODUCTS_URL } from "@/constant/common";

const fetchData = async () => {
	const result = await axios(PRODUCTS_URL);
	return result.data.reduce((newObj, data) => {

		newObj[data.id] = data
		return newObj

	}, {})

};

export default fetchData;