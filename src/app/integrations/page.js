
import Link from 'next/link';
import { IconButton } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import "./styles.css";

export default function Integrations() {

    return (
        <div>
            <div className="landing-screen integrations-screen">
                <div className="blur"></div>
                <div className="landing-screen-top-half">
                    <Link className='link' href="/design-1c">
                        <div className="logo-bg-square-integrations">
                          <div className="logo-center-integrations"></div>
                        </div>
                    </Link>
                    <div className="title-integrations">
                        <h2 className='text-whitesmoke-integrations'>Integrations</h2>
                    </div>
                </div>
                <div className='see-more-container-integrations'>
                     <Link className='see-more-btn' href="/integrations#div1">
                         <p>
                            <span className='see-more-underline'>See more</span> <br/>
                             <IconButton className='btn-see-more' aria-label="unfold more">
                               <UnfoldMoreIcon fontSize="medium" />
                             </IconButton>
                         </p>
                     </Link>
                </div>
            </div>
            <div id='div1' className='div1'>
                
            </div>
        </div>
    );
}