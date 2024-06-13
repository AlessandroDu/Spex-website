
import Link from 'next/link';
import { IconButton } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import "./styles.css";

export default function Integrations() {

    return (
        <div>
            <div className="landing-screen integrations-screen">
                {/* <div className="blur-integrations"></div> */}
                <div className="landing-screen-top-half-integrations">
                    <Link className='link' href="/design-1c">
                        <div className="logo-bg-square-integrations">
                          <div className="logo-center-integrations"></div>
                        </div>
                    </Link>
                    <div className="title-integrations">
                        <h2 className='text-jetblack-integrations'>Integrations</h2>
                    </div>
                </div>
                <div className='see-more-container-integrations'>
                     <Link className='see-more-btn' href="/integrations#div1">
                         <p>
                            <span className='see-more-underline'>See more</span> <br/>
                             <IconButton className='btn-see-more' aria-label="unfold more">
                               <UnfoldMoreIcon fontSize="small"/>
                             </IconButton>
                         </p>
                     </Link>
                </div>
            </div>
            <div id='div1' className='div1-integrations'>
                <h1 className='what-we-offer-header-integrations'>What we offer</h1>
                <div className='div1-subdiv-integrations'>

                </div>
            </div>
        </div>
    );
}