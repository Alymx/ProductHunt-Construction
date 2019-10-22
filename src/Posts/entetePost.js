import React from 'react';
import { Link } from 'react-router-dom';

const Entete = () => {
    return (
        <div className="infos">
            <div className="gif-infos">
                <img alt="Cactus" src="https://ph-files.imgix.net/852d59a9-f78e-484c-a4f9-7a8aa2d5b3bf?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=80&amp;h=80&amp;fit=crop" srcSet="https://ph-files.imgix.net/852d59a9-f78e-484c-a4f9-7a8aa2d5b3bf?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=80&amp;h=80&amp;fit=crop&amp;dpr=2 2x, https://ph-files.imgix.net/852d59a9-f78e-484c-a4f9-7a8aa2d5b3bf?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=80&amp;h=80&amp;fit=crop&amp;dpr=3 3x" style={{ "width": "80px", "height": "80px" }} />
            </div>
            <div className="text-infos">
                <div>
                    <Link to="#"> Cactus <span className="glyphicon glyphicon-chevron-down"></span> </Link>
                    <p> Boost your mood and emotional intelligence in one minute </p>
                </div>
                <div>
                    <Link id="webapp" to="#"> WEB APP </Link>
                    <Link id="morewebapp" to="#"> + </Link>
                    <Link id="health" to="#"> HEALTH AND FITNESS </Link>
                    <Link id="morehealth" to="#"> + </Link>
                    <Link id="plusdeux" to="#"> + 2 </Link>
                </div>
            </div>
            <div className="productofday">
                <span className="iconCompact_b5a0f"><svg width="36" height="36" viewBox="0 0                36 36" xmlns="http://www.w3.org/2000/svg"><g transform="translate(8 4)" fill="none" fillRule="evenodd"><path d="M4.33 16.364L.328 24.9c-.126.258.007.42.427.34l3.258-.708a.244.244 0 0 1 .317.17l1.467 3.007c.14.324.302.39.428.133l4.26-8.934-6.155-2.544zm12.34 0l4.002 8.536c.133.258-.007.42-.427.34l-3.258-.708a.246.246 0 0 0-.317.17l-1.467 3.007c-.14.324-.295.39-.428.133l-4.26-8.934 6.155-2.544z" fill="#DE7818" fillRule="nonzero"></path><path d="M9.298 21.392c0 .007-.014 0-.029 0a10.44 10.44 0 0 1-5.97-2.742c-.008-.008-.03-.015-.023-.023l.184-.39c.008-.015.022.022.03.03 1.577 1.466 3.767 2.388 6.007 2.66.008 0 .023 0 .023.008l-.222.457z" fill="#B35454" fillRule="nonzero"></path><circle fill="#F0CD0A" fillRule="nonzero" cx="10.5" cy="10.489" r="10.489"></circle><circle fill="#D2B309" fillRule="nonzero" cx="10.5" cy="10.489" r="9.045"></circle><circle fill="#E3C101" fillRule="nonzero" cx="10.75" cy="10.75" r="8.75"></circle><path d="M9.45 14.755h2.15V6.3H9.45L7.3 7.765v1.851L9.34 8.24h.11z" fill="#FFF2B5"></path><path d="M12.97 3.089a7.604 7.604 0 0 1 .353 14.698c2.035-1.555 3.384-4.209 3.384-7.224 0-3.184-1.504-5.963-3.738-7.474z" fillOpacity=".2" fill="#FFF" fillRule="nonzero"></path><path d="M11.702 21.392c.007.007.022 0 .029 0 2.293-.288 4.4-1.21 5.986-2.728.007-.007.029-.014.022-.022l-.185-.39c-.007-.015-.022.022-.03.029-1.577 1.467-3.773 2.374-6.021 2.646-.008 0-.023 0-.023.008l.222.457z" fill="#B35454" fillRule="nonzero"></path></g></svg>
                </span>
                <span className="font_9d927 grey_bbe43 small_231df semiBold_e201b lineHeight_042f1 underline_57d3c">#1 Product of the Day</span><br />
                <span>Today</span>

            </div>
        </div>
    );
}

export default Entete;
