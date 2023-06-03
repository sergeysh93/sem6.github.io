class NameField extends React.Component {
  constructor(props) {
      super(props);
      var isValid = this.validate(props.value);
      this.state = { value: props.value, valid: isValid };
      this.onChange = this.onChange.bind(this);
  }
  validate(val) {
      return val.length > 2;
  }
  onChange(e) {
      var val = e.target.value;
      var isValid = this.validate(val);
      this.setState({ value: val, valid: isValid });
  }
  render() {
      var color = this.state.valid === true ? "green" : "red";
      return <p>
          <label>Имя:</label><br />
          <input type="text" value={this.state.value} onChange={this.onChange} style={{ borderColor: color }} />
      </p>;
  }
}
class AgeField extends React.Component {

  constructor(props) {
      super(props);
      var isValid = this.validate(props.value);
      this.state = { value: props.value, valid: isValid };
      this.onChange = this.onChange.bind(this);
  }
  validate(val) {
      return val >= 0;
  }
  onChange(e) {
      var val = e.target.value;
      var isValid = this.validate(val);
      this.setState({ value: val, valid: isValid });
  }
  render() {
      var color = this.state.valid === true ? "green" : "red";
      return <p>
          <label>Возраст:</label><br />
          <input type="number" value={this.state.value} onChange={this.onChange} style={{ borderColor: color }} />
      </p>;
  }
}
class UserForm extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.nameField = React.createRef();
      this.ageField = React.createRef();
  }
  handleSubmit(e) {
      e.preventDefault();
      var name = this.nameField.current.state.value;
      var age = this.ageField.current.state.value;
      if (this.nameField.current.state.valid && this.ageField.current.state.valid) {
          alert("Имя: " + name + " Возраст: " + age);
      }
  }

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <NameField value="" ref={this.nameField} />
              <AgeField value="" ref={this.ageField} />
              <input type="submit" value="Отправить" />
          </form>
      );
  }
}
ReactDOM.render(
  <UserForm />,
  document.getElementById("app")
)