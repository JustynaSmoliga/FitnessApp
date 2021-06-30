import classes from "./WrapperCard.module.css";

interface WrapperCardProps {}

const WrapperCard: React.FC<WrapperCardProps> = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default WrapperCard;
