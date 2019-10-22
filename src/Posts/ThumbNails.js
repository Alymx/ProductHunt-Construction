import React from 'react';

class ThumbNails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            thumbnails: [],
            thumb: {
                imagesrc: "https://s3.amazonaws.com/uifaces/faces/twitter/91bilal/128.jpg",
            }
        }
    };

    render() {
        const Thumbs = this.state.thumbnails.map((element, index) => (
            <li>
                <div className="thumbnail_e114f"><img src={this.state.thumb.imagesrc}
                    alt="https://ph-files.imgix.net/6aaac3bc-958f-4fa7-8fb1-1fae4949d0d9?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip"
                    srcSet="https://ph-files.imgix.net/6aaac3bc-958f-4fa7-8fb1-1fae4949d0d9?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=40&amp;h=40&amp;fit=crop&amp;dpr=2 2x, https://ph-files.imgix.net/6aaac3bc-958f-4fa7-8fb1-1fae4949d0d9?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=40&amp;h=40&amp;fit=crop&amp;dpr=3 3x"
                    style={{ "width": "40px", "height": "40px" }} />
                </div>
            </li>
        ));

        return (
            <div id="thumbnail-post" >
                <ul>
                    {Thumbs}
                </ul>
                <hr />
            </div>
        );
    }
}

export default ThumbNails;
