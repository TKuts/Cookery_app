import React, { useState, useEffect } from "react";
import "./SubmissionToBlog.scss";

import { observer} from "mobx-react-lite";

const SubmissionToBlog: React.FC = observer(() => {
 

  return (
			<section className="submission__blog">
				<div className="left__block">
					<h2 className="left__block-title">Everyone can be a chef in their own kitchen</h2>
					<p className="left__block-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia similique sequi, expedita est tempore, quas possimus officia necessitatibus aspernatur vero magni. Voluptatem ratione totam saepe asperiores dignissimos aut nisi beatae.</p>
					<button className="left__block-btn">Learn More</button>
				</div>
				
				<div className="right__block">
					<img src="src/UI/SubmissionToBlog/img/cooker.png" alt="cooker" />
				</div>
			</section>
  )	
})

export default SubmissionToBlog;
