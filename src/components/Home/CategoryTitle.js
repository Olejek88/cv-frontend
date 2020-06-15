import React from 'react';

class CategoryTitle extends React.Component {
    render() {
        return (
            <div className="blog-page">
                <a className="newsfilter filternewslink" href="/" title="website">
                    <img src={'images/promotional.png'} alt="blog"/>
                    <p> Website </p>
                </a>
                <a className="newsfilter filternewslink" href="/" title="e-commerce">
                    <img src={'images/ecommerce.png'} alt="blog"/>
                    <p> E-commerce </p>
                </a>
                <a className="newsfilter filternewslink" href="/" title="mobile-app">
                    <img src={'images/mobile-1.png'} alt="blog"/>
                    <p> Mobile App </p>
                </a>
                <a className="newsfilter filternewslink" href="/" title="custom">
                    <img src={'images/more.png'} alt="blog"/>
                    <p> Custom </p>
                </a>
            </div>
        );
    }
}

export default CategoryTitle;
