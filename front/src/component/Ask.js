import React from 'react';
import '../styles/style.css';
function Ask() {
    return(
        <div id="modalPost">
          <h3>Poser une question</h3>
          <button>X</button>
          <form>
            <div>
              <input placeholder="Pseudo" type="text" name="name" required />
            </div>
            <div>
              <input
                placeholder="Enter adress mail"
                type="email"
                name="email"
                required
              />
            </div>
            <div>
              <input
                placeholder="Type your question"
                type="text"
                name="questionTitle"
                required
              />
            </div>
            <div>
              <textarea 
              name="comment" 
              placeholder="Start typing here" 
              required></textarea>
            </div>
              <input id ="submit" type="submit" value="Submit" />
          </form>
        </div>
    );

}
export default Ask;