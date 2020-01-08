import { h, Component } from "preact";
import "./style.scss";

export default class App extends Component {

  constructor () {
    super();
    this.onInput = this.onInput.bind(this);
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
    this.state = { searchStr: '' };
  }

  handleKeyEvent(ev) {
    if (ev.keyCode === 13) {
      // pressed enter
      window.location = `${this.props.baseUrl}/search?q=${this.state.searchStr}`
    }
  }

  onInput (e) {
    const { value } = e.target;
    this.setState({ searchStr: value })
  }

  componentDidMount() {
    this.searchField.addEventListener('keydown', this.handleKeyEvent, false);
  }

  render({ placeholder }, { searchStr }) {
    return (
      <div>
        <input class="search-field" ref={input => this.searchField = input} value={searchStr} onInput={this.onInput} placeholder={placeholder}></input>
      </div>
    );
  }
}
