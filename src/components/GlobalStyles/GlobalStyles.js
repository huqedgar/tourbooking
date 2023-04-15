import PropTypes from 'prop-types';
import './GlobalStyles.module.scss';

const GlobalStyles = ({ children }) => {
    return children;
};

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
