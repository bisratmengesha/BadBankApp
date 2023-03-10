function NavBar(props){

  const onLogOut = (()=> {
    props.setUser({});
    alert("You are now logged out");
  });
  props.user;
  function isUserLoggedIn(loggedin)
  {
    console.log("loggedin: "+loggedin + typeof loggedin);
    return JSON.stringify(loggedin)==='{}';

  }
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          {!isUserLoggedIn(props.user) ?
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li> : null}
          {!isUserLoggedIn(props.user) ?
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li> : null}
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>
          {!isUserLoggedIn(props.user) ?
          <li className="nav-item">
            <a className="nav-link"  onClick={onLogOut}>Log Out</a>
          </li>   : null}        
        </ul>
       
      </div>
      {props.user && props.user.email}
    </nav>
    

  );
}
