
import Link from 'next/link';
import { IconButton } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import "./styles.css";
import "../level2_styles.css";

export default function Energy() {
    return (
        <div>
            <div className="landing-screen-energy">
                <iframe 
                    className='energy-landing-page-video' 
                    src="https://player.vimeo.com/video/960291383?autoplay=1&amp;loop=1&amp;muted=1&amp;controls=0&amp;sidedock=0&amp;title=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen="" 
                    title="Sunology - Gamme produits - PLAY | PLAYMax | CITY | HOME">
                </iframe>
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
                            <span className='see-more-underline'>See more</span><br/>
                             <IconButton className='btn-see-more' aria-label="unfold more">
                               <UnfoldMoreIcon fontSize="small"/>
                             </IconButton>
                         </p>
                     </Link>
                </div>
                <div className='landing-page-bottom-fade'></div>
            </div>
        </div>
    );
}