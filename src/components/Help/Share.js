import { Row } from "react-bootstrap";
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton } from "react-share";


export default function Share() {

    const shareUrl = "https://iranresistance.com/";
    const shareMessage = "";

    return <div>


        <Row>
            <div style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 10,
                paddingBottom: 0,
                marginBottom:0
            }}>
                {/* <div style={{ paddingTop: 5, paddingBottom: 20 }} className="heading" ><b className="purple">{t("Please")}</b> {t("sign these petitions and share")}</div> */}

                <ul style={{ paddingTop: 0 , paddingBottom:0, marginBottom:0}}  >

                    <li className="social-icons">
                        <FacebookShareButton
                            url={shareUrl}
                            quote={shareMessage}
                            title={shareMessage}
                            hashtag="Mahsa_Amini"

                        >

                            <FacebookIcon round="true" />
                        </FacebookShareButton>




                    </li>
                    <li className="social-icons">

                        <TwitterShareButton
                            url={shareUrl}
                            title={shareMessage}
                            hashtags={["Mahsa_Amini", "Iran"]}
                        >
                            <TwitterIcon round="true" />
                        </TwitterShareButton>
                    </li>
                    <li className="social-icons">
                        <LinkedinShareButton
                            url={shareUrl}
                            quote={shareMessage}
                            title={shareMessage}
                        >
                            <LinkedinIcon round="true" />
                        </LinkedinShareButton>

                    </li>
                    <li className="social-icons">

                        <RedditShareButton
                            url={shareUrl}

                            title={shareMessage}
                        >
                            <RedditIcon round="true" />
                        </RedditShareButton>
                    </li>


                </ul>
            </div>
        </Row>
    </div>
}