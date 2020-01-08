import { h, Component } from "preact";
import styles from "./search-menu.scss";

export default class SearchMenu extends Component {

  constructor () {
    super();
    this.state = {
      collections: ['Initiatives', 'Events', 'Data', 'Documents', 'Apps and Maps'],
      activeIndex: 0
    }
  }

  upOne () {
    const { activeIndex } = this.state;
    if (activeIndex > 0) {
      this.setState({activeIndex: activeIndex - 1})
    }
  }

  downOne () {
    const { activeIndex, collections } = this.state;
    if (activeIndex < collections.length - 1) {
      this.setState({activeIndex: this.state.activeIndex + 1})
    }
  }

  render(props, {collections, activeIndex}) {
    return (
      <div class={styles['search-menu']}>
        <ul>
          {collections.map((collection, i) => <li active={activeIndex === i}>{collection}</li>)}
        </ul>
      </div>
    );
  }
}
