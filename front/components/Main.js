import React from 'react'
import styles from "../styles/Main.module.css";
export default function Main () {
	return (
		<body className={styles.body}>
		  <main className={styles.main}>
			   <div className={styles.wrapper}>
			    <h2>Question récentes</h2>
			      <div className={styles.question}>
			        <p className={styles.p}>Lorstrong ipsum dolor sit amet, consectetur adipiscing elit. Mauris a fringilla odio, sed venenatis sapien.
			          Aliquam vehicula accumsan odio, a tstrongpor justo egestas sit amet. Nullam sit amet mauris tincidunt, pharetra
			          dolor quis, euismod mauris. Phasellus venenatis nibh lacus, ut euismod dui aliquam vitae. Duis tstrongpor quam at
			          consequat lacinia.</p>
			        <span>
			          <p>
			            <strong>Jules Faber Castell</strong> a répondu
			          </p>
					  <button className={styles.RMbutton}> Lire la réponse</button>
			        </span>
			      </div>

				  <div className={styles.question}>
			        <p className={styles.p}>Lorstrong ipsum dolor sit amet, consectetur adipiscing elit. Mauris a fringilla odio, sed venenatis sapien.
			          Aliquam vehicula accumsan odio, a tstrongpor justo egestas sit amet. Nullam sit amet mauris tincidunt, pharetra
			          dolor quis, euismod mauris. Phasellus venenatis nibh lacus, ut euismod dui aliquam vitae. Duis tstrongpor quam at
			          consequat lacinia.</p>
			        <span>
			          <p>
			            <strong>Jules Faber Castell</strong> answered the question
			          </p>
					  <button> READ MORE</button>
			        </span>
			      </div>

				  <div className={styles.question}>
			        <p className={styles.p}>Lorstrong ipsum dolor sit amet, consectetur adipiscing elit. Mauris a fringilla odio, sed venenatis sapien.
			          Aliquam vehicula accumsan odio, a tstrongpor justo egestas sit amet. Nullam sit amet mauris tincidunt, pharetra
			          dolor quis, euismod mauris. Phasellus venenatis nibh lacus, ut euismod dui aliquam vitae. Duis tstrongpor quam at
			          consequat lacinia.</p>
			        <span>
			          <p>
			            <strong>Jules Faber Castell</strong> answered the question
			          </p>
					  <button> READ MORE</button>
			        </span>
			      </div>

				  <div className={styles.question}>
			        <p className={styles.p}>Lorstrong ipsum dolor sit amet, consectetur adipiscing elit. Mauris a fringilla odio, sed venenatis sapien.
			          Aliquam vehicula accumsan odio, a tstrongpor justo egestas sit amet. Nullam sit amet mauris tincidunt, pharetra
			          dolor quis, euismod mauris. Phasellus venenatis nibh lacus, ut euismod dui aliquam vitae. Duis tstrongpor quam at
			          consequat lacinia.</p>
			        <span>
			          <p>
			            <strong>Jules Faber Castell</strong> answered the question
			          </p>
					  <button> READ MORE</button>
			        </span>
			      </div>
				  
			   </div>
 			 </main>
 		</body>
		);
}