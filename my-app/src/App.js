import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Form.css';


function App() {
  return (
<div class="container">
    <div class="card card-login mx-auto text-center bg-dark">
        <div class="card-header mx-auto bg-dark">
            <span> <img src="https://amar.vote/assets/img/amarVotebd.png" class="w-75" alt="Logo" /> </span><br/>
                        <span class="logo_title mt-5"> Login Dashboard </span>


        </div>
        <div class="card-body">
            <form action="" method="post">
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text" name="email" class="form-control" placeholder="Username" />
                </div>

                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password" name="password" class="form-control" placeholder="Password" />
                </div>

                <div class="form-group">
                    <input type="submit" name="btn" value="Login" class="btn btn-outline-danger float-right login_btn" />
                </div>

            </form>
        </div>
    </div>
</div>
  );
}

export default App;
