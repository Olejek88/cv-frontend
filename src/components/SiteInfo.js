import React from 'react';

class SiteInfo extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer" role="contentinfo">
                <div className="site-info container">
                    <a href="http://olegrom.de/" target="_blank" rel="noopener noreferrer">Proudly powered by Olejek</a>
                    <span className="sep"> | </span>2020-2023
                </div>
            </footer>
        );
    }
}

export default SiteInfo;
