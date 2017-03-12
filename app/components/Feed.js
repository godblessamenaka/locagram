import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default function (props) {
	return (
		<div style = {styles.root}>
		<GridList
      	  cellHeight={300}
      	  style={styles.gridList}
    	>
    	  <Subheader>Around You Now</Subheader>
		  {props.grams && props.grams.map(gram => ( 
				<GridTile
					key = {gram.image.url}
					title={gram.location}
					subtitle={<span>{gram.user}</span>}
				>
					<img src={gram.image.url} />
				</GridTile>
			))}
		</GridList>
		</div>
	)
}


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 600,
    height: 450,
    overflowY: 'auto',
  },
};