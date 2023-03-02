const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyC3Mo8o7dhhFnrhwWrhkaMGQtMQDSd4_is",
  authDomain: "badbank-d5520.firebaseapp.com",
  projectId: "badbank-d5520",
  storageBucket: "badbank-d5520.appspot.com",
  messagingSenderId: "998842198094",
  appId: "1:998842198094:web:cd232459dfc92576573b1f"
};

firebase.initializeApp(firebaseConfig);

function CustomProvider(props){
  const [user, setUser] = React.useState('mimi@miu.edu');
  return (
      <UserContext.Provider
          value={{ user, setUser}}
      >
          {props.children}
      </UserContext.Provider>
  );
};

function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>      
  );    
}
