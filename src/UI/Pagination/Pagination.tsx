import React, { useState } from "react";
import "./Pagination.scss";

import { observer } from "mobx-react-lite";

interface PropsPagination {
	totalPosts: number,
	postsPerPage: number,
	setCurrentPage: (page: number) => void,
}

const Pagination: React.FC<PropsPagination> = observer(({ totalPosts, postsPerPage, setCurrentPage }) => {

	let pages = []
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i)
	}
	return (

		<section>
			{
				pages.map((page, index) => {
					return <button key={index} onClick={() => setCurrentPage(page)}>
						{page}
					</button>
				})
			}
		</section>


	)
})

export default Pagination;
