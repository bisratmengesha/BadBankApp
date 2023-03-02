function Deposit(props){
  
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const [amount, setAmount] = React.useState('');
 
function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
 
  const [amount, setAmount] = React.useState('');
  
  
  function handle(){
    fetch(`/account/update/${props.user.email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
           // if(!ValidateUser(props.user)) return;
            props.setStatus(JSON.stringify(data.amount));
            props.setShow(false);
            console.log('JSON:', data);
            
            
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
  }


  return(<>
  
      <p>Logged in user: {props.user.email}</p>
    
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Deposit</button>

  </>);
}

return (
  <Card
    bgcolor="warning"
    header="Deposit"
    status={status}
    body={show ? 
      <DepositForm user={props.user} setShow={setShow} setStatus={setStatus} setAmount={setAmount}/> :
      <DepositMsg setShow={setShow} setStatus={setStatus}/>}
  />
)
    }
