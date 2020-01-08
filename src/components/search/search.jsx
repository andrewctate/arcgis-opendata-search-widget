import { h, Component } from "preact";
import SearchMenu from './search-menu/search-menu.jsx';

import styles from "./search.scss";

const UP_KEY = 38;
const DOWN_KEY = 40;
const ENTER_KEY = 13;

export default class App extends Component {

  constructor () {
    super();
    this.onInput = this.onInput.bind(this);
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
    this.state = {
      searchStr: '',
      menuVisible: false
    };
  }

  handleKeyEvent(ev) {
    switch (ev.keyCode) {
      case UP_KEY:
        this.searchMenu.upOne();
        break;
      case DOWN_KEY:
        this.searchMenu.downOne();
        break;
      case ENTER_KEY:
        if (this.state.searchStr) {
          window.location = `${this.props.baseUrl}/search?q=${this.state.searchStr}`
        }
    }
  }

  onInput (e) {
    const { value } = e.target;
    this.setState({ searchStr: value })
  }

  componentDidMount() {
    this.searchField.addEventListener('keydown', this.handleKeyEvent, false);
    this.searchField.addEventListener('focus', () => this.setState({menuVisible: true}), false);
    this.searchField.addEventListener('blur', () => this.setState({menuVisible: false}), false);
  }

  render({ placeholder }, { searchStr, menuVisible }) {
    return (
      <div>
        <input class={styles['search-field']} ref={input => this.searchField = input} value={searchStr} onInput={this.onInput} placeholder={placeholder}></input>
        {menuVisible && <SearchMenu ref={menu => this.searchMenu = menu}></SearchMenu>}
      </div>
    );
  }
}
