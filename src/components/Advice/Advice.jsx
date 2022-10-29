import "./Advice.scss";
import Divider from "./Divider.svg";
import Random from "./Random.svg";

import { fetchData } from "../../App";

function Advice({ data, setData }) {
	return (
		<div className="advice">
			<span className="advice__number">advice #{data.slip.id}</span>
			<span className="advice__text">{data.slip.advice}</span>
			<div className="divider">
				<div className="divider__line"></div>
				<img src={Divider} alt="divider" />
				<div className="divider__line"></div>
			</div>
			<div
				className="button"
				onClick={() => {
					fetchData().then((data) => setData(data));
				}}
			>
				<img src={Random} alt="random" />
			</div>
		</div>
	);
}

export default Advice;
