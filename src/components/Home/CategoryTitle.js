import React from 'react';

class CategoryTitle extends React.Component {
    render() {
        return (
            <div className="blog-page">
                <a className="newsfilter filternewslink" href={"projects/category/2"} title="system">
                    <img src={'images/system.png'} alt="system"/>
                    <p> Systems </p>
                </a>
                <a className="newsfilter filternewslink" href={"projects/category/4"} title="applications">
                    <img src={'images/laptop.png'} alt="app"/>
                    <p> Applications </p>
                </a>
                <a className="newsfilter filternewslink" href={"projects/category/3"} title="mobile-app">
                    <img src={'images/mobile.png'} alt="mobile-app"/>
                    <p> Android </p>
                </a>
            </div>
        );
    }
}

export default CategoryTitle;
