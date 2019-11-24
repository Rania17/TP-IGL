import React from 'react';
import ReactDOM from 'react-dom';

function login()
{
    return(

        <div class="login-page">

                <div class="form">
			
                <form class="login-form">
                <input type="text" placeholder="user name"></input>
				<input type="text" placeholder="password"></input>
                <button>Login</button>
				<p class="message">Not registred?</p>
                </form>

               </div>
        </div>
 

    );

}
export default login;