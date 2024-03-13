


const Card = ({ title, price, features }) => {
  return (
    <div className="card mx-3 border-2" style ={{width : '18rem'}}>
      <div className="card-header">
        <h2 className="text-center text-muted">{title}</h2>
        <h3 className="text-center">${price} per month</h3>
      </div>
      <div className="card-body">
        <ul>
          {features.map((feature, index) => (
            <p key={index}>{feature}</p>
          ))}
        </ul>
              <div className="d-flex justify-content-center"><button className="btn btn-primary ">Button</button></div>
        
      </div>
    </div>
  );
};

const App = () => {
  const plans = [
    {
      title: 'Free',
      price: 0,
      features: [       '✓Single user',
      '✓5GB storage',
      '❌unlimited public projects',
      '❌community access',
     '❌unlimited private projects',
      '❌dedicated phone support',
      '❌Free subdomain',
      '❌Monthly status report'],
    },
    {
      title: 'Plus',
      price: 5,
      features: ['✓Single user',
      '✓5GB storage',
      '✓unlimited public projects',
      '✓community access',
     '✓unlimited private projects',
      '✓dedicated phone support',
      '✓Free subdomain',
      '❌Monthly status report'],
    },
    {
      title: 'Pro',
      price: 49,
      features: ['✓Single user',
      '✓5GB storage',
      '✓unlimited public projects',
     '✓community access',
      '✓unlimited private projects',
      '✓dedicated phone support',
      '✓Free subdomain',
      '✓Monthly status report'],
    },
  ];

  return (
    <div className="container d-flex justify-content-center my-4">
      
        {plans.map((plan, index) => (
          <div  >
            <Card
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          </div>
        ))}
      </div>
   
  );
};

export default App;
