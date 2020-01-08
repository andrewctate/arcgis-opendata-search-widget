import { h, Component } from "preact";
import styles from "./search-menu.scss";

import collections from '../collections';
import { collectionUrl } from "../../../utils/url-cooker";

export default class SearchMenu extends Component {

  constructor () {
    super();
    this.state = {
      activeIndex: 0
    };
  }

  upOne () {
    const { activeIndex } = this.state;
    if (activeIndex > 0) {
      this.setState({activeIndex: activeIndex - 1});
      this.props.onSelectCollection(collections[this.state.activeIndex]);
    }
  }

  downOne () {
    const { activeIndex } = this.state;
    if (activeIndex < collections.length - 1) {
      this.setState({activeIndex: this.state.activeIndex + 1});
      this.props.onSelectCollection(collections[this.state.activeIndex]);
    }
  }

  componentWillMount () {
    this.props.onSelectCollection(collections[this.state.activeIndex]);
  }

  render ({baseUrl}, {activeIndex}) {
    return (
      <div class={styles['search-menu']}>
        <ul>
          {collections.map((collection, i) =>
            <li active={activeIndex === i}>
              <a href={collectionUrl(baseUrl, collection)}>{collection.displayName}</a>
            </li>)}
        </ul>
      </div>
    );
  }
}
