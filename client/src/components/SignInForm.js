import React from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends React.Component {
    constructor(props){
      super(props);
      this.onChange = this.handleChange.bind(this);
      this.onSubmit = this.handleSubmit.bind(this);
  
      this.state = {
        body: {email: "", password: ""}, 
    };
    }
  
    handleChange (e) {
      var newBody = this.state.body;
      newBody[e.target.name] = e.target.value;
      this.setState({body: newBody});     
    }
  
    handleSubmit(e) {
        e.preventDefault();
      
        this.props.signUp(this.state.body, this.state.selectedFile);

        this.setState({
            body: {email: "", password: ""}
        });  
    };  
  
    render() {
      return (
        <form className="signInForm" name="SingUp" onSubmit={this.onSubmit}>
          <div className="form-inner">
                <h3>Авторизация</h3>          
                <input type="text" name="email" maxLength="50" placeholder="Электронная почта"  required 
                    onChange={this.onChange} value={this.state.body.email}/>  
                <input type="password" name="password" maxLength="50" placeholder="Пароль"  required 
                    onChange={this.onChange} value={this.state.body.password}/>                      

                <input type="submit" value="Войти" /> 
                <p className='signPlaceholder'>Еще нет аккаунта?</p>
                <Link className='sign-placeholder-link' to="/signUp">Зарегистрироваться.</Link>
          </div>
      </form>
      );
    }
}

export default SignInForm;   