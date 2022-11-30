

import { Button } from "react-bootstrap";
import Count from "../Counter/Count";
import Counter from "../Counter/Counter";

export default function Petition({ title, url, buttonText, signed, goal }) {


    return (
        <div>
            <div className="petition" >
                {title}
            </div>

            <Button className="home-about-social" style={{ padding: 10, paddingBottom: 20 }} href={url} target="_blank" rel="noreferrer">{buttonText}</Button>
            {/* <Count number={15000} duration={1} /> */}
            {
                goal == -1 ? <div></div> : <Counter signed={signed} qouta={goal} style={{ padding: 10 }} />
            }
            {/* <Counter  signed={signed} qouta={goal}  style={{ padding: 10 }}/> */}

        </div>

    )
}