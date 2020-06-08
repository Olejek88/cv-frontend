import React from 'react';
import Link from "react-router-dom/es/Link";

class MenuLink extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            link: "/",
            text: "link"
        };
    }

    render() {
        return (
            <li id="menu-item"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item">
                <Link to={this.state.link}>
                    {this.state.text}
                </Link>
            </li>
        );
    }
}

export default MenuLink;