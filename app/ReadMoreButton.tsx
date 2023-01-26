'use client'
import { useRouter } from "next/navigation"
//------------------

type Props = {
    article: Article
}

function ReadMoreButton({article}: Props) {
    const router = useRouter()
    const handleClick = () => {
		const queryString = Object.entries(article)
			.map(([key, value]) => `${key}=${value}`)
			.join('&');
		const url = `/article?${queryString}`;
        //this pushes all of the article queryStrings into the URL. No sensitive data so its fine
		console.log(url);
		router.push(url);
	};
	return (
		<button
			onClick={handleClick}
			className="bg-blue-100 h-10 rounded-b-lg dark:text-gray-900 hover:bg-blue-200"
		>
			Read More
		</button>
	);
}

export default ReadMoreButton