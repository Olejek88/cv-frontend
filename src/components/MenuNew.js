import React from 'react';
import {inject} from 'mobx-react';
import Link from "react-router-dom/es/Link";
import MenuLink from "./Components/MenuLink";
import {withTranslation} from 'react-i18next';
import {withCookies} from "react-cookie";

class SiteMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categoriesList: []
        };
    }

    componentDidMount() {
        let self = this;
        this.props.categoryStore.loadCategories()
            .then(() => {
                let categoriesList = [];
                for (let category of Array.from(self.props.categoryStore.categoryRegistry.values())) {
                    categoriesList.push(<li className="menu-item" key={category.id}><Link
                        to={"/#/activities/category/" + category.id} key={category.id}>{category.title}</Link></li>);
                }
                self.setState({categoriesList: categoriesList});
            });

        const {cookies} = this.props;
        let lang = cookies.get('lang');
        if (lang === "ru") {
            document.getElementById("ru").style.display = '';
            document.getElementById("en").style.display = 'none';
            document.getElementById("de").style.display = 'none';
        }
        if (lang === "de") {
            document.getElementById("ru").style.display = 'none';
            document.getElementById("en").style.display = 'none';
            document.getElementById("de").style.display = '';
        }
        if (lang === "en") {
            document.getElementById("ru").style.display = 'none';
            document.getElementById("en").style.display = '';
            document.getElementById("de").style.display = 'none';
        }
    }

    render() {
        const {i18n, cookies} = this.props;
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
            let d = new Date();
            d.setTime(d.getTime() + (200 * 60 * 1000));
            cookies.set('lang', lng, {path: "/", expires: d, SameSite: 'Secure'});
            this.setState({lng});
        };

        return (
            <nav id="mainnav" className="mainnav" role="navigation">
                <div className="menu-main-container">
                    <ul id="menu-main" className="menu">
                        <li className="menu-item">
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
                        <li className="menu-item">
                            <Link to="/">WORK</Link>
                            <ul className="sub-menu">
                                {this.state.categoriesList}
                            </ul>
                        </li>
                        <li className="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom current-menu-parent menu-item-has-children">
                            <a href="/" id="ru"><span style={{marginLeft: '0.3em'}}><span role="img"
                                                                                          aria-label="ru">&#127479;&#127482;&nbsp;</span>Русский</span></a>
                            <a href="/" id="de" style={{display: 'none'}}><span style={{marginLeft: '0.3em'}}><span
                                role="img" aria-label="de">&#127465;&#127466;&nbsp;</span>Deutsch</span></a>
                            <a href="/" id="en" style={{display: 'none'}}><span style={{marginLeft: '0.3em'}}><span
                                role="img" aria-label="en">&#127468;&#127463;&nbsp;</span>English</span></a>
                            <ul className="sub-menu">
                                <li className="lang-item lang-item-ru menu-item menu-item-type-custom menu-item-object-custom">
                                    <a onClick={() => changeLanguage('ru')} href="#" style={{cursor: 'pointer'}}>
                                        <span style={{marginLeft: '0.3em'}}>
                                            <span role="img" aria-label="ru">&#127479;&#127482;&nbsp;</span>Русский
                                        </span></a>
                                </li>
                                <li className="lang-item lang-item-en current-lang lang-item-first menu-item menu-item-type-custom menu-item-object-custom">
                                    <a onClick={() => changeLanguage('de')} href="#" style={{cursor: 'pointer'}}><span
                                        style={{marginLeft: '0.3em'}}><span role="img"
                                                                            aria-label="de">&#127465;&#127466;&nbsp;</span>Deutsch</span></a>
                                </li>
                                <li className="lang-item lang-item-de menu-item menu-item-type-custom menu-item-object-custom">
                                    <a onClick={() => changeLanguage('en')} href="#" style={{cursor: 'pointer'}}><span
                                        style={{marginLeft: '0.3em'}}><span role="img"
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

export default inject('categoryStore')(withCookies(withTranslation('translations')(SiteMenu)));
