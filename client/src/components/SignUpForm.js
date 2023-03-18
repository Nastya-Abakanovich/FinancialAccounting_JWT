import React from 'react';

class SignUpForm extends React.Component {
    constructor(props){
      super(props);
      this.onChange = this.handleChange.bind(this);
      this.onSubmit = this.handleSubmit.bind(this);
  
      this.state = {
        body: {nickname: "", email: "", password: "", repeatPassword: ""}, 
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
            body: {nickname: "", email: "", password: "", repeatPassword: ""}
        });  
    };  
  
    render() {
      return (
        <form className="signUpForm" name="SingUp" onSubmit={this.onSubmit}>
          <div className="form-inner">
                <h3>Регистрация</h3>          
                <input type="text" name="nickname" maxLength="50" placeholder="Никнейм"  required 
                    onChange={this.onChange} value={this.state.body.nickname}/> 
                <input type="text" name="email" maxLength="50" placeholder="Электронная почта"  required 
                    onChange={this.onChange} value={this.state.body.email}/>  
                <input type="password" name="password" maxLength="50" placeholder="Пароль"  required 
                    onChange={this.onChange} value={this.state.body.password}/>  
                <input type="password" name="repeatPassword" maxLength="50" placeholder="Повторите пароль"  required 
                    onChange={this.onChange} value={this.state.body.repeatPassword}/>  
                    

                <input type="submit" value="Зарегистрироваться" /> 
                <p className='signPlaceholder'>Уже есть аккаунт?<br></br>Авторизоваться.</p>
          </div>
      </form>
      );
    }
}

export default SignUpForm;   