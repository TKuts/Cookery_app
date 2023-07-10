import { observer } from "mobx-react-lite";
import React from "react";
import SkeletonPagination from "../Skeleton/SkeletonPagination/SkeletonPagination";
import "./Pagination.scss";

interface PropsPagination {
	totalPosts: number,
	postsPerPage: number,
	currentPage: number;
	setCurrentPage: (page: number) => void,
}

const Pagination: React.FC<PropsPagination> = observer(({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {

	let pages: number[] = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i)
	}

	let pageNumbers = (total: number, max: number, current: number) => {
		const half = Math.round(max / 2);
		let to = max;

		if (current + half >= total) {
			to = total;
		} else if (current > half) {
			to = current + half;
		}

		let from = to - max;

		return Array.from({ length: max }, (_, i) => (i + 1) + from);
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

	const renderPagination = pageNumbers(pages.length, 6, currentPage).map((page, index) => {
		return (
			totalPosts &&
			<button
				className={currentPage === page ? "pagination__btn focus" : "pagination__btn"}
				type="button" key={index}
				onClick={() => setCurrentPage(page)}>
				{page}
			</button>
		)
	})

	const renderComponent = (
		<section className="pagination">
			<button className="pagination__btn" type="button" onClick={() => setCurrentPage(1)}>
				<i className="bi bi-chevron-double-left"></i>
			</button>
			<button className="pagination__btn" type="button" onClick={() => setCurrentPage(buttonOneStep("previous"))}>
				<i className="bi bi-chevron-left"></i>
			</button>
			{renderPagination}
			<button className="pagination__btn" type="button" onClick={() => setCurrentPage(buttonOneStep("next"))}>
				<i className="bi bi-chevron-right"></i>
			</button>
			<button className="pagination__btn" type="button" onClick={() => setCurrentPage(pages.length)}>
				<i className="bi bi-chevron-double-right"></i>
			</button>
		</section>
	);

	return (
		<>
			{totalPosts ? renderComponent : <SkeletonPagination />}
		</>
	)
})

export default Pagination;
