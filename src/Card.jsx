import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  block: PropTypes.bool,
  outline: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const Card = (props) => {
  const {
    className,
    color,
    block,
    inverse,
    outline,
    tag: Tag,
    ...attributes
  } = props;
  const cardColor = 'card-' + color;
  const classes = classNames(
    className,
    'card',
    inverse ? 'card-inverse' : false,
    outline ? cardColor + '-outline' : cardColor,
    block ? 'card-block' : false
  );

  return (
    <Tag {...attributes} className={classes}/>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
