
import Link from 'next/link';
import { IconButton } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import "./styles.css";
import "../level2_styles.css";

export default function Energy() {
    return (
        <div>
            <div className="landing-screen integrations-screen">
                <div className="landing-screen-title-integrations">
                    <Link className='link' href="/">
                        <div className="logo-bg-square-integrations">
                          <div className="logo-center-integrations"></div>
                        </div>
                    </Link>
                    <div className="title-integrations">
                        <h2 className='text-jetblack text-xl'>Energy</h2>
                    </div>
                </div>
                <div className='see-more-container-integrations'>
                     <Link className='see-more-btn' href="/integrations#acoustic">
                         <p>
                            <span className='see-more-underline'>See more</span> <br/>
                             <IconButton className='btn-see-more' aria-label="unfold more">
                               <UnfoldMoreIcon fontSize="small"/>
                             </IconButton>
                         </p>
                     </Link>
                </div>
            </div>
        </div>
    );
}