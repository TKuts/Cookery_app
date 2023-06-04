import React, { useState } from "react";
import "./Pagination.scss";

import { observer } from "mobx-react-lite";

interface PropsPagination {
	totalPosts: number,
	postsPerPage: number,
	currentPage: number;
	setCurrentPage: (page: number) => void,
}

const Pagination: React.FC<PropsPagination> = observer(({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {

	let pages = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i)
	}

	let renderButton = (allButton: number[]): number[] => {
		return allButton.slice(0, 5);

	}

	let buttonOneStep = (side: string): number => {
		switch (side) {
			case "next":
				if (currentPage === pages.length) {
					return currentPage
				}
				return currentPage + 1;
				break;
			case "previous":
				if (currentPage === 1) {
					return currentPage
				}
				return currentPage - 1;
				break;
			default:
				return currentPage
		}

	}


	return (

		<section>
			<button onClick={() => setCurrentPage(1)}> ba </button>
			<button onClick={() => setCurrentPage(buttonOneStep("previous"))}> prev </button>
			{
				pages.map((page, index) => {
					return (
						<button key={index} onClick={() => setCurrentPage(page)}>
							{page}
						</button>
					)
				})
			}
			<button onClick={() => setCurrentPage(buttonOneStep("next"))}> next </button>
			<button onClick={() => setCurrentPage(pages.length)}>ga</button>
		</section>


	)
})

export default Pagination;
