import React from 'react';
import {inject} from 'mobx-react';
import Link from "react-router-dom/es/Link";
import {withTranslation} from 'react-i18next';
import {withCookies} from "react-cookie";

class MenuMobile extends React.Component {

    onMenuItemClicked = () => {
        if (!this.state.menuOpen) {
            this.setState({menuStyle: {display: "block"}});
        } else {
            this.setState({menuStyle: {display: "none"}});
        }
        this.setState({menuOpen: !this.state.menuOpen});
    };

    onMenuAboutItemClicked = () => {
        if (!this.state.aboutOpen) {
            this.setState({aboutStyle: {display: "block"}});
            this.setState({aboutSymbol: "-"});
        } else {
            this.setState({aboutStyle: {display: "none"}});
            this.setState({aboutSymbol: "+"});
        }
        this.setState({aboutOpen: !this.state.aboutOpen});
    };

    onMenuCategoryItemClicked = () => {
        if (!this.state.categoryOpen) {
            this.setState({categoryStyle: {display: "block"}});
            this.setState({categorySymbol: "-"});
        } else {
            this.setState({categoryStyle: {display: "none"}});
            this.setState({categorySymbol: "+"});
        }
        this.setState({categoryOpen: !this.state.categoryOpen});
    };

    constructor(props) {
        super(props);
        this.state = {
            categoriesList: [],
            menuOpen: false,
            menuStyle: {display: "none"},
            categoryOpen: false,
            categorySymbol: "+",
            categoryStyle: {display: "none"},
            aboutOpen: false,
            aboutSymbol: "+",
            aboutStyle: {display: "none"}
        };
    }

    componentDidMount() {
        let self = this;
        const {i18n, cookies} = this.props;
        let lang = cookies.get('lang');
        if (lang === undefined) {
            i18n.changeLanguage("ru");
            let d = new Date();
            d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
            cookies.set('lang', 'ru', {path: "/", expires: d, SameSite: 'Secure'});
        }
        this.props.categoryStore.loadCategories()
            .then(() => {
                let categoriesList = [];
                for (let category of Array.from(self.props.categoryStore.categoryRegistry.values())) {
                    categoriesList.push(<li onClick={this.onMenuItemClicked} className="menu-item" key={category.id}>
                        <Link
                            to={"/projects/category/" + category.id} key={category.id} replace>
                            {lang === "ru" && category.title}
                            {lang === "en" && category.title_en}
                            {lang === "de" && category.title_de}
                        </Link></li>);
                }
                self.setState({categoriesList: categoriesList});
            });
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
        const {i18n, cookies, t} = this.props;
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
            let d = new Date();
            d.setTime(d.getTime() + (200 * 60 * 1000));
            cookies.set('lang', lng, {path: "/", expires: d, SameSite: 'Secure'});
            this.setState({lng});
            this.setState({menuStyle: {display: "none"}});
            this.setState({menuOpen: false});
            // ?? i am really need it
            window.location.reload();
        };

        return (
            <React.Fragment>
                <img id="btn-menu" onClick={this.onMenuItemClicked} className="btn-menu" src={"images/bar.png"}
                     alt={""}/>
                <nav id="mainnav-mobi" className="mainnav" role="navigation" style={this.state.menuStyle}>
                    <div className="menu-main-container">
                        <ul id="menu-main" className="menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-27">
                                <Link to="/">{t('menu.home')}</Link>
                                <span onClick={this.onMenuAboutItemClicked} className="btn-submenu"
                                      style={{color: "white"}}>{this.state.aboutSymbol}</span>
                                <ul style={this.state.aboutStyle} className="sub-menu">
                                    <li onClick={this.onMenuItemClicked}
                                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-4827">
                                        <Link to="/about">{t('menu.about')}</Link></li>
                                    <li onClick={this.onMenuItemClicked}
                                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-4827">
                                        <Link to="/cv">{t('menu.cv')}</Link></li>
                                    <li onClick={this.onMenuItemClicked}
                                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-4827">
                                        <Link to="/stack">{t('menu.stack')}</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link to="/">{t('menu.work')}</Link>
                                <span onClick={this.onMenuCategoryItemClicked} className="btn-submenu"
                                      style={{color: "white"}}>{this.state.categorySymbol}</span>
                                <ul id="categoryMenu" className="sub-menu" style={this.state.categoryStyle}>
                                    {this.state.categoriesList}
                                </ul>
                            </li>
                            <li className="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom current-menu-parent menu-item-has-children">
                                <a href="/" id="ru"><span style={{marginLeft: '0.3em'}}>
                                <span><img src={"images/ru.jpg"} alt={"ru"}/>&nbsp;</span>Русский</span></a>
                                <a href="/" id="de" style={{display: 'none'}}><span style={{marginLeft: '0.3em'}}>
                                <span><img src={"images/de.jpg"} alt={"de"}/>&nbsp;</span>Deutsch</span></a>
                                <a href="/" id="en" style={{display: 'none'}}><span style={{marginLeft: '0.3em'}}>
                                <span><img src={"images/eng.jpg"} alt={"en"}/>&nbsp;</span>English</span></a>
                                <ul className="sub-menu">
                                    <li className="lang-item lang-item-ru menu-item menu-item-type-custom menu-item-object-custom">
                                        <a onClick={() => changeLanguage('ru')} href={"/#"} style={{cursor: 'pointer'}}>
                                        <span style={{marginLeft: '0.3em'}}>
                                            <span><img src={"images/ru.jpg"} alt={"ru"}/>&nbsp;</span>Русский</span></a>
                                    </li>
                                    <li className="lang-item lang-item-en current-lang lang-item-first menu-item menu-item-type-custom menu-item-object-custom">
                                        <a onClick={() => changeLanguage('de')} href={"/#"}
                                           style={{cursor: 'pointer'}}><span
                                            style={{marginLeft: '0.3em'}}><span><img src={"images/de.jpg"}
                                                                                     alt={"de"}/>&nbsp;</span>Deutsch</span></a>
                                    </li>
                                    <li className="lang-item lang-item-de menu-item menu-item-type-custom menu-item-object-custom">
                                        <a onClick={() => changeLanguage('en')} href={"/#"}
                                           style={{cursor: 'pointer'}}><span
                                            style={{marginLeft: '0.3em'}}><span><img src={"images/eng.jpg"}
                                                                                     alt={"en"}/>&nbsp;</span>English</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-button estimate-menu menu-item menu-item-type-custom menu-item-object-custom">
                                <a href="mailto:olejek8@yandex.ru">{t('menu.contact_me')}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default inject('categoryStore')(withCookies(withTranslation('translations')(MenuMobile)));
