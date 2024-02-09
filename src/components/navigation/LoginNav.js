import React  from 'react';
import { connect } from 'react-redux';
import './newUserNav.css';


import Logo from './logo.png';


const LoginNav = (props) => {
	const { isSignedIn } = props;

	if (!isSignedIn) {
		return (
			<React.Fragment>


				<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
  <div style={{display: 'flex', justifyContent: 'flex-start'}}>
				<img src={Logo} alt="react logo" style={{ width: '100px', }}/>
				</div>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/promotions">Promotions</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/moneymembers">Money Members</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/loans">Loans</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/cashadvances">Cash Advances</a>
      </li>


	  <li className="nav-item">
        <a className="nav-link" href="/payments">Payments</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/shops">Shops</a>
      </li>


	  <li className="nav-item">
        <a className="nav-link" href="/users">Users</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/banners">Banners</a>
      </li>


    </ul>
{/* 
	<Route path="/promotions" component={this.NotFoundPage} exact={true} />
				<Route path="/moneymembers" component={this.NotFoundPage} exact={true} />
				<Route path="/loans" component={this.NotFoundPage} exact={true} />
				<Route path="/cashadvances" component={this.NotFoundPage} exact={true} />
				<Route path="/payments" component={this.NotFoundPage} exact={true} />
				<Route path="/messages" component={this.NotFoundPage} exact={true} />
				<Route path="/users" component={this.NotFoundPage}  */}

  </div>
</nav>




			</React.Fragment>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	return {

	};
};

export default connect(mapStateToProps)(LoginNav );
