import { createStyles, makeStyles, Theme } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import './markdown.css'
type Props = {
    source: string,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h2: {
        fontSize: "2rem",
    },
  }
));

export default function DiscoveryMarkdown(props: Props) {
    const classes = useStyles();
    return (
        <div className='discovery'>
            <ReactMarkdown source={props.source} />
        </div>
    );
}