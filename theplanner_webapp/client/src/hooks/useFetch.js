import { useState, useEffect } from 'react';
import axios from '../utils';

export default function useFetch(endpoint) {
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
  

	useEffect(() => {
		const fetch = async () => {
			try {
				const res = await axios.get(endpoint);
				setData(res.data.tasks);
				setIsLoading(false);
			} catch (err) {
				setError(true);
				console.log(err);
			}
		};
		fetch();
	}, [endpoint]);

	return { error, isLoading, data, setData };
}
