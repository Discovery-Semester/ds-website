import { createStyles, makeStyles, Theme } from '@material-ui/core';



type Props = {
    src: string,
    color?: string,
    width?: string,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: (props:Props) => ({
        boxShadow: props.color ? "4px 4px " + props.color : "4px 4px " + theme.color.red500Transparent,
        width: props.width ? props.width : "100%",
    })
  }
));

export default function DiscoveryImage(props: Props) {
    const classes = useStyles(props);
    return (
        <img className={classes.image} src={props.src} />
    );
}