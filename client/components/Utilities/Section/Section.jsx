import React from 'react';
import PropTypes from 'prop-types';
import { constants, functions } from '../../../utils';

import styles from './Section.css';

const showMore = `${constants.imagesEndpoint}/show_more.png`;
const showLess = `${constants.imagesEndpoint}/show_less.png`;
const { processKeyUp } = functions;

const Section = (props) => {
  const {
    title, children, link, action, expandable, expanded,
  } = props;
  return (
    <div className={styles.section}>
      {title && (
        <div id="title" className={styles.title}>
          <hr className={styles.hr} />
          {title}
        </div>
      )}
      {children && (
        <div id="content" className={styles.content}>
          {children}
        </div>
      )}
      {link
        && action && (
          <div
            id="link"
            className={styles.link}
            onClick={action}
            onKeyUp={e => processKeyUp(e, action)}
            tabIndex="0"
            role="link"
          >
            {link}
            {expandable && (
              <img
                id="icon"
                className={styles.icon}
                src={expanded ? showLess : showMore}
                alt={expanded ? 'show less' : 'show more'}
              />
            )}
          </div>
      )}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  link: PropTypes.string,
  action: PropTypes.func,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool,
};

Section.defaultProps = {
  title: null,
  children: null,
  link: null,
  action: null,
  expandable: false,
  expanded: false,
};

module.exports = Section;
