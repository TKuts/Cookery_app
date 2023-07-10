import { observer } from "mobx-react-lite";
import React from "react";
import "./SkeletonPagination.scss";

const SkeletonPagination: React.FC = observer(() => {
	const skeletom = (
		<section className="pagination__skeleton">
			{
				[...Array(10).keys()].map(i => {
					return <div className="pagination__skeleton-btn animate-pulse" key={i}></div>
				})
			}
		</section>
	)

	return (skeletom)
})

export default SkeletonPagination;
