import React from 'react'
import styles from "../styles/Main.module.css";
export default function Main () {
	return (
		<body className={styles.body}>
		  <main className={styles.main}>
			   <div className={styles.wrapper}>
			      <div className={styles.question}>
			        <h2>
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a fringilla odio, sed venenatis sapien.
			          Aliquam vehicula accumsan odio, a tempor justo egestas sit amet. Nullam sit amet mauris tincidunt, pharetra
			          dolor quis, euismod mauris. Phasellus venenatis nibh lacus, ut euismod dui aliquam vitae. Duis tempor quam at
			          consequat lacinia.</p></h2>
			        <span>
			          <p>
			            <h5>Jules Faber Castell </h5> answered the question
			          </p><button> READ MORE</button>
			        </span>
			      </div>
			   </div>
 			 </main>
 		</body>
		);
}