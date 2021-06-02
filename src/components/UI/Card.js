import "./Card.css";

const Card = (props) => {
	const classes = "card " + props.className; // adds classNames in <Card> opening tag to this components root div
	return <div className={classes}>{props.children}</div>;
	// props.children will always be the content beteween opening/closing tags of custom component
};

export default Card;
