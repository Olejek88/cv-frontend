import React from 'react';
import {inject} from 'mobx-react';
import Link from "react-router-dom/es/Link";
import MenuLink from "./Components/MenuLink";

class SiteMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesList: []
        };
    }

    componentWillMount() {
        let self = this;
        this.props.categoryStore.loadCategories()
            .then(() => {
                let categoriesList = [];
                for (let category of Array.from(self.props.categoryStore.categoryRegistry.values())) {
                    categoriesList.push(<MenuLink link={"/#/activities/category/" + category.id}
                                                  text={category.title} key={category.id}/>);
                }
                self.setState({categoriesList: categoriesList});
            });
    }

    render() {
        return (
            <nav id="mainnav" className="mainnav" role="navigation">
                <div className="menu-main-container">
                    <ul id="menu-main" className="menu">
                        <li id="menu-item-1"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-1">
                            <Link to="/">HOME</Link>
                            <ul className="sub-menu">
                                <MenuLink link="/" text="ABOUT"/>
                                <MenuLink link="/" text="CV"/>
                                <MenuLink link="/" text="OLD"/>
                                <MenuLink link="/" text="CAREER"/>
                                <MenuLink link="/" text="STACK"/>
                                <MenuLink link="/" text="LIFE"/>
                                <MenuLink link="http://mediacritic.site" text="MEDIA"/>
                            </ul>
                        </li>
                        <li id="menu-item-7662"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-7662">
                            <Link to="/">WORK</Link>
                            <ul className="sub-menu">
                                <li id="menu-item-4289"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-4289">
                                    <Link to="/">WEB</Link>
                                    <ul className="sub-menu">
                                        <MenuLink link="/" text="SITES"/>
                                        <MenuLink link="/" text="SHOPS"/>
                                    </ul>
                                </li>
                                <li id="menu-item-4290"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-4290">
                                    <Link to="/">MOBILE</Link>
                                    <ul className="sub-menu">
                                        <MenuLink link="/" text="ANDROID"/>
                                        <MenuLink link="/" text="CROSS"/>
                                    </ul>
                                </li>
                                {this.state.categoriesList}
                            </ul>
                        </li>
                        <li className="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom current-menu-parent menu-item-has-children menu-item-3378">
                            <a href="/"><span style={{marginLeft: '0.3em'}}><span role="img"
                                                                                  aria-label="ru">&#127479;&#127482;&nbsp;</span>Русский</span></a>
                            <ul className="sub-menu">
                                <li className="lang-item lang-item-57 lang-item-ru current-lang lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-3378-en">
                                    <a href="/"><span style={{marginLeft: '0.3em'}}><span role="img"
                                                                                          aria-label="ru">&#127479;&#127482;&nbsp;</span>Русский</span></a>
                                </li>
                                <li className="lang-item lang-item-60 lang-item-en menu-item menu-item-type-custom menu-item-object-custom menu-item-3378-da">
                                    <a href="/"><span style={{marginLeft: '0.3em'}}><span role="img"
                                                                                          aria-label="de">&#127465;&#127466;&nbsp;</span>Deutsch</span></a>
                                </li>
                                <li className="lang-item lang-item-60 lang-item-de menu-item menu-item-type-custom menu-item-object-custom menu-item-3378-da">
                                    <a href="/"><span style={{marginLeft: '0.3em'}}><span role="img"
                                                                                          aria-label="en">&#127468;&#127463;&nbsp;</span>English</span></a>
                                </li>
                            </ul>
                        </li>
                        <li id="menu-item-10299"
                            className="menu-button estimate-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-10299">
                            <a href="/">CONTACT ME</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default inject('categoryStore')(SiteMenu);
