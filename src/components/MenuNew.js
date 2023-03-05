import React from 'react';
import {inject} from 'mobx-react';
import {withTranslation} from 'react-i18next';
import {withCookies} from "react-cookie";
import Contact from "./Contact";
import {Link} from "react-router-dom";

class SiteMenu extends React.Component {

    onContactClicked = () => {
        this.setState({contactOpen: !this.state.contactOpen});
    };

    constructor(props) {
        super(props);
        this.state = {
            categoriesList: [],
            contactOpen: false,
            contactStyle: {display: "none"},
        };
    }

    componentDidMount() {
        let self = this;
        const {i18n, cookies} = this.props;
        let lang = cookies.get('lang');
        if (lang === undefined) {
            i18n.changeLanguage("en");
            let d = new Date();
            d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
            cookies.set('lang', 'en', {path: "/", expires: d, SameSite: 'Secure'});
        }
        this.props.categoryStore.loadCategories()
            .then(() => {
                let categoriesList = [];
                for (let category of Array.from(self.props.categoryStore.categoryRegistry.values())) {
                    categoriesList.push(<li className="menu-item" key={category.id}><Link
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
            window.location.reload();
        };

        return (
            <React.Fragment>
                <nav id="mainnav" className="mainnav" role="navigation">
                    <div className="menu-main-container">
                        <ul id="menu-main" className="menu">
                            <li className="menu-item">
                                <Link to="/">{t('menu.home')}</Link>
                                <ul className="sub-menu">
                                    <li className="menu-item"><Link to="/about">{t('menu.about')}</Link></li>
                                    <li className="menu-item"><Link to="/cv">{t('menu.cv')}</Link></li>
                                    <li className="menu-item"><Link to="/stack">{t('menu.stack')}</Link></li>
                                    <li className="menu-item"><Link to="/mobile">{t('menu.mobile')}</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link to="/">{t('menu.work')}</Link>
                                <ul className="sub-menu">
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
                                
                            </li>
                            <li className="menu-button estimate-menu menu-item menu-item-type-custom menu-item-object-custom">
                                <span onClick={this.onContactClicked}
                                      className="contact_button">{t('menu.contact_me')}</span>
                            </li>
                        </ul>
                    </div>
                </nav>
                {this.state.contactOpen && <Contact handler={this.onContactClicked}/>}
            </React.Fragment>
        );
    }
}

export default inject('categoryStore')(withCookies(withTranslation('translations')(SiteMenu)));
