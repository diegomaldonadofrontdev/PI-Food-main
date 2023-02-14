import React from "react";
import RecipesContainer from "../RecipesContainer/RecipesContainer";

import styles from "./Home.module.css";

export default function Home() {
	return (
		<div className={styles.home}>
			<div className={styles.container}>
				<div className={styles.headerHome}>
					<h2 className={styles.title}>Explorá nuestras recetas</h2>
				</div>
				<RecipesContainer />
			</div>
		</div>
	);
}
