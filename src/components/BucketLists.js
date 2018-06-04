import React from 'react';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import KeyBoardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import KeyBoardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import {List, ListItem} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Loading from './Loading';
import ListContainer from './ListContainer';

const style = {
    margin: 0,
    top: 65,
    right: 'auto',
    bottom: 'auto',
    left: 472,
    position: 'fixed',
};
const BucketLists = ({buckets, add,exists}) => (
    <div>
            <div>
                <Card zDepth={3}>
                    <FloatingActionButton style={style} onClick={add}><ContentAdd/></FloatingActionButton>
                    <ListContainer>
                        <List>
                            {buckets.map(bucket => (<div key={bucket.title}>
                                        <Link to={`/buckets/${  bucket.id}`} style={{textDecoration: 'none'}}>
                                            <ListItem primaryText={bucket.title}/>
                                        </Link>
                                    </div>
                                ),
                            )}

                        </List>
                    </ListContainer>
                </Card>
                <IconButton><KeyBoardArrowLeft/></IconButton> <IconButton><KeyBoardArrowRight/></IconButton>
            </div></div>
);

export default BucketLists;

