import { h, Component } from "preact";
import styles from "./search.scss";

import SearchMenu from './search-menu/search-menu.jsx';
import { searchStrUrl, collectionUrl } from "../../utils/url-cooker.js";

const UP_KEY = 38;
const DOWN_KEY = 40;
const ENTER_KEY = 13;

export default class App extends Component {

  constructor () {
    super();

    this.state = {
      searchStr: '',
      menuVisible: false,
      selectedCollection: null
    };

    this.onInput = this.onInput.bind(this);
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
    this.selectCollection = this.selectCollection.bind(this);
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
        let newUrl;
        if (this.state.searchStr) {
          newUrl = searchStrUrl(this.props.baseUrl, this.state.searchStr);
        } else {
          newUrl = collectionUrl(this.props.baseUrl, this.state.selectedCollection);
        }
        window.location = newUrl;
    }
  }

  onInput (e) {
    const { value } = e.target;
    this.setState({ searchStr: value })
  }

  selectCollection (collection) {
    this.setState({ selectedCollection: collection });
  }

  componentDidMount() {
    this.searchField.addEventListener('keydown', this.handleKeyEvent, false);
    this.searchField.addEventListener('focus', () => this.setState({menuVisible: true}), false);
    this.searchField.addEventListener('blur', () =>
      setTimeout(() => {this.setState({menuVisible: false});}, 500)
    , false);
  }

  render({ placeholder, baseUrl }, { searchStr, menuVisible }) {
    return (
      <div>
        <input class={styles['search-field']} ref={input => this.searchField = input} value={searchStr} onInput={this.onInput} placeholder={placeholder}></input>
        {menuVisible && <SearchMenu baseUrl={baseUrl} onSelectCollection={this.selectCollection} ref={menu => this.searchMenu = menu}></SearchMenu>}
      </div>
    );
  }
}
